export interface Block {
  id: string;
  title: string;
  description: string;
  tags: string[];
  code?: string;
  lang?: "css" | "html" | "tsx" | "js";
}

export const blocksByCategory: Record<string, Block[]> = {
  "color-systems": [
    { id: "r1", title: "Primary Palette", description: "Five-tone core color system with light, mid, and dark variations.", tags: ["Core", "CSS"], lang: "css", code: `:root {
  --color-50:  #FEF3E8;
  --color-100: #FDE0C2;
  --color-200: #FAC08A;
  --color-300: #F59A52;
  --color-400: #E8782A;
  --color-500: #C4640A; /* ana */
  --color-600: #A35208;
  --color-700: #7A3D06;
  --color-800: #522904;
  --color-900: #2E1602;
}` },
    { id: "r2", title: "Neutral Gray Scale", description: "Ten-step gray scale optimized for interface surfaces.", tags: ["Neutral", "CSS"], lang: "css", code: `:root {
  --gray-50:  #FAFAF8;
  --gray-100: #F2F1EE;
  --gray-200: #E4E2DC;
  --gray-300: #D0CCC4;
  --gray-400: #B0AB A4;
  --gray-500: #8A8680;
  --gray-600: #6A6660;
  --gray-700: #4A4844;
  --gray-800: #2E2C2A;
  --gray-900: #1C1A17;
}` },
    { id: "r3", title: "Semantic Colors", description: "Color tokens for success, warning, error, and info states.", tags: ["State", "CSS"], lang: "css", code: `:root {
  /* Success */
  --color-success:     #22C55E;
  --color-success-bg:  rgba(34, 197, 94, 0.10);

  /* Warning */
  --color-warning:     #F59E0B;
  --color-warning-bg:  rgba(245, 158, 11, 0.10);

  /* Hata */
  --color-error:       #EF4444;
  --color-error-bg:    rgba(239, 68, 68, 0.10);

  /* Bilgi */
  --color-info:        #3B82F6;
  --color-info-bg:     rgba(59, 130, 246, 0.10);
}` },
    { id: "r4", title: "Dark Mode Pair", description: "Color pairs that switch automatically for light and dark mode.", tags: ["Dark Mode", "CSS"], lang: "css", code: `:root {
  --bg:      #F8F7F4;
  --surface: #FFFFFF;
  --border:  #E4E0D8;
  --text:    #1C1A17;
  --muted:   #9A9590;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg:      #0D0C0A;
    --surface: #141210;
    --border:  #252220;
    --text:    #F2EDE4;
    --muted:   #6A6560;
  }
}` },
    { id: "r5", title: "Gradient Library", description: "8 ready gradient combinations for hero and card backgrounds.", tags: ["Gradient", "CSS"], lang: "css", code: `.grad-warm    { background: linear-gradient(135deg, #C4640A, #E8A050); }
.grad-cool    { background: linear-gradient(135deg, #1A4A6A, #3A8AAA); }
.grad-nature  { background: linear-gradient(135deg, #2A5A3A, #5A9A6A); }
.grad-purple  { background: linear-gradient(135deg, #4A2A6A, #8A5AAA); }
.grad-sunset  { background: linear-gradient(135deg, #C4640A, #8A3A6A); }
.grad-ocean   { background: linear-gradient(135deg, #1A3A6A, #2A8A9A); }
.grad-neutral { background: linear-gradient(135deg, #3A3836, #7A7876); }
.grad-soft    { background: linear-gradient(135deg, #F2EDE4, #E4D8C8); }` },
    { id: "r6", title: "Accessibility Contrast", description: "WCAG AA/AAA compliant color pair table.", tags: ["A11y", "CSS"], lang: "css", code: `/* WCAG AA -> min contrast 4.5:1 (normal text) */
/* WCAG AAA → min kontrast 7:1   (normal metin) */

/* ✅ AAA uyumlu kombinasyonlar */
.text-on-white  { color: #1C1A17; } /* 16.8:1 */
.text-on-light  { color: #3A3836; } /* 10.2:1 */
.accent-on-white { color: #8A3A06; } /* 7.1:1 */

/* ✅ AA uyumlu */
.accent-normal  { color: #C4640A; } /* 4.6:1 on white */

/* ❌ Yetersiz (kullanma) */
/* color: #E8A050 on white → 2.4:1 */` },
    { id: "r7", title: "Brand Color System", description: "A complete hierarchy for primary, secondary, and accent colors.", tags: ["Brand", "CSS"], lang: "css", code: `:root {
  /* Primary - trust, authority */
  --brand-primary:   #C4640A;
  --brand-primary-2: #A35208;

  /* Secondary — denge, destek */
  --brand-secondary:   #2A5A6A;
  --brand-secondary-2: #1A3A4A;

  /* Accent - attention */
  --brand-accent: #8A3A6A;

  /* Neutral zemin */
  --brand-bg:      #F8F7F4;
  --brand-surface: #FFFFFF;
  --brand-border:  #E4E0D8;
}` },
    { id: "r8", title: "Custom Tailwind Palette", description: "Ready-made custom color definitions for Tailwind config.", tags: ["Tailwind", "JS"], lang: "js", code: `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#FEF3E8',
          100: '#FDE0C2',
          200: '#FAC08A',
          300: '#F59A52',
          400: '#E8782A',
          500: '#C4640A',
          600: '#A35208',
          700: '#7A3D06',
          800: '#522904',
          900: '#2E1602',
        },
        gray: {
          50: '#FAFAF8',
          900: '#1C1A17',
        },
      },
    },
  },
}` },
  ],

  "typography": [
    { id: "t1", title: "Type Scale", description: "A linear type scale from 12px to 96px with line-height values.", tags: ["Scale", "CSS"], lang: "css", code: `:root {
  --text-xs:   0.75rem;  /* 12px */
  --text-sm:   0.875rem; /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg:   1.125rem; /* 18px */
  --text-xl:   1.25rem;  /* 20px */
  --text-2xl:  1.5rem;   /* 24px */
  --text-3xl:  1.875rem; /* 30px */
  --text-4xl:  2.25rem;  /* 36px */
  --text-5xl:  3rem;     /* 48px */
  --text-6xl:  4rem;     /* 64px */

  /* Line heights */
  --leading-tight:  1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
}` },
    { id: "t2", title: "Font Pair — Serif + Sans", description: "Editorial heading + clean body font pairing.", tags: ["Font", "CSS"], lang: "css", code: `/* Google Fonts import */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

:root {
  --font-display: 'Playfair Display', Georgia, serif;
  --font-body:    'DM Sans', system-ui, sans-serif;
}

h1, h2, h3 {
  font-family: var(--font-display);
  font-weight: 400;
  letter-spacing: -0.03em;
}

p, span, button {
  font-family: var(--font-body);
  font-weight: 300;
}` },
    { id: "t3", title: "Display Hierarchy", description: "Complete style definitions for H1–H6, paragraphs, and captions.", tags: ["Hierarchy", "CSS"], lang: "css", code: `h1 { font-size: 3rem;    font-weight: 700; line-height: 1.1; letter-spacing: -0.03em; }
h2 { font-size: 2.25rem; font-weight: 600; line-height: 1.2; letter-spacing: -0.02em; }
h3 { font-size: 1.75rem; font-weight: 500; line-height: 1.3; }
h4 { font-size: 1.25rem; font-weight: 500; line-height: 1.4; }
h5 { font-size: 1rem;    font-weight: 500; line-height: 1.5; }
h6 { font-size: 0.875rem;font-weight: 500; line-height: 1.5; }

p       { font-size: 1rem;     line-height: 1.65; font-weight: 300; }
.caption { font-size: 0.75rem; line-height: 1.5;  color: var(--muted); }` },
    { id: "t4", title: "Mono Code Block", description: "Monospace style optimized for code display.", tags: ["Mono", "CSS"], lang: "css", code: `code, pre {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.875em;
  font-variant-ligatures: common-ligatures;
}

pre {
  background: #1C1A17;
  color: #F2EDE4;
  padding: 1.25rem 1.5rem;
  border-radius: 0.625rem;
  overflow-x: auto;
  line-height: 1.7;
}

:not(pre) > code {
  background: rgba(196, 100, 10, 0.10);
  color: #C4640A;
  padding: 0.15em 0.4em;
  border-radius: 0.25em;
}` },
    { id: "t5", title: "Responsive Typography", description: "Fluid font sizes with clamp() for all screens.", tags: ["Responsive", "CSS"], lang: "css", code: `/* clamp(min, tercih, maks) */
h1 { font-size: clamp(2.5rem, 6vw, 6rem);   }
h2 { font-size: clamp(2rem,   4vw, 3.75rem); }
h3 { font-size: clamp(1.5rem, 3vw, 2.5rem);  }
p  { font-size: clamp(1rem,   1.5vw, 1.125rem); }

/* Alternatif: fluid spacing */
.section {
  padding: clamp(2rem, 5vw, 6rem) clamp(1rem, 5vw, 2rem);
}` },
    { id: "t6", title: "Letter Spacing System", description: "Letter-spacing tokens - tight, normal, wide, wider.", tags: ["Token", "CSS"], lang: "css", code: `:root {
  --tracking-tighter: -0.05em;
  --tracking-tight:   -0.025em;
  --tracking-normal:   0em;
  --tracking-wide:     0.05em;
  --tracking-wider:    0.1em;
  --tracking-widest:   0.2em;
}

/* Usage */
.display-text { letter-spacing: var(--tracking-tighter); }
.label        { letter-spacing: var(--tracking-widest); text-transform: uppercase; }` },
  ],

  "grid-layout": [
    { id: "g1", title: "12-Column Grid", description: "CSS Grid ile 12 kolonlu standart layout sistemi.", tags: ["Grid", "CSS"], lang: "css", code: `.container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Usage */
.col-4  { grid-column: span 4; }
.col-6  { grid-column: span 6; }
.col-8  { grid-column: span 8; }
.col-12 { grid-column: span 12; }

@media (max-width: 768px) {
  .col-4, .col-6, .col-8 { grid-column: span 12; }
}` },
    { id: "g2", title: "Holy Grail Layout", description: "Header + sidebar + main + footer klasik layout.", tags: ["Layout", "CSS"], lang: "css", code: `.page {
  display: grid;
  grid-template:
    "header  header  header"  auto
    "sidebar main    aside"   1fr
    "footer  footer  footer"  auto
    / 220px  1fr     200px;
  min-height: 100vh;
  gap: 0;
}

header  { grid-area: header;  }
.sidebar{ grid-area: sidebar; }
main    { grid-area: main;    }
aside   { grid-area: aside;   }
footer  { grid-area: footer;  }

@media (max-width: 768px) {
  .page { grid-template:
    "header" auto "main" 1fr "footer" auto / 1fr; }
  .sidebar, aside { display: none; }
}` },
    { id: "g3", title: "Masonry Grid", description: "Masonry layout that adapts to varied heights.", tags: ["Masonry", "CSS"], lang: "css", code: `/* CSS Columns method */
.masonry {
  columns: 3 280px;
  column-gap: 1rem;
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 1rem;
}

/* Modern: CSS Grid subgrid (Chrome 117+) */
@supports (grid-template-rows: masonry) {
  .masonry {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: masonry;
    gap: 1rem;
  }
}` },
    { id: "g4", title: "Dashboard Layout", description: "Side menu + top bar + content area.", tags: ["Dashboard", "CSS"], lang: "css", code: `.dashboard {
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 60px 1fr;
  height: 100vh;
}

.topbar  { grid-column: 1 / -1; border-bottom: 1px solid var(--border); }
.sidebar { border-right: 1px solid var(--border); overflow-y: auto; }
.content { overflow-y: auto; padding: 2rem; }

/* Collapsed sidebar */
.dashboard.collapsed { grid-template-columns: 64px 1fr; }` },
    { id: "g5", title: "Bento Grid", description: "Modern bento layout composed of varied card sizes.", tags: ["Bento", "CSS"], lang: "css", code: `.bento {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 180px;
  gap: 1rem;
}

.bento-wide  { grid-column: span 2; }
.bento-tall  { grid-row: span 2; }
.bento-large { grid-column: span 2; grid-row: span 2; }

@media (max-width: 768px) {
  .bento { grid-template-columns: repeat(2, 1fr); }
  .bento-wide, .bento-large { grid-column: span 2; }
}` },
    { id: "g6", title: "Split Screen", description: "Full-screen layout split into two equal columns.", tags: ["Split", "CSS"], lang: "css", code: `.split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
}

.split-left  { background: var(--bg); padding: 4rem; }
.split-right { background: var(--text); color: var(--bg); padding: 4rem; }

@media (max-width: 768px) {
  .split { grid-template-columns: 1fr; }
  .split-right { min-height: 50vh; }
}` },
    { id: "g7", title: "Magazine Layout", description: "Editorial magazine-style asymmetric grid.", tags: ["Editorial", "CSS"], lang: "css", code: `.magazine {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 120px;
  gap: 1rem;
}

.feature   { grid-column: span 4; grid-row: span 3; }
.secondary { grid-column: span 2; grid-row: span 2; }
.tertiary  { grid-column: span 2; grid-row: span 1; }
.wide      { grid-column: span 6; grid-row: span 1; }` },
    { id: "g8", title: "Sticky Sidebar", description: "Sidebar layout that stays fixed while scrolling.", tags: ["Sticky", "CSS"], lang: "css", code: `.layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 3rem;
  align-items: start;
}

.sidebar {
  position: sticky;
  top: 2rem;
  max-height: calc(100vh - 4rem);
  overflow-y: auto;
}

@media (max-width: 900px) {
  .layout { grid-template-columns: 1fr; }
  .sidebar { position: static; }
}` },
    { id: "g9", title: "Centered Narrow", description: "Centered content column with 650px max width.", tags: ["Blog", "CSS"], lang: "css", code: `.prose {
  max-width: 660px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.prose p    { line-height: 1.8; margin-bottom: 1.5rem; }
.prose h2   { margin-top: 3rem; margin-bottom: 1rem; }
.prose img  { width: 100%; border-radius: 0.75rem; margin: 2rem 0; }
.prose code { font-size: 0.875em; }` },
  ],

  "ui-components": [
    { id: "u1", title: "Button Family", description: "Primary, secondary, ghost, destructive varyantlar.", tags: ["Buton", "CSS"], lang: "css", code: `.btn {
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 0.5rem 1.25rem; border-radius: 0.5rem;
  font-size: 0.875rem; font-weight: 500; cursor: pointer;
  transition: all 0.15s; border: 1px solid transparent;
}
.btn-primary     { background: var(--accent); color: #fff; }
.btn-primary:hover { opacity: 0.88; }

.btn-secondary   { border-color: var(--accent); color: var(--accent); }
.btn-secondary:hover { background: var(--accent-dim); }

.btn-ghost       { color: var(--muted); }
.btn-ghost:hover { background: var(--border); color: var(--text); }

.btn-destructive { background: #EF4444; color: #fff; }
.btn-sm { padding: 0.35rem 0.875rem; font-size: 0.75rem; }
.btn-lg { padding: 0.75rem 2rem;     font-size: 1rem; }` },
    { id: "u2", title: "Input Fields", description: "Text, email, password, textarea + error/success states.", tags: ["Form", "CSS"], lang: "css", code: `.input-group { display: flex; flex-direction: column; gap: 0.375rem; }

.input-label {
  font-size: 0.75rem; font-weight: 500;
  letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted);
}

.input {
  padding: 0.625rem 0.875rem;
  border: 1px solid var(--border); border-radius: 0.5rem;
  font-size: 0.9375rem; background: var(--surface); color: var(--text);
  transition: border-color 0.15s, box-shadow 0.15s;
  outline: none;
}
.input:focus { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-dim); }
.input.error { border-color: #EF4444; }
.input.error:focus { box-shadow: 0 0 0 3px rgba(239,68,68,0.12); }

.input-hint  { font-size: 0.75rem; color: var(--muted); }
.input-error { font-size: 0.75rem; color: #EF4444; }` },
    { id: "u3", title: "Badge & Chip", description: "Status indicators, labels, and category chips.", tags: ["Badge", "CSS"], lang: "css", code: `.badge {
  display: inline-flex; align-items: center; gap: 0.375rem;
  padding: 0.25rem 0.625rem; border-radius: 9999px;
  font-size: 0.6875rem; font-weight: 500;
  letter-spacing: 0.06em; text-transform: uppercase;
}

.badge-default  { background: var(--border); color: var(--muted); }
.badge-accent   { background: var(--accent-dim); color: var(--accent); border: 1px solid rgba(196,100,10,.25); }
.badge-success  { background: rgba(34,197,94,.1); color: #16A34A; }
.badge-warning  { background: rgba(245,158,11,.1); color: #D97706; }
.badge-error    { background: rgba(239,68,68,.1); color: #DC2626; }
.badge-dot::before {
  content: ''; display: block;
  width: 6px; height: 6px; border-radius: 50%; background: currentColor;
}` },
    { id: "u4", title: "Modal / Dialog", description: "Overlay modal with header + content + footer structure.", tags: ["Modal", "HTML"], lang: "html", code: `<dialog class="modal">
  <div class="modal-box">
    <div class="modal-header">
      <h2>Title</h2>
      <button class="modal-close" aria-label="Kapat">✕</button>
    </div>
    <div class="modal-body">
      <p>Modal content goes here.</p>
    </div>
    <div class="modal-footer">
      <button class="btn btn-ghost">Cancel</button>
      <button class="btn btn-primary">Onayla</button>
    </div>
  </div>
</dialog>

<style>
dialog::backdrop { background: rgba(0,0,0,0.5); backdrop-filter: blur(4px); }
.modal-box { background: var(--surface); border-radius: 1rem; padding: 1.5rem; min-width: 420px; }
.modal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
.modal-footer { display: flex; justify-content: flex-end; gap: 0.75rem; margin-top: 1.5rem; }
</style>` },
    { id: "u5", title: "Tooltip", description: "Hover tooltip with top, bottom, right, left positions.", tags: ["Tooltip", "CSS"], lang: "css", code: `[data-tooltip] { position: relative; }

[data-tooltip]::after {
  content: attr(data-tooltip);
  position: absolute; bottom: calc(100% + 8px); left: 50%;
  transform: translateX(-50%) translateY(4px);
  background: #1C1A17; color: #F2EDE4;
  font-size: 0.75rem; white-space: nowrap;
  padding: 0.375rem 0.75rem; border-radius: 0.375rem;
  opacity: 0; pointer-events: none;
  transition: opacity 0.15s, transform 0.15s;
}

[data-tooltip]:hover::after {
  opacity: 1; transform: translateX(-50%) translateY(0);
}

/* Usage: <button data-tooltip="Description">Button</button> */` },
    { id: "u6", title: "Dropdown Menu", description: "Accessible keyboard-navigable dropdown menu.", tags: ["Dropdown", "HTML"], lang: "html", code: `<div class="dropdown">
  <button class="btn btn-ghost dropdown-trigger" aria-expanded="false">
    Menu ▾
  </button>
  <ul class="dropdown-menu" role="menu">
    <li role="menuitem"><a href="#">Profile</a></li>
    <li role="menuitem"><a href="#">Ayarlar</a></li>
    <li class="dropdown-divider"></li>
    <li role="menuitem"><a href="#" class="text-error">Sign out</a></li>
  </ul>
</div>

<style>
.dropdown { position: relative; display: inline-block; }
.dropdown-menu {
  position: absolute; top: calc(100% + 6px); left: 0; min-width: 180px;
  background: var(--surface); border: 1px solid var(--border);
  border-radius: 0.625rem; padding: 0.375rem; list-style: none;
  box-shadow: 0 8px 24px rgba(0,0,0,0.10); opacity: 0; pointer-events: none;
  transform: translateY(-4px); transition: all 0.15s;
}
.dropdown:focus-within .dropdown-menu { opacity: 1; pointer-events: auto; transform: none; }
.dropdown-menu a { display: block; padding: 0.5rem 0.75rem; border-radius: 0.375rem; }
.dropdown-menu a:hover { background: var(--border); }
.dropdown-divider { height: 1px; background: var(--border); margin: 0.375rem 0; }
</style>` },
    { id: "u7", title: "Toast Notifications", description: "Success, error, and warning toast messages with animation.", tags: ["Toast", "CSS"], lang: "css", code: `.toast-container {
  position: fixed; bottom: 1.5rem; right: 1.5rem;
  display: flex; flex-direction: column; gap: 0.75rem; z-index: 1000;
}

.toast {
  display: flex; align-items: center; gap: 0.75rem;
  padding: 0.875rem 1.125rem; border-radius: 0.75rem;
  background: var(--surface); border: 1px solid var(--border);
  box-shadow: 0 4px 16px rgba(0,0,0,0.10);
  font-size: 0.875rem; min-width: 280px;
  animation: toastIn 0.3s cubic-bezier(0.16,1,0.3,1);
}

.toast-success { border-left: 3px solid #22C55E; }
.toast-error   { border-left: 3px solid #EF4444; }
.toast-warning { border-left: 3px solid #F59E0B; }

@keyframes toastIn {
  from { opacity: 0; transform: translateX(100%); }
  to   { opacity: 1; transform: translateX(0); }
}` },
    { id: "u8", title: "Skeleton Loader", description: "Skeleton interface shown while content is loading.", tags: ["Loading", "CSS"], lang: "css", code: `.skeleton {
  background: linear-gradient(
    90deg,
    var(--border) 25%,
    color-mix(in srgb, var(--border) 60%, white) 50%,
    var(--border) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 0.375rem;
}

@keyframes shimmer {
  from { background-position: 200% 0; }
  to   { background-position: -200% 0; }
}

/* Usage */
.skeleton-text   { height: 1rem; margin-bottom: 0.5rem; }
.skeleton-title  { height: 1.5rem; width: 60%; margin-bottom: 1rem; }
.skeleton-avatar { width: 3rem; height: 3rem; border-radius: 50%; }
.skeleton-card   { height: 200px; }` },
    { id: "u9", title: "Avatar Group", description: "Single and grouped avatar component with fallback.", tags: ["Avatar", "HTML"], lang: "html", code: `<!-- Single avatar -->
<div class="avatar">
  <img src="foto.jpg" alt="Ad Soyad" />
</div>

<!-- Fallback (resim yoksa) -->
<div class="avatar avatar-fallback">AS</div>

<!-- Grup -->
<div class="avatar-group">
  <div class="avatar"><img src="1.jpg" alt="" /></div>
  <div class="avatar"><img src="2.jpg" alt="" /></div>
  <div class="avatar avatar-fallback">+3</div>
</div>

<style>
.avatar {
  width: 2.5rem; height: 2.5rem; border-radius: 50%;
  overflow: hidden; border: 2px solid var(--surface);
  background: var(--border);
}
.avatar img { width: 100%; height: 100%; object-fit: cover; }
.avatar-fallback {
  display: flex; align-items: center; justify-content: center;
  font-size: 0.75rem; font-weight: 500;
  background: var(--accent-dim); color: var(--accent);
}
.avatar-group { display: flex; }
.avatar-group .avatar { margin-left: -0.75rem; }
.avatar-group .avatar:first-child { margin-left: 0; }
</style>` },
    { id: "u10", title: "Accordion", description: "Expandable content panels.", tags: ["Accordion", "HTML"], lang: "html", code: `<details class="accordion">
  <summary class="accordion-trigger">
    <span>Question title</span>
    <span class="accordion-icon">+</span>
  </summary>
  <div class="accordion-content">
    <p>Answer content goes here.</p>
  </div>
</details>

<style>
.accordion {
  border: 1px solid var(--border);
  border-radius: 0.625rem; overflow: hidden;
}
.accordion-trigger {
  display: flex; justify-content: space-between; align-items: center;
  padding: 1rem 1.25rem; cursor: pointer; list-style: none;
  font-weight: 500;
}
.accordion-trigger::-webkit-details-marker { display: none; }
details[open] .accordion-icon { transform: rotate(45deg); }
.accordion-icon { transition: transform 0.2s; }
.accordion-content { padding: 0 1.25rem 1rem; color: var(--muted); }
</style>` },
    { id: "u11", title: "Progress Bar", description: "Linear and circular progress indicators.", tags: ["Progress", "HTML"], lang: "html", code: `<!-- Linear -->
<div class="progress-bar">
  <div class="progress-fill" style="width: 65%"></div>
</div>

<!-- Etiketli -->
<div class="progress-labeled">
  <div style="display:flex;justify-content:space-between;margin-bottom:0.375rem">
    <span>Progress</span><span>65%</span>
  </div>
  <div class="progress-bar">
    <div class="progress-fill" style="width: 65%"></div>
  </div>
</div>

<style>
.progress-bar {
  height: 0.5rem; background: var(--border);
  border-radius: 9999px; overflow: hidden;
}
.progress-fill {
  height: 100%; background: var(--accent);
  border-radius: 9999px;
  transition: width 0.4s cubic-bezier(0.16,1,0.3,1);
}
</style>` },
    { id: "u12", title: "Tabs", description: "Sekme navigationu, aktif durum animasyonlu.", tags: ["Tabs", "HTML"], lang: "html", code: `<div class="tabs">
  <div class="tab-list" role="tablist">
    <button class="tab active" role="tab">Genel</button>
    <button class="tab" role="tab">Security</button>
    <button class="tab" role="tab">Bildirimler</button>
  </div>
  <div class="tab-panel">Content here</div>
</div>

<style>
.tab-list {
  display: flex; gap: 0; border-bottom: 1px solid var(--border); margin-bottom: 1.5rem;
}
.tab {
  padding: 0.625rem 1.25rem; font-size: 0.875rem; color: var(--muted);
  border: none; background: none; cursor: pointer; position: relative;
  transition: color 0.15s;
}
.tab::after {
  content: ''; position: absolute; bottom: -1px; left: 0; right: 0;
  height: 2px; background: var(--accent); opacity: 0; transition: opacity 0.15s;
}
.tab.active { color: var(--text); }
.tab.active::after { opacity: 1; }
</style>` },
    { id: "u13", title: "Toggle Switch", description: "On/off toggle switches.", tags: ["Toggle", "HTML"], lang: "html", code: `<label class="toggle">
  <input type="checkbox" class="toggle-input" />
  <span class="toggle-track">
    <span class="toggle-thumb"></span>
  </span>
  <span class="toggle-label">Bildirimler</span>
</label>

<style>
.toggle { display: flex; align-items: center; gap: 0.75rem; cursor: pointer; }
.toggle-input { position: absolute; opacity: 0; width: 0; height: 0; }
.toggle-track {
  width: 2.75rem; height: 1.5rem; border-radius: 9999px;
  background: var(--border); position: relative; transition: background 0.2s;
}
.toggle-input:checked + .toggle-track { background: var(--accent); }
.toggle-thumb {
  position: absolute; top: 3px; left: 3px;
  width: 1.125rem; height: 1.125rem; border-radius: 50%;
  background: white; box-shadow: 0 1px 4px rgba(0,0,0,0.2);
  transition: transform 0.2s cubic-bezier(0.16,1,0.3,1);
}
.toggle-input:checked ~ .toggle-track .toggle-thumb { transform: translateX(1.25rem); }
</style>` },
    { id: "u14", title: "Command Palette", description: "Command palette triggered with Cmd+K.", tags: ["Command", "HTML"], lang: "html", code: `<div class="cmd-palette" id="palette" hidden>
  <div class="cmd-backdrop" onclick="closePalette()"></div>
  <div class="cmd-box">
    <div class="cmd-input-wrap">
      <span>⌘</span>
      <input class="cmd-input" placeholder="Ara veya komut gir..." />
    </div>
    <ul class="cmd-results">
      <li class="cmd-item">Home</li>
      <li class="cmd-item cmd-active">Ayarlar</li>
      <li class="cmd-item">Belgeler</li>
    </ul>
  </div>
</div>

<style>
.cmd-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.5); }
.cmd-box {
  position: fixed; top: 20vh; left: 50%; transform: translateX(-50%);
  width: min(580px, 90vw); background: var(--surface);
  border: 1px solid var(--border); border-radius: 1rem;
  box-shadow: 0 16px 64px rgba(0,0,0,0.2); overflow: hidden;
}
.cmd-input-wrap { display: flex; align-items: center; gap: 0.75rem; padding: 1rem; border-bottom: 1px solid var(--border); }
.cmd-input { flex: 1; border: none; background: none; font-size: 1rem; outline: none; }
.cmd-item { padding: 0.75rem 1rem; cursor: pointer; }
.cmd-item:hover, .cmd-active { background: var(--border); }
</style>` },
  ],

  "icon-systems": [
    { id: "i1", title: "16px Icon Grid", description: "16px base-size icon design grid system.", tags: ["Grid", "CSS"], lang: "css", code: `/* SVG icon sizing standard */
.icon    { width: 1rem;    height: 1rem; }    /* 16px */
.icon-sm { width: 0.75rem; height: 0.75rem; } /* 12px */
.icon-md { width: 1.25rem; height: 1.25rem; } /* 20px */
.icon-lg { width: 1.5rem;  height: 1.5rem; }  /* 24px */
.icon-xl { width: 2rem;    height: 2rem; }    /* 32px */

/* Color inheritance */
svg { fill: none; stroke: currentColor; }

/* Inside button */
.btn .icon { flex-shrink: 0; }` },
    { id: "i2", title: "Stroke Icon Set", description: "40+ core icons with consistent 1.5px stroke.", tags: ["Stroke", "HTML"], lang: "html", code: `<!-- Base SVG icon template -->
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24" height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="1.5"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <!-- Ev ikonu -->
  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
  <polyline points="9 22 9 12 15 12 15 22"/>
</svg>` },
    { id: "i3", title: "Filled Icon Set", description: "Filled-style icon collection.", tags: ["Filled", "HTML"], lang: "html", code: `<!-- Filled SVG icon template -->
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24" height="24"
  viewBox="0 0 24 24"
>
  <!-- Kalp ikonu (filled) -->
  <path
    fill="currentColor"
    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
       2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
       C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5
       c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
  />
</svg>` },
    { id: "i4", title: "Animated Icons", description: "CSS-animated hamburger, check, and loading icons.", tags: ["Animation", "CSS"], lang: "css", code: `/* Hamburger -> X transform */
.hamburger { display: flex; flex-direction: column; gap: 5px; cursor: pointer; }
.hamburger span {
  width: 22px; height: 2px; background: currentColor;
  transition: transform 0.3s, opacity 0.3s;
  transform-origin: center;
}
.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* Loading spinner */
.spinner {
  width: 20px; height: 20px; border-radius: 50%;
  border: 2px solid var(--border);
  border-top-color: var(--accent);
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }` },
    { id: "i5", title: "Social Media Icons", description: "GitHub, Twitter, Instagram, LinkedIn SVG icons.", tags: ["Social", "HTML"], lang: "html", code: `<!-- GitHub -->
<svg viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
</svg>` },
  ],

  "spacing-sizing": [
    { id: "a1", title: "4px Base Grid", description: "Spacing system based on multiples of 4px.", tags: ["Token", "CSS"], lang: "css", code: `:root {
  --space-1:  0.25rem;  /* 4px */
  --space-2:  0.5rem;   /* 8px */
  --space-3:  0.75rem;  /* 12px */
  --space-4:  1rem;     /* 16px */
  --space-5:  1.25rem;  /* 20px */
  --space-6:  1.5rem;   /* 24px */
  --space-8:  2rem;     /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
}` },
    { id: "a2", title: "T-Shirt Sizes", description: "xs/sm/md/lg/xl/2xl size scale.", tags: ["Size", "CSS"], lang: "css", code: `:root {
  /* Component sizes */
  --size-xs: 1.5rem;   /* 24px */
  --size-sm: 2rem;     /* 32px */
  --size-md: 2.5rem;   /* 40px - default */
  --size-lg: 3rem;     /* 48px */
  --size-xl: 3.5rem;   /* 56px */
  --size-2xl: 4rem;    /* 64px */

  /* Border radius scale */
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-full: 9999px;
}` },
    { id: "a3", title: "Component Padding System", description: "Standard inner spacing for buttons, cards, and inputs.", tags: ["Padding", "CSS"], lang: "css", code: `/* Button padding */
.btn-xs  { padding: 0.25rem 0.625rem; }
.btn-sm  { padding: 0.375rem 0.875rem; }
.btn-md  { padding: 0.5rem 1.25rem; }   /* default */
.btn-lg  { padding: 0.75rem 1.75rem; }

/* Kart padding */
.card-sm { padding: 1rem; }
.card-md { padding: 1.5rem; }
.card-lg { padding: 2rem; }

/* Input padding */
.input-sm { padding: 0.375rem 0.625rem; }
.input-md { padding: 0.5rem 0.875rem; }
.input-lg { padding: 0.75rem 1.125rem; }` },
    { id: "a4", title: "Responsive Spacing", description: "Spacing values that adapt to screen size.", tags: ["Responsive", "CSS"], lang: "css", code: `/* Fluid spacing with clamp */
.section { padding: clamp(3rem, 8vw, 8rem) 0; }
.container { padding: 0 clamp(1rem, 5vw, 2rem); }

/* Tailwind benzeri responsive */
.gap-responsive {
  gap: 1rem;
}
@media (min-width: 640px)  { .gap-responsive { gap: 1.5rem; } }
@media (min-width: 1024px) { .gap-responsive { gap: 2rem; } }` },
  ],

  "motion-animation": [
    { id: "h1", title: "Easing Functions", description: "Bezier values for ease-in, ease-out, and spring.", tags: ["Easing", "CSS"], lang: "css", code: `:root {
  --ease-in:     cubic-bezier(0.4, 0, 1, 1);
  --ease-out:    cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-smooth: cubic-bezier(0.16, 1, 0.3, 1);
}

/* Usage */
.card { transition: transform 0.2s var(--ease-spring); }
.card:hover { transform: translateY(-4px); }` },
    { id: "h2", title: "Fade In/Out", description: "Opacity transition animations with stagger.", tags: ["Fade", "CSS"], lang: "css", code: `/* Staggered fade-up */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

.fade-item {
  animation: fadeUp 0.55s cubic-bezier(0.16,1,0.3,1) backwards;
}

.fade-item:nth-child(1) { animation-delay: 0.05s; }
.fade-item:nth-child(2) { animation-delay: 0.10s; }
.fade-item:nth-child(3) { animation-delay: 0.15s; }
.fade-item:nth-child(4) { animation-delay: 0.20s; }` },
    { id: "h3", title: "Slide Animations", description: "Up, down, right, left slide effects.", tags: ["Slide", "CSS"], lang: "css", code: `@keyframes slideUp    { from { transform: translateY(100%); } to { transform: translateY(0); } }
@keyframes slideDown  { from { transform: translateY(-100%); } to { transform: translateY(0); } }
@keyframes slideRight { from { transform: translateX(-100%); } to { transform: translateX(0); } }
@keyframes slideLeft  { from { transform: translateX(100%); } to { transform: translateX(0); } }

.slide-up    { animation: slideUp    0.3s var(--ease-out); }
.slide-down  { animation: slideDown  0.3s var(--ease-out); }
.slide-right { animation: slideRight 0.3s var(--ease-out); }
.slide-left  { animation: slideLeft  0.3s var(--ease-out); }` },
    { id: "h4", title: "Scale & Bounce", description: "Scale and bounce micro-interactions.", tags: ["Scale", "CSS"], lang: "css", code: `@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.9); }
  to   { opacity: 1; transform: scale(1); }
}

@keyframes bounceIn {
  0%   { transform: scale(0.3);  opacity: 0; }
  50%  { transform: scale(1.05); }
  70%  { transform: scale(0.9);  }
  100% { transform: scale(1);    opacity: 1; }
}

/* Button click */
.btn:active { transform: scale(0.96); }

/* Kart hover */
.card { transition: transform 0.2s cubic-bezier(0.34,1.56,0.64,1); }
.card:hover { transform: scale(1.02); }` },
    { id: "h5", title: "Loading Spinner", description: "3 different loading animations.", tags: ["Loading", "CSS"], lang: "css", code: `/* 1. Ring spinner */
.spinner-ring {
  width: 24px; height: 24px; border-radius: 50%;
  border: 2.5px solid var(--border);
  border-top-color: var(--accent);
  animation: spin 0.7s linear infinite;
}

/* 2. Dots */
.spinner-dots { display: flex; gap: 5px; }
.spinner-dots span {
  width: 7px; height: 7px; border-radius: 50%; background: var(--accent);
  animation: dotPulse 1.2s infinite;
}
.spinner-dots span:nth-child(2) { animation-delay: 0.2s; }
.spinner-dots span:nth-child(3) { animation-delay: 0.4s; }

@keyframes spin     { to { transform: rotate(360deg); } }
@keyframes dotPulse { 0%,80%,100% { transform: scale(0); } 40% { transform: scale(1); } }` },
    { id: "h6", title: "Page Transition", description: "View Transition API for page transitions.", tags: ["Transition", "JS"], lang: "js", code: `// View Transitions API (Chrome 111+)
async function navigateTo(url) {
  if (!document.startViewTransition) {
    window.location.href = url;
    return;
  }

  document.startViewTransition(async () => {
    const response = await fetch(url);
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    document.body.innerHTML = doc.body.innerHTML;
    window.history.pushState({}, '', url);
  });
}

/* CSS */
/* ::view-transition-old(root) { animation: fadeOut 0.2s ease; }
   ::view-transition-new(root) { animation: fadeIn  0.2s ease; } */` },
    { id: "h7", title: "Scroll Animations", description: "Scroll-triggered reveal animations.", tags: ["Scroll", "JS"], lang: "js", code: `// Intersection Observer ile scroll reveal
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el);
});

/* CSS */
/* .reveal { opacity: 0; transform: translateY(24px); transition: all 0.6s cubic-bezier(0.16,1,0.3,1); }
   .reveal.revealed { opacity: 1; transform: none; } */` },
  ],

  "form-patterns": [
    { id: "f1", title: "Login Form", description: "Email + password + submit, including validation.", tags: ["Auth", "HTML"], lang: "html", code: `<form class="login-form" novalidate>
  <h1>Sign in</h1>
  <div class="input-group">
    <label class="input-label" for="email">E-posta</label>
    <input class="input" id="email" type="email" placeholder="ad@ornek.com" required />
  </div>
  <div class="input-group">
    <label class="input-label" for="password">Password</label>
    <input class="input" id="password" type="password" required />
    <a href="#" class="input-hint" style="text-align:right">Passwordmi unuttum</a>
  </div>
  <button type="submit" class="btn btn-primary" style="width:100%">Sign in</button>
  <p class="input-hint" style="text-align:center">
    Don't have an account? <a href="#">Sign up</a>
  </p>
</form>` },
    { id: "f2", title: "Registration Form", description: "Multi-step registration flow.", tags: ["Auth", "HTML"], lang: "html", code: `<form class="register-form">
  <div class="form-row">
    <div class="input-group">
      <label class="input-label">Ad</label>
      <input class="input" type="text" placeholder="First name" />
    </div>
    <div class="input-group">
      <label class="input-label">Soyad</label>
      <input class="input" type="text" placeholder="Last name" />
    </div>
  </div>
  <div class="input-group">
    <label class="input-label">E-posta</label>
    <input class="input" type="email" />
  </div>
  <div class="input-group">
    <label class="input-label">Password</label>
    <input class="input" type="password" />
    <span class="input-hint">En az 8 karakter</span>
  </div>
  <label class="toggle">
    <input type="checkbox" class="toggle-input" />
    <span class="toggle-track"><span class="toggle-thumb"></span></span>
    <span>I want to receive the newsletter</span>
  </label>
  <button type="submit" class="btn btn-primary" style="width:100%">Create account</button>
</form>

<style>
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
</style>` },
    { id: "f3", title: "Search Bar", description: "Autocomplete search input design.", tags: ["Arama", "HTML"], lang: "html", code: `<div class="search-wrap">
  <div class="search-bar">
    <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
    </svg>
    <input class="search-input" type="search" placeholder="Ara..." />
    <kbd class="search-kbd">⌘K</kbd>
  </div>
</div>

<style>
.search-bar {
  display: flex; align-items: center; gap: 0.75rem;
  padding: 0.625rem 1rem; border: 1px solid var(--border);
  border-radius: 0.625rem; background: var(--surface);
  transition: border-color 0.15s, box-shadow 0.15s;
}
.search-bar:focus-within { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-dim); }
.search-icon { width: 1rem; height: 1rem; color: var(--muted); flex-shrink: 0; }
.search-input { flex: 1; border: none; background: none; outline: none; font-size: 0.9375rem; }
.search-kbd {
  font-family: monospace; font-size: 0.6875rem;
  padding: 0.2rem 0.4rem; border: 1px solid var(--border);
  border-radius: 0.25rem; color: var(--muted);
}
</style>` },
    { id: "f4", title: "Payment Form", description: "Card details form with trust badges.", tags: ["Payment", "HTML"], lang: "html", code: `<form class="payment-form">
  <div class="input-group">
    <label class="input-label">Card number</label>
    <input class="input" type="text" placeholder="1234 5678 9012 3456" maxlength="19" />
  </div>
  <div class="form-row">
    <div class="input-group">
      <label class="input-label">Son Kullanma</label>
      <input class="input" type="text" placeholder="AA/YY" maxlength="5" />
    </div>
    <div class="input-group">
      <label class="input-label">CVV</label>
      <input class="input" type="text" placeholder="123" maxlength="3" />
    </div>
  </div>
  <div class="input-group">
    <label class="input-label">Name on card</label>
    <input class="input" type="text" placeholder="AD SOYAD" />
  </div>
  <button class="btn btn-primary" style="width:100%">
    🔒 Pay securely
  </button>
  <p class="input-hint" style="text-align:center">256-bit SSL encrypted</p>
</form>` },
    { id: "f5", title: "File Upload", description: "Drag & drop file upload area.", tags: ["Upload", "HTML"], lang: "html", code: `<div class="dropzone" id="dropzone">
  <input type="file" id="fileInput" class="dropzone-input" multiple accept="image/*,.pdf" />
  <label for="fileInput" class="dropzone-label">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
    </svg>
    <span>Drag files or <u>select</u></span>
    <small>PNG, JPG, PDF — maks 10MB</small>
  </label>
</div>

<style>
.dropzone { position: relative; }
.dropzone-input { position: absolute; inset: 0; opacity: 0; cursor: pointer; }
.dropzone-label {
  display: flex; flex-direction: column; align-items: center; gap: 0.5rem;
  padding: 2.5rem; border: 2px dashed var(--border); border-radius: 0.75rem;
  color: var(--muted); cursor: pointer; transition: all 0.15s;
}
.dropzone:focus-within .dropzone-label,
.dropzone-label:hover { border-color: var(--accent); background: var(--accent-dim); }
</style>` },
    { id: "f6", title: "Multi-Step Form", description: "Wizard form with progress indicator.", tags: ["Wizard", "HTML"], lang: "html", code: `<div class="wizard">
  <!-- Step indicators -->
  <div class="steps">
    <div class="step done">1 Hesap</div>
    <div class="step-line done"></div>
    <div class="step active">2 Profile</div>
    <div class="step-line"></div>
    <div class="step">3 Tamamla</div>
  </div>

  <!-- Current step -->
  <div class="wizard-body">
    <h2>Profilee Details</h2>
    <!-- form fields -->
  </div>

  <!-- Navigation -->
  <div class="wizard-nav">
    <button class="btn btn-ghost">← Geri</button>
    <button class="btn btn-primary">Next →</button>
  </div>
</div>

<style>
.steps { display: flex; align-items: center; margin-bottom: 2rem; }
.step { padding: 0.375rem 1rem; border-radius: 9999px; font-size: 0.875rem; }
.step.done   { background: var(--accent-dim); color: var(--accent); }
.step.active { background: var(--accent); color: white; }
.step-line   { flex: 1; height: 1px; background: var(--border); }
.step-line.done { background: var(--accent); opacity: 0.4; }
.wizard-nav  { display: flex; justify-content: space-between; margin-top: 2rem; }
</style>` },
    { id: "f7", title: "Filtre Paneli", description: "Checkbox, radio, range ile filtre formu.", tags: ["Filtre", "HTML"], lang: "html", code: `<aside class="filter-panel">
  <div class="filter-group">
    <h3 class="filter-title">Kategori</h3>
    <label class="filter-item">
      <input type="checkbox" checked /> CSS <span class="badge badge-default">24</span>
    </label>
    <label class="filter-item">
      <input type="checkbox" /> Figma <span class="badge badge-default">18</span>
    </label>
  </div>
  <div class="filter-group">
    <h3 class="filter-title">Sorting</h3>
    <label class="filter-item"><input type="radio" name="sort" checked /> En Yeni</label>
    <label class="filter-item"><input type="radio" name="sort" /> Most popular</label>
  </div>
</aside>

<style>
.filter-group { margin-bottom: 1.5rem; }
.filter-title { font-size: 0.75rem; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); margin-bottom: 0.75rem; }
.filter-item  { display: flex; align-items: center; gap: 0.5rem; padding: 0.375rem 0; cursor: pointer; font-size: 0.875rem; }
</style>` },
    { id: "f8", title: "Inline Editing", description: "Inline form editable on click.", tags: ["Inline", "HTML"], lang: "html", code: `<div class="editable" contenteditable="false" onclick="startEdit(this)">
  Click to edit
</div>

<script>
function startEdit(el) {
  el.contentEditable = 'true';
  el.focus();
  el.classList.add('editing');

  el.addEventListener('blur', () => {
    el.contentEditable = 'false';
    el.classList.remove('editing');
    // kaydet: saveValue(el.textContent)
  }, { once: true });
}
</script>

<style>
.editable {
  padding: 0.5rem 0.75rem; border-radius: 0.5rem;
  border: 1px solid transparent; cursor: pointer;
  transition: border-color 0.15s;
}
.editable:hover   { border-color: var(--border); }
.editable.editing { border-color: var(--accent); outline: none; cursor: text; box-shadow: 0 0 0 3px var(--accent-dim); }
</style>` },
  ],

  "navigation": [
    { id: "n1", title: "Sticky Header", description: "Header navigation that shrinks/changes on scroll.", tags: ["Header", "HTML"], lang: "html", code: `<header class="site-header" id="header">
  <div class="header-inner">
    <a href="/" class="logo">motif</a>
    <nav>
      <a href="/kategoriler">Kategoriler</a>
      <a href="/about">About</a>
      <a href="#" class="btn btn-primary">Start</a>
    </nav>
  </div>
</header>

<style>
.site-header {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  background: rgba(248,247,244,0.88); backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
  transition: padding 0.3s;
}
.header-inner {
  max-width: 1200px; margin: 0 auto; padding: 0 2rem;
  height: 60px; display: flex; align-items: center; justify-content: space-between;
}
nav { display: flex; align-items: center; gap: 0.5rem; }
</style>` },
    { id: "n2", title: "Sidebar Navigation", description: "Expandable/collapsible left panel navigation.", tags: ["Sidebar", "HTML"], lang: "html", code: `<aside class="sidebar" id="sidebar">
  <button class="sidebar-toggle" onclick="toggleSidebar()">☰</button>
  <nav class="sidebar-nav">
    <a href="#" class="nav-item active">
      <span class="nav-icon">⊞</span>
      <span class="nav-label">Dashboard</span>
    </a>
    <a href="#" class="nav-item">
      <span class="nav-icon">◈</span>
      <span class="nav-label">Kategoriler</span>
    </a>
  </nav>
</aside>

<style>
.sidebar {
  width: 240px; height: 100vh; position: sticky; top: 0;
  border-right: 1px solid var(--border); overflow: hidden;
  transition: width 0.25s cubic-bezier(0.16,1,0.3,1);
}
.sidebar.collapsed { width: 64px; }
.nav-item { display: flex; align-items: center; gap: 0.875rem; padding: 0.75rem 1rem; border-radius: 0.5rem; }
.sidebar.collapsed .nav-label { opacity: 0; width: 0; }
</style>` },
    { id: "n3", title: "Breadcrumb", description: "Page path indicator with schema markup.", tags: ["Breadcrumb", "HTML"], lang: "html", code: `<nav aria-label="Breadcrumb">
  <ol class="breadcrumb" itemscope itemtype="https://schema.org/BreadcrumbList">
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <a href="/" itemprop="item"><span itemprop="name">Home</span></a>
      <meta itemprop="position" content="1" />
    </li>
    <span class="breadcrumb-sep" aria-hidden="true">›</span>
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <a href="/kategoriler" itemprop="item"><span itemprop="name">Kategoriler</span></a>
      <meta itemprop="position" content="2" />
    </li>
    <span class="breadcrumb-sep" aria-hidden="true">›</span>
    <li aria-current="page">UI Components</li>
  </ol>
</nav>

<style>
.breadcrumb { display: flex; align-items: center; gap: 0.5rem; list-style: none; font-size: 0.875rem; }
.breadcrumb a { color: var(--muted); text-decoration: none; }
.breadcrumb a:hover { color: var(--text); }
.breadcrumb-sep { color: var(--border); }
[aria-current="page"] { color: var(--accent); }
</style>` },
    { id: "n4", title: "Bottom Tab Bar", description: "Bottom navigation bar in mobile-app style.", tags: ["Mobil", "HTML"], lang: "html", code: `<nav class="bottom-nav">
  <a href="#" class="bottom-tab active" aria-label="Ana Sayfa">
    <svg><!-- ev ikonu --></svg>
    <span>Ana</span>
  </a>
  <a href="#" class="bottom-tab" aria-label="Explore">
    <svg><!-- explore icon --></svg>
    <span>Explore</span>
  </a>
  <a href="#" class="bottom-tab bottom-tab-center">
    <span class="bottom-tab-fab">+</span>
  </a>
  <a href="#" class="bottom-tab" aria-label="Bildirimler">
    <svg><!-- zil ikonu --></svg>
    <span>Bildirim</span>
  </a>
  <a href="#" class="bottom-tab" aria-label="Profile">
    <svg><!-- profil ikonu --></svg>
    <span>Profile</span>
  </a>
</nav>

<style>
.bottom-nav {
  position: fixed; bottom: 0; left: 0; right: 0;
  display: flex; background: var(--surface);
  border-top: 1px solid var(--border);
  padding: 0.5rem 0 calc(0.5rem + env(safe-area-inset-bottom));
}
.bottom-tab { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 3px; padding: 0.375rem; font-size: 0.6875rem; color: var(--muted); }
.bottom-tab.active { color: var(--accent); }
.bottom-tab-fab { width: 3rem; height: 3rem; border-radius: 50%; background: var(--accent); color: white; font-size: 1.5rem; display: flex; align-items: center; justify-content: center; margin-top: -1.25rem; }
</style>` },
    { id: "n5", title: "Mega Menu", description: "Multi-column hover dropdown mega menu.", tags: ["Mega", "HTML"], lang: "html", code: `<nav class="mega-nav">
  <div class="mega-item">
    <button class="mega-trigger">Products ▾</button>
    <div class="mega-panel">
      <div class="mega-col">
        <h4>Design</h4>
        <a href="#">UI Components</a>
        <a href="#">Color Systems</a>
        <a href="#">Typography</a>
      </div>
      <div class="mega-col">
        <h4>Development</h4>
        <a href="#">Grid & Layout</a>
        <a href="#">Animasyon</a>
        <a href="#">Form Patterns</a>
      </div>
    </div>
  </div>
</nav>

<style>
.mega-item { position: relative; }
.mega-panel {
  position: absolute; top: 100%; left: 0; min-width: 480px;
  display: none; grid-template-columns: repeat(2,1fr); gap: 2rem;
  padding: 1.5rem; background: var(--surface);
  border: 1px solid var(--border); border-radius: 0.75rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.10);
}
.mega-item:hover .mega-panel,
.mega-item:focus-within .mega-panel { display: grid; }
.mega-col h4 { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); margin-bottom: 0.75rem; }
.mega-col a  { display: block; padding: 0.375rem 0; font-size: 0.875rem; }
</style>` },
    { id: "n6", title: "Pagination", description: "Previous and next pagination with page numbers.", tags: ["Pagination", "HTML"], lang: "html", code: `<nav class="pagination" aria-label="Pagination">
  <a href="?page=1" class="page-btn" aria-label="Previous">←</a>
  <a href="?page=1" class="page-btn">1</a>
  <a href="?page=2" class="page-btn active" aria-current="page">2</a>
  <a href="?page=3" class="page-btn">3</a>
  <span class="page-ellipsis">…</span>
  <a href="?page=8" class="page-btn">8</a>
  <a href="?page=3" class="page-btn" aria-label="Sonraki">→</a>
</nav>

<style>
.pagination { display: flex; align-items: center; gap: 0.375rem; }
.page-btn {
  width: 2.25rem; height: 2.25rem; border-radius: 0.5rem;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.875rem; border: 1px solid var(--border);
  color: var(--muted); text-decoration: none;
  transition: all 0.15s;
}
.page-btn:hover { border-color: var(--accent); color: var(--accent); }
.page-btn.active { background: var(--accent); border-color: var(--accent); color: white; }
.page-ellipsis { padding: 0 0.25rem; color: var(--muted); }
</style>` },
  ],

  "dark-mode": [
    { id: "k1", title: "CSS Variables Dark Mode", description: "Automatic color switching with prefers-color-scheme.", tags: ["CSS", "Token"], lang: "css", code: `:root {
  --bg:      #F8F7F4;
  --surface: #FFFFFF;
  --border:  #E4E0D8;
  --text:    #1C1A17;
  --muted:   #9A9590;
  --accent:  #C4640A;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg:      #0D0C0A;
    --surface: #141210;
    --border:  #252220;
    --text:    #F2EDE4;
    --muted:   #6A6560;
  }
}` },
    { id: "k2", title: "Toggle Implementation", description: "Persistent dark/light switch with localStorage.", tags: ["JS", "localStorage"], lang: "js", code: `// Apply theme on page load
const theme = localStorage.getItem('theme')
  ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', theme);

// Toggle butonu
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}

/* CSS */
/* [data-theme="dark"] { --bg: #0D0C0A; --text: #F2EDE4; }
   [data-theme="light"] { --bg: #F8F7F4; --text: #1C1A17; } */` },
    { id: "k3", title: "Tailwind Dark Mode", description: "Class-based dark mode setup for Tailwind.", tags: ["Tailwind", "JS"], lang: "js", code: `// tailwind.config.js
module.exports = {
  darkMode: 'class', // veya 'media'
  theme: { extend: {} },
}

// Toggle
function toggleDark() {
  document.documentElement.classList.toggle('dark');
  localStorage.setItem(
    'theme',
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );
}

// Initial load
if (localStorage.theme === 'dark' ||
  (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
}` },
    { id: "k4", title: "Visual Adaptation", description: "Dimming visuals in dark mode.", tags: ["Visual", "CSS"], lang: "css", code: `@media (prefers-color-scheme: dark) {
  /* Slightly dim all visuals */
  img, video {
    filter: brightness(0.85) contrast(1.05);
  }

  /* Invert for SVG/PNG assets like logos */
  .logo-dark-invert {
    filter: invert(1) hue-rotate(180deg);
  }

  /* Icon color */
  .icon { color: var(--text); }
}

/* data-theme ile */
[data-theme="dark"] img {
  filter: brightness(0.85);
}` },
    { id: "k5", title: "System Preference Detection", description: "Read system theme with matchMedia.", tags: ["API", "JS"], lang: "js", code: `// Read current preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
console.log('Dark mode:', prefersDark.matches);

// Listen for changes
prefersDark.addEventListener('change', (e) => {
  if (e.matches) {
    applyTheme('dark');
  } else {
    applyTheme('light');
  }
});

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  // Optional: auto-apply if user has not overridden
  if (!localStorage.getItem('user-theme')) {
    document.documentElement.setAttribute('data-theme', theme);
  }
}` },
  ],

  "card-design": [
    { id: "ka1", title: "Basic Content Card", description: "Image, title, description, and action.", tags: ["Core", "HTML"], lang: "html", code: `<article class="card">
  <div class="card-image">
    <img src="image.jpg" alt="Card image" />
  </div>
  <div class="card-body">
    <span class="badge badge-accent">Design</span>
    <h2 class="card-title">Card Title</h2>
    <p class="card-desc">Short description text goes here. Two or three lines is ideal.</p>
    <div class="card-footer">
      <a href="#" class="btn btn-primary btn-sm">Read more →</a>
    </div>
  </div>
</article>

<style>
.card { background: var(--surface); border: 1px solid var(--border); border-radius: 0.75rem; overflow: hidden; transition: transform 0.2s, box-shadow 0.2s; }
.card:hover { transform: translateY(-3px); box-shadow: 0 10px 32px rgba(0,0,0,0.08); }
.card-image img { width: 100%; aspect-ratio: 16/9; object-fit: cover; }
.card-body { padding: 1.25rem; display: flex; flex-direction: column; gap: 0.75rem; }
.card-title { font-size: 1.125rem; font-weight: 500; line-height: 1.3; }
.card-desc  { font-size: 0.875rem; color: var(--muted); line-height: 1.6; }
.card-footer { margin-top: 0.5rem; }
</style>` },
    { id: "ka2", title: "Profilee Card", description: "Avatar, name, title, and social links.", tags: ["Profile", "HTML"], lang: "html", code: `<div class="profile-card">
  <div class="profile-avatar">AS</div>
  <h3 class="profile-name">Alex Morgan</h3>
  <p class="profile-title">UI/UX Designer</p>
  <div class="profile-socials">
    <a href="#">GitHub</a>
    <a href="#">Dribbble</a>
    <a href="#">LinkedIn</a>
  </div>
  <button class="btn btn-primary btn-sm">Takip Et</button>
</div>

<style>
.profile-card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: 1rem; padding: 2rem 1.5rem;
  display: flex; flex-direction: column; align-items: center; gap: 0.75rem;
  text-align: center;
}
.profile-avatar {
  width: 4rem; height: 4rem; border-radius: 50%;
  background: var(--accent-dim); color: var(--accent);
  font-size: 1.25rem; font-weight: 600;
  display: flex; align-items: center; justify-content: center;
}
.profile-name  { font-weight: 600; }
.profile-title { font-size: 0.875rem; color: var(--muted); }
.profile-socials { display: flex; gap: 1rem; font-size: 0.875rem; }
.profile-socials a { color: var(--muted); text-decoration: none; }
</style>` },
    { id: "ka3", title: "Stats Card", description: "Large number + label + trend indicator.", tags: ["Stat", "HTML"], lang: "html", code: `<div class="stat-card">
  <div class="stat-header">
    <span class="stat-label">Total Visitors</span>
    <span class="stat-trend positive">+12.4%</span>
  </div>
  <div class="stat-value">24,830</div>
  <div class="stat-sub">Up by 2,430 vs last month</div>
</div>

<style>
.stat-card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: 0.75rem; padding: 1.5rem;
}
.stat-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; }
.stat-label  { font-size: 0.75rem; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); }
.stat-trend  { font-size: 0.75rem; font-weight: 500; padding: 0.2rem 0.5rem; border-radius: 9999px; }
.stat-trend.positive { background: rgba(34,197,94,.12); color: #16A34A; }
.stat-trend.negative { background: rgba(239,68,68,.12); color: #DC2626; }
.stat-value  { font-family: var(--font-display); font-size: 2.5rem; font-weight: 400; line-height: 1; margin-bottom: 0.5rem; }
.stat-sub    { font-size: 0.8125rem; color: var(--muted); }
</style>` },
    { id: "ka4", title: "Product Card", description: "Price, stock, and add-to-cart button for commerce.", tags: ["Product", "HTML"], lang: "html", code: `<div class="product-card">
  <div class="product-image">
    <img src="product.jpg" alt="Product image" />
    <span class="product-badge">30% Off</span>
  </div>
  <div class="product-body">
    <h3 class="product-name">Product Name</h3>
    <div class="product-pricing">
      <span class="price-current">₺299</span>
      <span class="price-old">₺429</span>
    </div>
    <button class="btn btn-primary" style="width:100%">Sepete Ekle</button>
  </div>
</div>

<style>
.product-card { background: var(--surface); border: 1px solid var(--border); border-radius: 0.75rem; overflow: hidden; }
.product-image { position: relative; aspect-ratio: 1; overflow: hidden; }
.product-image img { width: 100%; height: 100%; object-fit: cover; }
.product-badge { position: absolute; top: 0.75rem; left: 0.75rem; }
.product-body { padding: 1.25rem; display: flex; flex-direction: column; gap: 0.875rem; }
.product-name { font-weight: 500; }
.product-pricing { display: flex; align-items: baseline; gap: 0.75rem; }
.price-current { font-family: var(--font-display); font-size: 1.5rem; color: var(--accent); }
.price-old { font-size: 0.875rem; color: var(--muted); text-decoration: line-through; }
</style>` },
    { id: "ka5", title: "Horizontal Card", description: "Horizontal card with image on the left and text on the right.", tags: ["Horizontal", "HTML"], lang: "html", code: `<article class="h-card">
  <div class="h-card-image">
    <img src="image.jpg" alt="" />
  </div>
  <div class="h-card-body">
    <span class="badge badge-default">CSS</span>
    <h3>Title Metni</h3>
    <p>Short description text. Two lines is enough.</p>
    <a href="#" class="btn btn-ghost btn-sm">Continue →</a>
  </div>
</article>

<style>
.h-card {
  display: flex; background: var(--surface);
  border: 1px solid var(--border); border-radius: 0.75rem; overflow: hidden;
  transition: box-shadow 0.2s;
}
.h-card:hover { box-shadow: 0 6px 20px rgba(0,0,0,0.07); }
.h-card-image { width: 160px; flex-shrink: 0; }
.h-card-image img { width: 100%; height: 100%; object-fit: cover; }
.h-card-body { padding: 1.25rem; display: flex; flex-direction: column; gap: 0.5rem; }
.h-card-body h3 { font-weight: 500; }
.h-card-body p  { font-size: 0.875rem; color: var(--muted); flex: 1; }
</style>` },
    { id: "ka6", title: "Glassmorphism Card", description: "Blur ve transparency efektli cam card.", tags: ["Glass", "CSS"], lang: "css", code: `.glass-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(16px) saturate(1.5);
  -webkit-backdrop-filter: blur(16px) saturate(1.5);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
}

/* Dark mode versiyonu */
@media (prefers-color-scheme: dark) {
  .glass-card {
    background: rgba(20, 18, 16, 0.6);
    border-color: rgba(255, 255, 255, 0.08);
  }
}` },
    { id: "ka7", title: "Flip Card", description: "Card with front/back faces rotating on hover.", tags: ["Animation", "HTML"], lang: "html", code: `<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h3>Front</h3>
      <p>Basic information here</p>
    </div>
    <div class="flip-card-back">
      <h3>Back</h3>
      <p>Detailed info here</p>
      <a href="#" class="btn btn-primary btn-sm">Git →</a>
    </div>
  </div>
</div>

<style>
.flip-card { perspective: 1000px; }
.flip-card-inner {
  position: relative; width: 100%; height: 200px;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.16,1,0.3,1);
}
.flip-card:hover .flip-card-inner { transform: rotateY(180deg); }
.flip-card-front, .flip-card-back {
  position: absolute; inset: 0; backface-visibility: hidden;
  border-radius: 0.75rem; padding: 1.5rem;
  display: flex; flex-direction: column; gap: 0.75rem; justify-content: center;
}
.flip-card-front { background: var(--surface); border: 1px solid var(--border); }
.flip-card-back  { background: var(--text); color: var(--bg); transform: rotateY(180deg); }
</style>` },
    { id: "ka8", title: "Blog Post Card", description: "Blog card with date + category + reading time.", tags: ["Blog", "HTML"], lang: "html", code: `<article class="blog-card">
  <div class="blog-image">
    <img src="kapak.jpg" alt="Post kapak" />
  </div>
  <div class="blog-body">
    <div class="blog-meta">
      <span class="badge badge-accent">Design</span>
      <span class="blog-date">7 Mar 2024</span>
      <span>·</span>
      <span>5 dk okuma</span>
    </div>
    <h2 class="blog-title">How to Build Modern Color Systems</h2>
    <p class="blog-excerpt">Token-based color systems improve design consistency...</p>
    <div class="blog-author">
      <div class="avatar avatar-fallback" style="width:2rem;height:2rem;font-size:.75rem">AS</div>
      <span>Alex Morgan</span>
    </div>
  </div>
</article>

<style>
.blog-card { background: var(--surface); border: 1px solid var(--border); border-radius: 0.75rem; overflow: hidden; }
.blog-image img { width: 100%; aspect-ratio: 16/9; object-fit: cover; }
.blog-body { padding: 1.25rem; display: flex; flex-direction: column; gap: 0.875rem; }
.blog-meta { display: flex; align-items: center; gap: 0.5rem; font-size: 0.8125rem; color: var(--muted); }
.blog-title  { font-weight: 600; line-height: 1.35; }
.blog-excerpt { font-size: 0.875rem; color: var(--muted); line-height: 1.6; }
.blog-author { display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; margin-top: 0.25rem; }
</style>` },
  ],

  "data-visualization": [
    { id: "v1", title: "Bar Chart", description: "Dikey/yatay bar grafik, SVG ile.", tags: ["Bar", "HTML"], lang: "html", code: `<!-- SVG Bar Chart -->
<svg viewBox="0 0 300 160" class="bar-chart" aria-label="Monthly visitors">
  <g class="bars" transform="translate(30, 10)">
    <rect x="0"   y="60"  width="28" height="80"  class="bar" />
    <rect x="40"  y="20"  width="28" height="120" class="bar accent" />
    <rect x="80"  y="45"  width="28" height="95"  class="bar" />
    <rect x="120" y="10"  width="28" height="130" class="bar accent" />
    <rect x="160" y="55"  width="28" height="85"  class="bar" />
    <rect x="200" y="35"  width="28" height="105" class="bar" />
  </g>
  <line x1="30" y1="150" x2="270" y2="150" stroke="var(--border)" />
</svg>

<style>
.bar-chart .bar       { fill: var(--border); rx: 3px; }
.bar-chart .bar.accent { fill: var(--accent); opacity: 0.8; }
</style>` },
    { id: "v2", title: "Line Chart", description: "Line chart with gradient area fill.", tags: ["Line", "SVG"], lang: "html", code: `<svg viewBox="0 0 300 150" class="line-chart">
  <defs>
    <linearGradient id="lineGrad" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%"   stop-color="var(--accent)" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="var(--accent)" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <!-- Alan dolgusu -->
  <path
    d="M0,120 L50,90 L100,70 L150,50 L200,60 L250,30 L300,20 L300,150 L0,150 Z"
    fill="url(#lineGrad)"
  />
  <!-- Line -->
  <path
    d="M0,120 L50,90 L100,70 L150,50 L200,60 L250,30 L300,20"
    fill="none"
    stroke="var(--accent)"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>` },
    { id: "v3", title: "Donut Chart", description: "Dairesel pasta/donut grafik.", tags: ["Donut", "SVG"], lang: "html", code: `<svg viewBox="0 0 120 120" class="donut-chart">
  <!-- Arka plan ring -->
  <circle cx="60" cy="60" r="45"
    fill="none" stroke="var(--border)" stroke-width="18"/>
  <!-- Veri dilimi — stroke-dasharray: circumference = 2πr ≈ 283 -->
  <circle cx="60" cy="60" r="45"
    fill="none"
    stroke="var(--accent)"
    stroke-width="18"
    stroke-dasharray="190 93"   /* %67 doluluk */
    stroke-dashoffset="70.75"  /* -90deg start */
    stroke-linecap="round"
    transform="rotate(-90 60 60)"
  />
  <!-- Merkez metin -->
  <text x="60" y="65" text-anchor="middle"
    font-family="var(--font-display)" font-size="18" fill="var(--text)">67%</text>
</svg>` },
    { id: "v4", title: "Progress Ring", description: "Circular progress for percentage display.", tags: ["Progress", "SVG"], lang: "html", code: `<div class="progress-ring-wrap">
  <svg viewBox="0 0 80 80" width="80" height="80">
    <circle cx="40" cy="40" r="34"
      fill="none" stroke="var(--border)" stroke-width="8"/>
    <circle cx="40" cy="40" r="34"
      fill="none" stroke="var(--accent)" stroke-width="8"
      stroke-dasharray="213.6"
      stroke-dashoffset="53.4"  /* For 75%: 213.6 * (1 - 0.75) */
      stroke-linecap="round"
      transform="rotate(-90 40 40)"
      style="transition: stroke-dashoffset 0.6s cubic-bezier(0.16,1,0.3,1)"
    />
  </svg>
  <span class="progress-ring-label">75%</span>
</div>

<style>
.progress-ring-wrap { position: relative; display: inline-flex; align-items: center; justify-content: center; }
.progress-ring-label { position: absolute; font-size: 1rem; font-weight: 600; }
</style>` },
    { id: "v5", title: "Sparkline", description: "Inline mini trend chart.", tags: ["Mini", "SVG"], lang: "html", code: `<div class="stat-with-spark">
  <div>
    <div class="stat-label">Gelir</div>
    <div class="stat-value">₺8,920</div>
    <div class="stat-trend positive">+22%</div>
  </div>
  <!-- Sparkline SVG -->
  <svg viewBox="0 0 80 30" class="sparkline">
    <path
      d="M0,25 L13,20 L26,15 L39,18 L52,8 L65,5 L80,2"
      fill="none"
      stroke="var(--accent)"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
</div>

<style>
.stat-with-spark { display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: 1rem; border: 1px solid var(--border); border-radius: 0.75rem; }
.sparkline { width: 80px; height: 30px; }
</style>` },
    { id: "v6", title: "Heatmap Calendar", description: "GitHub-activity style heatmap calendar.", tags: ["Heatmap", "HTML"], lang: "html", code: `<!-- Build with JS -->
<div class="heatmap" id="heatmap"></div>

<script>
const weeks = 20;
const days  = 7;
const container = document.getElementById('heatmap');

for (let w = 0; w < weeks; w++) {
  const col = document.createElement('div');
  col.className = 'heatmap-week';
  for (let d = 0; d < days; d++) {
    const cell = document.createElement('div');
    cell.className = 'heatmap-cell';
    const val = Math.random();
    cell.style.opacity = val < 0.2 ? '0.05' : val < 0.5 ? '0.25' : val < 0.8 ? '0.6' : '1';
    cell.title = \`\${Math.floor(val * 10)} contributions\`;
    col.appendChild(cell);
  }
  container.appendChild(col);
}
</script>

<style>
.heatmap { display: flex; gap: 3px; }
.heatmap-week { display: flex; flex-direction: column; gap: 3px; }
.heatmap-cell { width: 10px; height: 10px; border-radius: 2px; background: var(--accent); }
</style>` },
  ],
};
