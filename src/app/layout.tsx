import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Viraj Agrawal | AI Systems Engineer",
  description:
    "Portfolio of Viraj Agrawal, a CS student designing AI systems that move beyond prototypes toward real-world utility.",
  keywords: [
    "Viraj Agrawal",
    "AI Engineer",
    "Portfolio",
    "RAG pipelines",
    "LLM",
    "Backend",
    "Next.js",
    "FastAPI",
    "LangChain",
  ],
  authors: [{ name: "Viraj Agrawal" }],
  openGraph: {
    title: "Viraj Agrawal | AI Systems Engineer",
    description:
      "Designing AI systems that move beyond prototypes toward real-world utility.",
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
