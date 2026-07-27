import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PipelineIcon, StackIcon, FlowIcon, CheckIcon } from "@/components/icons";
import { getBreadcrumbSchema, getServiceSchema } from "@/lib/structuredData";

const services = [
  {
    icon: PipelineIcon,
    title: "CRM Systems",
    description: "For sales and service teams tracking leads and customers across scattered spreadsheets, WhatsApp threads, and inboxes.",
    details: "We build custom CRM systems around how your sales team actually works, not a generic template. Leads get captured in one place, follow-ups happen automatically, and nothing sits forgotten in someone's inbox.",
    includes: [
      "Lead capture and pipeline tracking built around your sales process",
      "Automated follow-up reminders and status updates",
      "Customer interaction history in one place",
      "Integration with the inboxes and channels you already use",
    ],
    iconGradient: "icon-gradient-pink",
  },
  {
    icon: StackIcon,
    title: "ERP Systems",
    description: "For manufacturing and distribution companies running inventory and orders through Excel and manual reconciliation.",
    details: "We build ERP systems that give you one source of truth for inventory, procurement, and order processing, replacing the spreadsheet patchwork most growing companies end up with.",
    includes: [
      "Real-time inventory tracking and stock alerts",
      "Procurement and purchase order management",
      "Order processing from intake to fulfillment",
      "Reporting dashboards for operations and finance",
    ],
    iconGradient: "icon-gradient-purple",
  },
  {
    icon: FlowIcon,
    title: "Workflow Automation",
    description: "For any team still copying data between tools by hand, or chasing approvals over email.",
    details: "We automate the repetitive parts of your operations, approvals, invoicing, notifications, and connect the tools you already use so information moves on its own instead of through manual re-entry.",
    includes: [
      "Approval workflows with clear ownership and status tracking",
      "Automated invoicing and payment reminders",
      "Notifications for the events your team actually needs to know about",
      "Integrations between your existing tools so data stops living in silos",
    ],
    iconGradient: "icon-gradient-cyan",
  },
];

const Services = () => {
  const baseUrl = import.meta.env.VITE_SITE_URL || "https://craftmind.co.in";
  const servicesUrl = `${baseUrl}/services`;

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: baseUrl },
    { name: "Services", url: servicesUrl },
  ]);

  const servicesSchema = services.map((service) =>
    getServiceSchema({
      name: service.title,
      description: service.details,
      provider: {
        "@type": "Organization",
        name: "CraftMind",
      },
      areaServed: "Worldwide",
      serviceType: service.title,
    })
  );

  const structuredData = [breadcrumbSchema, ...servicesSchema];

  return (
    <>
      <SEO
        title="Our Services | Custom CRM, ERP & Automation - CraftMind"
        description="CraftMind builds custom CRM systems, ERP systems, and workflow automation for companies still running operations on spreadsheets and manual processes."
        image={`${baseUrl}/placeholder.svg`}
        url={servicesUrl}
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-cesta-dark text-foreground">
        <Navbar />

      {/* Header Section */}
      <section className="gradient-hero border-b border-border py-24 md:py-32">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            What <span className="holographic-text">We Build</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-soft md:text-xl">
            Three ways we help companies replace manual processes with software that scales
          </p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="bg-transparent py-24" aria-label="Our Services">
        <div className="container mx-auto px-4">
          <h2 className="sr-only">Detailed Service Information</h2>
          <div className="grid gap-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="glass-card glass-border transition-smooth hover:-translate-y-1 hover:shadow-cesta-glow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-6">
                    <div className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl ${service.iconGradient} shadow-cesta-glow`} aria-hidden="true">
                      <service.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <CardTitle className="mb-2 text-2xl md:text-3xl">{service.title}</CardTitle>
                      <CardDescription className="text-lg text-soft">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-6 text-soft">{service.details}</p>
                  <ul className="space-y-2">
                    {service.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-soft">
                        <CheckIcon className="mt-1 h-4 w-4 flex-shrink-0 text-cesta-electric" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Single Request Quote Button Section */}
      <section className="bg-transparent py-12">
        <div className="container mx-auto px-4 text-center">
          <Link to="/contact">
            <Button
              variant="hero"
              className="shadow-cesta-glow text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Request a Quote
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
};

export default Services;
