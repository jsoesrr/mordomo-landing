import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const GuiaPage = () => {
  // controla quais seções estão abertas (por índice)
  const [open, setOpen] = useState<number[]>([]);
  const navigate = useNavigate();

  const toggle = (idx: number) => {
    setOpen((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div
      className="min-h-screen text-white px-6 py-20 space-y-24"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, #1E3A8A, #7C3AED, #16161a)",
      }}
    >
      {/* Título */}
      <h1 className="text-4xl font-bold text-center">Guia do Usuário</h1>

      {/* Seção visual: card + imagem (mantido e caprichado) */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Card de funcionalidades */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-xl space-y-8 animate-fade-up">
          <h2 className="text-3xl font-bold text-white">✨ Funcionalidades do LLeno</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Agendamento Inteligente */}
            <div className="flex items-start gap-4">
              <span className="text-2xl">🗓️</span>
              <div>
                <h3 className="text-lg font-semibold text-white">Agendamento Inteligente</h3>
                <p className="text-white/70 text-sm">
                  Crie eventos com rapidez e precisão, direto pelo WhatsApp.
                </p>
              </div>
            </div>
            {/* Lembretes Automáticos */}
            <div className="flex items-start gap-4">
              <span className="text-2xl">🔔</span>
              <div>
                <h3 className="text-lg font-semibold text-white">Lembretes Automáticos</h3>
                <p className="text-white/70 text-sm">
                  Notificações configuráveis para você e convidados.
                </p>
              </div>
            </div>
            {/* Integração com WhatsApp */}
            <div className="flex items-start gap-4">
              <span className="text-2xl">💬</span>
              <div>
                <h3 className="text-lg font-semibold text-white">Integração com WhatsApp</h3>
                <p className="text-white/70 text-sm">
                  Converse com o LLeno e execute comandos por texto ou áudio.
                </p>
              </div>
            </div>
            {/* Comandos por Voz */}
            <div className="flex items-start gap-4">
              <span className="text-2xl">🎙️</span>
              <div>
                <h3 className="text-lg font-semibold text-white">Comandos por Voz</h3>
                <p className="text-white/70 text-sm">
                  Diga o que precisa e deixe o LLeno trabalhar por você.
                </p>
              </div>
            </div>
            {/* Memória Inteligente */}
            <div className="flex items-start gap-4">
              <span className="text-2xl">🧠</span>
              <div>
                <h3 className="text-lg font-semibold text-white">Memória Inteligente</h3>
                <p className="text-white/70 text-sm">
                  Contexto e histórico para respostas e ações mais assertivas.
                </p>
              </div>
            </div>
            {/* Compartilhamento Facilitado */}
            <div className="flex items-start gap-4">
              <span className="text-2xl">📤</span>
              <div>
                <h3 className="text-lg font-semibold text-white">Compartilhamento Facilitado</h3>
                <p className="text-white/70 text-sm">
                  Convide contatos e compartilhe eventos com segurança.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Imagem do app */}
        <div className="flex justify-center animate-fade-up animate-delay-200">
          <img
            src="/images/qrcode.png"
            alt="QR code LLeno"
            className="w-[22rem] h-auto drop-shadow-xl transform transition-transform duration-300 hover:scale-105 hover:brightness-110"
          />
        </div>
      </div>

      {/* Guia interativo (accordions) */}
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Intro */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
          <button
            onClick={() => toggle(1)}
            className="w-full text-left text-2xl font-semibold flex justify-between items-center"
          >
            <span>1. Introdução</span>
            <span className="text-3xl leading-none">{open.includes(1) ? "−" : "+"}</span>
          </button>
          <div
            className={`grid transition-all duration-300 ${
              open.includes(1) ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden text-white/80">
              <p>
                O LLeno é um assistente que conversa com você, respondendo dúvidas ou curiosidades gerais —
                e o melhor: ele realiza tarefas pra você. Basta comandar!
              </p>
            </div>
          </div>
        </div>

        {/* Comandos */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
          <button
            onClick={() => toggle(2)}
            className="w-full text-left text-2xl font-semibold flex justify-between items-center"
          >
            <span>2. Comandos</span>
            <span className="text-3xl leading-none">{open.includes(2) ? "−" : "+"}</span>
          </button>
          <div
            className={`grid transition-all duration-300 ${
              open.includes(2) ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden text-white/80 space-y-2">
              <p>
                2.1 Comandos aceitos: agendar evento, visualizar agenda, alterar informações do evento,
                remover evento, ajuda e cancelamento.
              </p>
              <p>2.1.1 Faça o comando completo em um só áudio ou mensagem de texto.</p>
              <p>
                2.1.2 Evite conversar durante o comando: seu assistente sabe que tem hora de conversa e hora de trabalho!
              </p>
              <p>2.1.3 Procure falar no imperativo. Ex.: “Agende um evento…”, “Busque na minha agenda…”</p>
            </div>
          </div>
        </div>

        {/* Agendamento */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
          <button
            onClick={() => toggle(3)}
            className="w-full text-left text-2xl font-semibold flex justify-between items-center"
          >
            <span>3. Agendamento</span>
            <span className="text-3xl leading-none">{open.includes(3) ? "−" : "+"}</span>
          </button>
          <div
            className={`grid transition-all duration-300 ${
              open.includes(3) ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden text-white/80 space-y-2">
              <p>
                3.1.1 Cada mensagem (texto ou áudio) trata de apenas um evento. Em breve: múltiplos eventos.
              </p>
              <p>
                3.1.2 Informe com precisão: o quê, quando, onde e antecedência dos lembretes. Você pode incluir
                descrições como “Ingresso: R$ 5” ou “Levar roupa de banho”.
              </p>
              <p>
                3.1.3 O LLeno cria no Google Calendar. Edições feitas direto no Calendar não afetam convidados; já
                pelo LLeno, as alterações chegam para todos.
              </p>
              <p>3.2 Para agendar: peça com data e horário.</p>
              <p>3.3 Opcional: inclua local, descrição e lembretes no mesmo áudio.</p>
              <p>
                3.4 O LLeno mostra o que entendeu e pede revisão; compartilhe contatos dos convidados para receberem os
                lembretes no WhatsApp.
              </p>
              <p>
                3.4.1 Convidados não cadastrados não recebem notificações. Compartilhe o contato do LLeno e peça o
                cadastro (só enviar o nome).
              </p>
              <p>
                3.5 Confirme e pronto! Você recebe um link do Google Calendar. Uma única vez, será preciso aceitar o
                LLeno como contato por e-mail.
              </p>
              <p>3.6 Peça “mostrar agenda” para ver seus eventos no WhatsApp.</p>
              <p>3.7 Para editar, informe qual evento e o que deseja alterar.</p>
              <p>3.8 Depois é só confirmar!</p>
              <p>
                3.9 Para remover, peça claramente (nome, data/horário) para o LLeno identificar o evento.
              </p>
            </div>
          </div>
        </div>

        {/* Ajuda */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
          <button
            onClick={() => toggle(4)}
            className="w-full text-left text-2xl font-semibold flex justify-between items-center"
          >
            <span>4. Ajuda</span>
            <span className="text-3xl leading-none">{open.includes(4) ? "−" : "+"}</span>
          </button>
          <div
            className={`grid transition-all duration-300 ${
              open.includes(4) ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden text-white/80 space-y-2">
              <p>4.1 Peça ajuda explicando seu problema; o LLeno vai te auxiliar.</p>
              <p>
                4.2 Se ainda não encontrou o que precisa, fale com nossa equipe pelo link de suporte.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Botão voltar (glassmorphism) */}
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

export default GuiaPage;