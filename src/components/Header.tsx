import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-bold text-primary">
              Dallas Locksmith
            </span>
          </Link>

          <a
            href="tel:+14692509836"
            className="flex items-center gap-2"
            onClick={() => {
              if (typeof window !== "undefined" && (window as any).gtag) {
                (window as any).gtag("event", "click_to_call", {
                  event_category: "engagement",
                  event_label: "header_phone",
                });
              }
            }}
          >
            <Button className="gradient-primary text-white hover:opacity-90 transition-opacity shadow-soft">
              <Phone className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">(469) 250-9836</span>
              <span className="sm:hidden">Call</span>
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
