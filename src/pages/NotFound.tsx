import { Seo } from "@/components/Seo";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const NotFound = () => (
  <main className="min-h-screen bg-background text-foreground">
    <Seo title="Page not found | Trustify Sports" description="This page does not exist." path="/404" noindex />
    <Navbar />
    <section className="pt-36 pb-24 bg-surface-light text-on-light">
      <div className="container-narrow text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">404</p>
        <h1 className="font-serif text-4xl text-on-light">Page not found</h1>
        <p className="mt-4 text-on-light-muted">The page you are looking for does not exist or has moved.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
          <a href="/" className="underline hover:text-primary">Homepage</a>
          <a href="/amlr-football-guide" className="underline hover:text-primary">The 2029 AMLR guide for football</a>
          <a href="/#contact" className="underline hover:text-primary">Contact us</a>
        </div>
      </div>
    </section>
    <Footer />
  </main>
);

export default NotFound;
