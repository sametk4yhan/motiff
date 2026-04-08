"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const githubUrl = "https://github.com/sametk4yhan";

function MotifMark() {
  const cell: CSSProperties = {
    background: "var(--text)",
    borderRadius: 3,
  };

  return (
    <span
      aria-hidden="true"
      style={{
        width: 18,
        height: 18,
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateRows: "repeat(2, 1fr)",
        gap: 2,
        flexShrink: 0,
      }}
    >
      <span style={{ ...cell, opacity: 1 }} />
      <span style={{ ...cell, opacity: 0.88 }} />
      <span style={{ ...cell, opacity: 0.88 }} />
      <span style={{ ...cell, opacity: 0.6 }} />
    </span>
  );
}

export default function Header() {
  const pathname = usePathname();
  const catalogActive = pathname === "/" || pathname.startsWith("/category/");

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(255,255,255,0.94)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "22px clamp(18px, 4vw, 32px) 18px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <Link href="/" style={{ textDecoration: "none" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
              <MotifMark />
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 23,
                  fontWeight: 800,
                  letterSpacing: "-0.06em",
                  color: "var(--text)",
                }}
              >
                motiff
              </span>
            </span>
          </Link>

          <nav style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", justifyContent: "flex-end" }}>
            <Link
              href="/#catalog"
              style={{
                textDecoration: "none",
                fontFamily: "var(--font-body)",
                fontSize: 15,
                fontWeight: 600,
                color: catalogActive ? "var(--text)" : "var(--muted)",
              }}
            >
              Catalog
            </Link>

            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="sametk4yhan GitHub"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "var(--text)",
                color: "#ffffff",
                padding: "10px 16px",
                borderRadius: 16,
                textDecoration: "none",
                fontFamily: "var(--font-body)",
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              <span
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 16,
                  border: "1px solid rgba(255,255,255,0.22)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight: 1,
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.08 3.29 9.39 7.86 10.9.58.11.79-.25.79-.56 0-.28-.01-1.2-.02-2.18-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.3 1.18-3.11-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.17 1.19a10.9 10.9 0 0 1 5.77 0c2.2-1.5 3.17-1.19 3.17-1.19.62 1.59.23 2.77.11 3.06.73.81 1.18 1.85 1.18 3.11 0 4.42-2.69 5.39-5.25 5.68.41.35.78 1.04.78 2.1 0 1.52-.01 2.74-.01 3.11 0 .31.21.68.8.56a11.53 11.53 0 0 0 7.85-10.9C23.5 5.66 18.35.5 12 .5Z" />
                </svg>
              </span>
              sametk4yhan
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
