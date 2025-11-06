import { Link } from "react-router-dom";
import { 
  Clock, 
  Home, 
  Building2, 
  Key, 
  Lock, 
  Smartphone,
  Shield,
  DoorOpen
} from "lucide-react";

const services = [
  {
    icon: Clock,
    title: "Emergency Locksmith",
    description: "24/7 emergency lockout service with fast response times across Dallas",
    link: "/emergency-locksmith-dallas",
    badge: "24/7 Available"
  },
  {
    icon: Home,
    title: "Residential Locksmith",
    description: "Home lockouts, rekey, lock upgrades, and smart lock installation",
    link: "/residential-locksmith-dallas",
  },
  {
    icon: Building2,
    title: "Commercial Locksmith",
    description: "Business security solutions, access control, and master key systems",
    link: "/commercial-locksmith-dallas",
  },
  {
    icon: Key,
    title: "Lock Rekeying",
    description: "Professional rekeying service for homes and businesses in Dallas",
    link: "/lock-rekey-dallas",
  },
  {
    icon: Lock,
    title: "Lock Replacement & Repair",
    description: "Expert lock repair and replacement with quality hardware",
    link: "/lock-replacement-dallas",
  },
  {
    icon: Smartphone,
    title: "Smart Lock Installation",
    description: "Modern keyless entry systems and smart lock technology",
    link: "/smart-lock-installation-dallas",
  },
  {
    icon: Shield,
    title: "Master Key Systems",
    description: "Comprehensive master key systems for commercial properties",
    link: "/master-key-systems-dallas",
  },
  {
    icon: DoorOpen,
    title: "Door Hardware & Panic Bars",
    description: "Commercial door closers, panic bars, and ADA compliance",
    link: "/door-closers-panic-bars-dallas",
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Locksmith Services in Dallas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From emergency lockouts to complete security upgrades, we provide expert locksmith services for homes and businesses across Dallas and DFW.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group relative bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              {service.badge && (
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                    {service.badge}
                  </span>
                </div>
              )}
              
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow">
                <service.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
