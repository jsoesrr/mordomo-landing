import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-dark text-light shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="flex items-center gap-2 text-xl font-bold">
          🤖 Mordomo
        </div>
        <nav className="space-x-6 text-paragraph">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-heading transition"
          >
            Inicio
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-heading transition"
          >
            Sobre
          </Link>
          <Link
            to="guide"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-heading transition"
          >
            Guia do Usuário

          </Link>
          <Link
            to="terms"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-heading transition"
          >
            Termos de Uso
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;