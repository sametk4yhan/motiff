import { getBlockFromCategory, getCategoryBySlug } from "@/data/catalog";
import type { Block } from "@/data/blocks";

const SHARED_BASE_CSS = `
:root{
  --bg:#f7f7f6;
  --surface:#ffffff;
  --border:#e5e5e5;
  --text:#111111;
  --muted:#6f6f6f;
  --accent:#111111;
  --accent-dim:rgba(17,17,17,0.08);
}
*{box-sizing:border-box}
html,body{
  margin:0;
  padding:0;
  font-family:Manrope,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,sans-serif;
  background:var(--bg);
  color:var(--text);
}
.preview-shell{
  min-height:100vh;
  display:flex;
  align-items:flex-start;
  justify-content:center;
  padding:20px;
}
.preview-stage{
  width:min(980px,100%);
  background:var(--surface);
  border:1px solid var(--border);
  border-radius:16px;
  padding:20px;
  box-shadow:0 10px 34px rgba(17,17,17,0.06);
}
.preview-meta{
  margin-bottom:14px;
  font-size:12px;
  color:var(--muted);
}
.btn{
  border:1px solid var(--border);
  background:transparent;
  color:var(--text);
  border-radius:10px;
  padding:0.56rem 0.9rem;
  font:500 0.86rem/1.2 inherit;
  cursor:pointer;
}
.btn-primary{background:var(--accent);color:#fff;border-color:var(--accent)}
.btn-secondary{background:var(--surface);color:var(--text)}
.btn-ghost{background:transparent;color:var(--muted)}
.input-group{display:flex;flex-direction:column;gap:0.38rem}
.input-label{font-size:0.8rem;font-weight:600;color:var(--text)}
.input-hint{font-size:0.77rem;color:var(--muted);margin:0}
.input,textarea.input{
  width:100%;
  border:1px solid var(--border);
  border-radius:10px;
  padding:0.6rem 0.75rem;
  font:400 0.9rem/1.4 inherit;
  background:var(--surface);
  color:var(--text);
}
.avatar{
  border-radius:9999px;
  display:inline-flex;
  align-items:center;
  justify-content:center;
}
.avatar-fallback{
  border:1px solid var(--border);
  background:var(--accent-dim);
  color:var(--text);
  font-weight:600;
}
.code-wrap{
  border:1px solid var(--border);
  border-radius:12px;
  background:#0f0f10;
  color:#e8e8e8;
  overflow:auto;
}
.code-wrap pre{
  margin:0;
  padding:14px;
  font:12px/1.65 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;
}
.css-demo{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
  gap:10px;
  margin-bottom:14px;
}
.css-card{
  border:1px solid var(--border);
  border-radius:10px;
  background:var(--surface);
  padding:10px;
  display:flex;
  flex-direction:column;
  gap:8px;
}
`;

function escapeHtml(text: string) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderPreview(block: Block) {
  if (block.lang === "html") {
    return `
<div class="preview-shell">
  <div class="preview-stage">
    ${block.code ?? "<p>No HTML preview code available.</p>"}
  </div>
</div>`;
  }

  if (block.lang === "css") {
    const cssCode = block.code ?? "";
    return `
<div class="preview-shell">
  <div class="preview-stage">
    <p class="preview-meta">CSS block preview sample</p>
    <div class="css-demo">
      <article class="css-card">
        <span class="input-label">Primary Action</span>
        <button class="btn btn-primary">Continue</button>
      </article>
      <article class="css-card">
        <span class="input-label">Input Surface</span>
        <input class="input" placeholder="you@example.com" />
      </article>
      <article class="css-card">
        <span class="input-label">Subtle Surface</span>
        <p class="input-hint">Token and spacing effects appear here.</p>
      </article>
    </div>
    <style>${cssCode}</style>
    <div class="code-wrap"><pre><code>${escapeHtml(cssCode)}</code></pre></div>
  </div>
</div>`;
  }

  const code = block.code ?? "";
  return `
<div class="preview-shell">
  <div class="preview-stage">
    <p class="preview-meta">${block.lang ? block.lang.toUpperCase() : "CODE"} snippet</p>
    <div class="code-wrap"><pre><code>${escapeHtml(code)}</code></pre></div>
  </div>
</div>`;
}

function renderNotFound() {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Preview Not Found</title>
    <style>${SHARED_BASE_CSS}</style>
  </head>
  <body>
    <div class="preview-shell">
      <div class="preview-stage">
        <h1 style="margin-top:0">Preview not found</h1>
        <p class="input-hint">The requested block does not exist in this category.</p>
      </div>
    </div>
  </body>
</html>`;
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string; blockId: string }> },
) {
  const { slug, blockId } = await params;
  const category = getCategoryBySlug(slug);
  const block = getBlockFromCategory(slug, blockId);

  if (!category || !block) {
    return new Response(renderNotFound(), {
      status: 404,
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "no-store",
      },
    });
  }

  const documentHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>${escapeHtml(block.title)} Preview</title>
    <style>${SHARED_BASE_CSS}</style>
  </head>
  <body>
    ${renderPreview(block)}
  </body>
</html>`;

  return new Response(documentHtml, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=0, s-maxage=120",
    },
  });
}
