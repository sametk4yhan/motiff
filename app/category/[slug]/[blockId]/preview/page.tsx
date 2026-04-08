import Link from "next/link";
import { notFound } from "next/navigation";
import BlockThumb from "@/components/BlockThumb";
import { getBlockFromCategory, getCategoryBySlug } from "@/data/catalog";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; blockId: string }>;
}) {
  const { slug, blockId } = await params;
  const category = getCategoryBySlug(slug);
  const block = getBlockFromCategory(slug, blockId);

  if (!category || !block) {
    return { title: "Preview — Motiff" };
  }

  return {
    title: `${block.title} Preview — Motiff`,
    description: "Isolated preview of the " + block.title + " block in " + category.title + ".",
  };
}

export default async function BlockPreviewPage({
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

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "clamp(16px, 3vw, 28px)",
        background:
          "radial-gradient(circle at top left, rgba(17,17,17,.16), transparent 22%), radial-gradient(circle at bottom right, rgba(17,17,17,.08), transparent 26%), linear-gradient(180deg, #ffffff 0%, #f4f4f4 100%)",
      }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap",
            marginBottom: 16,
            padding: "14px 16px",
            border: "1px solid var(--border)",
            borderRadius: 18,
            background: "rgba(255,255,255,0.78)",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 8.5,
                color: "var(--accent)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 4,
              }}
            >
              Full Preview
            </div>
            <h1
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 18,
                fontWeight: 600,
                color: "var(--text)",
                lineHeight: 1.2,
              }}
            >
              {block.title}
            </h1>
          </div>

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <Link
              href={`/category/${slug}/${blockId}`}
              style={{
                textDecoration: "none",
                borderRadius: 16,
                padding: "10px 14px",
                background: "var(--text)",
                color: "var(--bg)",
                fontFamily: "var(--font-mono)",
                fontSize: 9,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Details
            </Link>
            <Link
              href={`/category/${slug}`}
              style={{
                textDecoration: "none",
                borderRadius: 16,
                padding: "10px 14px",
                border: "1px solid var(--border)",
                color: "var(--text)",
                fontFamily: "var(--font-mono)",
                fontSize: 9,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                background: "rgba(255,255,255,0.7)",
              }}
            >
              {category.title}
            </Link>
          </div>
        </div>

        <section
          style={{
            border: "1px solid rgba(17,17,17,0.08)",
            borderRadius: 28,
            background: "rgba(255,255,255,0.76)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 32px 90px rgba(17,17,17,0.08)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              aspectRatio: "16 / 10",
              padding: "clamp(16px, 2vw, 24px)",
              background:
                "radial-gradient(circle at top left, rgba(17,17,17,.08), transparent 26%), radial-gradient(circle at bottom right, rgba(17,17,17,.06), transparent 28%), linear-gradient(180deg, rgba(247,247,247,0.88), rgba(239,239,239,0.82))",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 24,
                overflow: "hidden",
                border: "1px solid rgba(17,17,17,0.12)",
                background: "rgba(255,255,255,0.88)",
                boxShadow: "0 40px 100px rgba(17,17,17,0.12)",
              }}
            >
              <BlockThumb blockId={block.id} zoom={1.28} offsetY="44%" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
