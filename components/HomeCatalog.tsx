"use client";

import { startTransition, useDeferredValue, useMemo, useState } from "react";
import CategoryCard from "@/components/CategoryCard";
import type { Category, CategoryFamily } from "@/data/categories";

const familyMeta: Record<"all" | CategoryFamily, string> = {
  all: "All",
  foundations: "Foundations",
  systems: "Systems",
  components: "Components",
  motion: "Motion",
};

function normalize(value: string) {
  return value
    .toLocaleLowerCase("en")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export default function HomeCatalog({ categories }: { categories: Category[] }) {
  const [query, setQuery] = useState("");
  const [activeFamily, setActiveFamily] = useState<"all" | CategoryFamily>("all");
  const deferredQuery = useDeferredValue(query);

  const filteredCategories = useMemo(() => {
    const search = normalize(deferredQuery.trim());

    return categories.filter((category) => {
      const matchesFamily = activeFamily === "all" || category.family === activeFamily;
      const haystack = normalize(
        [category.title, category.slug, category.highlight, category.featuredTags.join(" ")].join(" "),
      );

      return matchesFamily && (!search || haystack.includes(search));
    });
  }, [activeFamily, categories, deferredQuery]);

  const familyOrder: Array<"all" | CategoryFamily> = ["all", "foundations", "systems", "components", "motion"];
  const hasFilters = Boolean(query.trim()) || activeFamily !== "all";

  return (
    <section
      id="catalog"
      style={{
        marginBottom: 92,
        animation: "fadeUp .55s .1s cubic-bezier(.16,1,.3,1) backwards",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          flexWrap: "wrap",
          marginBottom: 14,
        }}
      >
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {familyOrder.map((family) => {
            const active = activeFamily === family;

            return (
              <button
                key={family}
                type="button"
                onClick={() => startTransition(() => setActiveFamily(family))}
                style={{
                  border: `1px solid ${active ? "var(--text)" : "var(--border)"}`,
                  background: active ? "var(--text)" : "var(--surface)",
                  color: active ? "#ffffff" : "var(--muted)",
                  borderRadius: 999,
                  padding: "9px 14px",
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  cursor: "pointer",
                }}
              >
                {familyMeta[family]}
              </button>
            );
          })}
        </div>

        <label style={{ flex: "1 1 280px", maxWidth: 320 }}>
          <input
            id="category-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search categories"
            style={{
              width: "100%",
              height: 44,
              padding: "0 16px",
              borderRadius: 999,
              border: "1px solid var(--border)",
              background: "var(--surface)",
              color: "var(--text)",
              fontFamily: "var(--font-body)",
              fontSize: 15,
              fontWeight: 600,
              outline: "none",
            }}
          />
        </label>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          flexWrap: "wrap",
          marginBottom: 18,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 13,
            fontWeight: 600,
            color: "var(--muted)",
          }}
        >
          {filteredCategories.length} categories
        </span>

        {hasFilters ? (
          <button
            type="button"
            onClick={() => {
              startTransition(() => setActiveFamily("all"));
              setQuery("");
            }}
            style={{
              border: "none",
              background: "transparent",
              color: "var(--muted)",
              fontFamily: "var(--font-body)",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Reset
          </button>
        ) : null}
      </div>

      {filteredCategories.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 14,
          }}
        >
          {filteredCategories.map((category, index) => (
            <CategoryCard key={category.id} cat={category} index={index} />
          ))}
        </div>
      ) : (
        <div
          style={{
            border: "1px solid var(--border)",
            borderRadius: 24,
            background: "var(--surface)",
            padding: "24px 20px",
            fontFamily: "var(--font-body)",
            fontSize: 15,
            fontWeight: 600,
            color: "var(--muted)",
          }}
        >
          No results.
        </div>
      )}
    </section>
  );
}
