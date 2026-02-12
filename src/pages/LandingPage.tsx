import Footer from "../components/Footer";

import Hero from "../components/Hero";

import Guide from "../components/Guide";
import Terms from "../components/Terms";
import Main from "../components/Main";

const LandingPage = () => {
  return (
    <div
      className="bg-gradient-to-br min-h-screen text-white flex flex-col"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, #1E3A8A, #7C3AED, #16161a)",
      }}
    >
      <main className="flex-1 space-y-24 px-6 pt-24">
        <Hero />
        <Main />
        <Guide />
        <Terms />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;