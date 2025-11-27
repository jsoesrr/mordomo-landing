import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Contato = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    subject: "Problema",
    message: "",
  });

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.post("https://affirmable-pasty-innocuous.ngrok-free.dev/contact", formData, {
      headers: {
        Accept: "application/json",
      },
    })
    .then(() => {
      alert("message enviada. Em breve enviaremos um email respondendo o seu contato!");
      setFormData({ name: "", email: "", phone_number: "", subject: "Problema", message: "" });
    })
    .catch((err) => {
      alert("Ocorreu um erro ao enviar a message. Por favor, tente novamente.");
      console.log(err)
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white px-6">
      <div className="w-full max-w-lg bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 shadow-lg">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/images/logolleno.png"
            alt="LLeno Logo"
            className="h-12"
          />
        </div>

        {/* Título */}
        <h1 className="text-3xl font-bold text-center mb-6">Fale Conosco</h1>
        <p className="text-center text-white/70 mb-8">
          Preencha o formulário abaixo e nossa equipe entrará em contato com você.
        </p>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            placeholder="Nome completo"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

           <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            name="phone_number"
            placeholder="Número do WhatsApp"
            value={formData.phone_number}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 appearance-none"

          >
            <option value="Problema">Problema</option>
            <option value="Sugestao">Sugestão</option>
            <option value="Outro">Outro</option>
          </select>

          <textarea
            name="message"
            placeholder="Escreva sua messagem..."
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition transform hover:scale-105"
          >
            Enviar
          </button>
        </form>

        {/* Botão voltar */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => navigate("/")}
            className="bg-gray-700 hover:bg-gray-800 text-white text-sm font-medium px-6 py-2 rounded-md transition"
          >
            ← Voltar para a página inicial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contato;