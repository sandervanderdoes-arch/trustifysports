import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, Linkedin } from "lucide-react";
import { Reveal } from "./Reveal";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(200),
  organization: z.string().trim().min(1, "Organization is required").max(150),
  message: z.string().trim().min(10, "Please share a few details").max(2000),
});

const CONTACT_EMAIL = "sander@trustifysports.com";

export const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const data = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      organization: String(form.get("organization") || ""),
      message: String(form.get("message") || ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.errors[0].message);
      return;
    }

    setSubmitting(true);
    try {
      const id =
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

      // Send notification to internal inbox
      const notify = await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "contact-notification",
          recipientEmail: CONTACT_EMAIL,
          idempotencyKey: `contact-notify-${id}`,
          templateData: parsed.data,
        },
      });
      if (notify.error) throw notify.error;

      // Send confirmation back to the sender
      await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "contact-confirmation",
          recipientEmail: parsed.data.email,
          idempotencyKey: `contact-confirm-${id}`,
          templateData: { name: parsed.data.name },
        },
      });

      toast.success("Thanks! Your message has been sent.");
      formEl.reset();
    } catch (err) {
      console.error(err);
      toast.error("Could not send message. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-surface-light text-on-light">
      <div className="container-narrow">
        <Reveal className="text-center">
          <div className="gold-rule mx-auto mb-6" />
          <h2 className="text-3xl lg:text-5xl leading-tight text-on-light">Let's Talk</h2>
          <p className="mt-5 text-lg text-on-light-muted">
            Whether you're a club, federation, investor, or potential partner, we'd like to hear from you.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={onSubmit}
            className="mt-12 bg-surface-light border border-[hsl(var(--on-light-border))] rounded-lg p-6 lg:p-10 shadow-[var(--shadow-card)] space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-on-light">Name</Label>
                <Input id="name" name="name" required maxLength={100} placeholder="Your full name" className="text-on-light placeholder:text-on-light-muted/60" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-on-light">Email</Label>
                <Input id="email" name="email" type="email" required maxLength={200} placeholder="you@example.com" className="text-on-light placeholder:text-on-light-muted/60" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="organization" className="text-on-light">Organization</Label>
              <Input id="organization" name="organization" required maxLength={150} placeholder="Club, federation, fund…" className="text-on-light placeholder:text-on-light-muted/60" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-on-light">Message</Label>
              <Textarea id="message" name="message" required maxLength={2000} rows={6} placeholder="Tell us a bit about what you're looking for." className="text-on-light placeholder:text-on-light-muted/60" />
            </div>
            <Button type="submit" variant="gold" size="lg" disabled={submitting} className="w-full sm:w-auto">
              {submitting ? "Sending…" : "Send Message"}
            </Button>
          </form>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-on-light-muted">
            <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
              {CONTACT_EMAIL}
            </a>
            <span className="hidden sm:block h-4 w-px bg-[hsl(var(--on-light-border))]" />
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
              <Linkedin className="h-4 w-4" />
              Connect on LinkedIn
            </a>
            <span className="hidden sm:block h-4 w-px bg-[hsl(var(--on-light-border))]" />
            <span className="inline-flex items-center gap-2" aria-label="European focus">
              <span className="text-base leading-none" aria-hidden>🇳🇱</span>
              <span className="text-base leading-none" aria-hidden>🇪🇺</span>
              European focus
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
