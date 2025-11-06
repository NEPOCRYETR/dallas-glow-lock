import { useEffect } from "react";
import { Clock, Phone, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import MinimalFooter from "@/components/MinimalFooter";
import ConversionSection from "@/components/ConversionSection";

const EmergencyLocksmith = () => {
  useEffect(() => {
    document.title = "Emergency Locksmith in Dallas, TX | Dallas Home & Commercial Locksmith";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "24/7 emergency locksmith in Dallas with fast response times. Lockouts, broken keys, emergency rekeying—call (469) 250-9836."
      );
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20 md:pt-24">
        <section className="py-12 md:py-16 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-soft mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-foreground">24/7 Available Now</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                24/7 Emergency Locksmith Service in Dallas
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                Fast response for lockouts, broken keys, and urgent security needs
              </p>
              <a href="tel:+14692509836">
                <Button size="lg" className="gradient-primary text-white hover:opacity-90 shadow-medium">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now: (469) 250-9836
                </Button>
              </a>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {[
                  {
                    icon: Clock,
                    title: "Fast Response",
                    description: "Typically arrive within 20-30 minutes throughout Dallas",
                  },
                  {
                    icon: Zap,
                    title: "24/7 Availability",
                    description: "Available day or night, weekends and holidays",
                  },
                  {
                    icon: Shield,
                    title: "Licensed & Insured",
                    description: "Fully licensed professionals you can trust",
                  },
                  {
                    icon: Phone,
                    title: "Upfront Pricing",
                    description: "Transparent pricing with no hidden fees",
                  },
                ].map((feature, index) => (
                  <div key={index} className="bg-card rounded-2xl shadow-soft p-6">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-card rounded-2xl shadow-soft p-6 md:p-10 mb-12">
                <h2 className="text-3xl font-bold mb-6">Emergency Locksmith Services</h2>
                <div className="space-y-4">
                  {[
                    "House lockouts - fast entry without damage",
                    "Car lockouts - all makes and models",
                    "Business lockouts - 24/7 commercial service",
                    "Broken key extraction and replacement",
                    "Emergency lock replacement and rekeying",
                    "After-hours security assessments",
                    "Lost key replacement service",
                    "Stuck or jammed lock repair",
                  ].map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-muted-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card rounded-2xl shadow-soft p-6 md:p-10">
                <h2 className="text-3xl font-bold mb-6">What to Expect</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">1. Call Us Immediately</h3>
                    <p className="text-muted-foreground">
                      Contact us at (469) 250-9836 any time, day or night. Our emergency dispatch will gather your information and send the nearest available technician.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">2. Fast Arrival</h3>
                    <p className="text-muted-foreground">
                      We'll provide an estimated arrival time and keep you updated. Most emergency calls in Dallas receive service within 20-30 minutes.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">3. Professional Service</h3>
                    <p className="text-muted-foreground">
                      Our licensed technician will assess the situation, provide upfront pricing, and quickly resolve your emergency with minimal disruption.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">4. Complete Resolution</h3>
                    <p className="text-muted-foreground">
                      We'll ensure everything is working properly and answer any questions about your locks or security before we leave.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ConversionSection />
      </main>

      <MinimalFooter />
    </div>
  );
};

export default EmergencyLocksmith;
