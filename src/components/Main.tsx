import React from "react";
import FadeInSection from "./FadeInSection";

const Main = () => {
  return (
    <section id="quem-somos" className="px-6 py-20 text-white font-sans">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Bloco 1: texto à esquerda, imagem à direita */}
        <FadeInSection className="transition-opacity duration-1000 ease-out opacity-0">
          <div className="grid md:grid-cols-1 gap-10 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                LLENO transforma áudios e mensagens de WhatsApp em compromissos
                reais no seu Google Agenda.
              </h2>
              <br /><br /><br />
              <h2 className="text-4xl font-bold mb-4">
                Sem apps, sem formulários, sem atrito.
              </h2>
            </div>
          </div>
        </FadeInSection>

        {/* Bloco 2: imagem à esquerda, texto à direita */}
        <FadeInSection className="transition-opacity duration-1000 ease-out opacity-0 delay-300">
          <div className="grid md:grid-cols-2 gap-10 items-stretch mb-12 min-h-[300px]">
            <div className="order-1 md:order-1 flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-4">
                Gerir a rotina não devia ser um trabalho à parte.
              </h2>
            </div>
            <div className="order-2 md:order-2 flex flex-col justify-center">
              <div className="space-y-4 text-white/80 text-lg font-bold">
                <p>• Agendas fragmentadas</p>
                <p>• Esquecimento de compromissos</p>
                <p>• Dificuldade de usar apps de gestão complexos</p>
              </div>
            </div>
          </div>
          <p className="text-3xl font-bold text-center">
            Fale com o LLENO como se falasse com um assistente.
          </p>
          <p className="text-3xl font-bold text-center">
            Ele entende o contexto e organiza o resto.
          </p>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Main;
