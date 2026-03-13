import { HeroSection } from "@/components/landing/HeroSection";
import { LoanCalculator } from "@/components/landing/LoanCalculator";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { FAQSection } from "@/components/landing/FAQSection";
import { LandingNav } from "@/components/landing/LandingNav";
import { LandingFooter } from "@/components/landing/LandingFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <LandingNav />
      <HeroSection />
      <LoanCalculator />
      <FeaturesSection />
      <HowItWorks />
      <FAQSection />
      <LandingFooter />
    </div>
  );
};

export default Index;
