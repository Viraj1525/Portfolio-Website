---
title: Portfolio Resume & GitHub Sync
date: 2026-06-26
status: approved
---

# Portfolio Resume & GitHub Sync — Design

## Goal

Bring the portfolio site's project list, contact details, and "currently focusing on" tags into alignment with Viraj's current resume (`resume/Viraj_Resume.pdf`) and the live state of his GitHub profile (`github.com/Viraj1525`).

## Scope

In-scope:

1. `src/components/Projects.tsx` — replace the `projects` array (currently 3 entries) with 4 entries drawn from the GitHub README content. MedBot is dropped; Resilient AI Multi-Agent takes its place.
2. `src/components/Experience.tsx` — replace the E-Cell Design Lead entry with the Novo Technologies AI & Full-Stack Intern entry from the resume. Other experience entries (Co-Grad, TEDx IET Lucknow) stay as-is.
3. `src/components/Contact.tsx` — drop the phone contact card; update the LinkedIn URL; refresh the "Currently focusing on" tags to match the new project mix.
4. `src/components/Footer.tsx` — update the LinkedIn link to the new handle.

Out of scope:

- Any layout, styling, color, or typography change.
- Any change to Hero, About, Experience, TechStack, Philosophy, or Nav (these already match the resume).
- No new files, no new components, no refactor of data into separate modules.
- No phone number anywhere on the site (explicit user instruction).
- No live-demo buttons on project cards (explicit user instruction).
- The Pneumonia Classifier repo is not added to the project list (explicit user instruction).
- No build-time PDF parsing of the resume.

## Architecture

Single-pass, data-only edits. The portfolio already stores project and contact content as `const` arrays at the top of each component. We update those arrays in place. Component JSX, styling, and behavior are untouched.

Two reasons this is the right shape:

- The diff is small, reviewable, and easy to revert.
- It preserves the existing pattern — every component owns its data — without introducing a new convention no other part of the site uses.

## Component-by-component changes

### 1. `src/components/Projects.tsx`

Replace the `projects` array with the four entries below. Each entry keeps the existing shape (`id`, `badge`, `title`, `subtitle`, `description`, `highlights[3]`, `tags[4]`, `githubUrl`, `rotation`, `accentColor`). Tag palette is rotated through the existing `coral-light`, `teal-light`, `indigo-light`, `yellow` tokens so the hand-drawn aesthetic stays consistent.

**Entry 1 — Resilient AI: Multi-Agent Self-Healing DevOps**

- `badge`: `APR 2026`
- `title`: `Resilient AI: Multi-Agent Self-Healing DevOps`
- `subtitle`: `LangGraph + FastAPI Agents for Autonomous Log Monitoring, RCA & Patch Simulation`
- `description`: Built a multi-agent DevOps system where AI agents collaborate to monitor application logs, detect errors, analyze root cause, generate code fixes, validate them, and simulate deployment.
- `highlights`:
  - Designed a LangGraph-orchestrated multi-agent workflow spanning log monitoring, error detection, RCA, and patch generation.
  - Implemented FastAPI services with Redis-backed coordination and PostgreSQL persistence for agent state and run history.
  - Built a React dashboard to inspect agent runs, root-cause traces, and proposed fixes across simulated deployments.
- `tags`: `LangGraph`, `FastAPI`, `Ollama`, `Redis + PostgreSQL`
- `githubUrl`: `https://github.com/Viraj1525/Resilient-AI-Multi-Agent-Self-Healing-DevOps-System`
- `accentColor`: `var(--teal)`
- `rotation`: `1deg`

**Entry 2 — RiskLens — AI Compliance & Risk Intelligence**

