import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlockDetailActions from "@/components/BlockDetailActions";
import BlockThumb from "@/components/BlockThumb";
import { getBlockFromCategory, getCategoryBySlug, getRelatedBlocks } from "@/data/catalog";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; blockId: string }>;
}): Promise<Metadata> {
  const { slug, blockId } = await params;
  const category = getCategoryBySlug(slug);
  const block = getBlockFromCategory(slug, blockId);

  if (!category || !block) {
    return { title: "Catalog", description: "Explore preview-first interface references in Motiff." };
  }

  return {
    title: `${block.title} · ${category.title}`,
    description: block.description || `Preview-first ${category.title.toLowerCase()} reference from Motiff.`,
  };
}

export default async function BlockDetailPage({
  params,
}: {
  params: Promise<{ slug: string; blockId: string }>;
}) {
  const { slug, blockId } = await params;
  const category = getCategoryBySlug(slug);
  const block = getBlockFromCategory(slug, blockId);

  if (!category || !block) {
    notFound();
  }

  const relatedBlocks = getRelatedBlocks(slug, blockId, 3);
  const shareUrl = `/category/${slug}/${blockId}`;
  const previewUrl = `/category/${slug}/${blockId}/preview`;

  return (
    <main style={{ maxWidth: 1160, margin: "0 auto", padding: "92px clamp(18px, 4vw, 32px) 84px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          flexWrap: "wrap",
          marginBottom: 24,
          fontFamily: "var(--font-mono)",
          fontSize: 9,
          color: "var(--muted)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        <Link href="/" style={{ textDecoration: "none", color: "var(--muted)" }}>
          Home
        </Link>
        <span>›</span>
        <Link href={`/category/${slug}`} style={{ textDecoration: "none", color: "var(--muted)" }}>
          {category.title}
        </Link>
      </div>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 18,
          marginBottom: 24,
        }}
      >
        <aside
          style={{
            border: "1px solid var(--border)",
            borderRadius: 24,
            padding: "22px 20px",
            background: "rgba(255,255,255,0.84)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 9,
              color: "var(--accent)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            {category.title}
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(34px, 5vw, 64px)",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              fontWeight: 800,
              color: "var(--text)",
              marginBottom: 14,
            }}
          >
            {block.title}
          </h1>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 14,
              lineHeight: 1.7,
              color: "var(--muted)",
              marginBottom: 18,
              maxWidth: 460,
            }}
          >
            {block.description || `Preview-first ${block.lang ? block.lang.toUpperCase() + " " : ""}block from ${category.title}.`}
          </p>

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
            {block.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "5px 8px",
                  borderRadius: 999,
                  border: "1px solid var(--border)",
                  color: "var(--muted)",
                  fontFamily: "var(--font-mono)",
                  fontSize: 8,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  background: "rgba(255,255,255,0.72)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <BlockDetailActions code={block.code} shareUrl={shareUrl} previewUrl={previewUrl} />
        </aside>

        <section
          style={{
            border: "1px solid var(--border)",
            borderRadius: 24,
            overflow: "hidden",
            background: "rgba(255,255,255,0.84)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              flexWrap: "wrap",
              padding: "14px 16px",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 9,
                color: "var(--accent)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Preview
            </div>
            {block.lang ? (
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 8.5,
                  color: "var(--muted)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {block.lang}
              </span>
            ) : null}
          </div>

          <div
            style={{
              aspectRatio: "16/10",
              padding: 18,
              background:
                "radial-gradient(circle at top left, rgba(17,17,17,.1), transparent 28%), linear-gradient(180deg, rgba(245,245,245,0.88), rgba(255,255,255,0.9))",
            }}
          >
            <div
              style={{
                height: "100%",
                overflow: "hidden",
                borderRadius: 22,
                border: "1px solid rgba(17,17,17,0.12)",
                background: "rgba(255,255,255,0.9)",
              }}
            >
              <BlockThumb blockId={block.id} />
            </div>
          </div>
        </section>
      </section>

      <section
        style={{
          border: "1px solid var(--border)",
          borderRadius: 24,
          overflow: "hidden",
          background: "#101010",
          marginBottom: 24,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap",
            padding: "14px 16px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 9,
              color: "#ffffff",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Code
          </div>
          {block.lang ? (
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 8.5,
                color: "rgba(255,255,255,0.62)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {block.lang}
            </span>
          ) : null}
        </div>

        <pre
          style={{
            margin: 0,
            padding: "20px 18px 22px",
            overflowX: "auto",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            lineHeight: 1.8,
            color: "rgba(255,255,255,0.86)",
            whiteSpace: "pre",
          }}
        >
          <code>{block.code ?? "No code sample is available yet."}</code>
        </pre>
      </section>

      {relatedBlocks.length > 0 ? (
        <section>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 9,
              color: "var(--accent)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            Related Blocks
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 14,
            }}
          >
            {relatedBlocks.map((related) => (
              <Link
                key={related.id}
                href={`/category/${slug}/${related.id}`}
                style={{
                  textDecoration: "none",
                  border: "1px solid var(--border)",
                  borderRadius: 20,
                  padding: "16px",
                  background: "rgba(255,255,255,0.8)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 8.5,
                    color: "var(--muted)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: 8,
                  }}
                >
                  {related.lang || "block"}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 17,
                    fontWeight: 700,
                    color: "var(--text)",
                    letterSpacing: "-0.03em",
                    marginBottom: 8,
                  }}
                >
                  {related.title}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: "var(--muted)",
                  }}
                >
                  {related.description || "Open the detail view to inspect the pattern and copy the code."}
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
