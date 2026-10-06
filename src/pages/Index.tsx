import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Audiences } from "@/components/Audiences";
import { Approach } from "@/components/Approach";
import { Founders } from "@/components/Founders";
import { WhyUs } from "@/components/WhyUs";
import { Timeline } from "@/components/Timeline";
import { FoundingPartner } from "@/components/FoundingPartner";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Audiences />
      <Approach />
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
