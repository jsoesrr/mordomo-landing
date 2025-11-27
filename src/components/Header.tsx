import React, { useState } from "react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom"; // importa o Link do react-router-dom

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Início", to: "home", type: "scroll" },
    { label: "Quem Somos", to: "quem-somos", type: "scroll" },
    { label: "Guia do Usuário", to: "guide", type: "scroll" },
    { label: "Termos de Uso", to: "terms", type: "scroll" },
    { label: "Contato", to: "/contato", type: "route" }, // novo item
  ];

  const headerHeight = 64;

  return (
    <header
      className={`fixed top-0 w-full bg-white/5 backdrop-blur-md text-white z-50 shadow-sm
      ${menuOpen ? "" : "border-b border-white/10"}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
          <img
            src="/images/logolleno.png"
            alt="Logo do LLeno"
            className="h-12 drop-shadow-xl"
          />
          
        </div>

        {/* Navegação desktop */}
        <nav className="hidden md:flex gap-6 text-white/80 font-medium">
          {navItems.map(({ label, to, type }) =>
            type === "scroll" ? (
              <Link
                key={to}
                to={to}
                smooth
                duration={500}
                className="cursor-pointer hover:text-purple-300 transition"
              >
                {label}
              </Link>
            ) : (
              <RouterLink
                key={to}
                to={to}
                className="cursor-pointer hover:text-purple-300 transition"
              >
                {label}
              </RouterLink>
            )
          )}
        </nav>

        {/* Botão hambúrguer (mobile) */}
        <button
          className={`md:hidden text-2xl focus:outline-none ${
            menuOpen ? "hidden" : "block"
          }`}
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`fixed left-0 w-full
        md:hidden z-[999]
        bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900
        backdrop-blur-xl transform transition-transform duration-300 ease-in-out
        overflow-y-auto
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
        style={{
          top: `${headerHeight}px`,
          height: `calc(100vh - ${headerHeight}px)`,
        }}
      >
        {/* Botão de fechar */}
        <button
          className="absolute top-5 right-6 text-3xl z-[1000]"
          onClick={() => setMenuOpen(false)}
        >
          ✖️
        </button>

        <div className="flex flex-col items-center justify-start pt-12 pb-8 space-y-6 text-white text-lg font-semibold px-6">
          {navItems.map(({ label, to, type }) =>
            type === "scroll" ? (
              <Link
                key={to}
                to={to}
                smooth
                duration={500}
                className="w-full text-center py-3 rounded-md hover:bg-white/10 transition"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ) : (
              <RouterLink
                key={to}
                to={to}
                className="w-full text-center py-3 rounded-md hover:bg-white/10 transition"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </RouterLink>
            )
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;