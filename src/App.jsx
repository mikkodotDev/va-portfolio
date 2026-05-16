import { useRef, useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Hook } from "./components/Hook";
import { Services } from "./components/Services";
import { CoreSkills } from "./components/CoreSkills";
import { TechStack } from "./components/TechStack";
import { About } from "./components/About";
import { CaseStudies } from "./components/CaseStudies";
import { Process } from "./components/Process";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ProjectBrief } from "./components/ProjectBrief";
import { ProjectShowcaseDetail } from "./components/ProjectShowcaseDetail";
import { ThemeProvider } from "./context/ThemeContext";
import "./App.css";

function AppContent() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const stackRef = useRef(null);
  const workRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const projectBriefRef = useRef(null);
  const [isProjectBriefOpen, setIsProjectBriefOpen] = useState(false);
  const [portfolioDetail, setPortfolioDetail] = useState(null);

  const scrollTo = (sectionId) => {
    if (sectionId === "project brief") {
      setIsProjectBriefOpen(true);
      return;
    }

    setIsProjectBriefOpen(false);
    setPortfolioDetail(null);

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

  const handleProjectClick = (projectId) => {
    setPortfolioDetail(projectId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackFromDetail = () => {
    setPortfolioDetail(null);
    if (workRef.current) {
      workRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {isProjectBriefOpen ? (
        <>
          <Header scrollTo={scrollTo} />
          <ProjectBrief />
          <Footer
            scrollTo={() => setIsProjectBriefOpen(false)}
            hideLinks={true}
          />
        </>
      ) : portfolioDetail ? (
        <>
          <Header scrollTo={scrollTo} />
          <ProjectShowcaseDetail
            projectId={portfolioDetail}
            onBack={handleBackFromDetail}
          />
          <Footer scrollTo={scrollTo} hideLinks={true} />
        </>
      ) : (
        <>
          <Header scrollTo={scrollTo} />
          <div ref={heroRef}>
            <Hero scrollTo={scrollTo} />
          </div>
          <Hook />
          <div ref={servicesRef}>
            <Services />
          </div>
          <CoreSkills />
          <div ref={stackRef}>
            <TechStack />
          </div>
          <div ref={aboutRef}>
            <About />
          </div>
          <div ref={workRef}>
            <CaseStudies onProjectClick={handleProjectClick} />
          </div>
          <Process />
          <FAQ />
          <div ref={contactRef}>
            <Contact />
          </div>
          <Footer scrollTo={scrollTo} />
        </>
      )}
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
