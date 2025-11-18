import React from "react";
import FadeInSection from "./FadeInSection";

const Terms = () => {
  return (
    <section id="terms" className="text-white px-6 py-20 font-sans">
      <FadeInSection className="transition-opacity duration-1000 delay-500 ease-out opacity-0">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Termos de Uso</h2>
          <p className="text-white/80 text-lg">
            Texto de exemplo para os termos de uso. Detalhes em breve.
          </p>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Terms;