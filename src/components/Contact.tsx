const contacts = [
  {
    id: "contact-github",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    label: "GitHub",
    value: "github.com/Viraj1525",
    href: "https://github.com/Viraj1525",
    color: "var(--ink)",
    bg: "var(--surface-hi)",
  },
  {
    id: "contact-linkedin",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: "LinkedIn",
    value: "linkedin.com/in/viraj-agrawal-85bb76298",
    href: "https://www.linkedin.com/in/viraj-agrawal-85bb76298",
    color: "var(--indigo)",
    bg: "var(--indigo-light)",
  },
  {
    id: "contact-email",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "virajagrawal.1525@gmail.com",
    href: "mailto:virajagrawal.1525@gmail.com",
    color: "var(--coral)",
    bg: "var(--coral-light)",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: "var(--ink)",
        color: "var(--bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(250,250,247,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(250,250,247,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />

      <span
        style={{
          position: "absolute",
          top: "15%",
          right: "6%",
          fontFamily: "var(--font-hand)",
          fontSize: "2rem",
          color: "var(--yellow)",
          opacity: 0.5,
          userSelect: "none",
        }}
        className="animate-float"
      >
        *
      </span>
      <span
        style={{
          position: "absolute",
          bottom: "20%",
          left: "5%",
          fontFamily: "var(--font-hand)",
          fontSize: "1.4rem",
          color: "var(--coral)",
          opacity: 0.5,
          userSelect: "none",
        }}
        className="animate-float"
      >
        x
      </span>
      <div
        style={{
          position: "absolute",
          top: "40%",
          right: "15%",
          width: 80,
          height: 80,
          borderRadius: "50%",
          border: "2.5px dashed var(--teal)",
          opacity: 0.2,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span
            style={{
              fontFamily: "var(--font-hand)",
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "var(--teal)",
              display: "block",
              marginBottom: "0.5rem",
              letterSpacing: "0.04em",
            }}
          >
            contact
          </span>
          <h2
            style={{
              fontFamily: "var(--font-hand)",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              color: "var(--bg)",
              lineHeight: 1.15,
              display: "inline-block",
              position: "relative",
              marginBottom: "1rem",
            }}
          >
            Let&apos;s Build Something
            <svg
              style={{ position: "absolute", bottom: -10, left: 0, width: "100%" }}
              viewBox="0 0 300 10"
              preserveAspectRatio="none"
              height="10"
            >
              <path
                d="M0,5 C60,1 120,9 180,4 C240,0 275,8 300,5"
                stroke="var(--coral)"
                strokeWidth="3.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </h2>
          <p
            style={{
              color: "rgba(250,250,247,0.55)",
              maxWidth: 440,
              margin: "1.5rem auto 0",
              lineHeight: 1.7,
            }}
          >
            Currently open to internship opportunities and collaborations on
            backend-heavy AI projects.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.25rem",
            marginBottom: "3rem",
          }}
        >
          {contacts.map((c) => (
            <a
              key={c.id}
              id={c.id}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
                padding: "1.5rem",
                background: "rgba(250,250,247,0.06)",
                border: "2px solid rgba(250,250,247,0.12)",
                borderRadius: "var(--radius-sketch)",
                color: "var(--bg)",
                transition: "transform 0.2s ease, background 0.2s, border-color 0.2s",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  background: c.bg,
                  color: c.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {c.icon}
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-hand)",
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    color: "var(--bg)",
                    margin: 0,
                  }}
                >
                  {c.label}
                </p>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "rgba(250,250,247,0.5)",
                    margin: 0,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {c.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div
          style={{
            textAlign: "center",
            padding: "2rem",
            borderTop: "2px dashed rgba(250,250,247,0.12)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-hand)",
              fontSize: "1.1rem",
              color: "rgba(250,250,247,0.5)",
              marginBottom: "0.5rem",
            }}
          >
            Currently building toward -&gt;
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "0.75rem" }}>
            {[
              "AI systems for enterprise",
              "LLMs + structured data + workflows",
              "Decision intelligence tools",
            ].map((d) => (
              <span
                key={d}
                style={{
                  fontFamily: "var(--font-hand)",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  padding: "0.35rem 0.9rem",
                  border: "1.5px solid rgba(250,250,247,0.2)",
                  borderRadius: 99,
                  color: "var(--bg)",
                  opacity: 0.8,
                }}
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
