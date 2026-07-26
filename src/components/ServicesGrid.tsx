import { FaHandshake, FaDatabase, FaCogs } from "react-icons/fa";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: FaHandshake,
    title: "CRM systems",
    description: "Lead tracking, sales pipeline, and customer follow-up automation, so no lead sits in someone's inbox.",
    iconGradient: "icon-gradient-pink",
  },
  {
    icon: FaDatabase,
    title: "ERP systems",
    description: "Inventory, procurement, order processing, and reporting in one place instead of five spreadsheets.",
    iconGradient: "icon-gradient-purple",
  },
  {
    icon: FaCogs,
    title: "Workflow automation",
    description: "Approvals, invoicing, notifications, and integrations between the tools you already use.",
    iconGradient: "icon-gradient-cyan",
  },
];

const ServicesGrid = () => {
  return (
    <section className="relative z-10 bg-transparent py-24" aria-label="What We Build">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center animate-fade-in">
          <h2 id="services-heading" className="text-3xl font-bold md:text-5xl">
            What <span className="holographic-text">We Build</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-soft text-justify">
            Three ways we help companies replace manual processes with systems that scale. Explore our <a href="/services" className="text-cesta-electric hover:underline">full range of services</a> to find the right fit.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="glass-card border border-white/10 transition-smooth hover:scale-[1.03] hover:shadow-cesta-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${service.iconGradient} shadow-cesta-glow`} aria-hidden="true">
                  <service.icon className="text-white text-xl" style={{ fontSize: '1.5rem' }} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-soft text-justify">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