- `badge`: `MAR 2026`
- `title`: `RiskLens — AI Compliance & Risk Intelligence`
- `subtitle`: `Enterprise PDF Compliance Platform with RAG, Flowcharts & Report Generation`
- `description`: Full-stack compliance intelligence platform that ingests enterprise PDFs, runs semantic retrieval, generates Mermaid risk flowcharts, and produces downloadable PDF audit reports.
- `highlights`:
  - Implemented document ingestion, chunking, sentence-transformer embeddings, and FAISS-based semantic retrieval for multi-page policy PDFs.
  - Built `/analyze-risk`, `/chat`, `/generate-report`, and `/generate-flowchart` endpoints with ReportLab PDF reports and Mermaid.js diagrams.
  - Containerized the FastAPI backend and React frontend with Docker Compose and Nginx; deployed a live demo on Vercel.
- `tags`: `React`, `FastAPI`, `LangChain`, `FAISS + Groq`
- `githubUrl`: `https://github.com/Viraj1525/RiskLens-AI-Compliance-Risk-Intelligence-Platform`
- `accentColor`: `var(--coral)`
- `rotation`: `-1.2deg`

**Entry 3 — Number Plate Recognition (ANPR)**

- `badge`: `MAR 2026`
- `title`: `Number Plate Recognition (ANPR)`
- `subtitle`: `YOLOv8 + EasyOCR License-Plate Pipeline with Analytics Dashboard`
- `description`: End-to-end ANPR system that detects vehicle plates in uploaded videos, extracts plate numbers with OCR, and surfaces detections through an interactive analytics dashboard.
- `highlights`:
  - Used YOLOv8 for plate detection and EasyOCR for text extraction with regex validation and character correction.
  - Applied OpenCV preprocessing and adaptive thresholding to improve OCR quality on low-resolution frames.
  - Built a Streamlit dashboard with timestamped detection tables, plate image gallery, CSV export, and frequency analytics.
- `tags`: `YOLOv8`, `EasyOCR`, `OpenCV`, `Streamlit`
- `githubUrl`: `https://github.com/Viraj1525/Number-Plate-Recognition`
- `accentColor`: `var(--indigo)`
- `rotation`: `0.8deg`

**Entry 4 — HisaabWala (Contributed)**

- `badge`: `FORK`
- `title`: `HisaabWala — Voice-First AI Accountant`
- `subtitle`: `Telegram Bot for Tier 2-3 Indian Shopkeepers (Contributed to Fork)`
- `description`: Voice-first AI accountant delivered as a Telegram bot that lets Hindi/Hinglish-speaking shopkeepers log transactions by speaking, then auto-confirms entries, detects duplicates, and surfaces udhaar balances.
- `highlights`:
  - Built FastAPI services with Supabase PostgreSQL (pgbouncer pooling) and Supabase Storage for voice-receipt archival.
  - Integrated Groq Whisper for ASR and Groq + Llama 3.3 70B for transaction extraction, with multi-transaction and 2-minute auto-confirm flows.
  - Generated bilingual (Hindi + English) credit-ready PDF reports with WeasyPrint / fpdf2 and shipped a daily 9 PM IST summary scheduler.
- `tags`: `FastAPI`, `Groq Whisper`, `Supabase`, `Telegram API`
- `githubUrl`: `https://github.com/anishek1/HisaabWala`
- `accentColor`: `var(--yellow-dark)` (verified defined in `globals.css` line 14 as `#f0c30f`)
- `rotation`: `-0.6deg`

The grid in `Projects.tsx` already uses `repeat(auto-fit, minmax(300px, 1fr))`, so 4 cards lay out the same way as 3. No CSS change.

The intro line below the section heading currently reads `Applied AI builds focused on document intelligence, health-tech assistance, and computer vision.` — update it to `Applied AI builds focused on autonomous DevOps agents, document intelligence, and computer vision.` so the lead-in matches the new project mix.

### 2. `src/components/Contact.tsx`

- Remove the phone contact card entirely. Keep only `GitHub`, `LinkedIn`, `Email`.
- Update `LinkedIn` URL from `https://www.linkedin.com/in/viraj-agrawal-85bb76298` to `https://www.linkedin.com/in/viraj-agrawal-25oct`.
- Email (`virajagrawal.1525@gmail.com`) and GitHub URL stay the same.
- Replace the "Currently focusing on" tags
  - from: `["AI compliance systems", "Medical RAG assistants", "Production-grade FastAPI services"]`
  - to: `["Multi-agent DevOps systems", "AI compliance platforms", "Voice-first AI assistants"]`
