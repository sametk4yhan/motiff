/* CSS-drawn visual previews for each block type */

const T = {
  bg:     "#F4F4F4",
  block:  "#D9D9D9",
  border: "#D0D0D0",
  text:   "#111111",
  muted:  "#8D8D8D",
  accent: "#111111",
  adim:   "rgba(17,17,17,0.12)",
};

const s = { height: "100%", background: T.bg } as React.CSSProperties;

/* ── RENK ────────────────────────────────────── */
function ThumbPrimerPalet() {
  const cols = ["#111111","#2E2E2E","#565656","#8A8A8A","#C7C7C7"];
  return <div style={{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", height:"100%" }}>
    {cols.map((c,i) => <div key={i} style={{ background:c }} />)}
  </div>;
}

function ThumbGriSkala() {
  const grays = ["#111111","#3A3836","#5A5856","#7A7876","#9A9896","#BAB8B6","#DAD8D6","#EBEBEA","#F5F4F2","#FAFAF8"];
  return <div style={{ display:"grid", gridTemplateColumns:"repeat(10,1fr)", height:"100%" }}>
    {grays.map((c,i) => <div key={i} style={{ background:c }} />)}
  </div>;
}

function ThumbSemantik() {
  return <div style={{ ...s, display:"flex", flexDirection:"column", justifyContent:"center", gap:8, padding:"20px 24px" }}>
    {[
      { label:"Success", bg:"#22C55E", light:"rgba(34,197,94,.1)" },
      { label:"Warning",  bg:"#F59E0B", light:"rgba(245,158,11,.1)" },
      { label:"Error",   bg:"#EF4444", light:"rgba(239,68,68,.1)" },
      { label:"Info",  bg:"#3B82F6", light:"rgba(59,130,246,.1)" },
    ].map(({ label, bg, light }) => (
      <div key={label} style={{ display:"flex", alignItems:"center", gap:8 }}>
        <div style={{ width:8, height:8, borderRadius:"50%", background:bg, flexShrink:0 }} />
        <div style={{ flex:1, height:20, borderRadius:4, background:light, border:`1px solid ${bg}22` }} />
        <span style={{ fontFamily:"var(--font-mono)", fontSize:8, color:T.muted, width:28 }}>{label}</span>
      </div>
    ))}
  </div>;
}

function ThumbGradient() {
  const gradients = [
    "linear-gradient(135deg,#111111,#4A4A4A)",
    "linear-gradient(135deg,#3A3A3A,#7A7A7A)",
    "linear-gradient(135deg,#555555,#B0B0B0)",
    "linear-gradient(135deg,#CFCFCF,#F3F3F3)",
  ];
  return <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gridTemplateRows:"1fr 1fr", height:"100%", gap:2 }}>
    {gradients.map((g,i) => <div key={i} style={{ background:g }} />)}
  </div>;
}

function ThumbKontrast() {
  return <div style={{ ...s, padding:"16px 20px", display:"flex", flexDirection:"column", gap:10, justifyContent:"center" }}>
    {[["AA","4.5:1","#22C55E"],["AAA","7:1","#3B82F6"],["FAIL","2.1:1","#EF4444"]].map(([label,ratio,color]) => (
      <div key={label} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"6px 10px", borderRadius:6, border:`1px solid ${T.border}` }}>
        <div style={{ width:28, height:16, borderRadius:3, background:color, display:"flex", alignItems:"center", justifyContent:"center" }}>
          <span style={{ fontFamily:"var(--font-mono)", fontSize:7, color:"#fff", fontWeight:500 }}>{label}</span>
        </div>
        <span style={{ fontFamily:"var(--font-mono)", fontSize:9, color:T.muted }}>{ratio}</span>
      </div>
    ))}
  </div>;
}

