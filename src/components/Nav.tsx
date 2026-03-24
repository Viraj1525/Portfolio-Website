"use client";
import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="nav"
      style={{
        boxShadow: scrolled ? "0 2px 20px rgba(45,53,97,0.08)" : "none",
        transition: "box-shadow 0.3s",
      }}
    >
      <span className="nav-logo">VA *</span>
      <ul className="nav-links">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="btn-primary"
        style={{ fontSize: "1rem", padding: "0.6rem 1.4rem" }}
        id="nav-cta"
      >
        Let&apos;s Talk -&gt;
      </a>
    </nav>
  );
}
