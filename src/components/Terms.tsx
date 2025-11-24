import React from "react";
import { useNavigate } from "react-router-dom";

const Terms = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen text-white px-6 py-20 flex flex-col items-center space-y-12"
      id="terms"
    >
      {/* Título principal */}
      <h1 className="text-4xl font-bold text-center">📜 Documentos Importantes</h1>

      {/* Grid com dois cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Card Termos de Uso */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-lg flex flex-col items-center space-y-6">
          <h2 className="text-2xl font-semibold">📖 Termos de Uso</h2>
          <p className="text-white/80 text-center text-lg leading-relaxed">
            Os Termos de Uso do LLeno descrevem como você pode utilizar o serviço,
            quais são suas responsabilidades e os compromissos que assumimos com você.
          </p>
          <button
            onClick={() => navigate("/termos-de-uso")}
            className="px-6 py-3 rounded-full font-semibold shadow-lg 
                       bg-white/10 backdrop-blur-md border border-white/20 
                       hover:bg-white/20 hover:scale-105 transition-all duration-300"
          >
            📖 Ler Termos de Uso
          </button>
        </div>

        {/* Card Política de Privacidade */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-lg flex flex-col items-center space-y-6">
          <h2 className="text-2xl font-semibold">🔒 Política de Privacidade</h2>
          <p className="text-white/80 text-center text-lg leading-relaxed">
            A Política de Privacidade explica como tratamos seus dados, garantindo
            segurança, transparência e respeito às suas informações pessoais.
          </p>
          <button
            onClick={() => navigate("/politica-de-privacidade")}
            className="px-6 py-3 rounded-full font-semibold shadow-lg 
                       bg-white/10 backdrop-blur-md border border-white/20 
                       hover:bg-white/20 hover:scale-105 transition-all duration-300"
          >
            🔒 Ler Política de Privacidade
          </button>
        </div>
      </div>
    </div>
  );
};

export default Terms;