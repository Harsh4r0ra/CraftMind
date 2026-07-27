import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";

const CTABanner = () => {
  return (
    <section className="relative z-10 py-24" aria-label="Call to Action">
      <div className="container mx-auto px-4">
        <Reveal className="glass-card glass-border mx-auto max-w-3xl space-y-6 rounded-3xl p-12 text-center shadow-cesta-card">
          <div className="flex justify-center" aria-hidden="true">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl icon-gradient-cyan">
              <Sparkles size={28} />
            </div>
          </div>
          <h2 className="text-3xl font-bold md:text-5xl">
            Have an idea? Let&apos;s <span className="holographic-text">build it together</span>
          </h2>
          <p className="text-lg text-soft">
            Transform your vision into reality with our expert team. Get started today!
          </p>
          <Link to="/contact" aria-label="Contact us to start your project">
            <Button className="bg-primary text-primary-foreground shadow-cesta-glow hover:bg-primary/90" size="lg">
              Start Your Project
            </Button>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default CTABanner;
