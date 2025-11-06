import { useEffect } from "react";
import Header from "@/components/Header";
import MinimalFooter from "@/components/MinimalFooter";
import ConversionSection from "@/components/ConversionSection";
import HeroSection from "@/components/home/HeroSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";

const Index = () => {
  useEffect(() => {
    document.title = "Locksmith Dallas, TX | Dallas Home & Commercial Locksmith | 24/7 Service";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Need a locksmith in Dallas? Emergency lockouts, rekey, repairs, fast dispatch—call (469) 250-9836."
      );
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesGrid />
        <TestimonialsSection />
        <FAQSection />
        <ConversionSection />
      </main>
      <MinimalFooter />
    </div>
  );
};

export default Index;
