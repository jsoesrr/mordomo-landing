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
              <div className="space-y-4 text-white/80 text-lg">
                <p>
                  Somos uma equipe de sonhadores que acreditam em uma ideia: podemos mudar o mundo pra melhor através da tecnologia.
                </p>
                <p>
                  O LLeno nasce de um entendimento de que estamos vivendo uma revolução tecnológica e da comunicação. O advento da LLM trouxe consigo inúmeras oportunidades de novas integrações e automações — mas isso ainda é muito pouco aproveitado.
                </p>
                <p>
                  Começamos o nosso projeto no curso de Desenvolvimento de Software da FPFtech Educacional — lá tivemos que desenvolver um software com uma ideia inovadora a cada 6 meses.
                </p>
                <p>
                  Ao findar o segundo semestre, Dário, José e Thiago exporam na mostraTech o <strong>IntegrAI</strong>, um agente de WhatsApp que agendava eventos no Google Calendar e convidava outras pessoas.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/images/equipe.jpg"
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
                src="/images/equipelleno.png"
                alt="Nossa missão"
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="space-y-4 text-white/80 text-lg">
                <p>
                  E apesar de muito cru, tanto os visitantes quanto os avaliadores adoraram a ideia! O time foi congratulado com uma medalha de ouro e decidiu continuar com o projeto.
                </p>
                <p>
                  A gente sempre soube que era possível fazer muito mais. Que explorando essa tecnologia, o céu era o limite. Que poderíamos criar pontes nunca antes erguidas, conectar clientes a serviços, automatizar atendimentos, compartilhar agendas, guardar e categorizar informações.
                </p>
                <p>
                  Uma ferramenta poderosa de organização pessoal e coletiva, capaz de nos liberar tempo e esforço cognitivo para atividades mais relevantes.
                </p>
                <p>
                  Assim nasceu o <strong>"LLeno, seu segundo cérebro"</strong>.
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Bloco 3: texto + imagem menor */}
        <FadeInSection className="transition-opacity duration-1000 ease-out opacity-0 delay-500">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4 text-white/80 text-lg">
              <p>
                No meio disso, os professores da FPFtech Educacional nos conectaram à WIT Incubadora, um dos braços do que viria a ser um importante parque tecnológico no Brasil. Fomos pré-incubados e nos formalizamos como uma startup.
              </p>
              <p>
                Enquanto José decidiu participar mais pontualmente da iniciativa, <strong>Dário</strong> e <strong>Thiago</strong> receberam com empolgação os novos membros que entraram de cabeça na equipe:
              </p>
              <p>
                <strong>Cezar</strong> e <strong>Matheus</strong> como engenheiros de software e sócios; <strong>Lóren</strong> e <strong>Sofia</strong> como gerentes de marketing e jurídica, respectivamente — somando-se perfeitamente à equipe, trazendo muito talento, experiência, qualidade técnica e visão de negócio.
              </p>
              <p>
                Com entrosamento, habilidades complementares e determinação, nada vai parar o sonho desses visionários de simplificar a vida digital das pessoas!
              </p>
              <p className="mt-6 text-white/60 italic">
                Thiago Silva<br />
                Co-fundador e PO
              </p>
            </div>
            <div>
              <img
                src="/images/meninaslleno.jpg"
                alt="Nova equipe"
                className="rounded-lg shadow-lg mx-auto w-3/4"  
              />
            </div>
          </div>
        </FadeInSection>

      </div>
    </section>
  );
};

export default QuemSomos;