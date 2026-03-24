"use client";
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

      <span
        className="doodle-star parallax-doodle animate-float"
        data-speed="1.4"
        style={{ top: "18%", left: "8%", fontSize: "2rem", animationDelay: "0s" }}
      >
        *
      </span>
      <span
        className="doodle-star parallax-doodle animate-float"
        data-speed="0.8"
        style={{ top: "30%", right: "10%", fontSize: "1.4rem", animationDelay: "1.2s" }}
      >
        +
      </span>
      <span
        className="doodle-x parallax-doodle animate-float"
        data-speed="1.2"
        style={{ top: "65%", left: "6%", animationDelay: "0.6s" }}
      >
        x
      </span>
      <span
        className="doodle-x parallax-doodle animate-float"
        data-speed="0.9"
        style={{ top: "20%", right: "20%", animationDelay: "2s" }}
      >
        x
      </span>
      <div
        className="doodle-dot parallax-doodle animate-float"
        data-speed="1.6"
        style={{ top: "55%", right: "8%", width: 18, height: 18, animationDelay: "0.3s" }}
      />
      <div
        className="doodle-dot parallax-doodle animate-float"
        data-speed="1.1"
        style={{ top: "78%", left: "15%", background: "var(--coral)", animationDelay: "1.8s" }}
      />
      <div
        className="doodle-circle parallax-doodle"
        data-speed="0.6"
        style={{ width: 120, height: 120, top: "10%", right: "6%", borderColor: "var(--coral)", opacity: 0.2 }}
      />
      <div
        className="doodle-circle parallax-doodle"
        data-speed="1.3"
        style={{ width: 70, height: 70, bottom: "20%", left: "10%", opacity: 0.25 }}
      />

      <svg
        style={{ position: "absolute", bottom: "12%", right: "5%", opacity: 0.15, pointerEvents: "none" }}
        width="200"
        height="40"
        viewBox="0 0 200 40"
      >
        <path d="M0,20 C40,5 80,35 120,20 C160,5 180,30 200,20" stroke="var(--teal)" strokeWidth="6" fill="none" strokeLinecap="round" />
      </svg>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 800 }}>
          <span
            className="hand animate-fade-up"
            style={{
              fontSize: "1.3rem",
              color: "var(--teal)",
              fontWeight: 600,
              display: "block",
              marginBottom: "1rem",
            }}
          >
            Hello, I&apos;m
          </span>

          <h1
            className="doodle-underline animate-fade-up delay-100"
            style={{
              fontFamily: "var(--font-hand)",
              fontSize: "clamp(3.5rem, 9vw, 7rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              marginBottom: "1.75rem",
              color: "var(--ink)",
            }}
          >
            Viraj Agrawal
          </h1>

          <p
            className="animate-fade-up delay-200"
            style={{
              fontSize: "clamp(1.1rem, 2.2vw, 1.35rem)",
              maxWidth: 560,
              lineHeight: 1.7,
              color: "var(--ink-muted)",
              marginBottom: "2.5rem",
              fontWeight: 400,
            }}
          >
            Designing AI systems that move beyond prototypes
            <span
              style={{
                fontFamily: "var(--font-hand)",
                color: "var(--coral)",
                fontWeight: 700,
                fontSize: "1.1em",
              }}
            >
              {" "}
              toward real-world utility.
            </span>
          </p>

          <div
            className="animate-fade-up delay-300"
            style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}
          >
            <svg
              width="48"
              height="32"
              viewBox="0 0 48 32"
              style={{ position: "relative", top: 4, opacity: 0.7 }}
            >
              <path
                d="M2,26 C10,10 28,8 40,14 L36,10 M40,14 L36,18"
                stroke="var(--ink)"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <a href="#projects" className="btn-primary" id="hero-see-work">
              See My Work -&gt;
            </a>
            <a href="#contact" className="btn-secondary" id="hero-contact">
              Get In Touch
            </a>
          </div>

          <div
            className="animate-fade-up delay-500"
            style={{ display: "flex", gap: "1rem", marginTop: "3.5rem", flexWrap: "wrap" }}
          >
            {[
              { label: "AI Engineering", color: "var(--coral-light)", border: "var(--coral)" },
              { label: "Backend Systems", color: "var(--teal-light)", border: "var(--teal)" },
              { label: "Full-Stack Dev", color: "var(--indigo-light)", border: "var(--indigo)" },
            ].map((b) => (
              <div
                key={b.label}
                style={{
                  padding: "0.45rem 1.1rem",
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
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 60 }}>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="var(--surface)" />
        </svg>
      </div>
    </section>
  );
}
