import { Seo, SITE_URL } from "@/components/Seo";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Audiences } from "@/components/Audiences";
import { Approach } from "@/components/Approach";
import { Vision } from "@/components/Vision";
import { Founders } from "@/components/Founders";
import { WhyUs } from "@/components/WhyUs";
import { Timeline } from "@/components/Timeline";
import { FoundingPartner } from "@/components/FoundingPartner";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

// What we offer, for search engines (schema.org Service).
const service = {
  "@type": "Service",
  name: "AML and KYC compliance for football clubs and agents",
  serviceType: "Anti-money laundering compliance",
  description:
    "A compliance platform built for football (verify, monitor, evidence) plus compliance experts who assess, design and operate an AML programme under Regulation (EU) 2024/1624.",
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: "Europe",
  audience: [
    { "@type": "Audience", audienceType: "Professional football clubs" },
    { "@type": "Audience", audienceType: "Football agents" },
  ],
};

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Seo
        title="AML compliance for football clubs and agents | Trustify Sports"
        description="Football clubs and agents are obliged entities under the EU AML Regulation from 10 July 2029. AML and KYC platform plus compliance experts, built for football."
        path="/"
        jsonLd={[service]}
      />
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Audiences />
      <Approach />
      <Vision />
      <Founders />
      <WhyUs />
      <Timeline />
      <Partners />
      <FoundingPartner />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
