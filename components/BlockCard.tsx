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
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);
  const tabs = block.code ? (["preview", "code"] as const) : (["preview"] as const);

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
        borderRadius: 20,
        overflow: "hidden",
        background: "rgba(255,255,255,0.84)",
        boxShadow: "0 20px 44px rgba(22, 16, 10, 0.04)",
        transition: "border-color .2s, transform .2s, box-shadow .2s",
        animation: "fadeUp .5s cubic-bezier(.16,1,.3,1) backwards",
        animationDelay: `${0.05 + index * 0.03}s`,
      }}
      onMouseEnter={(event) => {
        const element = event.currentTarget as HTMLElement;
        element.style.borderColor = "rgba(17,17,17,.28)";
        element.style.transform = "translateY(-2px)";
        element.style.boxShadow = "0 26px 50px rgba(22, 16, 10, 0.08)";
      }}
      onMouseLeave={(event) => {
        const element = event.currentTarget as HTMLElement;
        element.style.borderColor = "var(--border)";
        element.style.transform = "translateY(0)";
        element.style.boxShadow = "0 20px 44px rgba(22, 16, 10, 0.04)";
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 14,
          padding: "14px 16px 12px",
          borderBottom: "1px solid var(--border)",
          background: "rgba(255,255,255,0.72)",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              fontWeight: 600,
              color: "var(--text)",
              lineHeight: 1.25,
              marginBottom: 4,
            }}
          >
            {block.title}
          </h2>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 8.5,
              color: "var(--muted)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {String(index + 1).padStart(2, "0")} · {block.lang ?? "preview"}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", justifyContent: "flex-end" }}>
          <div style={{ display: "flex", border: "1px solid var(--border)", borderRadius: 999, overflow: "hidden" }}>
            {tabs.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setTab(item)}
                style={{
                  border: "none",
                  background: tab === item ? "rgba(23,20,17,0.92)" : "transparent",
                  color: tab === item ? "var(--bg)" : "var(--muted)",
                  padding: "7px 11px",
                  fontFamily: "var(--font-mono)",
                  fontSize: 8.5,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                {item}
              </button>
            ))}
          </div>

          {tab === "code" && block.code ? (
            <button
              type="button"
              onClick={handleCopy}
              style={{
                border: "1px solid var(--border)",
                background: copied ? "var(--accent)" : "transparent",
                color: copied ? "#fff" : "var(--muted)",
                borderRadius: 999,
                padding: "7px 11px",
                fontFamily: "var(--font-mono)",
                fontSize: 8.5,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              {copied ? "Copied" : "Copy"}
            </button>
          ) : null}
        </div>
      </div>

      {tab === "preview" ? (
        <div
          style={{
            aspectRatio: "16/10",
            padding: 14,
            background:
              "radial-gradient(circle at top left, rgba(17,17,17,.08), transparent 26%), linear-gradient(180deg, rgba(245,245,245,0.88), rgba(255,255,255,0.9))",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div
            style={{
              height: "100%",
              overflow: "hidden",
              borderRadius: 18,
              border: "1px solid rgba(17,17,17,0.12)",
              background: "rgba(255,255,255,0.88)",
            }}
          >
            <BlockThumb blockId={block.id} />
          </div>
        </div>
      ) : (
        <div
          style={{
            aspectRatio: "16/10",
            overflow: "auto",
            borderBottom: "1px solid var(--border)",
            background: "#101010",
            padding: "16px 16px 18px",
          }}
        >
          <pre
            style={{
              margin: 0,
              fontFamily: "var(--font-mono)",
              fontSize: 10.5,
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.86)",
              whiteSpace: "pre",
            }}
          >
            <code>{block.code}</code>
          </pre>
        </div>
      )}

      <div style={{ padding: "14px 16px 16px" }}>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
          {block.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 8,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "4px 8px",
                border: "1px solid var(--border)",
                borderRadius: 999,
                color: "var(--muted)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
          <Link
            href={`/category/${categorySlug}/${block.id}`}
            style={{
              textDecoration: "none",
              fontFamily: "var(--font-mono)",
              fontSize: 9,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--text)",
            }}
          >
            Details
          </Link>

          <Link
            href={`/category/${categorySlug}/${block.id}/preview`}
            style={{
              textDecoration: "none",
              fontFamily: "var(--font-mono)",
              fontSize: 9,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--accent)",
            }}
          >
            Preview
          </Link>
        </div>
      </div>
    </article>
  );
}
