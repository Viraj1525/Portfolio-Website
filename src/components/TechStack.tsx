const groups = [
  {
    label: "Languages",
    color: "coral" as const,
    skills: ["Python", "C", "C++", "HTML", "CSS"],
  },
  {
    label: "AI / ML",
    color: "teal" as const,
    skills: ["Generative AI", "LLMs", "RAG", "LangChain", "Hugging Face", "PyTorch"],
  },
  {
    label: "Computer Vision",
    color: "indigo" as const,
    skills: ["YOLOv8", "OpenCV", "EasyOCR"],
  },
  {
    label: "Backend + Data",
    color: "coral" as const,
    skills: ["FastAPI", "REST APIs", "Pinecone", "Semantic Search", "NumPy", "Pandas"],
  },
  {
    label: "Tools",
    color: "teal" as const,
    skills: ["Streamlit", "Git", "GitHub", "Vector Embeddings"],
  },
];

export default function TechStack() {
  return (
    <section id="stack" style={{ background: "var(--surface)", position: "relative", overflow: "hidden" }}>
      <span className="doodle-star animate-float" style={{ top: "10%", right: "5%", fontSize: "1.8rem", position: "absolute", opacity: 0.5 }}>
        *
      </span>
      <div className="doodle-circle" style={{ width: 200, height: 200, top: "60%", left: "-4%", position: "absolute" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="section-label">technical skills</span>
          <h2 className="doodle-underline-yellow" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", display: "inline-block" }}>
            Core Toolkit
          </h2>
          <p style={{ marginTop: "1rem", maxWidth: 580, margin: "1rem auto 0" }}>
            Skills and frameworks currently used across AI apps, backend systems, and document intelligence pipelines.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2.3rem" }}>
          {groups.map((g) => (
            <div key={g.label} style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem", flexWrap: "wrap" }}>
              <div
                style={{
                  minWidth: 160,
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
                <svg width="24" height="10" viewBox="0 0 24 10" style={{ display: "block", marginTop: 4, opacity: 0.5 }}>
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
      </div>
    </section>
  );
}
