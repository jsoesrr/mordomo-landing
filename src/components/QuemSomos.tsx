import React from "react";
import FadeInSection from "./FadeInSection";

const QuemSomos = () => {
  return (
    <section id="quem-somos" className="px-6 py-20 text-white font-sans">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Bloco 1: texto à esquerda, imagem à direita */}
        <FadeInSection className="transition-opacity duration-1000 ease-out opacity-0">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Quem Somos</h2>
              <p className="text-white/80 text-lg">
                Somos uma equipe de sonhadores que acreditam em uma ideia: podemos mudar o
                mundo pra melhor através da tecnologia. 
                O LLeno nasce de um entendimento de que estamos vivendo uma revolução tecnológica
                e da comunicação. O advento da LLM trouxe consigo inúmeras oportunidades de novas
                integrações e automatiações. Mas isso ainda é muito pouco aproveitado. 
                Começamos o nosso projeto no curso de Desenvolvimento de Software da FPFtech Educacional – lá tivemos que desenvolver um software com uma ideia inovadora a cada 6 meses. Ao findar o segundo semestre, Dário, José e Thiago exporam na mostraTech o IntegrAI, um agente de WhatsApp que agendava eventos no Google Calendar e convidava outras pessoas.
              </p>
            </div>
            <div>
              <img
                src="/images/reuniao1.jfif"
                alt="Equipe Lenno"
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>
          </div>
        </FadeInSection>

        {/* Bloco 2: imagem à esquerda, texto à direita */}
        <FadeInSection className="transition-opacity duration-1000 ease-out opacity-0 delay-300">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <img
                src="/images/reuniao2.jfif"
                alt="Nossa missão"
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-white/80 text-lg">
                E apesar de muito cru, tanto os visitantes quanto os avaliadores adoraram a ideia! O time foi congratulado com uma medalha de ouro e decidiu continuar com o projeto.
                A gente sempre soube que era possível fazer muito mais. Que explorando essa tecnologia, o céu era o limite. Que poderíamos criar pontes nunca antes erguidas, conectar clientes a serviços, automatizar atendimentos, compartilhar agendas, guardar e categorizar informações. Uma ferramenta poderosa de organização pessoal e coletiva, capaz de nos liberar tempo e esforço cognitivo para atividades mais relevantes. 
                Asssim nasceu o "LLeno, seu segundo cérebro".
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* Bloco 3: último parágrafo */}
        <FadeInSection className="transition-opacity duration-1000 ease-out opacity-0 delay-500">
          <div className="text-center max-w-4xl mx-auto bg-white/5 backdrop-blur-md rounded-xl p-8 shadow-lg">
            <p className="text-white/80 text-lg mb-6">
              No meio disso, os professores da FPFtech Educacional nos conectaram à WIT Incubadora, um dos braços do que viria a ser um importante parque tecnológico no Brasil. Fomos pré-incubados e nos formalizamos como uma startup. Enquanto José decidiu participar mais pontualmente da iniciativa, Dário e Thiago receberam com empolgação os novos membros que entraram de cabeça na equipe: Cezar e Matheus como engenheiros de software e sócios; e Lóren e Sofia como gerentes de marketing e jurídica, respectivamente, somando-se perfeitamente à equipe trazendo muito talento, experiência, qualidade técnica e visão de negócio. Com entrosamento, habilidades complementares e determinação, nada vai parar o sonho desses visionários de simplificar a vida digital das pessoas!
            </p>
            <p className="mt-6 text-white/60 italic">
              Thiago Silva<br />
              Co-fundador e PO
            </p>
          </div>
        </FadeInSection>

      </div>
    </section>
  );
};

export default QuemSomos;