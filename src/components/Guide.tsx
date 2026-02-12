import React from "react";
import { useNavigate } from "react-router-dom";

const Guide = () => {
  const navigate = useNavigate();

  return (
    <section id="guide" className=" py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-1 items-center gap-12">
        {/* Texto com animação */}
        <div className="animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">Como funciona?</h2>
          <div className="flex items-center gap-4 mb-3">
            <img
              src="/images/send-message.png"
              className="w-12 flex-shrink-0 invert"
            ></img>
            <p className="text-white/80 text-lg">
              Você envia (áudio ou texto): "Marca uma reunião com o Dário na quarta às 14h".
            </p>
          </div>
          <div className="flex items-center gap-4 mb-3">
            <img src="/images/idea.png" className="w-12 flex-shrink-0 invert"></img>
            <p className="text-white/80 text-lg">
              Ele entende: a nossa IA processa a linguagem natural, identifica o
              contexto, a data, o horário e o local.
            </p>
          </div>
          <div className="flex items-center gap-4 mb-3">
            <img src="/images/contact.png" className="w-12 flex-shrink-0 invert"></img>
            <p className="text-white/80 text-lg">
              Você convida pessoas: você pode compartilhar contatos para
              adicionar convidados ao evento.
            </p>
          </div>
          <div className="flex items-center gap-4 mb-3">
            <img src="/images/check.png" className="w-12 flex-shrink-0 invert"></img>
            <p className="text-white/80 text-lg">
              E o LLeno executa: o evento aparece instantaneamente no seu Google
              Agenda e você (e os convidados) recebem os lembretes no WhatsApp.
            </p>
          </div>

          {/* <button
            onClick={() => navigate("/guia")}
            className="px-6 py-3 rounded-full font-semibold shadow-lg 
                       bg-white/10 backdrop-blur-md border border-white/20 
                       hover:bg-white/20 hover:scale-105 transition-all duration-300"
          >
            📖 Ver Guia detalhado
          </button> */}
        </div>

        {/* Imagem maior com animação e hover
        <div className="flex justify-center animate-fade-up animate-delay-200">
          <img
            src="/images/llenolendo.png"
            alt="QR code LLeno"
            className="w-96 h-auto drop-shadow-xl transform transition-transform duration-300 hover:scale-105 hover:brightness-110"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Guide;
