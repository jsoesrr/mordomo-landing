import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/5 backdrop-blur-md border-b border-white/10 text-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
          <img
            src="/images/llenologo.png"
            alt="Logo do Lenno"
            className="h-8 drop-shadow-xl"
          />
        </div>
        <nav className="flex gap-6 text-white/80">
          <Link to="home" smooth duration={500} className="cursor-pointer hover:text-white hover:underline underline-offset-4 transition">
            Início
          </Link>
          <Link to="quem-somos" smooth duration={500} className="cursor-pointer hover:text-white hover:underline underline-offset-4 transition">
            Quem Somos
          </Link>
          <Link to="guide" smooth duration={500} className="cursor-pointer hover:text-white hover:underline underline-offset-4 transition">
            Guia do Usuário
          </Link>
          <Link to="terms" smooth duration={500} className="cursor-pointer hover:text-white hover:underline underline-offset-4 transition">
            Termos de Uso
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;