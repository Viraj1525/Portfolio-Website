const projects = [
  {
    id: "medbot",
    badge: "MED",
    title: "MedBot",
    subtitle: "AI-Powered Medical Assistant",
    description:
      "Designed a conversational interface for accessible healthcare guidance. Integrated AI responses with a clean, responsive frontend with emphasis on usability in sensitive domains.",
    highlights: [
      "Conversational UI tailored for healthcare contexts",
      "AI responses with safe, responsible guardrails",
      "Clean, mobile-first responsive design",
    ],
    tags: [
      { label: "LangChain", bg: "var(--coral-light)", color: "var(--coral)" },
      { label: "FastAPI", bg: "var(--teal-light)", color: "#006A65" },
      { label: "React", bg: "var(--indigo-light)", color: "var(--indigo)" },
      { label: "RAG", bg: "var(--yellow)", color: "var(--ink)" },
    ],
    rotation: "-1.2deg",
    accentColor: "var(--coral)",
  },
  {
    id: "compliance-ai",
    badge: "RISK",
    title: "AI Compliance & Risk Intelligence",
    subtitle: "Enterprise Document Analysis Platform",
    description:
      "Built a RAG-based architecture for deep document understanding. Automated detection of potential policy and legal issues structured for enterprise-scale workflows.",
    highlights: [
      "RAG pipeline for intelligent document retrieval",
      "Automated compliance and risk flag detection",
      "Designed for enterprise-scale data volumes",
    ],
    tags: [
      { label: "RAG Pipeline", bg: "var(--coral-light)", color: "var(--coral)" },
      { label: "Vector DB", bg: "var(--teal-light)", color: "#006A65" },
      { label: "Python", bg: "var(--indigo-light)", color: "var(--indigo)" },
      { label: "LLM APIs", bg: "var(--yellow)", color: "var(--ink)" },
    ],
    rotation: "1deg",
    accentColor: "var(--teal)",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ background: "var(--surface)", position: "relative", overflow: "hidden" }}
    >
      <span
        className="doodle-star animate-float"
        style={{ top: "8%", left: "4%", fontSize: "1.6rem", position: "absolute", opacity: 0.5, animationDelay: "0.5s" }}
      >
        *
      </span>
      <div
        className="doodle-dot"
        style={{ top: "15%", right: "8%", width: 20, height: 20, background: "var(--yellow-dark)", position: "absolute", opacity: 0.4 }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="section-label">selected work</span>
          <h2
            className="doodle-underline"
            style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", display: "inline-block" }}
          >
            Blueprints
          </h2>
          <p style={{ marginTop: "1rem", maxWidth: 480, margin: "1rem auto 0" }}>
            Selected architectural explorations where AI meets real-world constraints.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {projects.map((p) => (
            <div
              key={p.id}
              id={`project-${p.id}`}
              className="project-card animate-pop-in"
              style={{ transform: `rotate(${p.rotation})` }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 5,
                  background: p.accentColor,
                  borderRadius: "var(--radius-sketch) var(--radius-sketch) 0 0",
                  opacity: 0.8,
                }}
              />

              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem", marginTop: "0.5rem" }}>
                <span
                  style={{
                    fontSize: "0.8rem",
                    letterSpacing: "0.08em",
                    border: `2px solid ${p.accentColor}`,
                    borderRadius: 999,
                    padding: "0.25rem 0.7rem",
                    fontWeight: 700,
                    color: "var(--ink)",
                  }}
                >
                  {p.badge}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-hand)",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "var(--ink)",
                      lineHeight: 1.2,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-hand)",
                      fontSize: "0.95rem",
                      color: "var(--ink-muted)",
                      margin: 0,
                    }}
                  >
                    {p.subtitle}
                  </p>
                </div>
              </div>

              <p style={{ fontSize: "0.95rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>
                {p.description}
              </p>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                {p.highlights.map((h) => (
                  <li
                    key={h}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.6rem",
                      fontSize: "0.9rem",
                      color: "var(--ink-muted)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-hand)",
                        color: p.accentColor,
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        lineHeight: 1.4,
                        flexShrink: 0,
                      }}
                    >
                      -&gt;
                    </span>
                    {h}
                  </li>
                ))}
              </ul>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {p.tags.map((t) => (
                  <span
                    key={t.label}
                    className="tag"
                    style={{
                      background: t.bg,
                      color: t.color,
                      border: `1.5px solid ${t.color}`,
                      fontFamily: "var(--font-hand)",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      padding: "0.2rem 0.7rem",
                      borderRadius: 99,
                    }}
                  >
                    {t.label}
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
