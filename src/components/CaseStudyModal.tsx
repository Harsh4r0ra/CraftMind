import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export interface CaseStudyData {
  id: number;
  industry: string;
  priorState: string;
  problem: string;
  whatWeBuilt: string;
  result: string;
}

interface CaseStudyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  caseStudy: CaseStudyData | null;
}

const CaseStudyModal = ({ open, onOpenChange, caseStudy }: CaseStudyModalProps) => {
  if (!caseStudy) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-2xl max-h-[90vh] overflow-y-auto glass-card glass-border border border-white/10 bg-cesta-overlay/95 backdrop-blur-xl text-foreground"
        aria-labelledby="case-study-title"
        aria-describedby="case-study-description"
      >
        <DialogHeader>
          <DialogTitle id="case-study-title" className="text-2xl font-bold text-white">
            {caseStudy.priorState}
          </DialogTitle>
          <DialogDescription id="case-study-description" className="text-soft pt-2">
            <Badge variant="outline" className="border-cesta-electric/30 text-cesta-electric">
              {caseStudy.industry}
            </Badge>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Problem</h3>
            <p className="text-soft leading-relaxed">{caseStudy.problem}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">What we built</h3>
            <p className="text-soft leading-relaxed">{caseStudy.whatWeBuilt}</p>
          </div>

          <Separator className="bg-white/10" />

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Result</h3>
            <p className="text-soft leading-relaxed">{caseStudy.result}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CaseStudyModal;
