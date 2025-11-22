import React from "react";
import { useNavigate } from "react-router-dom";

const TermosDeUso = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen text-white px-6 py-20 space-y-12 relative"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, #1E3A8A, #7C3AED, #16161a)",
      }}
    >
      {/* Botão minimalista no topo */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 text-2xl px-3 py-2 rounded-full 
                   bg-white/10 backdrop-blur-md border border-white/20 
                   hover:bg-white/20 transition-all duration-300"
      >
        ⬅️
      </button>

      {/* Título */}
      <h1 className="text-4xl font-bold text-center">
        📖 Termos de Uso – LLeno Assistente
      </h1>

      {/* Conteúdo dos termos */}
      <div className="max-w-4xl mx-auto space-y-6 text-white/80 text-lg leading-relaxed bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-lg">
        <p>
          Bem-vindo(a) ao LLENO ASSISTENTE. Este documento estabelece as regras de uso e os
          limites de responsabilidade do nosso Serviço. Sua utilização do LLENO ASSISTENTE
          implica na sua concordância total com as condições aqui descritas, celebrando um
          acordo com a equipe de desenvolvimento do LLENO ASSISTENTE.
        </p>

        <h2 className="text-2xl font-semibold text-white">1. Status do Serviço: Teste Alpha Aberto</h2>
        <p>
          <strong>1.1. Fase de Desenvolvimento:</strong> Você reconhece e concorda que o LLENO ASSISTENTE está
          atualmente em uma fase de Teste Alpha Aberto (Open Alpha Test). Isso significa que o
          Serviço ainda está em desenvolvimento e pode conter erros, falhas ou indisponibilidades.
        </p>
        <p>
          <strong>1.2. Isenção de Garantia:</strong> O Serviço é fornecido "como está", sem garantias de qualquer
          tipo, expressas ou implícitas, incluindo, mas não se limitando a garantias de precisão,
          confiabilidade ou adequação para qualquer propósito específico.
        </p>
        <p>
          <strong>1.3. Limitação de Responsabilidade:</strong> a equipe do LLENO ASSISTENTE não será responsável por
          quaisquer danos, diretos ou indiretos, incluindo perda de dados, lucros cessantes ou
          interrupção de negócios, decorrentes do uso ou da incapacidade de usar o Serviço durante
          esta fase de testes.
        </p>

        <h2 className="text-2xl font-semibold text-white">2. Uso da Plataforma WhatsApp</h2>
        <p>
          <strong>2.1.</strong> O LLENO ASSISTENTE opera integralmente via WhatsApp. O uso do Serviço está,
          portanto, sujeito também aos Termos de Serviço e Políticas de Privacidade do WhatsApp/Meta.
        </p>
        <p>
          <strong>2.2.</strong> O usuário é o único responsável por garantir que o uso do LLENO ASSISTENTE esteja em
          conformidade com as políticas do WhatsApp.
        </p>

        <h2 className="text-2xl font-semibold text-white">3. Dados do Usuário e Privacidade</h2>
        <p>
          <strong>3.1. Coleta e Uso de Dados:</strong> Ao interagir com o LLENO ASSISTENTE, você nos concede o direito
          de coletar, armazenar e processar os dados e informações que você fornece (ex: agendas,
          lembretes, tarefas) com o objetivo exclusivo de: Aprimorar o Serviço; treinar e otimizar a
          inteligência artificial do LLENO ASSISTENTE; personalizar sua experiência e solucionar falhas
          e bugs.
        </p>
        <p>
          <strong>3.2. Compromisso de Não Venda:</strong> a equipe do LLENO ASSISTENTE se compromete a não vender
          ou comercializar seus dados pessoais para terceiros.
        </p>
        <p>
          <strong>3.3. Anonimização:</strong> Podemos utilizar dados agregados e anonimizados para fins estatísticos e
          de desenvolvimento sem que isso revele sua identidade.
        </p>

        <h2 className="text-2xl font-semibold text-white">4. Alterações nos Termos</h2>
        <p>
          <strong>4.1. Notificação:</strong> Estes Termos de Uso podem ser atualizados periodicamente. Qualquer
          alteração relevante será comunicada diretamente a você via WhatsApp.
        </p>
        <p>
          <strong>4.2.</strong> O uso contínuo do LLENO ASSISTENTE após qualquer alteração constitui sua aceitação dos
          novos Termos.
        </p>

        <h2 className="text-2xl font-semibold text-white">5. Obrigações do Usuário</h2>
        <p>
          <strong>5.1.</strong> Você concorda em usar o Serviço de forma lícita e ética, abstendo-se de enviar conteúdo
          ilegal, difamatório ou ofensivo.
        </p>
        <p>
          <strong>5.2.</strong> Você é responsável por manter a segurança e a confidencialidade do seu acesso ao
          WhatsApp.
        </p>

        <h2 className="text-2xl font-semibold text-white">6. Disposições Gerais</h2>
        <p>
          <strong>6.1. Lei Aplicável:</strong> Estes Termos serão regidos e interpretados de acordo com as leis do Brasil.
        </p>
        <p>
          <strong>6.2. Contato:</strong> Para quaisquer dúvidas sobre estes Termos, entre em contato através de
          <span className="text-white font-semibold"> lleno.suporte@gmail.com</span>.
        </p>
      </div>

      {/* Botão voltar no final */}
      <div className="flex justify-center">
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 rounded-full font-semibold shadow-lg 
                     bg-white/10 backdrop-blur-md border border-white/20 
                     hover:bg-white/20 hover:scale-105 transition-all duration-300"
        >
          ⬅️ Voltar à Tela Inicial
        </button>
      </div>
    </div>
  );
};

export default TermosDeUso;