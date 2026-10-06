import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Privacy = () => (
  <main className="min-h-screen bg-background text-foreground">
    <Navbar />
    <section className="pt-32 pb-24 bg-surface-light text-on-light">
      <div className="container-narrow space-y-6 text-sm leading-relaxed text-on-light-muted">
        <h1 className="font-serif text-4xl text-on-light">Privacy Notice</h1>
        <p>
          Trustify Sports respects your privacy and processes personal data in line with the EU
          General Data Protection Regulation (GDPR).
        </p>
        <h2 className="font-serif text-xl text-on-light">What we collect</h2>
        <p>When you use our contact form we collect your name, email address, organisation and message.</p>
        <h2 className="font-serif text-xl text-on-light">Why we use it</h2>
        <p>We use these details only to respond to your enquiry (legitimate interest, Article 6(1)(f) GDPR). We do not sell your data or use it for unrelated marketing.</p>
        <h2 className="font-serif text-xl text-on-light">How long we keep it</h2>
        <p>We keep enquiry data only as long as needed to handle your request and any follow-up.</p>
        <h2 className="font-serif text-xl text-on-light">Your rights</h2>
        <p>You may request access, correction or deletion of your data, object to processing, or complain to your national data protection authority.</p>
        <h2 className="font-serif text-xl text-on-light">Contact</h2>
        <p>
          Email <a className="underline" href="mailto:sander@trustifysports.com">sander@trustifysports.com</a>.
          Company registration details: to be added.
        </p>
      </div>
    </section>
    <Footer />
  </main>
);

export default Privacy;
