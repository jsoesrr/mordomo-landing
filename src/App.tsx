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
    <div className="font-inter bg-background">
      <Header />
      <main>
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