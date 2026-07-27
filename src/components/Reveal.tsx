import { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const Reveal = ({ children, className = "", delay = 0 }: RevealProps) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
};

export default Reveal;