function ThumbToken() {
  return <div style={{ ...s, padding:"18px 22px", display:"flex", flexDirection:"column", gap:6, justifyContent:"center" }}>
    {[
      { name:"--color-primary",   val:"#111111" },
      { name:"--color-secondary", val:"#5A5A5A" },
      { name:"--color-accent",    val:"#A0A0A0" },
    ].map(({ name, val }) => (
      <div key={name} style={{ display:"flex", alignItems:"center", gap:8 }}>
        <div style={{ width:14, height:14, borderRadius:3, background:val, flexShrink:0 }} />
        <span style={{ fontFamily:"var(--font-mono)", fontSize:8, color:T.muted, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>{name}</span>
      </div>
    ))}
  </div>;
}

function ThumbTailwindPalet() {
  return <div style={{ ...s, padding:"16px 20px", display:"flex", flexDirection:"column", gap:4, justifyContent:"center" }}>
    <div style={{ fontFamily:"var(--font-mono)", fontSize:8, color:T.accent, marginBottom:4 }}>colors: {"{"}</div>
    {[["primary","#111111"],["gray","#777777"],["surface","#F5F5F5"]].map(([k,v]) => (
      <div key={k} style={{ display:"flex", alignItems:"center", gap:8, paddingLeft:12 }}>
        <span style={{ fontFamily:"var(--font-mono)", fontSize:8, color:T.muted }}>{k}:</span>
        <div style={{ width:10, height:10, borderRadius:2, background:v }} />
        <span style={{ fontFamily:"var(--font-mono)", fontSize:8, color:T.text, opacity:.5 }}>{`'${v}'`}</span>
      </div>
    ))}
    <div style={{ fontFamily:"var(--font-mono)", fontSize:8, color:T.accent }}>{"}"}</div>
  </div>;
}

/* ── TYPOGRAPHY ─────────────────────────────── */
function ThumbTypeScale() {
  const sizes = [40, 28, 20, 16, 13, 11];
  return <div style={{ ...s, padding:"16px 22px", display:"flex", flexDirection:"column", gap:6, justifyContent:"center" }}>
    {sizes.map((size, i) => (
      <div key={i} style={{ fontFamily:"var(--font-display)", fontSize:size, lineHeight:1, color:T.text, opacity: 1 - i*0.1, whiteSpace:"nowrap", overflow:"hidden" }}>
        Aa
      </div>
    ))}
  </div>;
}

function ThumbFontPair() {
  return <div style={{ ...s, padding:"22px 26px", display:"flex", flexDirection:"column", justifyContent:"center", gap:12 }}>
    <div>
      <div style={{ fontFamily:"var(--font-mono)", fontSize:8, color:T.muted, letterSpacing:"0.1em", marginBottom:4 }}>DISPLAY</div>
      <div style={{ fontFamily:"var(--font-display)", fontSize:34, fontWeight:400, lineHeight:1, color:T.text, fontStyle:"italic" }}>Playfair</div>
    </div>
    <div style={{ height:1, background:T.border }} />
    <div>
      <div style={{ fontFamily:"var(--font-mono)", fontSize:8, color:T.muted, letterSpacing:"0.1em", marginBottom:4 }}>BODY</div>
      <div style={{ fontFamily:"var(--font-body)", fontSize:14, fontWeight:300, color:T.muted }}>DM Sans — clean & readable</div>
    </div>
  </div>;
}

function ThumbHiyerarsi() {
  const items = [
    { label:"H1", size:32, weight:700 },
    { label:"H2", size:24, weight:600 },
    { label:"H3", size:18, weight:500 },
    { label:"H4", size:14, weight:400 },
    { label:"p",  size:12, weight:300 },
  ];
  return <div style={{ ...s, padding:"16px 20px", display:"flex", flexDirection:"column", gap:4, justifyContent:"center" }}>
    {items.map(({ label, size, weight }) => (
      <div key={label} style={{ display:"flex", alignItems:"baseline", gap:10 }}>
        <span style={{ fontFamily:"var(--font-mono)", fontSize:8, color:T.muted, width:16 }}>{label}</span>
        <span style={{ fontFamily:"var(--font-display)", fontSize:size, fontWeight:weight, lineHeight:1, color:T.text }}>Heading</span>
      </div>
    ))}
  </div>;
}

function ThumbKodBlok() {
  return <div style={{ ...s, padding:"18px 22px", display:"flex", flexDirection:"column", gap:5, justifyContent:"center" }}>
    <div style={{ background:"#111111", borderRadius:8, padding:"14px 16px", display:"flex", flexDirection:"column", gap:5 }}>
      <span style={{ fontFamily:"var(--font-mono)", fontSize:9, color:"#6B6B6B" }}>{"const greet = (name) => {"}</span>
      <span style={{ fontFamily:"var(--font-mono)", fontSize:9, color:"#9AA8C8", paddingLeft:12 }}>{"return `Merhaba, ${name}`"}</span>
      <span style={{ fontFamily:"var(--font-mono)", fontSize:9, color:"#6B6B6B" }}>{"}"}</span>
    </div>
  </div>;
}

function ThumbResponsiveType() {
  return <div style={{ ...s, padding:"18px 24px", display:"flex", flexDirection:"column", gap:8, justifyContent:"center" }}>
    <div style={{ fontFamily:"var(--font-mono)", fontSize:8, color:T.muted, marginBottom:2 }}>clamp(min, preferred, max)</div>
    {[
      { screen:"375px",  size:32 },
      { screen:"768px",  size:48 },
      { screen:"1280px", size:64 },
    ].map(({ screen, size }) => (
      <div key={screen} style={{ display:"flex", alignItems:"center", gap:10 }}>
        <span style={{ fontFamily:"var(--font-mono)", fontSize:8, color:T.muted, width:36, flexShrink:0 }}>{screen}</span>
        <span style={{ fontFamily:"var(--font-display)", fontSize:size * 0.55, fontWeight:400, color:T.text, lineHeight:1 }}>Aa</span>
      </div>
    ))}
  </div>;
}

function ThumbHarfAralik() {
  return <div style={{ ...s, padding:"20px 24px", display:"flex", flexDirection:"column", gap:10, justifyContent:"center" }}>
    {[
      { label:"tight",  ls:"-0.05em" },
      { label:"normal", ls:"0" },
      { label:"wide",   ls:"0.1em" },
      { label:"wider",  ls:"0.2em" },
    ].map(({ label, ls }) => (
      <div key={label} style={{ display:"flex", alignItems:"center", gap:10 }}>
        <span style={{ fontFamily:"var(--font-mono)", fontSize:8, color:T.muted, width:32 }}>{label}</span>
        <span style={{ fontFamily:"var(--font-body)", fontSize:13, letterSpacing:ls, color:T.text }}>ABCDE</span>
      </div>
    ))}
  </div>;
}

/* ── GRID & LAYOUT ──────────────────────────── */
function Thumb12Kolon() {
  return <div style={{ ...s, padding:"18px", display:"flex", flexDirection:"column", gap:6, justifyContent:"center" }}>
    <div style={{ display:"grid", gridTemplateColumns:"repeat(12,1fr)", gap:3, height:14 }}>
      {Array.from({length:12}).map((_,i) => <div key={i} style={{ background:T.block, borderRadius:1 }} />)}
    </div>
    <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:6, height:40 }}>
      {[0,1,2].map(i => <div key={i} style={{ background:T.block, borderRadius:3, opacity: i===1 ? 1 : 0.6 }} />)}
    </div>
    <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr", gap:6, height:32 }}>
      <div style={{ background:T.adim, border:`1px solid rgba(17,17,17,.2)`, borderRadius:3 }} />
      <div style={{ background:T.block, borderRadius:3 }} />
    </div>
  </div>;
}

function ThumbHolyGrail() {
  return <div style={{ ...s, padding:14, display:"flex", flexDirection:"column", gap:4 }}>
    <div style={{ height:18, background:T.accent, borderRadius:3, opacity:.7 }} />
    <div style={{ flex:1, display:"flex", gap:4 }}>
      <div style={{ width:30, background:T.block, borderRadius:3 }} />
      <div style={{ flex:1, background:T.adim, border:`1px solid rgba(17,17,17,.15)`, borderRadius:3 }} />
      <div style={{ width:24, background:T.block, borderRadius:3 }} />
    </div>
    <div style={{ height:14, background:T.block, borderRadius:3, opacity:.5 }} />
  </div>;
}

function ThumbMasonry() {
  const heights = [60,40,80,50,70,45,65,35];
  return <div style={{ ...s, padding:14, display:"flex", gap:5, alignItems:"flex-start" }}>
    {[0,1,2,3].map(col => (
      <div key={col} style={{ flex:1, display:"flex", flexDirection:"column", gap:4 }}>
        {[heights[col*2], heights[col*2+1]].map((h,i) => (
          <div key={i} style={{ height:h * 0.8, background: i===0 && col===1 ? T.adim : T.block, borderRadius:3, border: i===0 && col===1 ? `1px solid rgba(17,17,17,.2)` : "none" }} />
        ))}
      </div>
    ))}
  </div>;
}

function ThumbDashboard() {
  return <div style={{ ...s, display:"flex", flexDirection:"column" }}>
    <div style={{ height:28, borderBottom:`1px solid ${T.border}`, display:"flex", alignItems:"center", padding:"0 12px", gap:8 }}>
      <div style={{ width:16, height:16, borderRadius:3, background:T.accent, opacity:.8 }} />
      <div style={{ height:6, width:60, background:T.block, borderRadius:2 }} />
      <div style={{ marginLeft:"auto", height:6, width:30, background:T.block, borderRadius:2 }} />
    </div>
    <div style={{ flex:1, display:"flex" }}>
      <div style={{ width:44, borderRight:`1px solid ${T.border}`, padding:8, display:"flex", flexDirection:"column", gap:6 }}>
        {[1,0.5,0.5,0.5].map((op,i) => <div key={i} style={{ height:5, background:i===0 ? T.accent : T.block, borderRadius:2, opacity:op }} />)}
      </div>
      <div style={{ flex:1, padding:10, display:"grid", gridTemplateColumns:"1fr 1fr", gap:6 }}>
        {[T.adim,T.block,T.block,T.adim].map((bg,i) => (
          <div key={i} style={{ background:bg, borderRadius:4, border: i%3===0 ? `1px solid rgba(17,17,17,.2)` : "none" }} />
        ))}
      </div>
    </div>
  </div>;
}

