import { PhoneIcon, MapIcon, BuildIcon, LoopIcon } from "@/components/icons";
import Reveal from "@/components/Reveal";

const steps = [
  {
    icon: PhoneIcon,
    title: "Discovery call",
    description: "We learn how your team actually works today and where it's breaking down.",
    iconGradient: "icon-gradient-purple",
  },
  {
    icon: MapIcon,
    title: "Process mapping",
    description: "We map your current workflow end-to-end and design the system that replaces it.",
    iconGradient: "icon-gradient-electric",
  },
  {
    icon: BuildIcon,
    title: "Build",
    description: "We build the CRM, ERP, or automation system against that plan.",
    iconGradient: "icon-gradient-gold",
  },
  {
    icon: LoopIcon,
    title: "Support & iterate",
    description: "We stay on to fix issues and extend the system as your business changes.",
    iconGradient: "icon-gradient-cyan",
  },
];

const HowWeWork = () => {
  return (
    <section className="relative z-10 bg-cesta-dark py-24" aria-labelledby="how-we-work-heading">
      <div className="container mx-auto px-4">
        <Reveal className="mb-16 text-center">
          <span className="eyebrow">Our process</span>
          <h2 id="how-we-work-heading" className="text-3xl font-bold md:text-5xl">
            How <span className="holographic-text">We Work</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="glass-card glass-border relative h-full space-y-4 p-8 text-center shadow-cesta-card transition-smooth hover:-translate-y-1 hover:shadow-cesta-glow">
                <span className="absolute right-4 top-4 text-sm font-bold text-soft/50" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${step.iconGradient}`} aria-hidden="true">
                  <step.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-soft">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
