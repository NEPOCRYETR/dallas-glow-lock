import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-locksmith-service.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center gradient-hero overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <img
          src={heroImage}
          alt="Professional Dallas locksmith providing emergency service"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>

      <div className="container mx-auto px-4 relative z-10 pt-20 md:pt-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-soft mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-foreground">24/7 Available Now</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Fast Emergency Locksmith Service in Dallas
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            Professional lockouts, rekey, repairs & installations. Licensed technicians with same-day service and upfront pricing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="tel:+14692509836"
              onClick={() => {
                if (typeof window !== "undefined" && (window as any).gtag) {
                  (window as any).gtag("event", "hero_cta_click", {
                    event_category: "engagement",
                    event_label: "call_now",
                  });
                }
              }}
            >
              <Button
                size="lg"
                className="gradient-primary text-white hover:opacity-90 shadow-medium text-lg px-8 w-full sm:w-auto"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (469) 250-9836
              </Button>
            </a>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 text-lg px-8 w-full sm:w-auto shadow-soft hover:shadow-medium transition-shadow"
              >
                Get Free Estimate
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap gap-6">
            {[
              "Licensed & Insured",
              "Upfront Pricing",
              "Same-Day Service",
              "Satisfaction Guarantee",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-sm font-medium text-foreground">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