function ThumbBento() {
  return <div style={{ ...s, padding:10, display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gridTemplateRows:"1fr 1fr", gap:5 }}>
    <div style={{ gridColumn:"1/3", background:T.adim, border:`1px solid rgba(17,17,17,.2)`, borderRadius:6 }} />
    <div style={{ gridRow:"1/3", background:T.block, borderRadius:6 }} />
    <div style={{ background:T.block, borderRadius:6 }} />
    <div style={{ background:T.accent, borderRadius:6, opacity:.6 }} />
  </div>;
}

function ThumbSplit() {
  return <div style={{ ...s, display:"grid", gridTemplateColumns:"1fr 1fr", height:"100%" }}>
    <div style={{ background:T.bg, padding:"18px 16px", display:"flex", flexDirection:"column", gap:8, justifyContent:"center" }}>
      <div style={{ height:6, background:T.block, borderRadius:2, width:"80%" }} />
      <div style={{ height:6, background:T.block, borderRadius:2, width:"60%" }} />
      <div style={{ height:20, width:50, background:T.accent, borderRadius:4, opacity:.7, marginTop:4 }} />
    </div>
    <div style={{ background:"#111111", padding:"18px 16px", display:"flex", flexDirection:"column", gap:8, justifyContent:"center" }}>
      <div style={{ height:6, background:"rgba(255,255,255,.15)", borderRadius:2, width:"80%" }} />
      <div style={{ height:6, background:"rgba(255,255,255,.1)", borderRadius:2, width:"60%" }} />
      <div style={{ height:20, width:50, background:T.accent, borderRadius:4, opacity:.7, marginTop:4 }} />
    </div>
  </div>;
}

function ThumbMagazine() {
  return <div style={{ ...s, padding:12, display:"grid", gridTemplateColumns:"1fr 1fr", gridTemplateRows:"auto auto", gap:6 }}>
    <div style={{ gridColumn:"1/3", height:50, background:T.adim, borderRadius:4, border:`1px solid rgba(17,17,17,.2)` }} />
    <div style={{ height:60, background:T.block, borderRadius:4 }} />
    <div style={{ display:"flex", flexDirection:"column", gap:4 }}>
      <div style={{ height:6, background:T.block, borderRadius:2 }} />
      <div style={{ height:6, background:T.block, borderRadius:2, width:"70%" }} />
      <div style={{ height:6, background:T.block, borderRadius:2, width:"85%" }} />
      <div style={{ height:6, background:T.block, borderRadius:2, width:"60%" }} />
    </div>
  </div>;
}

function ThumbStickySidebar() {
  return <div style={{ ...s, display:"flex", height:"100%" }}>
    <div style={{ width:50, borderRight:`1px solid ${T.border}`, padding:10, display:"flex", flexDirection:"column", gap:6 }}>
      <div style={{ height:5, background:T.accent, borderRadius:2, opacity:.7 }} />
      <div style={{ height:5, background:T.block, borderRadius:2 }} />
      <div style={{ height:5, background:T.block, borderRadius:2 }} />
      <div style={{ height:1, background:T.border, margin:"4px 0" }} />
      <div style={{ fontFamily:"var(--font-mono)", fontSize:7, color:T.muted }}>sticky</div>
      <div style={{ height:4, background:T.adim, borderRadius:2 }} />
    </div>
    <div style={{ flex:1, padding:10, display:"flex", flexDirection:"column", gap:5 }}>
      {[1,2,3,4].map(i => <div key={i} style={{ height:14, background:T.block, borderRadius:3, opacity: 1 - i*.15 }} />)}
    </div>
  </div>;
}

function ThumbCentered() {
  return <div style={{ ...s, display:"flex", justifyContent:"center", height:"100%", padding:"14px 0" }}>
    <div style={{ width:"65%", display:"flex", flexDirection:"column", gap:6 }}>
      <div style={{ height:8, background:T.accent, borderRadius:2, opacity:.6, width:"80%" }} />
      {[1,2,3].map(i => <div key={i} style={{ height:5, background:T.block, borderRadius:2, width: i===2 ? "70%" : "100%" }} />)}
      <div style={{ height:1, background:T.border, margin:"4px 0" }} />
      {[1,2,3,4].map(i => <div key={i} style={{ height:4, background:T.block, borderRadius:2, opacity:.6 }} />)}
    </div>
  </div>;
}

/* ── UI COMPONENTS ─────────────────────────── */
function ThumbButonAilesi() {
  const ms = { fontFamily:"var(--font-mono)", fontSize:8, letterSpacing:"0.06em" } as React.CSSProperties;
  return <div style={{ ...s, padding:"16px 18px", display:"flex", flexDirection:"column", gap:8, justifyContent:"center" }}>
    <div style={{ display:"flex", gap:6 }}>
      <div style={{ ...ms, padding:"5px 12px", borderRadius:5, background:T.accent, color:"#FFFFFF" }}>Primary</div>
      <div style={{ ...ms, padding:"5px 12px", borderRadius:5, border:`1px solid ${T.accent}`, color:T.accent }}>Secondary</div>
    </div>
    <div style={{ display:"flex", gap:6 }}>
      <div style={{ ...ms, padding:"5px 12px", borderRadius:5, border:`1px solid ${T.border}`, color:T.muted }}>Ghost</div>
      <div style={{ ...ms, padding:"5px 12px", borderRadius:5, background:"#EF4444", color:"#fff", opacity:.85 }}>Sil</div>
    </div>
  </div>;
}

function ThumbInput() {
  return <div style={{ ...s, padding:"16px 20px", display:"flex", flexDirection:"column", gap:8, justifyContent:"center" }}>
    <div>
      <div style={{ fontFamily:"var(--font-mono)", fontSize:8, color:T.muted, marginBottom:3 }}>AD SOYAD</div>
      <div style={{ height:24, border:`1px solid ${T.accent}`, borderRadius:5 }} />
    </div>
    <div>
      <div style={{ fontFamily:"var(--font-mono)", fontSize:8, color:T.muted, marginBottom:3 }}>E-POSTA</div>
      <div style={{ height:24, border:`1px solid ${T.border}`, borderRadius:5 }} />
    </div>
    <div style={{ height:40, border:`1px solid ${T.border}`, borderRadius:5 }} />
  </div>;
}

function ThumbBadge() {
  return <div style={{ ...s, padding:"14px 18px", display:"flex", flexDirection:"column", gap:10, justifyContent:"center" }}>
    <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
      {[
        { label:"NEW",  bg:T.adim, border:`rgba(17,17,17,.3)`, color:T.accent },
        { label:"BETA",  bg:"rgba(59,130,246,.1)", border:"rgba(59,130,246,.3)", color:"#3B82F6" },
        { label:"PRO",   bg:"rgba(168,85,247,.1)", border:"rgba(168,85,247,.3)", color:"#A855F7" },
      ].map(({ label, bg, border: bc, color }) => (
        <div key={label} style={{ fontFamily:"var(--font-mono)", fontSize:8, padding:"3px 8px", borderRadius:100, background:bg, border:`1px solid ${bc}`, color }}>{label}</div>
      ))}
    </div>
    <div style={{ display:"flex", gap:6 }}>
      {["Design","UI","Kod","CSS"].map(tag => (
        <div key={tag} style={{ fontFamily:"var(--font-mono)", fontSize:8, padding:"3px 8px", borderRadius:100, border:`1px solid ${T.border}`, color:T.muted }}>{tag}</div>
      ))}
    </div>
  </div>;
}

