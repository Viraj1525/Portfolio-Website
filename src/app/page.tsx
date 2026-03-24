import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <div style={{ lineHeight: 0, background: "var(--surface)" }}>
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 60 }}>
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="var(--bg)" />
          </svg>
        </div>
        <Experience />
        <div style={{ lineHeight: 0, background: "var(--bg)" }}>
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 60 }}>
            <path d="M0,30 C360,0 1080,60 1440,30 L1440,0 L0,0 Z" fill="var(--surface)" />
          </svg>
        </div>
        <TechStack />
        <div style={{ lineHeight: 0, background: "var(--surface)" }}>
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 60 }}>
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="var(--bg)" />
          </svg>
        </div>
        <Projects />
        <div style={{ lineHeight: 0, background: "var(--bg)" }}>
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 60 }}>
            <path d="M0,30 C360,0 1080,60 1440,30 L1440,0 L0,0 Z" fill="var(--surface)" />
          </svg>
        </div>
        <Philosophy />
        <div style={{ lineHeight: 0, background: "var(--bg)" }}>
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 80 }}>
            <path d="M0,40 C480,80 960,0 1440,40 L1440,80 L0,80 Z" fill="var(--ink)" />
          </svg>
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
