import { useRef } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Hook } from "./components/Hook";
import { Services } from "./components/Services";
import { TechStack } from "./components/TechStack";
import { About } from "./components/About";
import { CaseStudies } from "./components/CaseStudies";
import { Pricing } from "./components/Pricing";
import { Process } from "./components/Process";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import "./App.css";

function AppContent() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const stackRef = useRef(null);
  const workRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (sectionId) => {
    let ref;
    switch (sectionId) {
      case "hero":
        ref = heroRef;
        break;
      case "services":
        ref = servicesRef;
        break;
      case "stack":
        ref = stackRef;
        break;
      case "work":
        ref = workRef;
        break;
      case "about":
        ref = aboutRef;
        break;
      case "contact":
        ref = contactRef;
        break;
      default:
        return;
    }

    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header scrollTo={scrollTo} />
      <div ref={heroRef}>
        <Hero scrollTo={scrollTo} />
      </div>
      <Hook />
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={stackRef}>
        <TechStack />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={workRef}>
        <CaseStudies />
      </div>
      <Pricing />
      <Process />
      <FAQ />
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer scrollTo={scrollTo} />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