function ThumbModal() {
  return <div style={{ ...s, display:"flex", alignItems:"center", justifyContent:"center", position:"relative" }}>
    <div style={{ position:"absolute", inset:0, background:"rgba(28,26,23,.3)" }} />
    <div style={{ position:"relative", background:"#fff", border:`1px solid ${T.border}`, borderRadius:10, padding:14, width:"75%", boxShadow:"0 8px 24px rgba(0,0,0,.12)" }}>
      <div style={{ height:6, background:T.text, borderRadius:2, width:"60%", marginBottom:8, opacity:.7 }} />
      <div style={{ height:4, background:T.block, borderRadius:2, marginBottom:4 }} />
      <div style={{ height:4, background:T.block, borderRadius:2, width:"80%", marginBottom:12 }} />
      <div style={{ display:"flex", gap:6, justifyContent:"flex-end" }}>
        <div style={{ height:18, width:36, border:`1px solid ${T.border}`, borderRadius:4 }} />
        <div style={{ height:18, width:44, background:T.accent, borderRadius:4, opacity:.8 }} />
      </div>
    </div>
  </div>;
}

function ThumbTooltip() {
  return <div style={{ ...s, display:"flex", alignItems:"center", justifyContent:"center" }}>
    <div style={{ position:"relative", display:"flex", flexDirection:"column", alignItems:"center", gap:6 }}>
      <div style={{ background:"#111111", color:"#fff", fontFamily:"var(--font-mono)", fontSize:8, padding:"5px 10px", borderRadius:5, whiteSpace:"nowrap" }}>Bu bir tooltip</div>
      <div style={{ width:8, height:6, background:"#111111", clipPath:"polygon(0 0, 100% 0, 50% 100%)" }} />
      <div style={{ padding:"6px 14px", borderRadius:5, background:T.accent, color:"#fff", fontFamily:"var(--font-mono)", fontSize:9 }}>Hover et</div>
    </div>
  </div>;
}

function ThumbSkeleton() {
  return <div style={{ ...s, padding:"16px 20px", display:"flex", flexDirection:"column", gap:10, justifyContent:"center" }}>
    <div style={{ display:"flex", gap:10, alignItems:"center" }}>
      <div style={{ width:36, height:36, borderRadius:"50%", background:"linear-gradient(90deg,#E4E0D8 25%,#EDE9E1 50%,#E4E0D8 75%)" }} />
      <div style={{ flex:1, display:"flex", flexDirection:"column", gap:5 }}>
        <div style={{ height:7, background:"linear-gradient(90deg,#E4E0D8 25%,#EDE9E1 50%,#E4E0D8 75%)", borderRadius:2 }} />
        <div style={{ height:7, background:"linear-gradient(90deg,#E4E0D8 25%,#EDE9E1 50%,#E4E0D8 75%)", borderRadius:2, width:"60%" }} />
      </div>
    </div>
    {[1,2].map(i => <div key={i} style={{ height:8, background:"linear-gradient(90deg,#E4E0D8 25%,#EDE9E1 50%,#E4E0D8 75%)", borderRadius:2, width: i===2 ? "70%" : "100%" }} />)}
  </div>;
}

function ThumbToast() {
  return <div style={{ ...s, padding:"12px 16px", display:"flex", flexDirection:"column", gap:7, justifyContent:"center" }}>
    {[
      { bg:"#22C55E", label:"Saved successfully." },
      { bg:"#EF4444", label:"Something went wrong." },
      { bg:"#F59E0B", label:"Heads up: review this." },
    ].map(({ bg, label }) => (
      <div key={label} style={{ display:"flex", alignItems:"center", gap:8, padding:"7px 10px", background:"#fff", border:`1px solid ${T.border}`, borderRadius:7, boxShadow:"0 2px 8px rgba(0,0,0,.06)", borderLeft:`3px solid ${bg}` }}>
        <div style={{ width:7, height:7, borderRadius:"50%", background:bg, flexShrink:0 }} />
        <span style={{ fontFamily:"var(--font-body)", fontSize:9, color:T.text }}>{label}</span>
      </div>
    ))}
  </div>;
}

function ThumbProgress() {
  return <div style={{ ...s, padding:"18px 24px", display:"flex", flexDirection:"column", gap:14, justifyContent:"center" }}>
    {[65,40,80].map((pct,i) => (
      <div key={i}>
        <div style={{ display:"flex", justifyContent:"space-between", marginBottom:4 }}>
          <span style={{ fontFamily:"var(--font-mono)", fontSize:8, color:T.muted }}>Progress</span>
          <span style={{ fontFamily:"var(--font-mono)", fontSize:8, color:T.accent }}>{pct}%</span>
        </div>
        <div style={{ height:6, background:T.block, borderRadius:100 }}>
          <div style={{ height:"100%", width:`${pct}%`, background:T.accent, borderRadius:100, opacity: 1 - i*0.2 }} />
        </div>
      </div>
    ))}
  </div>;
}

/* ── FORM ────────────────────────────────────── */
function ThumbLogin() {
  return <div style={{ ...s, display:"flex", justifyContent:"center", alignItems:"center" }}>
    <div style={{ width:"78%", background:"#fff", border:`1px solid ${T.border}`, borderRadius:10, padding:"16px 18px", boxShadow:"0 4px 14px rgba(0,0,0,.06)" }}>
      <div style={{ height:7, background:T.text, borderRadius:2, width:"50%", marginBottom:12, opacity:.7 }} />
      <div style={{ fontFamily:"var(--font-mono)", fontSize:7, color:T.muted, marginBottom:3 }}>E-POSTA</div>
      <div style={{ height:20, border:`1px solid ${T.border}`, borderRadius:5, marginBottom:8 }} />
      <div style={{ fontFamily:"var(--font-mono)", fontSize:7, color:T.muted, marginBottom:3 }}>PASSWORD</div>
      <div style={{ height:20, border:`1px solid ${T.border}`, borderRadius:5, marginBottom:10 }} />
      <div style={{ height:20, background:T.accent, borderRadius:5, opacity:.85 }} />
    </div>
  </div>;
}

