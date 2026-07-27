import { PipelineIcon, StackIcon, FlowIcon } from "@/components/icons";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Reveal from "@/components/Reveal";

const services = [
  {
    icon: PipelineIcon,
    title: "CRM systems",
    description: "Lead tracking, sales pipeline, and customer follow-up automation, so no lead sits in someone's inbox.",
    iconGradient: "icon-gradient-pink",
  },
  {
    icon: StackIcon,
    title: "ERP systems",
    description: "Inventory, procurement, order processing, and reporting in one place instead of five spreadsheets.",
    iconGradient: "icon-gradient-purple",
  },
  {
    icon: FlowIcon,
    title: "Workflow automation",
    description: "Approvals, invoicing, notifications, and integrations between the tools you already use.",
    iconGradient: "icon-gradient-cyan",
  },
];

const ServicesGrid = () => {
  return (
    <section className="relative z-10 bg-transparent py-24" aria-label="What We Build">
      <div className="container mx-auto px-4">
        <Reveal className="mb-16 text-center">
          <span className="eyebrow">What we build</span>
          <h2 id="services-heading" className="text-3xl font-bold md:text-5xl">
            What <span className="holographic-text">We Build</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-soft">
            Three ways we help companies replace manual processes with systems that scale. Explore our <a href="/services" className="text-cesta-electric hover:underline">full range of services</a> to find the right fit.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 100}>
              <Card className="glass-card h-full border transition-smooth hover:-translate-y-1 hover:shadow-cesta-glow">
                <CardHeader>
                  <div className="mb-2 h-1 w-10 rounded-full bg-primary" aria-hidden="true" />
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${service.iconGradient}`} aria-hidden="true">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-soft">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
