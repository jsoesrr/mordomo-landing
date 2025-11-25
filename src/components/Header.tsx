import React, { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/5 backdrop-blur-md border-b border-white/10 text-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
          <img
            src="/images/llenologoblack.png"
            alt="Logo do LLeno"
            className="h-8 drop-shadow-xl"
          />
        </div>

        {/* Navegação desktop */}
        <nav className="hidden md:flex gap-6 text-white/80">
          <Link to="home" smooth duration={500} className="cursor-pointer hover:text-purple-300 transition">
            Início
          </Link>
          <Link to="quem-somos" smooth duration={500} className="cursor-pointer hover:text-purple-300 transition">
            Quem Somos
          </Link>
          <Link to="guide" smooth duration={500} className="cursor-pointer hover:text-purple-300 transition">
            Guia do Usuário
          </Link>
          <Link to="terms" smooth duration={500} className="cursor-pointer hover:text-purple-300 transition">
            Termos de Uso
          </Link>
        </nav>

        {/* Botão hambúrguer (mobile) */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖️" : "☰"}
        </button>
      </div>

      {/* Overlay com blur */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Menu mobile com gradiente translúcido + blur */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-gradient-to-b from-purple-800/40 to-indigo-900/40 backdrop-blur-xl border-l border-white/20 transform transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start px-6 py-20 space-y-4 text-white/90">
          {["Início", "Quem Somos", "Guia do Usuário", "Termos de Uso"].map(
            (item, i) => (
              <Link
                key={item}
                to={item.toLowerCase().replace(" ", "-")}
                smooth
                duration={500}
                className={`w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition transform ${
                  menuOpen
                    ? `opacity-100 translate-x-0 delay-[${i * 150}ms]`
                    : "opacity-0 translate-x-5"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            )
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;