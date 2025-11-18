import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Terms from "./components/Terms";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Guide from "./components/Guide";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E3A8A] via-[#7C3AED] to-[#F97316] text-white">
      <Header />
      <main className="space-y-24 px-6 pt-24">
        <Hero />
        <About />
        <Guide />
        <Terms />
        <ScrollToTop />
      </main>
      <Footer />
    </div>
  );
}

export default App;