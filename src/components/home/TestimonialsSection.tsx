import { Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const testimonials = [
  {
    name: "Michael R.",
    location: "North Dallas",
    service: "Office Rekey",
    rating: 5,
    text: "Outstanding service! They rekeyed our entire office quickly and professionally. The technician was knowledgeable and the pricing was transparent.",
  },
  {
    name: "Sarah L.",
    location: "Uptown Dallas",
    service: "Emergency Lockout",
    rating: 5,
    text: "Called them at 11 PM after locking myself out. They arrived in 20 minutes and had me back inside quickly. Extremely professional and fair pricing.",
  },
  {
    name: "David K.",
    location: "Oak Lawn",
    service: "Smart Lock Installation",
    rating: 5,
    text: "Excellent work installing our new smart locks. The technician took time to show us all the features and ensured everything was working perfectly.",
  },
];

const TestimonialsSection = () => {
  const [emblaRef] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    breakpoints: {
      '(min-width: 768px)': { active: false }
    }
  });

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Dallas Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by homeowners and businesses across Dallas and DFW
          </p>
        </div>

        <div className="overflow-hidden md:overflow-visible" ref={emblaRef}>
          <div className="flex md:grid md:grid-cols-3 gap-6 max-w-6xl mx-auto touch-pan-y">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-[0_0_85%] md:flex-[0_0_auto] mr-6 md:mr-0 bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
                <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                  {testimonial.service}
                </span>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