function ThumbWizard() {
  return <div style={{ ...s, padding:"14px 18px", display:"flex", flexDirection:"column", gap:10, justifyContent:"center" }}>
    <div style={{ display:"flex", alignItems:"center", gap:0 }}>
      {[1,2,3,4].map((step,i) => (
        <div key={step} style={{ display:"flex", alignItems:"center", flex: i<3 ? 1 : "auto" }}>
          <div style={{
            width:20, height:20, borderRadius:"50%", flexShrink:0,
            background: step <= 2 ? T.accent : T.block,
            display:"flex", alignItems:"center", justifyContent:"center",
            opacity: step === 2 ? 1 : step < 2 ? 0.7 : 0.4,
          }}>
            <span style={{ fontFamily:"var(--font-mono)", fontSize:7, color: step<=2 ? "#fff" : T.muted }}>{step}</span>
          </div>
          {i < 3 && <div style={{ flex:1, height:1, background: step < 2 ? T.accent : T.block, opacity: step < 2 ? 0.5 : 1 }} />}
        </div>
      ))}
    </div>
    <div style={{ display:"flex", flexDirection:"column", gap:5 }}>
      {[1,2].map(i => <div key={i} style={{ height:20, border:`1px solid ${T.border}`, borderRadius:5 }} />)}
    </div>
  </div>;
}

