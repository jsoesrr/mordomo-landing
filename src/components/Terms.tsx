import React from "react";
import { useNavigate } from "react-router-dom";

const Terms = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen text-white px-6 py-20 flex flex-col items-center justify-center space-y-12"
      id="terms"
    >
      {/* Título */}
      <h1 className="text-4xl font-bold text-center">📜 Termos de Uso</h1>

      {/* Parágrafo introdutório */}
      <p className="max-w-3xl text-center text-white/80 text-lg leading-relaxed">
        Os Termos de Uso do LLeno descrevem como você pode utilizar o serviço,
        quais são suas responsabilidades e os compromissos que assumimos com
        você. É essencial ler com atenção para garantir uma experiência segura
        e transparente.
      </p>

      {/* Botão para TermosDeUso.tsx */}
      <button
        onClick={() => navigate("/termos-de-uso")}
        className="px-8 py-3 rounded-full font-semibold shadow-lg 
                   bg-white/10 backdrop-blur-md border border-white/20 
                   hover:bg-white/20 hover:scale-105 transition-all duration-300"
      >
        📖 Ler Termos de Uso
      </button>
    </div>
  );
};

export default Terms;