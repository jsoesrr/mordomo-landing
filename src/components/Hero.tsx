import React from "react";

const Hero = () => {
  return (
    <section id="home" className="pt-24 px-6 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center animate-fade-in">
        <div className="inline-block shadow-x1 rounded">
          <img
  src="/images/logolleno.png"
  alt="Logo do LLENO"
  className="h-24 md:h-40 w-auto object-contain drop-shadow-xl mb-6"
/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Seu assistente virtual na palma da sua mão
          </h1>
          <p className="text-paragraph mb-6 text-lg">
            Conheça o LLENO, seu assistente virtual que ajuda alunos como Carimbo Miguel a organizar festas escolares incríveis — tudo pelo WhatsApp.
          </p>
          {/* Botão como link para WhatsApp */}
          <a
            href="https://api.whatsapp.com/send/?phone=5592981623809&text=Oi%2C+LLeno%21&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 
                       text-white font-semibold px-8 py-3 rounded-full shadow-lg 
                       hover:from-purple-700 hover:via-pink-600 hover:to-red-600 
                       hover:scale-105 hover:shadow-xl transition-all duration-300 
                       inline-block animate-pulse-slow"
          >
            🚀 Experimente o LLENO Agora
          </a>
        </div>
        <div className="flex justify-center">
          {/* QR Code clicável */}
          <a
            href="https://api.whatsapp.com/send/?phone=5592981623809&text=Oi%2C+LLeno%21&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/qrcode.png"
              alt="QR CODE do LLENO"
              className="w-128 h-128 object-contain mx-auto drop-shadow-xl transform transition-transform duration-300 hover:scale-105 hover:brightness-110"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;