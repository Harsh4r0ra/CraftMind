import { FaHeadset, FaShieldAlt, FaAward } from "react-icons/fa";

const features = [
  {
    icon: FaHeadset,
    title: "Post-launch support included",
    description: "[NEEDS INPUT: state actual support terms, e.g. \"3 months of post-launch support included with every build.\"]",
    iconGradient: "icon-gradient-purple",
  },
  {
    icon: FaShieldAlt,
    title: "Your data, secured",
    description: "[NEEDS INPUT: confirm actual hosting/security practices before publishing, e.g. hosting provider, encryption, backups.]",
    iconGradient: "icon-gradient-cyan",
  },
  {
    icon: FaAward,
    title: "Proven track record",
    description: "[NEEDS INPUT: real figures only — e.g. \"X years in business, Y projects delivered.\"]",
    iconGradient: "icon-gradient-gold",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative z-10 bg-cesta-purple/20 py-24 backdrop-blur-sm" aria-label="Why companies choose us">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center animate-fade-in">
          <h2 id="why-choose-us-heading" className="text-3xl font-bold md:text-5xl">
            Why companies <span className="holographic-text">choose us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={index}
              className="glass-card glass-border space-y-4 p-8 text-center shadow-cesta-card transition-smooth hover:-translate-y-1 hover:shadow-cesta-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${feature.iconGradient} shadow-cesta-glow`} aria-hidden="true">
                <feature.icon className="text-white text-2xl" style={{ fontSize: '1.75rem' }} />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-soft text-justify">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
