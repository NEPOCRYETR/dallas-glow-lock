import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What areas do you serve in Dallas?",
    answer: "We provide locksmith services throughout Dallas and surrounding DFW areas, including North Dallas, Uptown, Downtown, Oak Lawn, Highland Park, University Park, and nearby cities. Call us to confirm service in your specific location.",
  },
  {
    question: "How quickly can you respond to an emergency?",
    answer: "For emergency lockout situations, we typically arrive within 20-30 minutes depending on your location in Dallas. We're available 24/7 for all emergency locksmith needs.",
  },
  {
    question: "Do you provide upfront pricing?",
    answer: "Yes, we believe in transparent pricing. We provide free estimates and will give you the full cost before starting any work. No hidden fees or surprise charges.",
  },
  {
    question: "Are you licensed and insured?",
    answer: "Absolutely. We are fully licensed, bonded, and insured locksmith professionals serving Dallas and DFW. All our technicians are trained, certified, and background-checked.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, debit cards, cash, and digital payment methods for your convenience.",
  },
  {
    question: "Do you offer warranties on your work?",
    answer: "Yes, we stand behind our work with a satisfaction guarantee and warranty on parts and labor. Specific warranty terms vary by service type.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Common questions about our Dallas locksmith services
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-soft p-6 md:p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
