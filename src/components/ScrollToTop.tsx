import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

// tipa o ícone como componente React
const ArrowUpIcon = FaArrowUp as unknown as React.FC;

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return isVisible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-heading text-background p-3 rounded-full shadow-lg hover:bg-paragraph transition-all z-50"
      aria-label="Voltar ao topo"
    >
      <ArrowUpIcon />
    </button>
  ) : null;
}
