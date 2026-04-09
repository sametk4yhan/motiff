"use client";

import Link from "next/link";
import { useState } from "react";
import BlockThumb from "@/components/BlockThumb";
import { type Block } from "@/data/blocks";

export default function BlockCard({
  block,
  index,
  categorySlug,
}: {
  block: Block;
  index: number;
  categorySlug: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!block.code) return;

    navigator.clipboard.writeText(block.code).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    });
  };

  return (
    <article
      style={{
        border: "1px solid var(--border)",
        borderRadius: 16,
        overflow: "hidden",
        background: "rgba(255,255,255,0.86)",
        boxShadow: "0 18px 38px rgba(22, 16, 10, 0.05)",
        transition: "border-color .2s, transform .2s, box-shadow .2s",
        animation: "fadeUp .45s cubic-bezier(.16,1,.3,1) backwards",
        animationDelay: `${0.04 + index * 0.02}s`,
      }}
      onMouseEnter={(event) => {
        const element = event.currentTarget as HTMLElement;
        element.style.borderColor = "rgba(17,17,17,.25)";
        element.style.transform = "translateY(-2px)";
        element.style.boxShadow = "0 22px 44px rgba(22, 16, 10, 0.08)";
      }}
      onMouseLeave={(event) => {
        const element = event.currentTarget as HTMLElement;
        element.style.borderColor = "var(--border)";
        element.style.transform = "translateY(0)";
        element.style.boxShadow = "0 18px 38px rgba(22, 16, 10, 0.05)";
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 10,
          padding: "13px 14px 11px",
          borderBottom: "1px solid var(--border)",
          background: "rgba(255,255,255,0.78)",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 15,
            fontWeight: 600,
            color: "var(--text)",
            lineHeight: 1.25,
            margin: 0,
          }}
        >
          {block.title}
        </h2>

        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 8,
            color: "var(--muted)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          {block.tags[0] ?? block.lang ?? "block"}
        </span>
      </div>

      <div
        style={{
          aspectRatio: "4/3",
          padding: 10,
          background:
            "radial-gradient(circle at top left, rgba(17,17,17,.08), transparent 28%), linear-gradient(180deg, rgba(245,245,245,0.9), rgba(255,255,255,0.94))",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            height: "100%",
            overflow: "hidden",
            borderRadius: 12,
            border: "1px solid rgba(17,17,17,0.12)",
            background: "rgba(255,255,255,0.9)",
          }}
        >
          <BlockThumb blockId={block.id} zoom={1} offsetY="50%" />
        </div>
      </div>

      <div style={{ padding: "12px 14px 14px", display: "flex", alignItems: "center", gap: 8 }}>
        <Link
          href={`/category/${categorySlug}/${block.id}/preview`}
          style={{
            textDecoration: "none",
            border: "1px solid var(--text)",
            borderRadius: 10,
            padding: "8px 10px",
            fontFamily: "var(--font-mono)",
            fontSize: 8.5,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--bg)",
            background: "var(--text)",
            lineHeight: 1,
          }}
        >
          Preview
        </Link>

        {block.code ? (
          <button
            type="button"
            onClick={handleCopy}
            style={{
              border: "1px solid var(--border)",
              background: copied ? "var(--accent)" : "transparent",
              color: copied ? "#fff" : "var(--muted)",
              borderRadius: 10,
              padding: "8px 10px",
              fontFamily: "var(--font-mono)",
              fontSize: 8.5,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: "pointer",
              lineHeight: 1,
            }}
          >
            {copied ? "Copied" : "Copy code"}
          </button>
        ) : null}
      </div>
    </article>
  );
}
