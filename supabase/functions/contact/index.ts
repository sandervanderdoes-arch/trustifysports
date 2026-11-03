// Receives the website's contact form and emails it to Trustify Sports through
// Resend. Deployed by .github/workflows/deploy-contact-function.yml.
//
// Secrets (set by that workflow):
//   RESEND_API_KEY  required
//   CONTACT_TO      optional, default sander@trustifysports.com
//   CONTACT_FROM    optional, default "Trustify Sports website <website@trustifysports.com>"

const ALLOWED_ORIGINS = [
  "https://trustifysports.com",
  "https://www.trustifysports.com",
  "https://sandervanderdoes-arch.github.io",
  "http://localhost:8080",
];

const LIMITS = { name: 100, email: 200, organization: 150, message: 2000 } as const;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const corsHeaders = (origin: string | null) => ({
  "Access-Control-Allow-Origin": origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "content-type",
  Vary: "Origin",
});

const json = (status: number, body: unknown, origin: string | null) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders(origin), "Content-Type": "application/json" },
  });

// One line, no control characters: safe for an email subject.
const oneLine = (s: string) => s.replace(/[\r\n\t]+/g, " ").replace(/\p{Cc}/gu, "").trim();

Deno.serve(async (req) => {
  const origin = req.headers.get("origin");
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders(origin) });
  if (req.method !== "POST") return json(405, { error: "Method not allowed" }, origin);
  if (origin && !ALLOWED_ORIGINS.includes(origin)) return json(403, { error: "Origin not allowed" }, origin);

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return json(400, { error: "Invalid JSON" }, origin);
  }

  const field = (k: keyof typeof LIMITS) => (typeof body[k] === "string" ? (body[k] as string).trim() : "");
  const form = {
    name: oneLine(field("name")),
    email: oneLine(field("email")),
    organization: oneLine(field("organization")),
    message: field("message"),
  };
  for (const k of Object.keys(LIMITS) as (keyof typeof LIMITS)[]) {
    if (!form[k] || form[k].length > LIMITS[k]) return json(400, { error: `Invalid ${k}` }, origin);
  }
  if (!EMAIL_RE.test(form.email)) return json(400, { error: "Invalid email" }, origin);

  const apiKey = Deno.env.get("RESEND_API_KEY");
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return json(500, { error: "Not configured" }, origin);
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: Deno.env.get("CONTACT_FROM") || "Trustify Sports website <website@trustifysports.com>",
      to: [Deno.env.get("CONTACT_TO") || "sander@trustifysports.com"],
      reply_to: form.email,
      subject: `New inquiry: ${form.name} (${form.organization})`,
      text: [
        "New inquiry from the website",
        "",
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Organization: ${form.organization}`,
        "",
        form.message,
        "",
        "Reply to this email to answer them directly.",
      ].join("\n"),
    }),
  });

  if (!res.ok) {
    console.error("Resend refused the email", res.status, await res.text());
    return json(502, { error: "Could not send" }, origin);
  }
  return json(200, { ok: true }, origin);
});
