"use client";
import { type ReactElement } from "react";
import Link from "next/link";
import { Category } from "@/data/categories";

/* ── shared palette for thumbnails ── */
const T = {
  bg:      "#F4F4F4",
  block:   "#D9D9D9",
  border:  "#D0D0D0",
  text:    "#111111",
  muted:   "#8D8D8D",
  accent:  "#111111",
  adim:    "rgba(17,17,17,0.12)",
};

/* ════════════════════════════════════════════════
   THUMBNAIL COMPONENTS
════════════════════════════════════════════════ */

function ThumbColor() {
  const palette = ["#111111","#1F1F1F","#303030","#4A4A4A","#666666","#7F7F7F","#9B9B9B","#B6B6B6","#D2D2D2","#ECECEC"];
  return (
    <div style={{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", height:"100%" }}>
      {palette.map((c,i) => <span key={i} style={{ background:c }} />)}
    </div>
  );
}

function ThumbType() {
  return (
    <div style={{ padding:"24px 28px", display:"flex", flexDirection:"column", gap:6, justifyContent:"center", height:"100%", background:T.bg }}>
      <span style={{ fontFamily:"var(--font-display)", fontSize:58, fontWeight:400, lineHeight:1, color:T.text, opacity:.88 }}>Aa</span>
      <span style={{ fontFamily:"var(--font-body)", fontSize:12, color:T.muted, fontWeight:300 }}>Display · Body · Mono</span>
      <span style={{ fontFamily:"var(--font-mono)", fontSize:9, color:T.accent, letterSpacing:"0.12em", textTransform:"uppercase" }}>HEADING / BODY / LABEL</span>
    </div>
  );
}

function ThumbGrid() {
  return (
    <div style={{ padding:18, display:"flex", flexDirection:"column", gap:8, justifyContent:"center", height:"100%", background:T.bg }}>
      <div style={{ display:"flex", gap:6 }}>
        <div style={{ flex:3, height:36, background:T.adim, border:`1px solid rgba(17,17,17,.22)`, borderRadius:3 }} />
        <div style={{ flex:1, height:36, background:T.block, borderRadius:3 }} />
      </div>
      <div style={{ display:"flex", gap:6 }}>
        {[1,1,1].map((_,i)=><div key={i} style={{ flex:1, height:44, background:T.block, borderRadius:3 }} />)}
      </div>
      <div style={{ display:"flex", gap:6 }}>
        <div style={{ flex:2, height:22, background:T.block, borderRadius:3 }} />
        <div style={{ flex:1, height:22, background:T.adim, border:`1px solid rgba(17,17,17,.2)`, borderRadius:3 }} />
      </div>
    </div>
  );
}

function ThumbUI() {
  const s = { fontFamily:"var(--font-mono)", fontSize:9, letterSpacing:"0.06em" };
  return (
    <div style={{ padding:"20px 22px", display:"flex", flexDirection:"column", gap:10, justifyContent:"center", height:"100%", background:T.bg }}>
      <div style={{ ...s, alignSelf:"flex-start", padding:"6px 14px", borderRadius:6, color:T.accent, border:`1px solid ${T.accent}` }}>Launch →</div>
      <div style={{ ...s, padding:"7px 11px", border:`1px solid ${T.border}`, borderRadius:6, color:T.muted }}>hello@motiff.so</div>
      <div style={{ display:"flex", gap:8, alignItems:"center" }}>
        <div style={{ ...s, padding:"6px 14px", borderRadius:6, background:T.accent, color:"#FFFFFF" }}>Save</div>
        <div style={{ ...s, padding:"3px 10px", borderRadius:100, background:T.adim, border:`1px solid rgba(17,17,17,.2)`, color:T.accent, letterSpacing:"0.1em" }}>NEW</div>
      </div>
    </div>
  );
}

function ThumbIcons() {
  const icons = [
    "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z",
    "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 3a4 4 0 100 8 4 4 0 000-8z",
    "M4 6h16M4 12h16M4 18h16",
    "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z",
    "M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9",
    "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z",
    "M12 5v14M5 12h14",
    "M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6",
    "M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z",
    "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
    "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77",
  ];
  return (
    <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", background:T.border, gap:1, height:"100%" }}>
      {icons.map((d,i)=>(
        <div key={i} style={{ background:T.bg, display:"flex", alignItems:"center", justifyContent:"center" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={T.muted} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d={d}/>
          </svg>
        </div>
      ))}
    </div>
  );
}

function ThumbSpacing() {
  const rows = [
    { label:"4",  w:18, h:4 },
    { label:"8",  w:36, h:8 },
    { label:"16", w:72, h:12 },
    { label:"32", w:130, h:16 },
    { label:"64", w:190, h:20 },
  ];
  return (
    <div style={{ padding:"22px 26px", display:"flex", flexDirection:"column", gap:8, justifyContent:"center", height:"100%", background:T.bg }}>
      {rows.map(({ label, w, h }, i) => (
        <div key={label} style={{ display:"flex", alignItems:"center", gap:10 }}>
          <span style={{ fontFamily:"var(--font-mono)", fontSize:8.5, color:T.muted, width:22, textAlign:"right" }}>{label}</span>
          <div style={{
            width:w, height:h, borderRadius:2,
            background: i < 4
              ? `linear-gradient(90deg, ${T.accent}, transparent)`
              : T.block,
          }} />
        </div>
      ))}
    </div>
  );
}

function ThumbMotion() {
  return (
    <div style={{ position:"relative", height:"100%", display:"flex", alignItems:"center", justifyContent:"center", background:T.bg, overflow:"hidden" }}>
      <div style={{ position:"absolute", width:"75%", height:1, background:T.border, top:"50%" }} />
      <div style={{ position:"absolute", width:"65%", height:"55%", border:`1px solid ${T.border}`, borderRadius:"50%", borderTop:"none", borderRight:"none" }} />
      <div style={{
        width:11, height:11, background:T.accent, borderRadius:"50%", position:"absolute",
        animation:"dotMove 2.4s cubic-bezier(.4,0,.2,1) infinite",
      }} />
      <style>{`@keyframes dotMove { 0%,100%{left:18%;top:66%} 50%{left:66%;top:26%} }`}</style>
    </div>
  );
}

function ThumbForm() {
  return (
    <div style={{ padding:"18px 22px", display:"flex", flexDirection:"column", gap:9, justifyContent:"center", height:"100%", background:T.bg }}>
      <div>
        <div style={{ fontFamily:"var(--font-mono)", fontSize:8.5, color:T.muted, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:3 }}>Full Name</div>
        <div style={{ height:26, border:`1px solid ${T.accent}`, borderRadius:5 }} />
      </div>
      <div>
        <div style={{ fontFamily:"var(--font-mono)", fontSize:8.5, color:T.muted, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:3 }}>Email</div>
        <div style={{ height:26, border:`1px solid ${T.border}`, borderRadius:5 }} />
      </div>
      <div style={{ display:"flex", gap:7, alignItems:"center" }}>
        <div style={{ width:13, height:13, border:`1px solid ${T.accent}`, borderRadius:3, background:T.adim, flexShrink:0 }} />
        <span style={{ fontFamily:"var(--font-mono)", fontSize:8.5, color:T.muted, letterSpacing:"0.1em", textTransform:"uppercase" }}>Newsletter</span>
      </div>
    </div>
  );
}

function ThumbNav() {
  return (
    <div style={{ display:"flex", flexDirection:"column", height:"100%", background:T.bg }}>
      <div style={{ height:40, borderBottom:`1px solid ${T.border}`, display:"flex", alignItems:"center", padding:"0 18px", gap:16, flexShrink:0 }}>
        <div style={{ width:22, height:22, background:T.accent, borderRadius:5, flexShrink:0 }} />
        <div style={{ display:"flex", gap:14 }}>
          {["Home","Explore","About"].map((l,i)=>(
            <span key={l} style={{
              fontFamily:"var(--font-mono)", fontSize:8.5,
              color: i===0 ? T.text : T.muted,
              borderBottom: i===0 ? `1px solid ${T.accent}` : "none",
              paddingBottom: i===0 ? 1 : 0,
            }}>{l}</span>
          ))}
        </div>
      </div>
      <div style={{ flex:1, display:"flex", gap:10, padding:"14px 18px" }}>
        <div style={{ width:44, display:"flex", flexDirection:"column", gap:7 }}>
          {[true,false,false,false].map((on,i)=>(
            <div key={i} style={{ height:5, borderRadius:2, background: on ? T.accent : T.block, width: on ? "75%" : "100%" }} />
          ))}
        </div>
        <div style={{ flex:1, background:T.block, borderRadius:4, opacity:.4 }} />
      </div>
    </div>
  );
}

function ThumbDark() {
  return (
    <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", height:"100%" }}>
      <div style={{ background:"#F1F1F1", padding:18, display:"flex", flexDirection:"column", gap:7 }}>
        <div style={{ width:40, height:14, borderRadius:3, background:T.accent, opacity:.5 }} />
        {["80%","62%","72%"].map((w,i)=><div key={i} style={{ height:7, borderRadius:2, background:"#252220", opacity:.12, width:w }} />)}
      </div>
      <div style={{ background:"#1A1816", padding:18, display:"flex", flexDirection:"column", gap:7 }}>
        <div style={{ width:40, height:14, borderRadius:3, background:T.accent, opacity:.7 }} />
        {["80%","62%","72%"].map((w,i)=><div key={i} style={{ height:7, borderRadius:2, background:"#F5F5F5", opacity:.12, width:w }} />)}
      </div>
    </div>
  );
}

function ThumbCards() {
  return (
    <div style={{ padding:14, display:"grid", gridTemplateColumns:"1fr 1fr", gap:7, alignContent:"center", height:"100%", background:T.bg }}>
      {[true,false,false,true].map((accent,i)=>(
        <div key={i} style={{ border:`1px solid ${T.border}`, borderRadius:7, padding:9, display:"flex", flexDirection:"column", gap:4 }}>
          <div style={{ height:36, borderRadius:3, marginBottom:4,
            background: accent ? T.adim : T.block,
            border: accent ? `1px solid rgba(17,17,17,.18)` : "none",
          }} />
          <div style={{ height:4, background:T.block, borderRadius:2 }} />
          <div style={{ height:4, background:T.block, borderRadius:2, width:"55%" }} />
        </div>
      ))}
    </div>
  );
}

function ThumbData() {
  const bars = [35,72,50,88,40,62,46,78];
  return (
    <div style={{ padding:"18px 18px 14px", display:"flex", flexDirection:"column", gap:8, height:"100%", justifyContent:"flex-end", background:T.bg }}>
      <div style={{ display:"flex", alignItems:"flex-end", gap:5, height:80 }}>
        {bars.map((h,i)=>(
          <div key={i} style={{
            flex:1, height:`${h}%`, borderRadius:"2px 2px 0 0",
            background: i===1||i===3||i===6 ? T.accent : T.block,
            opacity: i===1||i===3||i===6 ? .75 : 1,
          }} />
        ))}
      </div>
      <div style={{ height:1, background:T.border, borderTop:`1px solid rgba(17,17,17,.3)` }} />
    </div>
  );
}

/* ── thumbnail map ── */
const thumbMap: Record<string, () => ReactElement> = {
  color:   ThumbColor,
  type:    ThumbType,
  grid:    ThumbGrid,
  ui:      ThumbUI,
  icons:   ThumbIcons,
  spacing: ThumbSpacing,
  motion:  ThumbMotion,
  form:    ThumbForm,
  nav:     ThumbNav,
  dark:    ThumbDark,
  cards:   ThumbCards,
  data:    ThumbData,
};

/* ════════════════════════════════════════════════
   CARD
════════════════════════════════════════════════ */
export default function CategoryCard({ cat, index }: { cat: Category; index: number }) {
  const Thumb = thumbMap[cat.thumbType] ?? ThumbGrid;

  return (
    <Link
      href={`/category/${cat.slug}`}
      style={{ textDecoration: "none" }}
    >
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: 11,
        overflow: "hidden",
        cursor: "pointer",
        transition: "border-color .2s, transform .2s, box-shadow .2s",
        animation: "fadeUp .55s cubic-bezier(.16,1,.3,1) backwards",
        animationDelay: `${0.04 + index * 0.05}s`,
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(17,17,17,.4)";
        el.style.transform = "translateY(-3px)";
        el.style.boxShadow = "0 10px 36px rgba(0,0,0,.08)";
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--border)";
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Thumbnail */}
      <div style={{ aspectRatio:"4/3", overflow:"hidden", position:"relative" }}>
        <Thumb />
      </div>

      {/* Body */}
      <div style={{
        padding:"13px 18px 15px",
        display:"flex", alignItems:"center", justifyContent:"space-between",
        borderTop:"1px solid var(--border)",
      }}>
        <span style={{ fontSize:13.5, fontWeight:400, color:"var(--text)", fontFamily:"var(--font-body)" }}>
          {cat.title}
        </span>
        <span style={{ fontFamily:"var(--font-mono)", fontSize:10, color:"var(--muted)", letterSpacing:"0.04em" }}>
          {cat.count} blocks
        </span>
      </div>
    </div>
    </Link>
  );
}
