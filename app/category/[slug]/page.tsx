import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import CategoryBlocks from "@/components/CategoryBlocks";
import { blocksByCategory } from "@/data/blocks";
import { categories } from "@/data/categories";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    return { title: "Catalog", description: "Browse curated interface categories in Motiff." };
  }

  return {
    title: category.title,
    description: `${category.summary} ${category.count} blocks curated for ${category.highlight.toLowerCase()}.`,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);
  if (!category) {
    notFound();
  }

  const blocks = blocksByCategory[slug] ?? [];

  return (
    <>
      <Header />

      <main style={{ maxWidth: 1160, margin: "0 auto", padding: "0 32px" }}>
        <div
          style={{
            paddingTop: 86,
            marginBottom: 48,
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontFamily: "var(--font-mono)",
            fontSize: 10.5,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            animation: "fadeUp .5s cubic-bezier(.16,1,.3,1) backwards",
          }}
        >
          <Link href="/" style={{ color: "var(--muted)", textDecoration: "none" }}>
            Home
          </Link>
          <span style={{ color: "var(--border)" }}>›</span>
          <span style={{ color: "var(--accent)" }}>{category.title}</span>
        </div>

        <div
          style={{
            borderBottom: "1px solid var(--border)",
            paddingBottom: 40,
            marginBottom: 40,
            animation: "fadeUp .55s .05s cubic-bezier(.16,1,.3,1) backwards",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10.5,
                  color: "var(--accent)",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  marginBottom: 14,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span style={{ display: "inline-block", width: 20, height: 1, background: "var(--accent)" }} />
                {category.id}
              </div>
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(38px, 5vw, 64px)",
                  fontWeight: 800,
                  lineHeight: 1,
                  letterSpacing: "-0.025em",
                  color: "var(--text)",
                }}
              >
                {category.title}
              </h1>
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10.5,
                color: "var(--muted)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              {blocks.length} blocks
            </div>
          </div>
        </div>

        <CategoryBlocks blocks={blocks} categorySlug={slug} />
      </main>

      <footer style={{ borderTop: "1px solid var(--border)" }}>
        <div
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            padding: "36px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: "var(--muted)",
              letterSpacing: "0.07em",
              textDecoration: "none",
            }}
          >
            ← All Categories
          </Link>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: "var(--muted)",
              letterSpacing: "0.07em",
            }}
          >
            © 2026 Motiff
          </span>
        </div>
      </footer>
    </>
  );
}
