import Link from "next/link";
import Header from "@/components/Header";
import HomeCatalog from "@/components/HomeCatalog";
import HeroMotifField from "@/components/HeroMotifField";
import { categories } from "@/data/categories";

export default function Home() {
  const totalBlocks = categories.reduce((sum, category) => sum + category.count, 0);

  return (
    <>
      <Header />

      <main style={{ maxWidth: 1160, margin: "0 auto", padding: "0 clamp(18px, 4vw, 32px)" }}>
        <section
          style={{
            position: "relative",
            padding: "94px 0 54px",
            textAlign: "center",
            animation: "fadeUp .65s cubic-bezier(.16,1,.3,1) backwards",
            isolation: "isolate",
          }}
        >
          <HeroMotifField />

          <div style={{ position: "relative", zIndex: 1 }}>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(64px, 11vw, 132px)",
                fontWeight: 800,
                lineHeight: 0.88,
                letterSpacing: "-0.08em",
                color: "var(--text)",
                maxWidth: 940,
                margin: "0 auto 18px",
              }}
            >
              Patterns to
              <br />
              shape the screen
            </h1>

            <p
              style={{
                maxWidth: 760,
                margin: "0 auto 22px",
                fontFamily: "var(--font-body)",
                fontSize: "clamp(18px, 2.1vw, 24px)",
                fontWeight: 500,
                lineHeight: 1.45,
                color: "var(--muted)",
              }}
            >
              A focused catalog of interface references for designers and frontend teams building calmer, sharper products.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                flexWrap: "wrap",
              }}
            >
              <Link
                href="/#catalog"
                style={{
                  textDecoration: "none",
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                  background: "var(--surface)",
                  borderRadius: 16,
                  padding: "10px 16px",
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                }}
              >
                {categories.length} categories
              </Link>

              <Link
                href="/category/ui-components"
                style={{
                  textDecoration: "none",
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                  background: "var(--surface)",
                  borderRadius: 16,
                  padding: "10px 16px",
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                }}
              >
                {totalBlocks}+ blocks
              </Link>
            </div>
          </div>
        </section>

        <HomeCatalog categories={categories} />
      </main>

      <footer style={{ padding: "0 0 32px" }}>
        <div
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            padding: "22px clamp(18px, 4vw, 32px) 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap",
            borderTop: "1px solid var(--border)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "var(--text)",
            }}
          >
            motiff
          </span>

          <Link
            href="/about"
            style={{
              textDecoration: "none",
              fontFamily: "var(--font-body)",
              fontSize: 14,
              fontWeight: 600,
              color: "var(--muted)",
            }}
          >
            About
          </Link>
        </div>
      </footer>
    </>
  );
}
