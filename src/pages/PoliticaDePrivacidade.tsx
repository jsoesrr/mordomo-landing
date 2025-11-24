import React from "react";
import { useNavigate } from "react-router-dom";

const PoliticaDePrivacidade = () => {
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
        🔒 Política de Privacidade – LLeno Assistente
      </h1>

      {/* Conteúdo da política */}
      <div className="max-w-4xl mx-auto space-y-6 text-white/80 text-lg leading-relaxed bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-lg">
        <p>
          Esta Política descreve como o LLENO ASSISTENTE coleta, utiliza e protege suas
          informações ao usar nosso serviço, operado via WhatsApp.
        </p>

        <h2 className="text-2xl font-semibold text-white">1. Quais Informações Coletamos</h2>
        <p><strong>1.1. Dados de Interação:</strong> Coletamos o conteúdo das suas mensagens (texto e áudio) para entender suas solicitações de agendamento, lembretes e tarefas.</p>
        <p><strong>1.2. Dados de Contato:</strong> Coletamos seu número de telefone do WhatsApp e informações associadas (como o nome de perfil que você utiliza no WhatsApp) para identificá-lo e prestar o serviço.</p>
        <p><strong>1.3. Dados de Serviço:</strong> Coletamos metadados sobre o uso do Serviço, como frequência de uso, recursos mais utilizados e eventuais erros reportados.</p>

        <h2 className="text-2xl font-semibold text-white">2. Como Usamos Suas Informações</h2>
        <p>Usamos as informações coletadas para as seguintes finalidades:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Fornecer o Serviço: Processar suas solicitações (agendar, lembrar, notificar);</li>
          <li>Desenvolvimento e Treinamento: Usar suas interações para treinar e aprimorar a inteligência artificial do LLENO ASSISTENTE;</li>
          <li>Suporte: Responder às suas dúvidas e resolver problemas técnicos;</li>
          <li>Comunicação: Informar sobre atualizações importantes, mudanças no Serviço ou alterações nesta Política de Privacidade ou nos Termos de Uso (via WhatsApp).</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white">3. Compromisso com a Não Venda de Dados</h2>
        <p>O LLENO ASSISTENTE não vende, aluga ou compartilha seus dados pessoais de interação com terceiros para fins de marketing ou publicidade. Podemos, no entanto, utilizar dados agregados e anonimizados para análises estatísticas.</p>

        <h2 className="text-2xl font-semibold text-white">4. Compartilhamento de Informações</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Com Terceiros a Seu Pedido: ao enviar notificações ou convites;</li>
          <li>Com o WhatsApp/Meta: regido também pelas políticas deles;</li>
          <li>Requisitos Legais: se formos obrigados por lei ou ordem judicial.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white">5. Segurança dos Dados</h2>
        <p>Empregamos medidas de segurança razoáveis para proteger suas informações contra acesso, alteração ou divulgação não autorizados. No entanto, por se tratar de uma fase Alpha, não podemos garantir segurança absoluta.</p>

        <h2 className="text-2xl font-semibold text-white">6. Alterações na Política</h2>
        <p>Esta Política pode ser atualizada. Notificaremos você sobre mudanças significativas diretamente via WhatsApp. O uso contínuo após a notificação constitui aceitação.</p>

        <h2 className="text-2xl font-semibold text-white">7. Seus Direitos</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Acessar as informações que mantemos sobre você;</li>
          <li>Solicitar a correção de dados incorretos;</li>
          <li>Solicitar a exclusão de seus dados, sujeito a obrigações legais.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white">8. Contato</h2>
        <p>Se você tiver dúvidas sobre esta Política, entre em contato através de <span className="text-white font-semibold">lleno.suporte@gmail.com</span>.</p>
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

export default PoliticaDePrivacidade;