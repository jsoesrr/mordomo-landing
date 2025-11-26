import React from "react";
import { useNavigate } from "react-router-dom";

const Guide = () => {
  const navigate = useNavigate();

  return (
    <section id="guide" className=" py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Texto com animação */}
        <div className="animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">Guia do Usuário</h2>
          <p className="text-white/80 text-lg mb-6">
            Pronto para começar? Descubra todos os recursos e aprenda a integrar o LLeno à sua rotina com facilidade.
          </p>
          <button
            onClick={() => navigate("/guia")}
            className="px-6 py-3 rounded-full font-semibold shadow-lg 
                       bg-white/10 backdrop-blur-md border border-white/20 
                       hover:bg-white/20 hover:scale-105 transition-all duration-300"
          >
            📖 Ver Guia Detalhado
          </button>
        </div>

        {/* Imagem maior com animação e hover */}
        <div className="flex justify-center animate-fade-up animate-delay-200">
          <img
            src="/images/llenolendo.png"
            alt="QR code LLeno"
            className="w-96 h-auto drop-shadow-xl transform transition-transform duration-300 hover:scale-105 hover:brightness-110"
          />
        </div>
      </div>
    </section>
  );
};

export default Guide;