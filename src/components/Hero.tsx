"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const onMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const rect = hero.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width - 0.5;
      const y = (clientY - rect.top) / rect.height - 0.5;
      const doodles = hero.querySelectorAll<HTMLElement>(".parallax-doodle");
      doodles.forEach((d) => {
        const speed = parseFloat(d.dataset.speed || "1");
        d.style.transform = `translate(${x * 20 * speed}px, ${y * 20 * speed}px)`;
      });
    };

    hero.addEventListener("mousemove", onMove);
    return () => hero.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "5rem",
        background: "var(--bg)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(45,53,97,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(45,53,97,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />

      <span className="doodle-star parallax-doodle animate-float" data-speed="1.4" style={{ top: "18%", left: "8%", fontSize: "2rem", animationDelay: "0s" }}>
        *
      </span>
      <span className="doodle-star parallax-doodle animate-float" data-speed="0.8" style={{ top: "30%", right: "10%", fontSize: "1.4rem", animationDelay: "1.2s" }}>
        +
      </span>
      <span className="doodle-x parallax-doodle animate-float" data-speed="1.2" style={{ top: "65%", left: "6%", animationDelay: "0.6s" }}>
        x
      </span>
      <span className="doodle-x parallax-doodle animate-float" data-speed="0.9" style={{ top: "20%", right: "20%", animationDelay: "2s" }}>
        x
      </span>
      <div className="doodle-dot parallax-doodle animate-float" data-speed="1.6" style={{ top: "55%", right: "8%", width: 18, height: 18, animationDelay: "0.3s" }} />
      <div className="doodle-dot parallax-doodle animate-float" data-speed="1.1" style={{ top: "78%", left: "15%", background: "var(--coral)", animationDelay: "1.8s" }} />
      <div className="doodle-circle parallax-doodle" data-speed="0.6" style={{ width: 120, height: 120, top: "10%", right: "6%", borderColor: "var(--coral)", opacity: 0.2 }} />
      <div className="doodle-circle parallax-doodle" data-speed="1.3" style={{ width: 70, height: 70, bottom: "20%", left: "10%", opacity: 0.25 }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <div style={{ maxWidth: 800 }}>
            <span className="hand animate-fade-up" style={{ fontSize: "1.3rem", color: "var(--teal)", fontWeight: 600, display: "block", marginBottom: "1rem" }}>
              Hello, I&apos;m
            </span>

            <h1
              className="doodle-underline animate-fade-up delay-100"
              style={{
                fontFamily: "var(--font-hand)",
                fontSize: "clamp(3.2rem, 9vw, 6.8rem)",
                fontWeight: 700,
                lineHeight: 1.05,
                marginBottom: "1.2rem",
                color: "var(--ink)",
              }}
            >
              Viraj Agrawal
            </h1>

            <p className="animate-fade-up delay-200" style={{ color: "var(--ink)", marginBottom: "0.6rem", fontWeight: 600 }}>
              B.Tech CSE | IET Lucknow
            </p>

            <p
              className="animate-fade-up delay-200"
              style={{
                fontSize: "clamp(1.05rem, 2.1vw, 1.25rem)",
                maxWidth: 620,
                lineHeight: 1.7,
                color: "var(--ink-muted)",
                marginBottom: "2rem",
                fontWeight: 400,
              }}
            >
              Building practical AI systems with
              <span style={{ fontFamily: "var(--font-hand)", color: "var(--coral)", fontWeight: 700, fontSize: "1.1em" }}>
                {" "}
                RAG, LLM pipelines, and full-stack engineering.
              </span>
            </p>

            <div className="animate-fade-up delay-300" style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              <a href="#projects" className="btn-primary" id="hero-see-work">
                See Projects -&gt;
              </a>
              <a href="#experience" className="btn-secondary" id="hero-experience">
                View Experience
              </a>
            </div>

            <div className="animate-fade-up delay-500" style={{ display: "flex", gap: "0.65rem", marginTop: "2rem", flexWrap: "wrap" }}>
              {[
                { label: "Generative AI", color: "var(--coral-light)", border: "var(--coral)" },
                { label: "FastAPI + REST", color: "var(--teal-light)", border: "var(--teal)" },
                { label: "LangChain + RAG", color: "var(--indigo-light)", border: "var(--indigo)" },
              ].map((b) => (
                <div
                  key={b.label}
                  style={{
                    padding: "0.4rem 1rem",
                    background: b.color,
                    border: `2px solid ${b.border}`,
                    borderRadius: "var(--radius-sketch)",
                    fontFamily: "var(--font-hand)",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "var(--ink)",
                  }}
                >
                  {b.label}
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-up delay-200" style={{ justifySelf: "center", width: "100%", maxWidth: 360 }}>
            <div
              style={{
                border: "3px solid var(--ink)",
                borderRadius: "var(--radius-sketch)",
                background: "var(--surface)",
                padding: "0.65rem",
                boxShadow: "8px 10px 0 rgba(45,53,97,0.2)",
                transform: "rotate(1.4deg)",
              }}
            >
              <Image
                src="/viraj-profile.jpeg"
                alt="Portrait of Viraj Agrawal"
                width={1280}
                height={1280}
                priority
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "calc(var(--radius-sketch) - 4px)",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 60 }}>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="var(--surface)" />
        </svg>
      </div>
    </section>
  );
}



