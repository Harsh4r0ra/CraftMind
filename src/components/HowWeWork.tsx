import { FaPhone, FaSitemap, FaCode, FaSyncAlt } from "react-icons/fa";

const steps = [
  {
    icon: FaPhone,
    title: "Discovery call",
    description: "We learn how your team actually works today and where it's breaking down.",
    iconGradient: "icon-gradient-purple",
  },
  {
    icon: FaSitemap,
    title: "Process mapping",
    description: "We map your current workflow end-to-end and design the system that replaces it.",
    iconGradient: "icon-gradient-electric",
  },
  {
    icon: FaCode,
    title: "Build",
    description: "We build the CRM, ERP, or automation system against that plan.",
    iconGradient: "icon-gradient-gold",
  },
  {
    icon: FaSyncAlt,
    title: "Support & iterate",
    description: "We stay on to fix issues and extend the system as your business changes.",
    iconGradient: "icon-gradient-cyan",
  },
];

const HowWeWork = () => {
  return (
    <section className="relative z-10 bg-cesta-dark py-24" aria-labelledby="how-we-work-heading">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center animate-fade-in">
          <h2 id="how-we-work-heading" className="text-3xl font-bold md:text-5xl">
            How <span className="holographic-text">We Work</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="glass-card glass-border relative space-y-4 p-8 text-center shadow-cesta-card transition-smooth hover:-translate-y-1 hover:shadow-cesta-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="absolute right-4 top-4 text-sm font-bold text-soft/50" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${step.iconGradient} shadow-cesta-glow`} aria-hidden="true">
                <step.icon className="text-white text-2xl" style={{ fontSize: '1.75rem' }} />
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-soft text-justify">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
