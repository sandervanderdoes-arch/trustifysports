import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Approach } from "@/components/Approach";
import { Founders } from "@/components/Founders";
import { WhyUs } from "@/components/WhyUs";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Approach />
      <Founders />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
