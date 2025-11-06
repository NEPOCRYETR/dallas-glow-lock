import { useEffect } from "react";
import Header from "@/components/Header";
import MinimalFooter from "@/components/MinimalFooter";
import ConversionSection from "@/components/ConversionSection";
import { Phone, Key, Shield, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LockRekey = () => {
  useEffect(() => {
    document.title = "Lock Rekeying in Dallas, TX | Dallas Home & Commercial Locksmith";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Lock rekeying in Dallas with licensed techs, same-day options, and transparent pricing—call (469) 250-9836."
      );
    }
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Lock Rekeying Services",
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
        "name": "Lock Rekeying",
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
                  <Key className="inline-block h-4 w-4 mr-2" />
                  Rekeying Services
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Professional Lock Rekeying in Dallas
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-white/90">
                  Change who has access without replacing hardware—fast, affordable, and secure
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
                      Get Free Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* What is Rekeying */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  What is Lock Rekeying?
                </h2>
                <div className="bg-card rounded-2xl p-8 shadow-soft mb-12">
                  <p className="text-lg text-muted-foreground mb-4">
                    Rekeying is the process of changing the internal pins of a lock cylinder so that old keys no longer work. You keep your existing hardware while gaining fresh security with new keys.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    It's more affordable than full lock replacement and perfect for situations like moving into a new home, employee turnover, or lost keys.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: DollarSign,
                      title: "Cost-Effective",
                      description: "50-70% cheaper than replacing locks entirely"
                    },
                    {
                      icon: Key,
                      title: "Keep Your Hardware",
                      description: "No need to replace quality locks that work perfectly"
                    },
                    {
                      icon: Shield,
                      title: "Full Security Reset",
                      description: "Old keys become useless—fresh start guaranteed"
                    }
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <item.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* When to Rekey */}
          <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                  When Should You Rekey Your Locks?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Moving Into a New Home",
                      description: "Never know who has copies of keys from previous owners, tenants, or contractors"
                    },
                    {
                      title: "Lost or Stolen Keys",
                      description: "Prevent unauthorized access if keys fall into the wrong hands"
                    },
                    {
                      title: "After a Break-In",
                      description: "Restore security and peace of mind after a security breach"
                    },
                    {
                      title: "Employee Turnover",
                      description: "Maintain control over business access when staff changes"
                    },
                    {
                      title: "End of Rental Agreement",
                      description: "Landlords should rekey between tenants for security"
                    },
                    {
                      title: "Relationship Changes",
                      description: "Control access during divorce, breakup, or roommate situations"
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-card rounded-xl p-6 shadow-soft">
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                  Our Rekeying Process
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Inspection & Quote",
                      description: "We examine your locks, verify compatibility, and provide upfront pricing"
                    },
                    {
                      step: "2",
                      title: "Pin Replacement",
                      description: "Remove the cylinder, replace pins to match your new key configuration"
                    },
                    {
                      step: "3",
                      title: "Testing & Delivery",
                      description: "Test all locks thoroughly and provide you with fresh keys"
                    },
                    {
                      step: "4",
                      title: "Optional Master Key Setup",
                      description: "We can configure master key systems for multi-level access control"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-6 bg-card rounded-xl p-6 shadow-soft">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center font-bold text-xl">
                          {item.step}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
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

export default LockRekey;
