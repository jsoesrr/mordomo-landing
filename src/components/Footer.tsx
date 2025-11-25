import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white/5 backdrop-blur-md border-t border-white/10 text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Coluna 1: Logo + frase + redes sociais */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <img
            src="/images/llenologoblack.png"
            alt="LLeno Logo"
            className="h-12"
          />
          <p className="text-sm text-white/70 italic">
            Você fala, LLeno organiza
          </p>

          {/* Redes sociais */}
          <div className="flex gap-6 mt-2">
            <a href="https://api.whatsapp.com/send/?phone=5592981623809&text=Oi%2C+LLeno%21&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="group">
              <img src="/icons/whatsapp.png" alt="WhatsApp" className="w-7 h-7 transition-transform group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(34,197,94,0.8)]" />
            </a>
            <a href="https://instagram.com/llenoassistente" target="_blank" rel="noopener noreferrer" className="group">
              <img src="/icons/instagram.png" alt="Instagram" className="w-7 h-7 transition-transform group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(236,72,153,0.8)]" />
            </a>
            {/* <a href="https://twitter.com/seuPerfil" target="_blank" rel="noopener noreferrer" className="group">
              <img src="/icons/twitter.png" alt="Twitter" className="w-7 h-7 transition-transform group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.8)]" />
            </a>
            <a href="https://facebook.com/seuPerfil" target="_blank" rel="noopener noreferrer" className="group">
              <img src="/icons/facebook.png" alt="Facebook" className="w-7 h-7 transition-transform group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(37,99,235,0.8)]" />
            </a> */}
          </div>
        </div>

        {/* Coluna 2: Links institucionais */}
        <div className="flex flex-col gap-2 text-sm text-white/70 items-center md:items-start">
          <a href="/quem-somos" className="hover:text-white transition">Quem Somos</a>
          <a href="/guia" className="hover:text-white transition">Guia do Usuário</a>
          <a href="/termos-de-uso" className="hover:text-white transition">Termos de Uso</a>
          <a href="/politica-de-privacidade" className="hover:text-white transition">Política de Privacidade</a>
          <a href="/contato" className="hover:text-white transition">Fale Conosco</a>
        </div>

        {/* Coluna 3: Localização */}
        <div className="flex flex-col items-center md:items-start text-sm text-white/70">
          <p>Manaus, AM – Brasil</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-white/50">
        © 2025 LLeno. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;