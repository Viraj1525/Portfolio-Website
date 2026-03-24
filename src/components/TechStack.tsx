const groups = [
  {
    label: "Languages",
    color: "coral" as const,
    skills: ["Python", "C++", "JavaScript", "TypeScript"],
  },
  {
    label: "Frontend",
    color: "teal" as const,
    skills: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Backend",
    color: "indigo" as const,
    skills: ["FastAPI", "Node.js", "REST APIs"],
  },
  {
    label: "AI / ML",
    color: "coral" as const,
    skills: ["LangChain", "RAG Pipelines", "Vector DBs", "LLM APIs"],
  },
  {
    label: "Infrastructure",
    color: "teal" as const,
    skills: ["Docker", "Git", "Vercel", "GitHub Actions"],
  },
];

export default function TechStack() {
  return (
    <section
      id="stack"
      style={{ background: "var(--bg)", position: "relative", overflow: "hidden" }}
    >
      <span
        className="doodle-star animate-float"
        style={{ top: "10%", right: "5%", fontSize: "1.8rem", position: "absolute", opacity: 0.5 }}
      >
        *
      </span>
      <div
        className="doodle-circle"
        style={{ width: 200, height: 200, top: "60%", left: "-4%", position: "absolute" }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="section-label">tech stack</span>
          <h2
            className="doodle-underline-yellow"
            style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", display: "inline-block" }}
          >
            Tools of the Trade
          </h2>
          <p style={{ marginTop: "1rem", maxWidth: 480, margin: "1rem auto 0" }}>
            Languages, frameworks, and infrastructure I rely on to build real systems.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {groups.map((g) => (
            <div key={g.label} style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem", flexWrap: "wrap" }}>
              <div
                style={{
                  minWidth: 120,
                  paddingTop: "0.4rem",
                  fontFamily: "var(--font-hand)",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: "var(--ink-muted)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                {g.label}
                <svg
                  width="24"
                  height="10"
                  viewBox="0 0 24 10"
                  style={{ display: "block", marginTop: 4, opacity: 0.5 }}
                >
                  <path d="M0,5 L20,5 M16,2 L20,5 L16,8" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                </svg>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem" }}>
                {g.skills.map((s) => (
                  <span key={s} className={`skill-chip ${g.color}`}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <svg width="60" height="40" viewBox="0 0 60 40" style={{ opacity: 0.4 }}>
            <path d="M30,2 C35,15 20,25 30,38 M25,34 L30,38 L35,34" stroke="var(--teal)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}
