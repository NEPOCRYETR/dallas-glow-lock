import { Phone, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ConversionSection = () => {
  return (
    <section className="py-16 md:py-24 gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need a Locksmith in Dallas? We're Ready 24/7
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Fast response, upfront pricing, and expert service you can trust
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+14692509836"
              onClick={() => {
                if (typeof window !== "undefined" && (window as any).gtag) {
                  (window as any).gtag("event", "click_to_call", {
                    event_category: "engagement",
                    event_label: "conversion_section",
                  });
                }
              }}
            >
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-medium text-lg px-8"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (469) 250-9836
              </Button>
            </a>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8"
              >
                Get Free Estimate
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Clock, label: "24/7 Available" },
              { icon: Shield, label: "Licensed & Insured" },
              { icon: Award, label: "Upfront Pricing" },
              { icon: Phone, label: "Fast Response" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-white">
                <item.icon className="h-8 w-8 mb-2 opacity-90" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversionSection;
