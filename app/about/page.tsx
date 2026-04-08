import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "About",
  description: "Why Motiff exists and how to use the catalog before adapting code.",
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main style={{ maxWidth: 860, margin: "0 auto", padding: "0 clamp(18px, 4vw, 32px) 96px" }}>
        <section
          style={{
            padding: "92px 0 0",
            textAlign: "center",
            animation: "fadeUp .55s cubic-bezier(.16,1,.3,1) backwards",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              fontWeight: 700,
              color: "var(--muted)",
              marginBottom: 14,
            }}
          >
            About
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(54px, 10vw, 112px)",
              lineHeight: 0.9,
              letterSpacing: "-0.08em",
              fontWeight: 800,
              color: "var(--text)",
              marginBottom: 16,
            }}
          >
            motiff
          </h1>

          <p
            style={{
              maxWidth: 540,
              margin: "0 auto 24px",
              fontFamily: "var(--font-body)",
              fontSize: "clamp(17px, 2vw, 22px)",
              lineHeight: 1.5,
              fontWeight: 500,
              color: "var(--muted)",
            }}
          >
            A minimal catalog for browsing interface blocks before touching the code.
          </p>

          <Link
            href="/#catalog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              textDecoration: "none",
              borderRadius: 16,
              padding: "10px 16px",
              background: "var(--text)",
              color: "#ffffff",
              fontFamily: "var(--font-body)",
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            Open catalog
          </Link>
        </section>
      </main>
    </>
  );
}
