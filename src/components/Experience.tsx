const experiences = [
  {
    id: "novo",
    org: "NOVO Technologies",
    role: "AI Automation Engineer",
    duration: "Jun 2026 - Present",
    location: "Noida, Uttar Pradesh",
    accent: "var(--coral)",
    bg: "var(--coral-light)",
    points: [
      "Architected and developed a full-stack BOQ Automation Platform using Python, FastAPI, React, TypeScript, PostgreSQL, Docker, and REST APIs.",
      "Reduced BOQ generation time from 2-3 hours to under 15 minutes while eliminating 90%+ manual effort through workflow automation.",
      "Built PDF/Excel processing, data extraction, validation, approval workflows, RBAC, audit logging, and transaction-safe database operations.",
    ],
  },
  {
    id: "co-grad",
    org: "Co-Grad",
    role: "AI / STEM Trainer",
    duration: "Jan 2026 - Feb 2026",
    location: "Pratapgarh, Uttar Pradesh",
    accent: "var(--teal)",
    bg: "var(--teal-light)",
    points: [
      "Mentored 400+ students in Arduino, IoT, Robotics, and 3D Printing through hands-on workshops.",
      "Guided 15+ working projects with 90%+ engagement and 70%+ successful completion.",
      "Led 15+ innovation projects and organized 10+ technical workshops with 100+ student participation.",
    ],
  },
  {
    id: "tedx",
    org: "TEDx IET Lucknow",
    role: "Operations Head",
    duration: "Oct 2025 - Jun 2026",
    location: "Lucknow, Uttar Pradesh",
    accent: "var(--indigo)",
    bg: "var(--indigo-light)",
    points: [
      "Managed end-to-end conference operations for TEDx events with 30+ team members.",
      "Coordinated onboarding for 10+ speakers and event flow for 300+ attendees.",
      "Delivered 100% on-time execution, 95%+ audience satisfaction, and zero critical operational issues.",
    ],
  },
];

const certifications = [
  "India AI Impact Buildathon 2026 (HCL & GUVI)",
  "Deloitte Australia Technology Job Simulation",
  "Tata GenAI Powered Data Analytics Job Simulation (Forage)",
  "Adobe India Hackathon",
];

export default function Experience() {
  return (
    <section id="experience" style={{ background: "var(--bg)", position: "relative", overflow: "hidden" }}>
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="section-label">experience</span>
          <h2 className="doodle-underline-teal" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", display: "inline-block" }}>
            Automation + Execution
          </h2>
          <p style={{ marginTop: "1rem", maxWidth: 600, margin: "1rem auto 0" }}>
            Roles where I built AI systems, taught applied engineering, and led measurable event operations.
          </p>
        </div>

        <div style={{ display: "grid", gap: "1.5rem" }}>
          {experiences.map((exp, i) => (
            <article
              key={exp.id}
              className={`animate-fade-up delay-${(i + 1) * 100 as 100 | 200 | 300 | 400}`}
              style={{
                background: exp.bg,
                border: `2px solid ${exp.accent}`,
                borderRadius: "var(--radius-sketch)",
                boxShadow: `5px 5px 0 ${exp.accent}`,
                padding: "1.5rem 1.6rem",
              }}
            >
              <div style={{ display: "flex", gap: "0.75rem", justifyContent: "space-between", flexWrap: "wrap", marginBottom: "0.75rem" }}>
                <div>
                  <h3 style={{ fontFamily: "var(--font-hand)", fontSize: "1.5rem", lineHeight: 1.2 }}>{exp.role}</h3>
                  <p style={{ fontWeight: 600, color: "var(--ink)", margin: "0.1rem 0 0" }}>{exp.org}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ fontSize: "0.88rem", margin: 0, color: "var(--ink)" }}>{exp.duration}</p>
                  <p style={{ fontSize: "0.86rem", margin: "0.15rem 0 0", color: "var(--ink-muted)" }}>{exp.location}</p>
                </div>
              </div>

              <ul style={{ margin: 0, paddingLeft: "1.1rem", display: "grid", gap: "0.45rem" }}>
                {exp.points.map((point) => (
                  <li key={point} style={{ color: "var(--ink-muted)", fontSize: "0.94rem", lineHeight: 1.55 }}>
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
          <p style={{ marginBottom: "0.9rem", fontFamily: "var(--font-hand)", fontSize: "1.2rem", color: "var(--ink)" }}>
            Certifications
          </p>
          <div style={{ display: "flex", gap: "0.65rem", flexWrap: "wrap", justifyContent: "center" }}>
            {certifications.map((cert) => (
              <span
                key={cert}
                style={{
                  background: "var(--surface)",
                  border: "1.5px solid var(--ink)",
                  borderRadius: 99,
                  padding: "0.35rem 0.8rem",
                  fontSize: "0.84rem",
                  color: "var(--ink)",
                }}
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
