import { LanguageProvider } from "./context/LanguageContext";
import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Nexus from "./components/Nexus";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <LanguageProvider>
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <NavBar />
        <Hero />
        <About />
        <Features />
        <Story />
        <Nexus />
        <Contact />
        <ErrorBoundary>
          <Footer />
        </ErrorBoundary>
      </main>
    </LanguageProvider>
  );
}

export default App;