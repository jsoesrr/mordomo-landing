import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import GuiaPage from "./pages/GuiaPage";
import TermosDeUso from "./pages/TermosDeUso";
import PoliticaDePrivacidade from "./pages/PoliticaDePrivacidade";
import WhatsAppButton from "./components/WhatsAppButton";
import Contato from "./pages/Contato";
import Sobre from "./pages/Sobre";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/guia" element={<GuiaPage />} />
        <Route path="/termos-de-uso" element={<TermosDeUso />} />
        <Route
          path="/politica-de-privacidade"
          element={<PoliticaDePrivacidade />}
        />
        <Route path="/contato" element={<Contato />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;
