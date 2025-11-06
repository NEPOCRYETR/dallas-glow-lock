import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import MinimalFooter from "@/components/MinimalFooter";
import { Link } from "react-router-dom";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Contact Us | Dallas Home & Commercial Locksmith";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Contact Dallas Home & Commercial Locksmith for fast, professional service. Call (469) 250-9836 or request a free estimate."
      );
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20 md:pt-24">
        <section className="py-12 md:py-16 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Get in touch for fast, professional locksmith service in Dallas
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div className="space-y-6">
                <div className="bg-card rounded-2xl shadow-soft p-6">
                  <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <a
                          href="tel:+14692509836"
                          className="text-primary hover:underline"
                          onClick={() => {
                            if (typeof window !== "undefined" && (window as any).gtag) {
                              (window as any).gtag("event", "click_to_call", {
                                event_category: "engagement",
                                event_label: "contact_page",
                              });
                            }
                          }}
                        >
                          (469) 250-9836
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">Available 24/7 for emergencies</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Address</h3>
                        <p className="text-muted-foreground">
                          13350 Dallas Pkwy<br />
                          Dallas, TX 75240
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Hours</h3>
                        <p className="text-muted-foreground">
                          24/7 Emergency Service<br />
                          Mon-Fri: 8:00 AM - 6:00 PM (Standard)<br />
                          Sat-Sun: 9:00 AM - 5:00 PM (Standard)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-2xl shadow-soft p-6">
                  <h3 className="text-xl font-bold mb-4">Our Services</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { name: "Emergency Locksmith", link: "/emergency-locksmith-dallas" },
                      { name: "Residential Service", link: "/residential-locksmith-dallas" },
                      { name: "Commercial Service", link: "/commercial-locksmith-dallas" },
                      { name: "Lock Rekeying", link: "/lock-rekey-dallas" },
                      { name: "Lock Replacement", link: "/lock-replacement-dallas" },
                      { name: "Smart Locks", link: "/smart-lock-installation-dallas" },
                    ].map((service, index) => (
                      <Link
                        key={index}
                        to={service.link}
                        className="text-sm text-primary hover:underline"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="bg-card rounded-2xl shadow-soft p-6">
                  <h3 className="text-xl font-bold mb-4">Legal</h3>
                  <div className="flex flex-col gap-2">
                    <Link to="/privacy-policy" className="text-sm text-primary hover:underline">
                      Privacy Policy
                    </Link>
                    <Link to="/terms-of-service" className="text-sm text-primary hover:underline">
                      Terms of Service
                    </Link>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card rounded-2xl shadow-soft p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6">Request a Free Estimate</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      maxLength={100}
                      className="mt-1.5"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="mt-1.5"
                      placeholder="(469) 250-9836"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      maxLength={255}
                      className="mt-1.5"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service">Service Type *</Label>
                    <Select name="service" required>
                      <SelectTrigger className="mt-1.5">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="emergency">Emergency Lockout</SelectItem>
                        <SelectItem value="residential">Residential Service</SelectItem>
                        <SelectItem value="commercial">Commercial Service</SelectItem>
                        <SelectItem value="rekey">Lock Rekeying</SelectItem>
                        <SelectItem value="replacement">Lock Replacement</SelectItem>
                        <SelectItem value="smart">Smart Lock Installation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="address">Address / Zip Code *</Label>
                    <Input
                      id="address"
                      name="address"
                      required
                      maxLength={200}
                      className="mt-1.5"
                      placeholder="Dallas, TX 75240"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Additional Details (Optional)</Label>
                    <Textarea
                      id="message"
                      name="message"
                      maxLength={1000}
                      rows={4}
                      className="mt-1.5"
                      placeholder="Tell us about your locksmith needs..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full gradient-primary text-white hover:opacity-90 shadow-soft"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Get Free Estimate"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our{" "}
                    <Link to="/privacy-policy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </p>
                </form>
              </div>
            </div>

            {/* Map */}
            <div className="mt-12 max-w-6xl mx-auto">
              <div className="bg-card rounded-2xl shadow-soft overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.6891524358996!2d-96.83538!3d32.93548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c21e84f0a0001%3A0x1!2s13350%20Dallas%20Pkwy%2C%20Dallas%2C%20TX%2075240!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dallas Home & Commercial Locksmith Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MinimalFooter />
    </div>
  );
};

export default Contact;
