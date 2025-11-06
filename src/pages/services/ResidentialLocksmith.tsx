import { useEffect } from "react";
import Header from "@/components/Header";
import MinimalFooter from "@/components/MinimalFooter";
import ConversionSection from "@/components/ConversionSection";
import { Phone, Home, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ResidentialLocksmith = () => {
  useEffect(() => {
    document.title = "Residential Locksmith in Dallas, TX | Dallas Home & Commercial Locksmith";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Residential locksmith in Dallas with licensed techs, same-day options, and transparent pricing—call (469) 250-9836."
      );
    }
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Residential Locksmith Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Dallas Home & Commercial Locksmith",
      "telephone": "+14692509836",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "13350 Dallas Pkwy",
        "addressLocality": "Dallas",
        "addressRegion": "TX",
        "postalCode": "75240"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Dallas"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": window.location.origin
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Residential Locksmith",
        "item": window.location.href
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does residential locksmith service cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pricing varies by service. Basic rekeying starts around $75-150, while lock replacements range from $150-300+. We provide upfront pricing before starting work."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can you respond to a home lockout?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer 24/7 emergency service with typical response times of 20-30 minutes in most Dallas areas."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="gradient-hero py-20 md:py-32">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center text-white">
                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Home className="inline-block h-4 w-4 mr-2" />
                  Residential Services
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Residential Locksmith Services in Dallas
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-white/90">
                  Secure your home with expert lock installation, rekeying, and emergency lockout services
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+14692509836">
                    <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-medium text-lg px-8">
                      <Phone className="h-5 w-5 mr-2" />
                      Call (469) 250-9836
                    </Button>
                  </a>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8">
                      Get Free Estimate
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Complete Residential Lock Solutions
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  From emergency lockouts to security upgrades, we handle all your home locksmith needs
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {[
                  {
                    title: "Emergency Lockouts",
                    description: "Locked out? We'll get you back inside quickly and safely without damage.",
                    features: ["24/7 Availability", "20-30 min response", "No-damage entry"]
                  },
                  {
                    title: "Lock Rekeying",
                    description: "Change who has access without replacing hardware. Perfect for new homes.",
                    features: ["Same-day service", "All lock brands", "Master key options"]
                  },
                  {
                    title: "Lock Installation",
                    description: "Upgrade to high-security deadbolts and modern lock systems.",
                    features: ["Premium brands", "Expert installation", "Security consultation"]
                  },
                  {
                    title: "Smart Lock Setup",
                    description: "Install and program keyless entry systems for modern convenience.",
                    features: ["Keypad & biometric", "App integration", "Full setup & training"]
                  },
                  {
                    title: "Lock Repair",
                    description: "Fix sticking, jamming, or broken locks before they become emergencies.",
                    features: ["All lock types", "Quick repairs", "Quality parts"]
                  },
                  {
                    title: "Security Assessment",
                    description: "Comprehensive evaluation of your home's lock security.",
                    features: ["Vulnerability check", "Upgrade recommendations", "Free consultation"]
                  }
                ].map((service, index) => (
                  <div key={index} className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-shadow">
                    <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <Shield className="h-4 w-4 mr-2 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                  Why Dallas Homeowners Trust Us
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      icon: Clock,
                      title: "Fast Response",
                      description: "Emergency service available 24/7 with typical arrival in 20-30 minutes"
                    },
                    {
                      icon: Shield,
                      title: "Licensed & Insured",
                      description: "Fully licensed, bonded, and insured for your peace of mind"
                    },
                    {
                      icon: Home,
                      title: "No-Damage Guarantee",
                      description: "We use professional techniques to avoid damage to your doors and frames"
                    },
                    {
                      icon: Phone,
                      title: "Upfront Pricing",
                      description: "Clear quotes before we start—no surprises or hidden fees"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                  Residential Locksmith FAQs
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      q: "How much does residential locksmith service cost?",
                      a: "Pricing varies by service. Basic rekeying starts around $75-150, while lock replacements range from $150-300+. We provide upfront pricing before starting work."
                    },
                    {
                      q: "How quickly can you respond to a home lockout?",
                      a: "We offer 24/7 emergency service with typical response times of 20-30 minutes in most Dallas areas."
                    },
                    {
                      q: "Should I rekey or replace my locks?",
                      a: "Rekeying is more affordable when locks are in good condition. We recommend replacement for damaged, outdated, or low-security locks."
                    }
                  ].map((faq, index) => (
                    <div key={index} className="bg-card rounded-xl p-6 shadow-soft">
                      <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                      <p className="text-muted-foreground">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <ConversionSection />
        </main>
        <MinimalFooter />
      </div>
    </>
  );
};

export default ResidentialLocksmith;
