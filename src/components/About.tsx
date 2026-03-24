export default function About() {
  const focuses = [
    {
      icon: "AI",
      title: "AI Engineering",
      desc: "RAG pipelines, LLM integration, and intelligent workflows built with production intent.",
      bg: "var(--coral-light)",
      border: "var(--coral)",
    },
    {
      icon: "API",
      title: "Backend Systems",
      desc: "API design, data flow, and scalable architectures that can move from prototype to production.",
      bg: "var(--teal-light)",
      border: "var(--teal)",
    },
    {
      icon: "FS",
      title: "Full-Stack Dev",
      desc: "Delivering complete, usable products from database to polished UI.",
      bg: "var(--indigo-light)",
      border: "var(--indigo)",
    },
  ];

  return (
    <section
      id="about"
      style={{ background: "var(--surface)", paddingTop: "5rem", paddingBottom: "6rem" }}
    >
      <div className="container">
        <div className="about-grid" style={{ display: "grid", gap: "4rem", alignItems: "center" }}>
          <div>
            <span className="section-label animate-fade-up">profile</span>
            <h2
              className="doodle-underline-teal animate-fade-up delay-100"
              style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", marginBottom: "1.5rem" }}
            >
              The Architect&apos;s Log
            </h2>
            <p
              className="animate-fade-up delay-200"
              style={{ fontSize: "1.05rem", maxWidth: 440, marginBottom: "1.25rem" }}
            >
              CS student focused on AI systems, backend architecture, and scalable
              applications that solve actual human problems.
            </p>
            <p
              className="animate-fade-up delay-300"
              style={{ fontSize: "1.05rem", maxWidth: 440, marginBottom: "2rem" }}
            >
              My work lives at the intersection of mathematical rigor and creative
              engineering where systems have to be{" "}
              <span
                style={{
                  fontFamily: "var(--font-hand)",
                  fontWeight: 700,
                  color: "var(--teal)",
                  fontSize: "1.1em",
                }}
              >
                both smart and useful.
              </span>
            </p>

            <div
              className="animate-fade-up delay-400"
              style={{
                display: "inline-flex",
                alignItems: "flex-start",
                gap: "0.75rem",
                padding: "1rem 1.25rem",
                background: "var(--yellow)",
                border: "2px solid var(--yellow-dark)",
                borderRadius: "4px 16px 4px 16px",
                boxShadow: "3px 3px 0 var(--yellow-dark)",
                maxWidth: 360,
              }}
            >
              <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--ink)" }}>NOTE</span>
              <p
                style={{
                  fontFamily: "var(--font-hand)",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: "var(--ink)",
                  margin: 0,
                }}
              >
                Good projects demonstrate skill. Useful systems demonstrate judgment.
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
                <div
                  className="focus-icon"
                  style={{ borderColor: f.border, background: "rgba(255,255,255,0.6)", flexShrink: 0 }}
                >
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
