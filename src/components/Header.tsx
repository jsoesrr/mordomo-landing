import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/5 backdrop-blur-md border-b border-white/10 text-white z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="flex items-center gap-2">
          <img
            src="/images/llenologo.png"
            alt="Logo do Lenno"
            className="h-8"
          />
        </div>
        <nav className="space-x-6 text-white/80">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-white transition"
          >
            Início
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-white transition"
          >
            Sobre
          </Link>
          <Link
            to="guide"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-white transition"
          >
            Guia do Usuário
          </Link>
          <Link
            to="terms"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-white transition"
          >
            Termos de Uso
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;