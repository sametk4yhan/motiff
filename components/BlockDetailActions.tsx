"use client";

import Link from "next/link";
import { useState } from "react";

type BlockDetailActionsProps = {
  code?: string;
  shareUrl: string;
  previewUrl: string;
};

export default function BlockDetailActions({ code, shareUrl, previewUrl }: BlockDetailActionsProps) {
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const copyCode = async () => {
    if (!code) return;
    await navigator.clipboard.writeText(code);
    setCopiedCode(true);
    window.setTimeout(() => setCopiedCode(false), 1600);
  };

  const copyLink = async () => {
    const resolvedUrl = shareUrl.startsWith("/") ? new URL(shareUrl, window.location.origin).toString() : shareUrl;
    await navigator.clipboard.writeText(resolvedUrl);
    setCopiedLink(true);
    window.setTimeout(() => setCopiedLink(false), 1600);
  };

  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <button
        type="button"
        onClick={copyCode}
        disabled={!code}
        style={{
          border: "1px solid var(--text)",
          background: !code ? "rgba(23,20,17,0.08)" : "var(--text)",
          color: !code ? "var(--muted)" : "var(--bg)",
          borderRadius: 16,
          padding: "10px 14px",
          fontFamily: "var(--font-mono)",
          fontSize: 9,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          cursor: !code ? "not-allowed" : "pointer",
        }}
      >
        {copiedCode ? "Copied" : "Copy code"}
      </button>

      <button
        type="button"
        onClick={copyLink}
        style={{
          border: "1px solid var(--border)",
          background: "rgba(255,255,255,0.76)",
          color: copiedLink ? "var(--accent)" : "var(--muted)",
          borderRadius: 16,
          padding: "10px 14px",
          fontFamily: "var(--font-mono)",
          fontSize: 9,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          cursor: "pointer",
        }}
      >
        {copiedLink ? "Link copied" : "Copy link"}
      </button>

      <Link
        href={previewUrl}
        style={{
          textDecoration: "none",
          border: "1px solid rgba(17,17,17,0.24)",
          background: "rgba(17,17,17,0.08)",
          color: "var(--accent)",
          borderRadius: 16,
          padding: "10px 14px",
          fontFamily: "var(--font-mono)",
          fontSize: 9,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        Full preview
      </Link>
    </div>
  );
}
