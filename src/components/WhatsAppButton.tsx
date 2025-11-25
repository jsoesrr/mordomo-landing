import React from "react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=5592981623809&text=Oi%2C+LLeno%21&type=phone_number&app_absent=0" // 👉 coloque aqui o mesmo link do botão do hero
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-transform transform hover:scale-110 z-50"
    >
      {/* Ícone do WhatsApp (SVG) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-7 h-7"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12c0 2.12.66 4.09 1.79 5.72L2 22l4.41-1.79C8.09 21.34 10.06 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.73 0-3.37-.51-4.78-1.48l-.34-.22-2.61 1.06.99-2.7-.22-.35C4.51 15.37 4 13.73 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.07-5.25c-.22-.11-1.3-.64-1.5-.71-.2-.07-.35-.11-.5.11-.15.22-.57.71-.7.86-.13.15-.26.17-.48.06-.22-.11-.93-.34-1.77-1.09-.65-.58-1.09-1.3-1.22-1.52-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.06-.11-.5-1.2-.68-1.64-.18-.44-.36-.38-.5-.39-.13-.01-.28-.01-.43-.01-.15 0-.39.06-.6.28-.2.22-.79.77-.79 1.88s.81 2.18.92 2.33c.11.15 1.59 2.43 3.85 3.41.54.23.96.37 1.29.47.54.17 1.03.15 1.42.09.43-.06 1.3-.53 1.48-1.05.18-.52.18-.97.13-1.05-.05-.08-.2-.13-.42-.24z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;