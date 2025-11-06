import { useEffect } from "react";
import { Shield, Clock, Award, Users } from "lucide-react";
import Header from "@/components/Header";
import MinimalFooter from "@/components/MinimalFooter";
import ConversionSection from "@/components/ConversionSection";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    document.title = "About Us | Dallas Home & Commercial Locksmith";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Learn about Dallas Home & Commercial Locksmith - your trusted, licensed locksmith serving Dallas and DFW with professional service since day one."
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Your trusted locksmith partner in Dallas and DFW
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-2xl shadow-soft p-6 md:p-10 mb-12">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    Dallas Home & Commercial Locksmith is your trusted security partner, serving homes and businesses throughout Dallas and the greater DFW area. We combine professional expertise with rapid response times to deliver exceptional locksmith services when you need them most.
                  </p>
                  <p>
                    Whether you're locked out of your home at midnight, need to rekey your business after a staff change, or want to upgrade to modern smart lock technology, our licensed and insured technicians are ready to help 24/7.
                  </p>
                  <p>
                    We believe in transparent pricing, quality workmanship, and treating every customer with respect. Our commitment to excellence has made us the go-to locksmith for Dallas residents and business owners who demand reliability and professionalism.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {[
                  {
                    icon: Shield,
                    title: "Licensed & Insured",
                    description: "Fully licensed, bonded, and insured for your protection and peace of mind",
                  },
                  {
                    icon: Clock,
                    title: "24/7 Availability",
                    description: "Round-the-clock emergency service with fast response times across Dallas",
                  },
                  {
                    icon: Award,
                    title: "Quality Workmanship",
                    description: "Expert service backed by warranties and satisfaction guarantees",
                  },
                  {
                    icon: Users,
                    title: "Trusted Professionals",
                    description: "Background-checked, trained technicians committed to your security",
                  },
                ].map((value, index) => (
                  <div key={index} className="bg-card rounded-2xl shadow-soft p-6">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-card rounded-2xl shadow-soft p-6 md:p-10 mb-12">
                <h2 className="text-3xl font-bold mb-6">Our Services</h2>
                <p className="text-muted-foreground mb-6">
                  We provide comprehensive locksmith services for residential and commercial clients:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: "Emergency Locksmith Services", link: "/emergency-locksmith-dallas" },
                    { name: "Residential Locksmith", link: "/residential-locksmith-dallas" },
                    { name: "Commercial Locksmith", link: "/commercial-locksmith-dallas" },
                    { name: "Lock Rekeying", link: "/lock-rekey-dallas" },
                    { name: "Lock Replacement & Repair", link: "/lock-replacement-dallas" },
                    { name: "Lock Installation & Upgrades", link: "/lock-installation-dallas" },
                    { name: "Smart Lock Installation", link: "/smart-lock-installation-dallas" },
                    { name: "Master Key Systems", link: "/master-key-systems-dallas" },
                    { name: "Door Closers & Panic Bars", link: "/door-closers-panic-bars-dallas" },
                  ].map((service, index) => (
                    <Link
                      key={index}
                      to={service.link}
                      className="flex items-center gap-2 text-primary hover:underline"
                    >
                      <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-card rounded-2xl shadow-soft p-6 md:p-10">
                <h2 className="text-3xl font-bold mb-6">Service Areas</h2>
                <p className="text-muted-foreground mb-4">
                  We proudly serve Dallas and surrounding communities throughout the DFW metroplex. Our service areas include:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "North Dallas",
                    "Uptown Dallas",
                    "Downtown Dallas",
                    "Oak Lawn",
                    "Highland Park",
                    "University Park",
                    "Preston Hollow",
                    "Lake Highlands",
                    "And surrounding DFW areas",
                  ].map((area, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-muted-foreground">{area}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  <Link to="/service-areas" className="text-primary hover:underline">
                    View complete service areas →
                  </Link>
                </p>
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

export default About;
