"use client";

import { startTransition, useDeferredValue, useMemo, useState } from "react";
import BlockCard from "@/components/BlockCard";
import type { Block } from "@/data/blocks";

function normalize(value: string) {
  return value
    .toLocaleLowerCase("en")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export default function CategoryBlocks({
  blocks,
  categorySlug,
}: {
  blocks: Block[];
  categorySlug: string;
}) {
  const [query, setQuery] = useState("");
  const [selectedLang, setSelectedLang] = useState<"all" | NonNullable<Block["lang"]>>("all");
  const [selectedTag, setSelectedTag] = useState<string>("all");
  const deferredQuery = useDeferredValue(query);

  const languages = useMemo(() => {
    const items = Array.from(new Set(blocks.map((block) => block.lang).filter(Boolean))) as Array<
      NonNullable<Block["lang"]>
    >;
    return items.sort();
  }, [blocks]);

  const popularTags = useMemo(() => {
    const counts = new Map<string, number>();

    blocks.forEach((block) => {
      block.tags.forEach((tag) => {
        counts.set(tag, (counts.get(tag) ?? 0) + 1);
      });
    });

    return Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "en"))
      .slice(0, 6)
      .map(([tag]) => tag);
  }, [blocks]);

  const filteredBlocks = useMemo(() => {
    const search = normalize(deferredQuery.trim());

    return blocks.filter((block) => {
      const matchesLang = selectedLang === "all" || block.lang === selectedLang;
      const matchesTag = selectedTag === "all" || block.tags.includes(selectedTag);
      const haystack = normalize(
        `${block.title} ${block.description} ${block.tags.join(" ")} ${block.lang ?? ""}`,
      );
      const matchesQuery = !search || haystack.includes(search);

      return matchesLang && matchesTag && matchesQuery;
    });
  }, [blocks, deferredQuery, selectedLang, selectedTag]);

  const hasActiveFilters = Boolean(query.trim()) || selectedLang !== "all" || selectedTag !== "all";
  const visibleBlocks = filteredBlocks;

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
          marginBottom: 16,
        }}
      >
        <input
          id="block-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search blocks"
          style={{
            width: "min(100%, 360px)",
            height: 46,
            padding: "0 15px",
            borderRadius: 14,
            border: "1px solid var(--border)",
            background: "rgba(255,255,255,0.88)",
            color: "var(--text)",
            fontFamily: "var(--font-body)",
            fontSize: 14,
            outline: "none",
          }}
        />

        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 9,
            color: "var(--muted)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          {hasActiveFilters
            ? `${filteredBlocks.length} matches`
            : `${visibleBlocks.length} shown`}
        </div>
      </div>

      {languages.length > 0 ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 10 }}>
          <button
            type="button"
            onClick={() => startTransition(() => setSelectedLang("all"))}
            style={{
              border: `1px solid ${selectedLang === "all" ? "var(--accent)" : "var(--border)"}`,
              background: selectedLang === "all" ? "var(--accent-dim)" : "rgba(255,255,255,0.75)",
              color: selectedLang === "all" ? "var(--accent)" : "var(--muted)",
              borderRadius: 999,
              padding: "7px 12px",
              fontFamily: "var(--font-mono)",
              fontSize: 9,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            All languages
          </button>
          {languages.map((lang) => (
            <button
              key={lang}
              type="button"
              onClick={() => startTransition(() => setSelectedLang(lang))}
              style={{
                border: `1px solid ${selectedLang === lang ? "var(--accent)" : "var(--border)"}`,
                background: selectedLang === lang ? "var(--accent-dim)" : "rgba(255,255,255,0.75)",
                color: selectedLang === lang ? "var(--accent)" : "var(--muted)",
                borderRadius: 999,
                padding: "7px 12px",
                fontFamily: "var(--font-mono)",
                fontSize: 9,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              {lang}
            </button>
          ))}
        </div>
      ) : null}

      {popularTags.length > 0 ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 22 }}>
          <button
            type="button"
            onClick={() => startTransition(() => setSelectedTag("all"))}
            style={{
              border: `1px solid ${selectedTag === "all" ? "var(--text)" : "var(--border)"}`,
              background: selectedTag === "all" ? "rgba(28,26,23,0.07)" : "rgba(255,255,255,0.75)",
              color: selectedTag === "all" ? "var(--text)" : "var(--muted)",
              borderRadius: 999,
              padding: "7px 12px",
              fontFamily: "var(--font-mono)",
              fontSize: 9,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            All tags
          </button>
          {popularTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => startTransition(() => setSelectedTag(tag))}
              style={{
                border: `1px solid ${selectedTag === tag ? "var(--text)" : "var(--border)"}`,
                background: selectedTag === tag ? "rgba(28,26,23,0.07)" : "rgba(255,255,255,0.75)",
                color: selectedTag === tag ? "var(--text)" : "var(--muted)",
                borderRadius: 999,
                padding: "7px 12px",
                fontFamily: "var(--font-mono)",
                fontSize: 9,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      ) : null}

      {visibleBlocks.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 16,
            marginBottom: 80,
          }}
        >
          {visibleBlocks.map((block, index) => (
            <BlockCard key={block.id} block={block} index={index} categorySlug={categorySlug} />
          ))}
        </div>
      ) : (
        <div
          style={{
            marginBottom: 80,
            border: "1px solid var(--border)",
            borderRadius: 18,
            background: "rgba(255,255,255,0.82)",
            padding: "24px 20px",
            fontFamily: "var(--font-body)",
            fontSize: 14,
            color: "var(--muted)",
          }}
        >
          No results.
          {hasActiveFilters ? (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                startTransition(() => {
                  setSelectedLang("all");
                  setSelectedTag("all");
                });
              }}
              style={{
                marginLeft: 12,
                border: "1px solid var(--border)",
                background: "transparent",
                color: "var(--muted)",
                borderRadius: 999,
                padding: "6px 12px",
                fontFamily: "var(--font-mono)",
                fontSize: 9,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              Reset
            </button>
          ) : null}
        </div>
      )}
    </>
  );
}
