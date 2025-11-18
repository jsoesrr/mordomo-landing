import React from "react";

const Hero = () => {
  return (
    <section id="home" className="pt-24 px-6 text-white">      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center animate-fade-in">
        <div className="inline-block shadow-x1 rounded">
          <img
            src="/images/llenologo.png"
            alt="Logo do lleno"
            className="h-20 drop-shadow-xl mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Seu assistente virtual na palma da sua mão
          </h1>
          <p className="text-paragraph mb-6 text-lg">
            Conheça o Lenno, seu assistente virtual que ajuda alunos como Carimbo Miguel a organizar festas escolares incríveis — tudo pelo WhatsApp.
          </p>
          <button className="bg-gradient-to-r from-[#7C3AED] via-[#F97316] to-[#FACC15] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
            🚀 Experimente o Lenno Agora
          </button>
        </div>
        <div>
          <img
            src="/images/definitivo-qr-code2.png"
            alt="QR CODE do Lenno"
            className="w-128 h-128 object-contain mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

//min-h-screen pt-24 px-6 text-white