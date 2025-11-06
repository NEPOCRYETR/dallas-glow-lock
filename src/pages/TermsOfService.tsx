import { useEffect } from "react";
import Header from "@/components/Header";
import MinimalFooter from "@/components/MinimalFooter";

const TermsOfService = () => {
  useEffect(() => {
    document.title = "Terms of Service | Dallas Home & Commercial Locksmith";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20 md:pt-24">
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
              
              <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
                <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Agreement to Terms</h2>
                  <p>
                    By accessing or using the services of Dallas Home & Commercial Locksmith ("we," "our," or "us"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Services Provided</h2>
                  <p>
                    We provide professional locksmith services including but not limited to emergency lockouts, lock rekeying, lock replacement, installation, smart lock services, and commercial security solutions throughout Dallas and the DFW area.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Service Requests and Appointments</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Service requests must be made by the property owner or authorized representative</li>
                    <li>Proof of ownership or authorization may be required before service is performed</li>
                    <li>Emergency services are subject to availability and response time estimates are not guaranteed</li>
                    <li>Appointments may be rescheduled due to emergency service demands</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Pricing and Payment</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Pricing estimates are provided in good faith but final costs may vary based on actual work required</li>
                    <li>Payment is due upon completion of services unless other arrangements have been made</li>
                    <li>We accept cash, credit cards, and other agreed-upon payment methods</li>
                    <li>Emergency service and after-hours calls may incur additional fees</li>
                    <li>Cancellations must be made at least 2 hours in advance to avoid cancellation fees</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Warranties and Guarantees</h2>
                  <p>
                    We warrant that our services will be performed in a professional and workmanlike manner using quality materials. Specific warranty terms vary by service type:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Labor warranty: 90 days on workmanship</li>
                    <li>Parts warranty: As specified by manufacturer</li>
                    <li>Warranty does not cover damage from improper use, tampering, or normal wear and tear</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Limitation of Liability</h2>
                  <p>
                    To the fullest extent permitted by law, Dallas Home & Commercial Locksmith shall not be liable for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Indirect, incidental, or consequential damages</li>
                    <li>Loss of profits, data, or business opportunities</li>
                    <li>Damages exceeding the amount paid for services rendered</li>
                    <li>Delays caused by circumstances beyond our reasonable control</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Customer Responsibilities</h2>
                  <p>Customers agree to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate information about the property and service needed</li>
                    <li>Ensure legal authority to request locksmith services</li>
                    <li>Provide safe access to work areas</li>
                    <li>Inform us of any special circumstances or security concerns</li>
                    <li>Make payment as agreed upon completion of services</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Verification Requirements</h2>
                  <p>
                    For security purposes, we reserve the right to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Request identification and proof of ownership or authorization</li>
                    <li>Verify property ownership through public records</li>
                    <li>Contact law enforcement if ownership cannot be verified</li>
                    <li>Refuse service if proper verification cannot be obtained</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Intellectual Property</h2>
                  <p>
                    All content on our website, including text, graphics, logos, and images, is the property of Dallas Home & Commercial Locksmith and protected by copyright laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Dispute Resolution</h2>
                  <p>
                    Any disputes arising from these terms or our services shall be resolved through:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Good faith negotiation between parties</li>
                    <li>Mediation if negotiation fails</li>
                    <li>Binding arbitration in Dallas County, Texas</li>
                    <li>Texas state and federal courts as applicable</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Governing Law</h2>
                  <p>
                    These Terms of Service are governed by the laws of the State of Texas without regard to conflict of law principles.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Changes to Terms</h2>
                  <p>
                    We reserve the right to modify these terms at any time. Updated terms will be posted on our website with a revised date. Continued use of our services constitutes acceptance of modified terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Severability</h2>
                  <p>
                    If any provision of these terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Contact Information</h2>
                  <p>
                    For questions about these Terms of Service, please contact us:
                  </p>
                  <div className="bg-card rounded-xl p-6 mt-4">
                    <p><strong>Dallas Home & Commercial Locksmith</strong></p>
                    <p>13350 Dallas Pkwy, Dallas, TX 75240</p>
                    <p>Phone: <a href="tel:+14692509836" className="text-primary hover:underline">(469) 250-9836</a></p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MinimalFooter />
    </div>
  );
};

export default TermsOfService;
