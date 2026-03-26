import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import DevToolsNotice from "./components/DevToolsNotice";
import ScrollToSection from "./components/ScrollToSection";
import { KNOWN_PATHS } from "./routes";

function AppLayout() {
  const { pathname } = useLocation();

  if (!KNOWN_PATHS.has(pathname)) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen min-w-0 overflow-x-clip bg-slate-50 font-sans text-slate-800 antialiased">
      <ScrollToSection />
      <DevToolsNotice />
      <Navbar />
      <main className="min-w-0">
        <Hero />
        <Reveal delay={0}>
          <About />
        </Reveal>
        <Reveal delay={40}>
          <Experience />
        </Reveal>
        <Reveal delay={80}>
          <Projects />
        </Reveal>
        <Reveal delay={120}>
          <Certifications />
        </Reveal>
        <Reveal delay={160}>
          <Skills />
        </Reveal>
        <Reveal delay={200}>
          <Contact />
        </Reveal>
      </main>
      <Reveal delay={0}>
        <Footer />
      </Reveal>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/*" element={<AppLayout />} />
    </Routes>
  );
}
