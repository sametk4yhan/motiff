const accentSquares = [
  { x: 72, y: 8 },
  { x: 12, y: 74 },
  { x: 72, y: 140 },
  { x: 12, y: 206 },
  { x: 72, y: 272 },
  { x: 12, y: 338 },
];

export default function HeroMotifField() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "clamp(-72px, -4vw, -28px)",
          left: "clamp(-220px, -13vw, -112px)",
          width: "clamp(150px, 15vw, 190px)",
          height: "clamp(420px, 52vw, 620px)",
          transform: "rotate(-27deg)",
          transformOrigin: "top left",
          opacity: 0.11,
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 104 452"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ color: "var(--text)", overflow: "visible" }}
          shapeRendering="crispEdges"
        >
          <path
            d="M30 0V22H46V44H30V66H46V88H30V110H46V132H30V154H46V176H30V198H46V220H30V242H46V264H30V286H46V308H30V330H46V352H30V374H46V396H30V418H46V440H30"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinejoin="miter"
          />
          <path
            d="M54 0V22H70V44H54V66H70V88H54V110H70V132H54V154H70V176H54V198H70V220H54V242H70V264H54V286H70V308H54V330H70V352H54V374H70V396H54V418H70V440H54"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinejoin="miter"
          />

          {accentSquares.map((square) => (
            <rect key={square.x + "-" + square.y} x={square.x} y={square.y} width="18" height="18" fill="currentColor" />
          ))}
        </svg>
      </div>
    </div>
  );
}
