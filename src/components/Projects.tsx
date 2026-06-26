const projects = [
  {
    id: "risklens",
    badge: "MAR 2026",
    title: "RiskLens",
    subtitle: "AI Compliance & Risk Intelligence Platform",
    description:
      "Engineered a production-ready RAG-powered compliance and risk intelligence platform for batch enterprise document analysis, semantic search, risk scoring, and PDF report generation.",
    highlights: [
      "Processed 20+ enterprise documents and roughly 200 pages with FAISS vector indexing and all-MiniLM-L6-v2 embeddings.",
      "Used Groq-hosted LLaMA-3.3-70B with a 9-endpoint FastAPI backend and React/Vite dashboard.",
      "Reduced compliance review time by 95%, from 45 minutes to under 2 minutes, with about 2s average query latency.",
    ],
    tags: [
      { label: "React", bg: "var(--coral-light)", color: "var(--coral)" },
      { label: "FastAPI", bg: "var(--teal-light)", color: "#006A65" },
      { label: "FAISS", bg: "var(--indigo-light)", color: "var(--indigo)" },
      { label: "Groq LLaMA", bg: "var(--yellow)", color: "var(--ink)" },
    ],
    githubUrl: "https://github.com/Viraj1525/AI-Compliance-Risk-Intelligence-Platform",
    linkLabel: "GitHub Repo",
    rotation: "1deg",
    accentColor: "var(--teal)",
  },
  {
    id: "hisaabwala",
    badge: "APR 2026",
    title: "HisaabWala",
    subtitle: "Voice-First AI Ledger for Indian SMBs",
    description:
      "Built a voice-to-ledger system that converts Hindi voice inputs into structured business transactions through a Telegram bot, LLM extraction, and Supabase-backed audit trails.",
    highlights: [
      "Used FastAPI, Groq Whisper, LLaMA-3.3-70B, and Telegram Bot API for voice-first transaction capture.",
      "Reached 90%+ transcription accuracy on Hindi inputs with multi-transaction NLP extraction and entity resolution.",
      "Implemented 2-minute auto-confirm, duplicate detection, asyncio scheduling, and zero cross-merchant data leakage.",
    ],
    tags: [
      { label: "FastAPI", bg: "var(--coral-light)", color: "var(--coral)" },
      { label: "Groq Whisper", bg: "var(--teal-light)", color: "#006A65" },
      { label: "Supabase", bg: "var(--indigo-light)", color: "var(--indigo)" },
      { label: "Railway", bg: "var(--yellow)", color: "var(--ink)" },
    ],
    githubUrl: "https://github.com/Viraj1525",
    linkLabel: "GitHub Profile",
    rotation: "-1.2deg",
    accentColor: "var(--coral)",
  },
  {
    id: "resilient-ai-devops",
    badge: "2026",
    title: "Resilient AI DevOps System",
    subtitle: "Multi-Agent Self-Healing Infrastructure Automation",
    description:
      "Built a resilient AI system concept for DevOps workflows where multiple agents coordinate detection, diagnosis, recovery planning, and self-healing automation for operational failures.",
    highlights: [
      "Designed around multi-agent coordination for monitoring, triage, remediation, and feedback loops.",
      "Focuses on self-healing DevOps patterns that reduce manual incident response and improve system resilience.",
      "Explores AI-assisted operational recovery across failure detection, root-cause reasoning, and automated repair paths.",
    ],
    tags: [
      { label: "Multi-Agent AI", bg: "var(--coral-light)", color: "var(--coral)" },
      { label: "DevOps", bg: "var(--teal-light)", color: "#006A65" },
      { label: "Self-Healing", bg: "var(--indigo-light)", color: "var(--indigo)" },
      { label: "Automation", bg: "var(--yellow)", color: "var(--ink)" },
    ],
    githubUrl: "https://github.com/Viraj1525/Resilient-AI-Multi-Agent-Self-Healing-DevOps-System",
    linkLabel: "GitHub Repo",
    rotation: "1.2deg",
    accentColor: "var(--yellow-dark)",
  },
  {
    id: "anpr",
    badge: "MAR 2026",
    title: "Number Plate Recognition (ANPR)",
    subtitle: "YOLOv8 + OCR Vehicle Plate Pipeline",
    description:
      "Built an automatic number plate recognition system using computer vision and OCR with post-processing logic to improve extraction quality and output stability.",
    highlights: [
      "Used YOLOv8 for plate detection and EasyOCR for optical text extraction.",
      "Applied OpenCV preprocessing, adaptive thresholding, and regex-based validation.",
      "Added character correction and temporal smoothing for cleaner structured outputs.",
    ],
    tags: [
      { label: "YOLOv8", bg: "var(--coral-light)", color: "var(--coral)" },
      { label: "EasyOCR", bg: "var(--teal-light)", color: "#006A65" },
      { label: "OpenCV", bg: "var(--indigo-light)", color: "var(--indigo)" },
      { label: "Computer Vision", bg: "var(--yellow)", color: "var(--ink)" },
    ],
    githubUrl: "https://github.com/Viraj1525/Number-Plate-Recognition",
    linkLabel: "GitHub Repo",
    rotation: "0.8deg",
    accentColor: "var(--indigo)",
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ background: "var(--bg)", position: "relative", overflow: "hidden" }}>
      <span className="doodle-star animate-float" style={{ top: "8%", left: "4%", fontSize: "1.6rem", position: "absolute", opacity: 0.5, animationDelay: "0.5s" }}>
        *
      </span>
      <div className="doodle-dot" style={{ top: "15%", right: "8%", width: 20, height: 20, background: "var(--yellow-dark)", position: "absolute", opacity: 0.4 }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="section-label">selected work</span>
          <h2 className="doodle-underline" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", display: "inline-block" }}>
            Project Portfolio
          </h2>
          <p style={{ marginTop: "1rem", maxWidth: 560, margin: "1rem auto 0" }}>
            Applied AI builds focused on compliance intelligence, voice-first business workflows, resilient DevOps, and computer vision.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          {projects.map((p) => (
            <div key={p.id} id={`project-${p.id}`} className="project-card animate-pop-in" style={{ transform: `rotate(${p.rotation})` }}>
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
                  <h3 style={{ fontFamily: "var(--font-hand)", fontSize: "1.45rem", fontWeight: 700, color: "var(--ink)", lineHeight: 1.2 }}>{p.title}</h3>
                  <p style={{ fontFamily: "var(--font-hand)", fontSize: "0.95rem", color: "var(--ink-muted)", margin: 0 }}>{p.subtitle}</p>
                </div>
              </div>

              <p style={{ fontSize: "0.95rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>{p.description}</p>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {p.highlights.map((h) => (
                  <li key={h} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.9rem", color: "var(--ink-muted)" }}>
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

              <div style={{ marginBottom: "1rem" }}>
                <a href={p.githubUrl} target="_blank" rel="noreferrer" className="btn-secondary" style={{ display: "inline-block" }}>
                  {p.linkLabel}
                </a>
              </div>

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

