export default function About() {
  const focuses = [
    {
      icon: "RAG",
      title: "AI Automation",
      desc: "Building workflow automation around LLMs, RAG, document processing, validation, and approval loops.",
      bg: "var(--coral-light)",
      border: "var(--coral)",
    },
    {
      icon: "API",
      title: "Full-Stack Systems",
      desc: "Designing FastAPI, React, TypeScript, PostgreSQL, REST APIs, and Docker-based product workflows.",
      bg: "var(--teal-light)",
      border: "var(--teal)",
    },
    {
      icon: "LEAD",
      title: "Applied Leadership",
      desc: "Experienced in STEM mentoring, TEDx operations, and cross-functional execution with measurable outcomes.",
      bg: "var(--indigo-light)",
      border: "var(--indigo)",
    },
  ];

  return (
    <section id="about" style={{ background: "var(--surface)", paddingTop: "5rem", paddingBottom: "6rem" }}>
      <div className="container">
        <div className="about-grid" style={{ display: "grid", gap: "4rem", alignItems: "center" }}>
          <div>
            <span className="section-label animate-fade-up">profile</span>
            <h2 className="doodle-underline-teal animate-fade-up delay-100" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", marginBottom: "1.5rem" }}>
              AI Automation Engineer, Builder by Habit
            </h2>
            <p className="animate-fade-up delay-200" style={{ fontSize: "1.05rem", maxWidth: 530, marginBottom: "1rem" }}>
              I&apos;m a Computer Science undergrad at Institute of Engineering and Technology, Lucknow, currently building
              AI-powered business automation at NOVO Technologies.
            </p>
            <p className="animate-fade-up delay-300" style={{ fontSize: "1.05rem", maxWidth: 530, marginBottom: "1.5rem" }}>
              My work sits where document intelligence, full-stack engineering, and real operational workflows meet:
              PDFs, Excel, approvals, audit trails, RBAC, and fast interfaces people can actually use.
            </p>

            <div className="animate-fade-up delay-400" style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "2rem" }}>
              {["Lucknow, Uttar Pradesh", "CGPA 8.0/10", "AI Automation + Full Stack"].map((pill) => (
                <span
                  key={pill}
                  style={{
                    background: "var(--yellow)",
                    border: "1.5px solid var(--yellow-dark)",
                    borderRadius: 99,
                    padding: "0.3rem 0.8rem",
                    fontSize: "0.82rem",
                    color: "var(--ink)",
                    fontWeight: 600,
                  }}
                >
                  {pill}
                </span>
              ))}
            </div>

            <div
              className="animate-fade-up delay-500"
              style={{
                display: "inline-flex",
                alignItems: "flex-start",
                gap: "0.75rem",
                padding: "1rem 1.25rem",
                background: "var(--yellow)",
                border: "2px solid var(--yellow-dark)",
                borderRadius: "4px 16px 4px 16px",
                boxShadow: "3px 3px 0 var(--yellow-dark)",
                maxWidth: 420,
              }}
            >
              <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--ink)" }}>NOTE</span>
              <p style={{ fontFamily: "var(--font-hand)", fontSize: "1.05rem", fontWeight: 600, color: "var(--ink)", margin: 0 }}>
                I care about systems that reduce real manual work, not just look shiny in demo mode.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {focuses.map((f, i) => (
              <div
                key={f.title}
                className={`focus-card animate-pop-in delay-${(i + 1) * 200 as 200 | 400 | 600}`}
                style={{
                  background: f.bg,
                  borderColor: f.border,
                  boxShadow: `4px 4px 0 ${f.border}`,
                  display: "flex",
                  alignItems: "center",
                  gap: "1.25rem",
                  textAlign: "left",
                  padding: "1.25rem 1.5rem",
                }}
              >
                <div className="focus-icon" style={{ borderColor: f.border, background: "rgba(255,255,255,0.6)", flexShrink: 0 }}>
                  {f.icon}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-hand)",
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "var(--ink)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {f.title}
                  </h3>
                  <p style={{ fontSize: "0.9rem", lineHeight: 1.5, margin: 0 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
