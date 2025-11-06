import { useEffect } from "react";
import Header from "@/components/Header";
import MinimalFooter from "@/components/MinimalFooter";
import ConversionSection from "@/components/ConversionSection";
import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Uptown = () => {
  useEffect(() => {
    document.title = "Locksmith Uptown Dallas | Dallas Home & Commercial Locksmith | 24/7";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Trusted locksmith in Uptown Dallas with fast response for lockouts, rekey, and repairs—call (469) 250-9836."
      );
    }
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Dallas Home & Commercial Locksmith",
    "telephone": "+14692509836",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "13350 Dallas Pkwy",
      "addressLocality": "Dallas",
      "addressRegion": "TX",
      "postalCode": "75240"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Uptown Dallas"
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
        "name": "Service Areas",
        "item": `${window.location.origin}/service-areas`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Uptown Dallas",
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
                  <MapPin className="inline-block h-4 w-4 mr-2" />
                  Uptown Dallas
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Locksmith Services in Uptown Dallas
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-white/90">
                  Professional locksmith services for Uptown residents, businesses, and property managers
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

          {/* Services for Uptown */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                  Locksmith Services in Uptown
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Apartment & Condo Services",
                      description: "Rekeying, lock upgrades, and emergency lockouts for Uptown apartments"
                    },
                    {
                      title: "Restaurant & Retail Security",
                      description: "Commercial-grade locks and access control for McKinney Avenue businesses"
                    },
                    {
                      title: "Smart Lock Installations",
                      description: "Modern keyless entry perfect for Uptown's urban lifestyle"
                    },
                    {
                      title: "24/7 Emergency Response",
                      description: "Fast response for lockouts and security emergencies"
                    }
                  ].map((service, index) => (
                    <div key={index} className="bg-card rounded-xl p-6 shadow-soft">
                      <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Local Info */}
          <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  Serving All of Uptown Dallas
                </h2>
                <div className="bg-card rounded-2xl p-8 shadow-soft">
                  <p className="text-lg text-muted-foreground mb-6">
                    We serve the entire Uptown area including McKinney Avenue, Cedar Springs, Cityplace, State Thomas, and the Crescent Court District.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    Our team understands Uptown's mix of luxury apartments, bustling restaurants, boutique shops, and office spaces, providing tailored security solutions for each.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link to="/residential-locksmith-dallas">
                      <Button variant="outline">Residential Services</Button>
                    </Link>
                    <Link to="/commercial-locksmith-dallas">
                      <Button variant="outline">Commercial Services</Button>
                    </Link>
                    <Link to="/smart-lock-installation-dallas">
                      <Button variant="outline">Smart Locks</Button>
                    </Link>
                  </div>
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

export default Uptown;
