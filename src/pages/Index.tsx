import { Seo } from "@/components/Seo";
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

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Seo title="Trustify Sports | AML Compliance Infrastructure for Professional Football" description="From 10 July 2029, professional football clubs and football agents are obliged entities under the EU Anti-Money Laundering Regulation. Trustify Sports is the compliance infrastructure built for it." path="/" />
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
