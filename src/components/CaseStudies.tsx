import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Eye } from "lucide-react";
import CaseStudyModal, { CaseStudyData } from "@/components/CaseStudyModal";

// [NEEDS CLIENT DATA]: replace every field below with a real project.
// Do not publish invented client names, numbers, or results.
const caseStudies: CaseStudyData[] = [
  {
    id: 1,
    industry: "[NEEDS CLIENT DATA — industry]",
    priorState: "[NEEDS CLIENT DATA] company — [what they had before]",
    problem: "[NEEDS CLIENT DATA: the specific manual process or pain point]",
    whatWeBuilt: "[NEEDS CLIENT DATA: what we built, in plain language]",
    result: "[NEEDS CLIENT DATA: a real number — hours saved/week, error rate drop, days shaved off a process]",
  },
  {
    id: 2,
    industry: "[NEEDS CLIENT DATA — industry]",
    priorState: "[NEEDS CLIENT DATA] company — [what they had before]",
    problem: "[NEEDS CLIENT DATA: the specific manual process or pain point]",
    whatWeBuilt: "[NEEDS CLIENT DATA: what we built, in plain language]",
    result: "[NEEDS CLIENT DATA: a real number — hours saved/week, error rate drop, days shaved off a process]",
  },
  {
    id: 3,
    industry: "[NEEDS CLIENT DATA — industry]",
    priorState: "[NEEDS CLIENT DATA] company — [what they had before]",
    problem: "[NEEDS CLIENT DATA: the specific manual process or pain point]",
    whatWeBuilt: "[NEEDS CLIENT DATA: what we built, in plain language]",
    result: "[NEEDS CLIENT DATA: a real number — hours saved/week, error rate drop, days shaved off a process]",
  },
];

const CaseStudies = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (caseStudy: CaseStudyData) => {
    setSelectedCaseStudy(caseStudy);
    setIsModalOpen(true);
  };

  const handleCloseModal = (open: boolean) => {
    if (!open) {
      setIsModalOpen(false);
      // Small delay to allow animation to complete before clearing state
      setTimeout(() => {
        setSelectedCaseStudy(null);
      }, 200);
    }
  };

  return (
    <section id="case-studies" className="py-24 bg-cesta-dark" aria-labelledby="case-studies-heading">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h2 id="case-studies-heading" className="text-4xl font-bold mb-4">
            Case Studies
          </h2>
          <p className="text-soft max-w-2xl mx-auto text-justify">
            Explore real projects and see how we've helped companies replace manual processes with systems that scale.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study) => (
            <Card
              key={study.id}
              className="glass-card glass-border border border-white/10 bg-cesta-overlay/50 hover:border-cesta-electric/50 transition-all"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-lg">{study.priorState}</CardTitle>
                  <FileText className="h-5 w-5 text-cesta-electric flex-shrink-0 ml-2" aria-hidden="true" />
                </div>
                <CardDescription className="text-soft">
                  {study.industry}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-soft mb-4 text-justify">{study.problem}</p>
                <Button
                  onClick={() => handleOpenModal(study)}
                  variant="outline"
                  className="w-full border-cesta-electric/30 text-cesta-electric hover:bg-cesta-electric/10 transition-all hover:scale-[1.02]"
                  aria-label={`View details for ${study.priorState}`}
                >
                  <Eye className="mr-2 h-4 w-4" aria-hidden="true" />
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-soft mb-4 text-justify">
            Want to see more? Contact us for detailed case studies and project portfolios.
          </p>
          <Button
            asChild
            className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:from-purple-500 hover:via-pink-400 hover:to-orange-400"
          >
            <a href="/contact" aria-label="Contact us for more case studies">
              View All Case Studies
            </a>
          </Button>
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        open={isModalOpen}
        onOpenChange={handleCloseModal}
        caseStudy={selectedCaseStudy}
      />
    </section>
  );
};

export default CaseStudies;
