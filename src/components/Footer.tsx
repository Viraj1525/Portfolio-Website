export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--ink)",
        borderTop: "2px solid rgba(250,250,247,0.08)",
        padding: "2rem 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-hand)",
            fontSize: "1rem",
            color: "rgba(250,250,247,0.35)",
          }}
        >
          Copyright {new Date().getFullYear()} Viraj Agrawal | Hand-coded with Ink and Logic
        </p>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {[
            { label: "GitHub", href: "https://github.com/Viraj1525" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/viraj-agrawal-85bb76298" },
            { label: "Email", href: "mailto:virajagrawal.1525@gmail.com" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              style={{
                fontFamily: "var(--font-hand)",
                fontSize: "0.95rem",
                fontWeight: 600,
                color: "rgba(250,250,247,0.4)",
                transition: "color 0.2s",
                textDecoration: "none",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