- Section heading `Let's Build Something Useful` and supporting paragraph stay as-is.

### 3. `src/components/Footer.tsx`

- Update the LinkedIn `href` from `https://www.linkedin.com/in/viraj-agrawal-85bb76298` to `https://www.linkedin.com/in/viraj-agrawal-25oct`.
- GitHub and Email entries are unchanged.

### 2. `src/components/Experience.tsx`

Replace the third entry of the `experiences` array (currently E-Cell Design Lead) with the Novo Technologies entry below. Keep the first two entries (Co-Grad, TEDx IET Lucknow) and the certifications block unchanged.

**Entry — Novo Technologies (replaces E-Cell)**

- `id`: `novo`
- `org`: `Novo Technologies`
- `role`: `AI & Full-Stack Intern`
- `duration`: `Feb 2025 - May 2025`
- `location`: `Remote`
- `accent`: `var(--indigo)`
- `bg`: `var(--indigo-light)`
- `points`:
  - Contributed to AI-driven web features in a production-style team, shipping full-stack flows from API to UI.
  - Built an AI-based mock interview platform using Next.js, integrating Gemini API with voice input and a resume-aware chat assistant.
  - Developed an automated MCQ generator with FastAPI, Google Gemini, and Docker, deployed via a CI/CD pipeline for reliable releases.

The `experiences` array remains 3 entries; no grid CSS change.

## Untouched components

- `Hero.tsx` — tagline "Building practical AI systems with RAG, LLM pipelines, and full-stack engineering." still matches the resume and the project's actual nature.
- `About.tsx` — `B.Tech (Oct 2023 - Present)`, `Lucknow, Uttar Pradesh`, focus cards all still match.
- `TechStack.tsx` — every skill listed matches the resume's skills section.
- `Philosophy.tsx` — opinion statements, not factual data; no resume correlation required.
- `Nav.tsx` — pure navigation.
- `src/app/layout.tsx` — `metadata` is generic and not stale.

## Risk and mitigations

- **Risk**: A typo in a URL breaks a project link.
  - **Mitigation**: All four `githubUrl` values were copied from the live GitHub profile during planning and are pasted verbatim in this spec.
- **Risk**: None material. Token references use already-defined CSS variables.
- **Risk**: AGENTS.md requires reading `node_modules/next/dist/docs/` before writing any code.
  - **Mitigation**: This change is data-only — string literal updates inside existing `const` arrays. No Next.js API, routing, server/client boundary, or data-fetching change. Next.js docs are not required for this work.

## Verification

- `npm run dev` — site renders, all four project cards appear, each "GitHub Repo" link opens the correct repository.
- `npm run build` — production build succeeds with no TypeScript errors.
- Visual: scan the page at desktop width (>= 1024px) and confirm the 4-card grid lays out cleanly with the existing sketchbook aesthetic (rotations still varied, accent colors still varied).
- Experience section: confirm three entries (Co-Grad, TEDx IET Lucknow, Novo Technologies) — E-Cell no longer present.
- Click each project GitHub link, each contact card, and each footer link.
- `grep` for the old LinkedIn handle (`85bb76298`), the old project URL slug (`AI-Compliance-Risk-Intelligence-Platform`), and the literal `E-Cell` / `E Cell` — all should return zero matches.

## Out-of-scope follow-ups (not part of this spec)

- Adding live-demo buttons (deferred per user instruction).
- Adding the Pneumonia Classifier as a project (deferred per user instruction).
- Extracting data arrays into a `src/data/` module (deferred — only do this if a real reuse need appears).
- Updating `metadata.keywords` in `layout.tsx` to mention "multi-agent" or "LangGraph" (could be a small follow-up if desired; not required by resume).