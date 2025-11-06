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

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    "name": "Dallas Home & Commercial Locksmith",
    "telephone": "+14692509836",
    "email": "info@dallashomecommerciallock.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "13350 Dallas Pkwy",
      "addressLocality": "Dallas",
      "addressRegion": "TX",
      "postalCode": "75240",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": "Dallas"
    },
    "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59",
    "priceRange": "$$",
    "url": window.location.origin
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      
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
    </>
  );
};

export default Index;
