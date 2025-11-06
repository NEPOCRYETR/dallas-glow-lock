import { useEffect } from "react";
import Header from "@/components/Header";
import MinimalFooter from "@/components/MinimalFooter";
import ConversionSection from "@/components/ConversionSection";
import { Phone, Smartphone, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SmartLocks = () => {
  useEffect(() => {
    document.title = "Smart Lock Installation in Dallas, TX | Dallas Home & Commercial Locksmith";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Smart lock installation in Dallas with licensed techs, same-day options, and transparent pricing—call (469) 250-9836."
      );
    }
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Smart Lock Installation Services",
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
        "name": "Smart Lock Installation",
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
                  <Smartphone className="inline-block h-4 w-4 mr-2" />
                  Smart Lock Services
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Smart Lock Installation in Dallas
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-white/90">
                  Modern keyless entry with app control, voice integration, and enhanced security
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
                      Get Free Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                  Why Upgrade to Smart Locks?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: Smartphone,
                      title: "Keyless Convenience",
                      description: "No more fumbling for keys—unlock with your phone, code, or fingerprint"
                    },
                    {
                      icon: Shield,
                      title: "Enhanced Security",
                      description: "Real-time alerts, activity logs, and auto-lock features for peace of mind"
                    },
                    {
                      icon: Zap,
                      title: "Remote Access",
                      description: "Lock and unlock from anywhere, grant temporary access to guests"
                    },
                    {
                      icon: Phone,
                      title: "Smart Home Integration",
                      description: "Works with Alexa, Google Home, Apple HomeKit, and more"
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-card rounded-2xl p-6 shadow-soft">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Popular Brands */}
          <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                  Smart Lock Brands We Install
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      brand: "August Smart Locks",
                      features: ["Retrofit design", "Voice control", "Auto-unlock"]
                    },
                    {
                      brand: "Yale Assure Series",
                      features: ["Touchscreen keypads", "Z-Wave ready", "Multiple finishes"]
                    },
                    {
                      brand: "Schlage Encode",
                      features: ["Built-in WiFi", "Alarm sensors", "Premium quality"]
                    },
                    {
                      brand: "Kwikset Halo & Premis",
                      features: ["Budget-friendly", "Easy setup", "Smart Key tech"]
                    },
                    {
                      brand: "Lockly Secure Pro",
                      features: ["3D fingerprint", "Offline codes", "Advanced security"]
                    },
                    {
                      brand: "Level Lock",
                      features: ["Invisible design", "Apple HomeKey", "Sleek aesthetics"]
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-card rounded-xl p-6 shadow-soft">
                      <h3 className="text-lg font-semibold mb-3">{item.brand}</h3>
                      <ul className="space-y-2">
                        {item.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <Shield className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Installation Process */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                  Professional Installation & Setup
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "Consultation & Recommendation",
                      description: "We assess your door, security needs, and smart home ecosystem to recommend the best smart lock"
                    },
                    {
                      title: "Professional Installation",
                      description: "Expert mounting, wiring (if needed), and door prep to ensure perfect fit and function"
                    },
                    {
                      title: "Complete Setup & Training",
                      description: "App installation, WiFi connection, user codes, and full training on all features"
                    },
                    {
                      title: "Testing & Support",
                      description: "Thorough testing of all functions plus ongoing support for any questions"
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-card rounded-xl p-6 shadow-soft">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
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

export default SmartLocks;
