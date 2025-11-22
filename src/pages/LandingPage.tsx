import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import QuemSomos from "../components/QuemSomos";
import About from "../components/About";
import Guide from "../components/Guide";
import Terms from "../components/Terms";

const LandingPage = () => {
  return (
    <div
      className="bg-gradient-to-br min-h-screen text-white flex flex-col"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, #1E3A8A, #7C3AED, #16161a)",
      }}
    >
      {/* Header fixo no topo */}
      <Header />

      {/* Conteúdo principal */}
      <main className="flex-1 space-y-24 px-6 pt-24">
        <Hero />
        <QuemSomos />
        <Guide />
        <Terms />
      </main>

      {/* Footer no final */}
      <Footer />
    </div>
  );
};

export default LandingPage;