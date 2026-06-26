import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Viraj Agrawal | AI Automation Engineer",
  description:
    "Portfolio of Viraj Agrawal, an AI Automation Engineer and CSE student building RAG, document intelligence, and full-stack automation systems.",
  keywords: [
    "Viraj Agrawal",
    "AI Automation Engineer",
    "Portfolio",
    "RAG pipelines",
    "LLM",
    "Document Intelligence",
    "Backend",
    "Next.js",
    "FastAPI",
    "React",
    "PostgreSQL",
  ],
  authors: [{ name: "Viraj Agrawal" }],
  openGraph: {
    title: "Viraj Agrawal | AI Automation Engineer",
    description:
      "Building RAG, document intelligence, and full-stack automation systems.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
