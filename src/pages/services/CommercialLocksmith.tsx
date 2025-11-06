import { useEffect } from "react";
import Header from "@/components/Header";
import MinimalFooter from "@/components/MinimalFooter";
import ConversionSection from "@/components/ConversionSection";
import { Phone, Building2, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CommercialLocksmith = () => {
  useEffect(() => {
    document.title = "Commercial Locksmith in Dallas, TX | Dallas Home & Commercial Locksmith";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Commercial locksmith in Dallas with licensed techs, same-day options, and transparent pricing—call (469) 250-9836."
      );
    }
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Commercial Locksmith Services",
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
        "name": "Commercial Locksmith",
        "item": window.location.href
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
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="gradient-hero py-20 md:py-32">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center text-white">
                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Building2 className="inline-block h-4 w-4 mr-2" />
                  Commercial Services
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Commercial Locksmith Services in Dallas
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-white/90">
                  Secure your business with master key systems, access control, and commercial-grade hardware
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
                  Complete Business Security Solutions
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Protect your assets and control access with professional commercial locksmith services
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {[
                  {
                    title: "Master Key Systems",
                    description: "Hierarchical access control for offices, warehouses, and multi-unit buildings.",
                    features: ["Custom design", "Scalable systems", "Key management"]
                  },
                  {
                    title: "Office Rekeying",
                    description: "Rapid rekeying after employee turnover or security concerns.",
                    features: ["After-hours available", "Minimal disruption", "All brands"]
                  },
                  {
                    title: "Panic Bars & Exit Devices",
                    description: "Code-compliant installation and repair of emergency exit hardware.",
                    features: ["Code compliance", "Fire-rated options", "ADA compliant"]
                  },
                  {
                    title: "Commercial Lock Repair",
                    description: "Fix or replace damaged storefront locks and door hardware.",
                    features: ["Same-day service", "High-traffic solutions", "Quality parts"]
                  },
                  {
                    title: "Access Control",
                    description: "Electronic entry systems with keypad, card, or biometric options.",
                    features: ["Audit trails", "Remote management", "Integration ready"]
                  },
                  {
                    title: "Safe Installation & Service",
                    description: "Commercial safe installation, repair, and combination changes.",
                    features: ["All safe types", "Expert service", "Emergency opening"]
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
                  Why Dallas Businesses Choose Us
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      icon: Clock,
                      title: "After-Hours Service",
                      description: "Minimize business disruption with evening and weekend appointments"
                    },
                    {
                      icon: Shield,
                      title: "Licensed & Bonded",
                      description: "Fully licensed, insured, and background-checked technicians"
                    },
                    {
                      icon: Building2,
                      title: "Commercial Expertise",
                      description: "Specialized knowledge of code requirements and high-security systems"
                    },
                    {
                      icon: Phone,
                      title: "Priority Service",
                      description: "Fast response for emergency lockouts and security breaches"
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

          <ConversionSection />
        </main>
        <MinimalFooter />
      </div>
    </>
  );
};

export default CommercialLocksmith;
