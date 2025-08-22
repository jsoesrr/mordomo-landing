import React from "react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-dark text-light pt-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center animate-fade-in">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Seu assistente virtual na palma da sua mão
          </h1>
          <p className="text-paragraph mb-6 text-lg">
            Conheça o Mordomo, seu assistente virtual que ajuda alunos como Carimbo Miguel a organizar festas escolares incríveis — tudo pelo WhatsApp.
          </p>
          <button className="bg-grayish text-light px-6 py-3 rounded hover:bg-paragraph transition">
            Experimente o Mordomo Agora
          </button>
        </div>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/13298/13298257.png"
            alt="Digital Butler"
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;