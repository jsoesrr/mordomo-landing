import React from "react";
import FadeInSection from "./FadeInSection";

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gray text-light pt-24 px-6">
      <FadeInSection className="transition-opacity duration-1000 delay-500 ease-out opacity-0">
      <div className="grid md:grid-cols-2 gap-12 items-center">
      <img
        src="/images/whatsapp.png"
        alt="Organizador digital"
        className="w-full rounded-lg"
      />
      <div>
        <h3 className="text-3xl font-semibold mb-4">Organização sem esforço</h3>
        <p className="text-gray-300 text-lg">
          O Mordomo agenda seus eventos com apenas um comando de voz! Experimente a praticidade de gerenciar sua agenda sem complicações.
        </p>
      </div>
    </div>
    </FadeInSection>
    

     <FadeInSection className="transition-opacity duration-1000 delay-500 ease-out opacity-0">

     <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-3xl font-semibold mb-4">Convites automatizados</h3>
        <p className="text-gray-300 text-lg">
          Envie convites, receba confirmações e acompanhe a lista de convidados em tempo real. O Mordomo cuida disso pra você.
        </p>
      </div>
      <img
        src="/images/invites.png"
        alt="Envio de convites"
        className="w-full rounded-lg"
      />
    </div>
</FadeInSection>
     <FadeInSection className="transition-opacity duration-1000 delay-500 ease-out opacity-0">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <img
        src="/images/calendar.png"
        alt="Calendário de eventos"
        className="w-full rounded-lg"
      />
      <div>
        <h3 className="text-3xl font-semibold mb-4">Eventos sincronizados</h3>
        <p className="text-gray-300 text-lg">
          O Mordomo se conecta ao Google Calendar para manter seus eventos organizados e atualizados. Você nunca mais vai esquecer uma data importante.
        </p>
      </div>
    </div>
      </FadeInSection>
    </section>
  );
};

export default About;