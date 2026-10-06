import { Seo } from "@/components/Seo";
import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

type State = "validating" | "ready" | "already" | "invalid" | "submitting" | "success" | "error";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token");
  const [state, setState] = useState<State>("validating");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!token) {
      setState("invalid");
      return;
    }
    (async () => {
      try {
        const res = await fetch(
          `${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`,
          { headers: { apikey: SUPABASE_ANON } }
        );
        const data = await res.json();
        if (!res.ok) {
          setState("invalid");
          setError(data?.error ?? "Invalid token");
          return;
        }
        if (data.valid === false && data.reason === "already_unsubscribed") {
          setState("already");
          return;
        }
        setState("ready");
      } catch {
        setState("invalid");
      }
    })();
  }, [token]);

  const onConfirm = async () => {
    if (!token) return;
    setState("submitting");
    const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", {
      body: { token },
    });
    if (error) {
      setState("error");
      setError(error.message);
      return;
    }
    if (data?.success || data?.reason === "already_unsubscribed") {
      setState("success");
    } else {
      setState("error");
      setError(data?.error ?? "Something went wrong");
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
      <Seo title="Unsubscribe | Trustify Sports" description="Manage your Trustify Sports email preferences and unsubscribe from emails." path="/unsubscribe" noindex />
      <div className="max-w-md w-full bg-surface-light text-on-light border border-[hsl(var(--on-light-border))] rounded-lg p-8 shadow-[var(--shadow-card)] text-center">
        <h1 className="text-2xl font-semibold mb-3">Unsubscribe</h1>
        {state === "validating" && <p className="text-on-light-muted">Validating your link…</p>}
        {state === "ready" && (
          <>
            <p className="text-on-light-muted mb-6">
              Click below to unsubscribe from Trustify Sports emails.
            </p>
            <Button variant="gold" size="lg" onClick={onConfirm}>Confirm Unsubscribe</Button>
          </>
        )}
        {state === "submitting" && <p className="text-on-light-muted">Processing…</p>}
        {state === "success" && (
          <p className="text-on-light-muted">You've been unsubscribed. We're sorry to see you go.</p>
        )}
        {state === "already" && (
          <p className="text-on-light-muted">This email is already unsubscribed.</p>
        )}
        {state === "invalid" && (
          <p className="text-on-light-muted">This unsubscribe link is invalid or has expired.{error ? ` (${error})` : ""}</p>
        )}
        {state === "error" && (
          <p className="text-on-light-muted">Something went wrong{error ? `: ${error}` : ""}.</p>
        )}
        <div className="mt-8">
          <Link to="/" className="text-sm underline hover:text-primary">Back to home</Link>
        </div>
      </div>
    </main>
  );
};

export default Unsubscribe;