function ThumbFiltre() {
  return <div style={{ ...s, padding:"14px 18px", display:"flex", flexDirection:"column", gap:8, justifyContent:"center" }}>
    {["Category","Price","Color"].map((label, groupI) => (
      <div key={label}>
        <div style={{ fontFamily:"var(--font-mono)", fontSize:8, color:T.muted, letterSpacing:"0.08em", marginBottom:4 }}>{label.toUpperCase()}</div>
        <div style={{ display:"flex", flexDirection:"column", gap:3 }}>
          {[0,1].map(i => (
            <div key={i} style={{ display:"flex", alignItems:"center", gap:6 }}>
              <div style={{ width:11, height:11, border:`1px solid ${groupI===0 && i===0 ? T.accent : T.border}`, borderRadius:2, background: groupI===0 && i===0 ? T.adim : "transparent", flexShrink:0 }} />
              <div style={{ height:5, background:T.block, borderRadius:2, flex:1 }} />
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>;
}

function ThumbDragDrop() {
  return <div style={{ ...s, display:"flex", alignItems:"center", justifyContent:"center", padding:16 }}>
    <div style={{ width:"85%", height:"75%", border:`2px dashed ${T.accent}`, borderRadius:10, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:6, background:T.adim }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={T.accent} strokeWidth="1.5" strokeLinecap="round">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
      </svg>
      <span style={{ fontFamily:"var(--font-mono)", fontSize:8, color:T.accent, letterSpacing:"0.08em" }}>Drop file here</span>
    </div>
  </div>;
}

/* ── NAVIGATION ─────────────────────────────── */
function ThumbStickyHeader() {
  return <div style={{ ...s, display:"flex", flexDirection:"column" }}>
    <div style={{ height:36, background:T.accent, display:"flex", alignItems:"center", padding:"0 14px", gap:12, opacity:.9 }}>
      <div style={{ width:20, height:20, borderRadius:4, background:"rgba(255,255,255,.3)" }} />
      <div style={{ display:"flex", gap:10 }}>
        {["Ana","Explore","Blog"].map(l => <span key={l} style={{ fontFamily:"var(--font-mono)", fontSize:8, color:"rgba(255,255,255,.7)" }}>{l}</span>)}
      </div>
    </div>
    <div style={{ flex:1, padding:10, display:"flex", flexDirection:"column", gap:5 }}>
      <div style={{ height:7, background:T.block, borderRadius:2, width:"70%" }} />
      <div style={{ height:5, background:T.block, borderRadius:2 }} />
      <div style={{ height:5, background:T.block, borderRadius:2, width:"85%" }} />
    </div>
  </div>;
}

function ThumbBreadcrumb() {
  return <div style={{ ...s, display:"flex", alignItems:"center", justifyContent:"center" }}>
    <div style={{ display:"flex", alignItems:"center", gap:6 }}>
      {["Home","Categoryler","UI"].map((item,i) => (
        <div key={item} style={{ display:"flex", alignItems:"center", gap:6 }}>
          <span style={{ fontFamily:"var(--font-mono)", fontSize:10, color: i===2 ? T.accent : T.muted }}>{item}</span>
          {i < 2 && <span style={{ color:T.border }}>›</span>}
        </div>
      ))}
    </div>
  </div>;
}

function ThumbBottomTab() {
  return <div style={{ ...s, display:"flex", flexDirection:"column" }}>
    <div style={{ flex:1, padding:10, display:"flex", flexDirection:"column", gap:4 }}>
      {[1,2,3].map(i => <div key={i} style={{ height:8, background:T.block, borderRadius:2, opacity: 1-i*.2 }} />)}
    </div>
    <div style={{ height:44, borderTop:`1px solid ${T.border}`, display:"grid", gridTemplateColumns:"repeat(4,1fr)" }}>
      {[true,false,false,false].map((active,i) => (
        <div key={i} style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:3 }}>
          <div style={{ width:14, height:14, borderRadius:3, background: active ? T.accent : T.block, opacity: active ? .8 : .5 }} />
          <div style={{ height:3, width:16, background: active ? T.accent : T.block, borderRadius:1, opacity: active ? .6 : .3 }} />
        </div>
      ))}
    </div>
  </div>;
}

function ThumbPagination() {
  return <div style={{ ...s, display:"flex", alignItems:"center", justifyContent:"center" }}>
    <div style={{ display:"flex", gap:4, alignItems:"center" }}>
      <div style={{ width:24, height:24, border:`1px solid ${T.border}`, borderRadius:5, display:"flex", alignItems:"center", justifyContent:"center" }}>
        <span style={{ fontFamily:"var(--font-mono)", fontSize:9, color:T.muted }}>←</span>
      </div>
      {[1,2,3,"...",8].map((p,i) => (
        <div key={i} style={{
          width:24, height:24, borderRadius:5,
          background: p===2 ? T.accent : "transparent",
          border: p===2 ? "none" : `1px solid ${T.border}`,
          display:"flex", alignItems:"center", justifyContent:"center",
        }}>
          <span style={{ fontFamily:"var(--font-mono)", fontSize:9, color: p===2 ? "#fff" : T.muted }}>{p}</span>
        </div>
      ))}
      <div style={{ width:24, height:24, border:`1px solid ${T.border}`, borderRadius:5, display:"flex", alignItems:"center", justifyContent:"center" }}>
        <span style={{ fontFamily:"var(--font-mono)", fontSize:9, color:T.muted }}>→</span>
      </div>
    </div>
  </div>;
}

/* ── DARK MODE ───────────────────────────────── */
function ThumbCssVar() {
  return <div style={{ ...s, padding:"14px 18px", display:"flex", flexDirection:"column", gap:5, justifyContent:"center" }}>
    {[
      ["--bg",   "#F8F7F4","#0D0C0A"],
      ["--text", "#111111","#F5F5F5"],
      ["--accent","#111111","#111111"],
    ].map(([name, light, dark]) => (
      <div key={name} style={{ display:"flex", alignItems:"center", gap:8 }}>
        <span style={{ fontFamily:"var(--font-mono)", fontSize:8, color:T.muted, width:60, flexShrink:0 }}>{name}</span>
        <div style={{ width:14, height:14, borderRadius:2, background:light, border:`1px solid ${T.border}` }} />
        <span style={{ fontFamily:"var(--font-mono)", fontSize:8, color:T.muted }}>→</span>
        <div style={{ width:14, height:14, borderRadius:2, background:dark, border:`1px solid ${T.border}` }} />
      </div>
    ))}
  </div>;
}

function ThumbDarkToggle() {
  return <div style={{ ...s, display:"flex", alignItems:"center", justifyContent:"center" }}>
    <div style={{ display:"flex", flexDirection:"column", gap:12, alignItems:"center" }}>
      <div style={{ display:"flex", gap:12, alignItems:"center" }}>
        <span style={{ fontFamily:"var(--font-mono)", fontSize:9, color:T.muted }}>☀</span>
        <div style={{ width:40, height:22, borderRadius:100, background:T.block, position:"relative" }}>
          <div style={{ width:16, height:16, borderRadius:"50%", background:"#fff", position:"absolute", top:3, left:3, boxShadow:"0 1px 4px rgba(0,0,0,.15)" }} />
        </div>
        <span style={{ fontFamily:"var(--font-mono)", fontSize:9, color:T.muted }}>☾</span>
      </div>
      <div style={{ display:"flex", gap:12, alignItems:"center" }}>
        <span style={{ fontFamily:"var(--font-mono)", fontSize:9, color:T.muted }}>☀</span>
        <div style={{ width:40, height:22, borderRadius:100, background:"#111111", position:"relative" }}>
          <div style={{ width:16, height:16, borderRadius:"50%", background:T.accent, position:"absolute", top:3, right:3, boxShadow:"0 1px 4px rgba(0,0,0,.3)" }} />
        </div>
        <span style={{ fontFamily:"var(--font-mono)", fontSize:9, color:T.text }}>☾</span>
      </div>
    </div>
  </div>;
}

/* ── KART TASARIMI ───────────────────────────── */
function ThumbFlipKart() {
  return <div style={{ ...s, display:"flex", alignItems:"center", justifyContent:"center", gap:10 }}>
    <div style={{ width:"38%", height:"70%", border:`1px solid ${T.accent}`, borderRadius:8, background:T.adim, display:"flex", alignItems:"center", justifyContent:"center" }}>
      <span style={{ fontFamily:"var(--font-mono)", fontSize:8, color:T.accent }}>FRONT</span>
    </div>
    <span style={{ fontFamily:"var(--font-mono)", fontSize:12, color:T.muted }}>↔</span>
    <div style={{ width:"38%", height:"70%", border:`1px solid ${T.border}`, borderRadius:8, background:"#111111", display:"flex", alignItems:"center", justifyContent:"center" }}>
      <span style={{ fontFamily:"var(--font-mono)", fontSize:8, color:"rgba(255,255,255,.5)" }}>BACK</span>
    </div>
  </div>;
}

function ThumbGlassKart() {
  return <div style={{ background:"linear-gradient(135deg,#111111,#6B6B6B)", height:"100%", display:"flex", alignItems:"center", justifyContent:"center" }}>
    <div style={{
      width:"75%", padding:"16px 18px",
      background:"rgba(255,255,255,.15)",
      backdropFilter:"blur(10px)",
      border:"1px solid rgba(255,255,255,.3)",
      borderRadius:10,
    }}>
      <div style={{ height:6, background:"rgba(255,255,255,.7)", borderRadius:2, width:"60%", marginBottom:6 }} />
      <div style={{ height:4, background:"rgba(255,255,255,.4)", borderRadius:2, marginBottom:4 }} />
      <div style={{ height:4, background:"rgba(255,255,255,.4)", borderRadius:2, width:"80%" }} />
    </div>
  </div>;
}

function ThumbProfilKart() {
  return <div style={{ ...s, padding:"16px 18px", display:"flex", flexDirection:"column", alignItems:"center", gap:8, justifyContent:"center" }}>
    <div style={{ width:44, height:44, borderRadius:"50%", background:`linear-gradient(135deg,${T.accent},#6B6B6B)`, display:"flex", alignItems:"center", justifyContent:"center" }}>
      <span style={{ fontFamily:"var(--font-display)", fontSize:18, color:"#fff" }}>A</span>
    </div>
    <div style={{ textAlign:"center" }}>
      <div style={{ height:7, background:T.text, borderRadius:2, width:60, margin:"0 auto 4px", opacity:.7 }} />
      <div style={{ height:5, background:T.block, borderRadius:2, width:44, margin:"0 auto" }} />
    </div>
    <div style={{ display:"flex", gap:6 }}>
      {[0,1,2].map(i => <div key={i} style={{ width:18, height:18, borderRadius:4, background:T.block }} />)}
    </div>
  </div>;
}

function ThumbUrunKart() {
  return <div style={{ ...s, display:"flex", flexDirection:"column" }}>
    <div style={{ height:"55%", background:`linear-gradient(135deg,${T.block},${T.adim})`, display:"flex", alignItems:"center", justifyContent:"center", position:"relative" }}>
      <div style={{ width:50, height:50, borderRadius:8, background:T.accent, opacity:.3 }} />
      <div style={{ position:"absolute", top:8, right:8, fontFamily:"var(--font-mono)", fontSize:7, background:"#22C55E", color:"#fff", padding:"2px 5px", borderRadius:3 }}>STOK</div>
    </div>
    <div style={{ padding:"8px 10px", display:"flex", flexDirection:"column", gap:4 }}>
      <div style={{ height:5, background:T.text, borderRadius:2, width:"70%", opacity:.6 }} />
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <span style={{ fontFamily:"var(--font-display)", fontSize:14, color:T.accent }}>₺299</span>
        <div style={{ height:16, width:28, background:T.accent, borderRadius:4, opacity:.8 }} />
      </div>
    </div>
  </div>;
}

function ThumbBlogKart() {
  return <div style={{ ...s, display:"flex", flexDirection:"column" }}>
    <div style={{ height:"45%", background:T.block }} />
    <div style={{ padding:"10px 12px", display:"flex", flexDirection:"column", gap:5 }}>
      <div style={{ display:"flex", gap:6, alignItems:"center" }}>
        <div style={{ fontFamily:"var(--font-mono)", fontSize:7, padding:"2px 6px", borderRadius:100, background:T.adim, color:T.accent }}>TASARIM</div>
        <span style={{ fontFamily:"var(--font-mono)", fontSize:7, color:T.muted }}>5 dk okuma</span>
      </div>
      <div style={{ height:5, background:T.text, borderRadius:2, opacity:.6 }} />
      <div style={{ height:4, background:T.block, borderRadius:2, width:"80%" }} />
    </div>
  </div>;
}

/* ── DATA VISUALIZATION ────────────────────── */
function ThumbBarChart() {
  const bars = [40,72,55,88,35,62,48,78];
  return <div style={{ ...s, padding:"14px 14px 10px", display:"flex", flexDirection:"column", gap:6, justifyContent:"flex-end" }}>
    <div style={{ display:"flex", alignItems:"flex-end", gap:4, height:72 }}>
      {bars.map((h,i) => (
        <div key={i} style={{ flex:1, height:`${h}%`, borderRadius:"2px 2px 0 0", background: [1,3,7].includes(i) ? T.accent : T.block, opacity: [1,3,7].includes(i) ? .8 : 1 }} />
      ))}
    </div>
    <div style={{ height:1, background:T.border }} />
    <div style={{ display:"flex", justifyContent:"space-between" }}>
      {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug"].map(m => (
        <span key={m} style={{ fontFamily:"var(--font-mono)", fontSize:7, color:T.muted }}>{m}</span>
      ))}
    </div>
  </div>;
}

function ThumbLineChart() {
  return <div style={{ ...s, padding:"16px 14px 10px", position:"relative" }}>
    <svg width="100%" height="100%" viewBox="0 0 200 100" preserveAspectRatio="none">
      <defs>
        <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#111111" stopOpacity="0.2"/>
          <stop offset="100%" stopColor="#111111" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <path d="M0,80 L25,65 L50,50 L75,35 L100,45 L125,25 L150,30 L175,15 L200,20 L200,100 L0,100 Z" fill="url(#grad)"/>
      <path d="M0,80 L25,65 L50,50 L75,35 L100,45 L125,25 L150,30 L175,15 L200,20" fill="none" stroke="#111111" strokeWidth="2"/>
      {[[0,80],[75,35],[125,25],[200,20]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="#111111"/>
      ))}
    </svg>
  </div>;
}

function ThumbDonut() {
  return <div style={{ ...s, display:"flex", alignItems:"center", justifyContent:"center" }}>
    <svg width="100" height="100" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="36" fill="none" stroke={T.block} strokeWidth="14"/>
      <circle cx="50" cy="50" r="36" fill="none" stroke={T.accent} strokeWidth="14" strokeDasharray="142" strokeDashoffset="50" strokeLinecap="round" transform="rotate(-90 50 50)"/>
      <text x="50" y="54" textAnchor="middle" fontFamily="var(--font-display)" fontSize="16" fill={T.text}>65%</text>
    </svg>
  </div>;
}

function ThumbHeatmap() {
  const values = Array.from({length:52}, () => Array.from({length:7}, () => Math.random()));
  const cols = values.slice(0, 20);
  return <div style={{ ...s, padding:"14px", display:"flex", gap:2, alignItems:"flex-start", overflow:"hidden" }}>
    {cols.map((week, wi) => (
      <div key={wi} style={{ display:"flex", flexDirection:"column", gap:2 }}>
        {week.map((val, di) => (
          <div key={di} style={{ width:8, height:8, borderRadius:1, background:T.accent, opacity: val < 0.2 ? 0.05 : val < 0.5 ? 0.2 : val < 0.8 ? 0.55 : 0.9 }} />
        ))}
      </div>
    ))}
  </div>;
}

function ThumbSparkline() {
  return <div style={{ ...s, padding:"20px 24px", display:"flex", flexDirection:"column", gap:12, justifyContent:"center" }}>
    {[
      { label:"Visitors", val:"12,430", trend:"+12%" },
      { label:"Conversion",   val:"3.2%",  trend:"+0.4%" },
      { label:"Revenue",     val:"₺8,920", trend:"+22%" },
    ].map(({ label, val, trend }) => (
      <div key={label} style={{ display:"flex", alignItems:"center", gap:8 }}>
        <div style={{ flex:1 }}>
          <div style={{ fontFamily:"var(--font-mono)", fontSize:7, color:T.muted }}>{label}</div>
          <div style={{ fontFamily:"var(--font-display)", fontSize:13, color:T.text }}>{val}</div>
        </div>
        <svg width="50" height="22" viewBox="0 0 50 22">
          <path d="M0,18 L8,14 L16,10 L24,12 L32,7 L40,4 L50,2" fill="none" stroke={T.accent} strokeWidth="1.5"/>
        </svg>
        <span style={{ fontFamily:"var(--font-mono)", fontSize:8, color:"#22C55E" }}>{trend}</span>
      </div>
    ))}
  </div>;
}

/* ════════════════════════════════════════════
   EXPORT MAP
════════════════════════════════════════════ */
export const blockThumbMap: Record<string, () => React.ReactElement> = {
  // color-systems
  r1: ThumbPrimerPalet,
  r2: ThumbGriSkala,
  r3: ThumbSemantik,
  r4: () => { const C = () => <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", height:"100%" }}><div style={{ background:"#F1F1F1", padding:16, display:"flex", flexDirection:"column", gap:6, justifyContent:"center" }}>{[T.accent,T.block,T.border].map((c,i)=><div key={i} style={{ height:8, borderRadius:2, background:c, opacity: i===0?.6:.3 }}/>)}</div><div style={{ background:"#0D0C0A", padding:16, display:"flex", flexDirection:"column", gap:6, justifyContent:"center" }}>{[T.accent,"rgba(255,255,255,.15)","rgba(255,255,255,.08)"].map((c,i)=><div key={i} style={{ height:8, borderRadius:2, background:c, opacity: i===0?.7:.6 }}/>)}</div></div>; return <C/>; },
  r5: ThumbGradient,
  r6: ThumbKontrast,
  r7: ThumbToken,
  r8: ThumbTailwindPalet,
  // tipografi
  t1: ThumbTypeScale,
  t2: ThumbFontPair,
  t3: ThumbHiyerarsi,
  t4: ThumbKodBlok,
  t5: ThumbResponsiveType,
  t6: ThumbHarfAralik,
  // grid
  g1: Thumb12Kolon,
  g2: ThumbHolyGrail,
  g3: ThumbMasonry,
  g4: ThumbDashboard,
  g5: ThumbBento,
  g6: ThumbSplit,
  g7: ThumbMagazine,
  g8: ThumbStickySidebar,
  g9: ThumbCentered,
  // ui
  u1: ThumbButonAilesi,
  u2: ThumbInput,
  u3: ThumbBadge,
  u4: ThumbModal,
  u5: ThumbTooltip,
  u6: ThumbModal, // reuse
  u7: ThumbToast,
  u8: ThumbSkeleton,
  u9: ThumbProfilKart,
  u10: ThumbWizard,
  u11: ThumbProgress,
  u12: ThumbPagination,
  u13: ThumbDarkToggle,
  u14: ThumbKodBlok,
  // ikonlar
  i1: Thumb12Kolon,
  i2: () => { const I = () => { const icons = ["M4 6h16M4 12h16M4 18h16","M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z","M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 3a4 4 0 100 8","M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z","M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z","M12 5v14M5 12h14","M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87"]; return <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", background:T.border, gap:1, height:"100%" }}>{icons.map((d,i)=><div key={i} style={{ background:T.bg, display:"flex", alignItems:"center", justifyContent:"center" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={T.muted} strokeWidth="1.5" strokeLinecap="round"><path d={d}/></svg></div>)}</div>; }; return <I/>; },
  i3: ThumbToken,
  i4: ThumbDarkToggle,
  i5: ThumbBadge,
  // aralik
  a1: () => { const S = () => <div style={{ ...s, padding:"20px 26px", display:"flex", flexDirection:"column", gap:6, justifyContent:"center" }}>{[[4,18,4],[8,36,8],[16,72,12],[32,130,16],[64,190,20]].map(([label,w,h],i)=><div key={label} style={{ display:"flex", alignItems:"center", gap:10 }}><span style={{ fontFamily:"var(--font-mono)", fontSize:8, color:T.muted, width:22, textAlign:"right" }}>{label}</span><div style={{ width:w, height:h, borderRadius:2, background: i<4 ? `linear-gradient(90deg,${T.accent},transparent)` : T.block }} /></div>)}</div>; return <S/>; },
  a2: ThumbBadge,
  a3: ThumbButonAilesi,
  a4: ThumbResponsiveType,
  // motion
  h1: () => { const E = () => <div style={{ ...s, padding:"14px 20px", display:"flex", flexDirection:"column", gap:8, justifyContent:"center" }}>{[["ease-in","cubic-bezier(.4,0,1,1)"],["ease-out","cubic-bezier(0,0,.2,1)"],["spring","cubic-bezier(.34,1.56,.64,1)"]].map(([name])=><div key={name}><span style={{ fontFamily:"var(--font-mono)", fontSize:8, color:T.muted }}>{name}</span><div style={{ height:28, marginTop:2, position:"relative" }}><svg width="100%" height="28" viewBox="0 0 100 28"><path d={name==="ease-in"?"M0,24 C30,24 70,4 100,4":name==="ease-out"?"M0,24 C30,24 30,4 100,4":"M0,24 C40,24 60,-4 100,4"} fill="none" stroke={T.accent} strokeWidth="1.5" opacity=".7"/></svg></div></div>)}</div>; return <E/>; },
  h2: ThumbSkeleton,
  h3: () => { const Sl = () => <div style={{ ...s, display:"flex", alignItems:"center", justifyContent:"center", gap:16 }}>{[["↑","up"],["↓","down"],["←","left"],["→","right"]].map(([arrow,dir])=><div key={dir} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:4 }}><div style={{ width:28, height:28, border:`1px solid ${T.border}`, borderRadius:6, display:"flex", alignItems:"center", justifyContent:"center" }}><span style={{ fontSize:16, color:T.accent }}>{arrow}</span></div><span style={{ fontFamily:"var(--font-mono)", fontSize:7, color:T.muted }}>{dir}</span></div>)}</div>; return <Sl/>; },
  h4: ThumbProgress,
  h5: () => { const Sp = () => <div style={{ ...s, display:"flex", alignItems:"center", justifyContent:"center", gap:20 }}>{[{r:18,color:T.accent},{r:12,color:T.block},{r:8,color:T.border}].map(({r,color},i)=><div key={i} style={{ width:r*2, height:r*2, borderRadius:"50%", border:`2px solid ${color}`, borderTopColor:"transparent", animation:`spin ${0.8+i*0.3}s linear infinite` }}/>)}<style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style></div>; return <Sp/>; },
  h6: ThumbSplit,
  h7: ThumbHeatmap,
  // form
  f1: ThumbLogin,
  f2: ThumbWizard,
  f3: () => { const Sr = () => <div style={{ ...s, display:"flex", alignItems:"center", justifyContent:"center", padding:"0 20px" }}><div style={{ width:"100%", border:`1px solid ${T.accent}`, borderRadius:8, padding:"8px 12px", display:"flex", alignItems:"center", gap:8 }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={T.muted} strokeWidth="1.5" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg><div style={{ flex:1, height:5, background:T.block, borderRadius:2 }} /></div></div>; return <Sr/>; },
  f4: ThumbLogin,
  f5: ThumbDragDrop,
  f6: ThumbWizard,
  f7: ThumbFiltre,
  f8: ThumbInput,
  // navigation
  n1: ThumbStickyHeader,
  n2: ThumbStickySidebar,
  n3: ThumbBreadcrumb,
  n4: ThumbBottomTab,
  n5: ThumbDashboard,
  n6: ThumbPagination,
  // dark-mode
  k1: ThumbCssVar,
  k2: ThumbDarkToggle,
  k3: ThumbCssVar,
  k4: () => { const Dm = () => <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", height:"100%" }}><div style={{ background:"#F1F1F1", display:"flex", alignItems:"center", justifyContent:"center" }}><div style={{ width:60, height:40, borderRadius:6, background:T.block, opacity:.8 }}/></div><div style={{ background:"#0D0C0A", display:"flex", alignItems:"center", justifyContent:"center" }}><div style={{ width:60, height:40, borderRadius:6, background:"rgba(255,255,255,.08)", filter:"brightness(0.6)" }}/></div></div>; return <Dm/>; },
  k5: ThumbDarkToggle,
  // card
  ka1: ThumbBlogKart,
  ka2: ThumbProfilKart,
  ka3: () => { const Stat = () => <div style={{ ...s, display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, padding:12 }}>{[{n:"12,430",l:"Visitors",t:"+12%"},{n:"3.2%",l:"Conversion",t:"+0.4%"},{n:"₺8,920",l:"Revenue",t:"+22%"},{n:"94%",l:"Satisfaction",t:"+3%"}].map(({n,l,t})=><div key={l} style={{ border:`1px solid ${T.border}`, borderRadius:6, padding:"8px 10px" }}><div style={{ fontFamily:"var(--font-display)", fontSize:18, color:T.text, lineHeight:1 }}>{n}</div><div style={{ fontFamily:"var(--font-mono)", fontSize:7, color:T.muted, marginTop:2 }}>{l}</div><div style={{ fontFamily:"var(--font-mono)", fontSize:7, color:"#22C55E", marginTop:2 }}>{t}</div></div>)}</div>; return <Stat/>; },
  ka4: ThumbUrunKart,
  ka5: () => { const Horz = () => <div style={{ ...s, display:"flex", alignItems:"center", padding:14, gap:10 }}><div style={{ width:60, height:60, borderRadius:8, background:T.block, flexShrink:0 }} /><div style={{ flex:1, display:"flex", flexDirection:"column", gap:5 }}><div style={{ height:6, background:T.text, borderRadius:2, opacity:.6, width:"80%" }} /><div style={{ height:5, background:T.block, borderRadius:2 }} /><div style={{ height:5, background:T.block, borderRadius:2, width:"70%" }} /><div style={{ alignSelf:"flex-start", padding:"3px 10px", background:T.adim, border:`1px solid rgba(17,17,17,.2)`, borderRadius:100, marginTop:2 }}><span style={{ fontFamily:"var(--font-mono)", fontSize:7, color:T.accent }}>Read more →</span></div></div></div>; return <Horz/>; },
  ka6: ThumbGlassKart,
  ka7: ThumbFlipKart,
  ka8: ThumbBlogKart,
  // data
  v1: ThumbBarChart,
  v2: ThumbLineChart,
  v3: ThumbDonut,
  v4: ThumbProgress,
  v5: ThumbSparkline,
  v6: ThumbHeatmap,
};

export default function BlockThumb({ blockId }: { blockId: string }) {
  const Thumb = blockThumbMap[blockId];
  if (!Thumb) return <div style={{ height:"100%", background:"#F4F4F4" }} />;
  return <Thumb />;
}
