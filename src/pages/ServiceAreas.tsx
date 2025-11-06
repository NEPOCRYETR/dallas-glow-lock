import { useEffect } from "react";
import { MapPin } from "lucide-react";
import Header from "@/components/Header";
import MinimalFooter from "@/components/MinimalFooter";
import ConversionSection from "@/components/ConversionSection";

const ServiceAreas = () => {
  useEffect(() => {
    document.title = "Service Areas | Dallas Home & Commercial Locksmith";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Dallas Home & Commercial Locksmith serves Dallas and surrounding DFW areas with 24/7 emergency locksmith services."
      );
    }
  }, []);

  const areas = [
    "North Dallas",
    "Uptown Dallas",
    "Downtown Dallas",
    "Oak Lawn",
    "Highland Park",
    "University Park",
    "Preston Hollow",
    "Lake Highlands",
    "East Dallas",
    "West Dallas",
    "South Dallas",
    "Deep Ellum",
    "Bishop Arts District",
    "Lakewood",
    "M Streets",
    "Knox-Henderson",
    "Victory Park",
    "Design District",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20 md:pt-24">
        <section className="py-12 md:py-16 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Service Areas</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Professional locksmith services throughout Dallas and DFW
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-2xl shadow-soft p-6 md:p-10 mb-12">
                <h2 className="text-3xl font-bold mb-6">Dallas Neighborhoods We Serve</h2>
                <p className="text-muted-foreground mb-8">
                  We provide fast, professional locksmith services throughout Dallas and the greater DFW metroplex. Whether you need emergency lockout assistance, lock rekeying, or security upgrades, our technicians are ready to help 24/7.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {areas.map((area, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="font-medium">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card rounded-2xl shadow-soft p-6 md:p-10">
                <h2 className="text-3xl font-bold mb-6">Coverage Information</h2>
                <div className="space-y-6 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Primary Service Area:</strong> We're based in Dallas and provide the fastest response times throughout Dallas proper, including all major neighborhoods and districts.
                  </p>
                  <p>
                    <strong className="text-foreground">Extended Coverage:</strong> We also serve surrounding communities in the DFW metroplex. Call us to confirm service availability and estimated response time for your specific location.
                  </p>
                  <p>
                    <strong className="text-foreground">24/7 Emergency Service:</strong> Emergency lockout service is available around the clock throughout our service area. We typically arrive within 20-30 minutes for emergency calls in Dallas.
                  </p>
                  <p>
                    <strong className="text-foreground">Not sure if we serve your area?</strong> Give us a call at{" "}
                    <a href="tel:+14692509836" className="text-primary hover:underline font-semibold">
                      (469) 250-9836
                    </a>{" "}
                    and we'll be happy to confirm coverage and provide an estimated arrival time.
                  </p>
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

export default ServiceAreas;
