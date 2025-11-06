import { useEffect } from "react";
import Header from "@/components/Header";
import MinimalFooter from "@/components/MinimalFooter";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Dallas Home & Commercial Locksmith";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20 md:pt-24">
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
              
              <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
                <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Introduction</h2>
                  <p>
                    Dallas Home & Commercial Locksmith ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Information We Collect</h2>
                  <p>We may collect the following types of information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Personal Information:</strong> Name, phone number, email address, service address, and payment information when you contact us or use our services.</li>
                    <li><strong>Usage Data:</strong> Information about how you access and use our website, including IP address, browser type, pages visited, and time spent on pages.</li>
                    <li><strong>Cookies and Tracking:</strong> We use cookies and similar tracking technologies to analyze website traffic and improve user experience.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">How We Use Your Information</h2>
                  <p>We use collected information for the following purposes:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Providing locksmith services and responding to service requests</li>
                    <li>Processing payments and maintaining service records</li>
                    <li>Communicating with you about services, appointments, and updates</li>
                    <li>Improving our website and services</li>
                    <li>Analyzing usage patterns and website performance</li>
                    <li>Complying with legal obligations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Information Sharing</h2>
                  <p>
                    We do not sell, trade, or rent your personal information to third parties. We may share your information with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Service providers who assist with business operations (payment processors, analytics providers)</li>
                    <li>Law enforcement or regulatory agencies when required by law</li>
                    <li>Business partners with your explicit consent</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Data Security</h2>
                  <p>
                    We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Data Retention</h2>
                  <p>
                    We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Your Rights</h2>
                  <p>You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Object to processing of your personal information</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Cookies</h2>
                  <p>
                    We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Third-Party Links</h2>
                  <p>
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Children's Privacy</h2>
                  <p>
                    Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Changes to This Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised "Last updated" date.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Contact Us</h2>
                  <p>
                    If you have questions or concerns about this Privacy Policy, please contact us:
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

export default PrivacyPolicy;
