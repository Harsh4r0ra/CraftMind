import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import ServicesGrid from "@/components/ServicesGrid";
import HowWeWork from "@/components/HowWeWork";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StickyContact from "@/components/StickyContact";
import Reveal from "@/components/Reveal";
import { MessageCircle } from "lucide-react";
import {
  getOrganizationSchema,
  getWebSiteSchema,
  getBreadcrumbSchema,
  getFAQSchema,
  getServiceSchema,
} from "@/lib/structuredData";

const Home = () => {
  const baseUrl = import.meta.env.VITE_SITE_URL || "https://craftmind.co.in";
  const whatsappNumber = "+919136474511";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hi, I'd like to talk about a CRM/ERP/automation project.")}`;

  const organizationSchema = getOrganizationSchema({
    name: "CraftMind",
    url: baseUrl,
    logo: `${baseUrl}/placeholder.svg`,
    description: "CraftMind builds custom CRM, ERP, and workflow automation systems for companies still running operations on spreadsheets and manual processes.",
    contactPoint: {
      email: "harsharora.work@gmail.com",
      telephone: "+91 9136474511",
      contactType: "sales",
      areaServed: ["IN", "Worldwide"],
    },
  });

  const websiteSchema = getWebSiteSchema({
    name: "CraftMind",
    url: baseUrl,
    description: "Custom CRM, ERP, and workflow automation systems for companies still running operations on spreadsheets and manual processes.",
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: baseUrl },
  ]);

  const serviceSchemas = [
    {
      name: "CRM Systems",
      description: "Lead tracking, sales pipeline, and customer follow-up automation.",
    },
    {
      name: "ERP Systems",
      description: "Inventory, procurement, order processing, and reporting.",
    },
    {
      name: "Workflow Automation",
      description: "Approvals, invoicing, notifications, and integrations between existing tools.",
    },
  ].map((service) =>
    getServiceSchema({
      name: service.name,
      description: service.description,
      provider: { "@type": "Organization", name: "CraftMind" },
      areaServed: "Worldwide",
      serviceType: service.name,
    })
  );

  const faqSchema = getFAQSchema([
    {
      question: "What does CraftMind build?",
      answer: "CraftMind builds custom CRM, ERP, and workflow automation systems for companies still running sales, inventory, and operations through manual work and spreadsheets.",
    },
    {
      question: "Who is CraftMind's software built for?",
      answer: "We work with manufacturing and distribution companies, service businesses juggling leads across multiple channels, and companies whose ERP is a patchwork of disconnected tools.",
    },
    {
      question: "How does CraftMind's process work?",
      answer: "We start with a discovery call, map your current process, build the CRM, ERP, or automation system against that plan, then stay on for support and iteration.",
    },
    {
      question: "Where is CraftMind located?",
      answer: "CraftMind is based in India and serves clients globally with remote development services.",
    },
    {
      question: "How can I contact CraftMind?",
      answer: "You can request a 20-minute process audit, email us at harsharora.work@gmail.com, or call us at +91 9136474511.",
    },
  ]);

  const structuredData = [organizationSchema, websiteSchema, breadcrumbSchema, ...serviceSchemas, faqSchema];

  return (
    <>
      <SEO
        title="CraftMind – Custom CRM, ERP & Automation Systems for Companies"
        description="CraftMind builds custom CRM, ERP, and workflow automation systems for companies still running operations on spreadsheets and manual processes. Based in India."
        image={`${baseUrl}/og-image.png`}
        url={baseUrl}
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-cesta-dark text-foreground">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cesta-electric focus:text-white focus:rounded">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" role="main">
          <Hero />
          <WhoThisIsFor />
          <ServicesGrid />
          <HowWeWork />
          <WhyChooseUs />

          {/* Get in touch */}
          <section className="py-16 bg-cesta-dark" aria-labelledby="get-in-touch-heading">
            <div className="container mx-auto px-4">
              <Reveal className="max-w-2xl mx-auto text-center">
                <span className="eyebrow">Get in touch</span>
                <h2 id="get-in-touch-heading" className="text-3xl md:text-4xl font-bold mb-6">
                  Ready when you are
                </h2>
                <p className="text-lg text-soft mb-8">
                  Ready to get your team off spreadsheets? Request a 20-minute process audit and we'll tell you exactly what a custom CRM, ERP, or automation system would look like for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold text-primary-foreground bg-primary hover:bg-primary/90 shadow-cesta-glow transition-smooth"
                  >
                    Request a 20-min process audit
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-6 py-3 font-semibold text-soft hover:text-foreground hover:border-foreground/30 transition-smooth"
                    aria-label="Message us on WhatsApp"
                  >
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                    Message us on WhatsApp
                  </a>
                </div>
              </Reveal>
            </div>
          </section>

          <CTABanner />
        </main>
        <Footer />
        <StickyContact />
      </div>
    </>
  );
};

export default Home;
