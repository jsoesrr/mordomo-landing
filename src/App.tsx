import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import GuiaPage from "./pages/GuiaPage";
import TermosDeUso from "./pages/TermosDeUso";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/guia" element={<GuiaPage />} />
        <Route path="/termos-de-uso" element={<TermosDeUso />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;