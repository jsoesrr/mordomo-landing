import React from "react";

export default function Guide() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 text-light font-sans">
      {/* Título */}
      <h2 className="text-4xl font-bold text-center mb-4 tracking-tight">📘 Guia de Uso</h2>
      <div className="w-16 h-1 bg-accent mx-auto mb-12 rounded-full" />

      

      {/* QR Code */}
      <div className="flex justify-center mb-20">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-xl flex flex-col items-center transition-transform hover:scale-105 duration-300">
          <img
            src="/images/novo-qr-code2.png"
            alt="QR Code do Mordomo"
            className="w-64 h-64 object-contain mb-4"
          />
          <p className="text-light text-center text-sm">
            Escaneie para começar a usar o Mordomo
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Começando */}
        <div id="start" className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-lg hover:translate-y-1 transition-all duration-300">
          <div className="flex items-center mb-3">
            <span className="text-2xl mr-2">🚀</span>
            <h3 className="text-xl font-semibold">Começando</h3>
          </div>
          <p className="text-sm text-light/80">
            Escaneie o QR Code e comece a conversar com o Mordomo via WhatsApp. Ele está pronto pra te ajudar!
          </p>
        </div>

        {/* Funcionalidades */}
        <div id="features" className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-lg hover:translate-y-1 transition-all duration-300">
          <div className="flex items-center mb-3">
            <span className="text-2xl mr-2">✨</span>
            <h3 className="text-xl font-semibold">Funcionalidades</h3>
          </div>
          <ul className="list-disc list-inside text-sm space-y-1 text-light/80">
            <li>Agendamento via Google Calendar</li>
            <li>Convites automatizados</li>
            <li>Eventos próximos na sua região</li>
          </ul>
        </div>

        {/* Suporte */}
        <div id="support" className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-lg hover:translate-y-1 transition-all duration-300">
          <div className="flex items-center mb-3">
            <span className="text-2xl mr-2">🛠️</span>
            <h3 className="text-xl font-semibold">Suporte</h3>
          </div>
          <p className="text-sm text-light/80">
            Dúvidas? Fale com a gente em <span className="underline">support@mordomo.com</span>.
          </p>
        </div>
      </div>
    </section>
  );
}