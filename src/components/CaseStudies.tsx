import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import Reveal from "@/components/Reveal";

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 bg-cesta-dark" aria-labelledby="case-studies-heading">
      <div className="container mx-auto px-4">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl icon-gradient-purple" aria-hidden="true">
            <FileText className="text-2xl" style={{ fontSize: '1.5rem' }} />
          </div>
          <span className="eyebrow">Case studies</span>
          <h2 id="case-studies-heading" className="text-4xl font-bold mb-4">
            Coming soon
          </h2>
          <p className="text-soft mb-8">
            Case studies coming soon — reach out and we'll walk you through recent projects directly.
          </p>
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a href="/contact" aria-label="Talk to us about our work">
              Talk to us about our work
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
};

export default CaseStudies;
