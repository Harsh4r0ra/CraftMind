import { MessageCheckIcon, ShieldIcon, TrendUpIcon } from "@/components/icons";
import Reveal from "@/components/Reveal";

const features = [
  {
    icon: MessageCheckIcon,
    title: "Post-launch support included",
    description: "Every build comes with a support window after launch, so issues get fixed fast and the system keeps working as your team grows.",
    iconGradient: "icon-gradient-purple",
  },
  {
    icon: ShieldIcon,
    title: "Your data, secured",
    description: "We take data security seriously in how every system is built and hosted, from access control to backups.",
    iconGradient: "icon-gradient-cyan",
  },
  {
    icon: TrendUpIcon,
    title: "Proven track record",
    description: "50+ projects delivered for businesses replacing manual processes with software that scales.",
    iconGradient: "icon-gradient-gold",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative z-10 bg-secondary/40 py-24" aria-label="Why companies choose us">
      <div className="container mx-auto px-4">
        <Reveal className="mb-16 text-center">
          <span className="eyebrow">Why craftmind</span>
          <h2 id="why-choose-us-heading" className="text-3xl font-bold md:text-5xl">
            Why companies <span className="holographic-text">choose us</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal key={index} delay={index * 100}>
              <article className="glass-card glass-border h-full space-y-4 p-8 text-center shadow-cesta-card transition-smooth hover:-translate-y-1 hover:shadow-cesta-glow">
                <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${feature.iconGradient}`} aria-hidden="true">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-soft">{feature.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
