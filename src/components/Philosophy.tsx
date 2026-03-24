const principles = [
  {
    quote: "Start with problem clarity, not tools.",
    note: "Define the friction before reaching for the framework.",
    rotation: "-2deg",
    bg: "var(--yellow)",
    border: "var(--yellow-dark)",
    shadow: "var(--yellow-dark)",
    delay: "0s",
  },
  {
    quote: "Prefer simple architectures that scale over complex ones that do not.",
    note: "Complexity is a cost. Make sure you are buying something worthwhile.",
    rotation: "1.5deg",
    bg: "#C8F6F3",
    border: "var(--teal)",
    shadow: "var(--teal)",
    delay: "0.15s",
  },
  {
    quote: "Treat AI as a component in a system, not the system itself.",
    note: "LLMs are powerful tools, not magic. Design around them, not for them.",
    rotation: "-1deg",
    bg: "var(--coral-light)",
    border: "var(--coral)",
    shadow: "var(--coral)",
    delay: "0.3s",
  },
  {
    quote: "Build with production intent, even in early stages.",
    note: "Prototypes that never scale teach you only how to build prototypes.",
    rotation: "2deg",
    bg: "var(--indigo-light)",
    border: "var(--indigo)",
    shadow: "var(--indigo)",
    delay: "0.45s",
  },
];

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      style={{ background: "var(--bg)", position: "relative", overflow: "hidden" }}
    >
      <svg
        style={{ position: "absolute", top: "10%", right: "3%", opacity: 0.08, pointerEvents: "none" }}
        width="300"
        height="300"
        viewBox="0 0 300 300"
      >
        <circle cx="150" cy="150" r="140" stroke="var(--indigo)" strokeWidth="3" fill="none" strokeDasharray="12 10" />
      </svg>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="section-label">engineering approach</span>
          <h2
            className="doodle-underline-teal"
            style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", display: "inline-block" }}
          >
            The Sketchbook Rules
          </h2>
          <p style={{ marginTop: "1rem", maxWidth: 500, margin: "1rem auto 0" }}>
            A few principles I keep pinned above my desk.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.75rem",
            alignItems: "start",
          }}
        >
          {principles.map((p, i) => (
            <div
              key={i}
              className="animate-pop-in philosophy-card"
              style={{
                background: p.bg,
                border: `2px solid ${p.border}`,
                borderRadius: "4px 20px 4px 20px",
                boxShadow: `4px 4px 0 ${p.shadow}`,
                padding: "1.75rem",
                transform: `rotate(${p.rotation})`,
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
                cursor: "default",
                animationDelay: p.delay,
                ["--card-shadow" as string]: p.shadow,
              }}
            >
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background: p.border,
                  marginBottom: "1rem",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                }}
              />
              <p
                style={{
                  fontFamily: "var(--font-hand)",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "var(--ink)",
                  lineHeight: 1.45,
                  marginBottom: "0.75rem",
                }}
              >
                &ldquo;{p.quote}&rdquo;
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.85rem",
                  color: "var(--ink-muted)",
                  lineHeight: 1.5,
                  margin: 0,
                  borderTop: `1.5px dashed ${p.border}`,
                  paddingTop: "0.65rem",
                  opacity: 0.85,
                }}
              >
                {p.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
