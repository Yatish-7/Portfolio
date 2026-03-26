/**
 * Radial network beside the photo: open layout (no card chrome), square matches photo size.
 */
const CX = 200;
const CY = 200;
const ORBIT_R = 148;
const HUB_ATTACH_R = 56;
const NODE_R = 26;

const NODES = [
  { label: "Cystar", angleDeg: -135 },
  { label: "NewMEK", angleDeg: -75 },
  { label: "Java", angleDeg: -15 },
  { label: "Spring", angleDeg: 45 },
  { label: "AWS", angleDeg: 105 },
  { label: "Red Hat", angleDeg: 165 },
];

/** Same width breakpoints as profile flip-card; square via aspect-square */
const PHOTO_W = "w-56 sm:w-64 md:w-72 lg:w-80 shrink-0";

function polarToXY(angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: CX + ORBIT_R * Math.cos(rad),
    y: CY + ORBIT_R * Math.sin(rad),
  };
}

function edgeToEdgeLine(angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
  const ux = Math.cos(rad);
  const uy = Math.sin(rad);
  const xSat = CX + ORBIT_R * ux;
  const ySat = CY + ORBIT_R * uy;
  return {
    x1: CX + ux * HUB_ATTACH_R,
    y1: CY + uy * HUB_ATTACH_R,
    x2: xSat - ux * NODE_R,
    y2: ySat - uy * NODE_R,
  };
}

function HubYD() {
  return (
    <g className="network-hub-enter pointer-events-none">
      <circle cx={CX} cy={CY} r={56} fill="none" stroke="#ea580c" strokeWidth={5} />
      <circle
        cx={CX}
        cy={CY}
        r={48}
        fill="#0a0a0a"
        stroke="#ffffff"
        strokeWidth={2.5}
      />
      <text
        x={CX}
        y={CY}
        textAnchor="middle"
        dominantBaseline="central"
        fill="#ffffff"
        className="select-none"
        style={{
          fontSize: 26,
          fontWeight: 700,
          fontFamily: "inherit",
        }}
      >
        YD
      </text>
    </g>
  );
}

/**
 * @param {{ className?: string }} props
 */
export default function AboutNetworkDiagram({ className = "" }) {
  return (
    <div
      className={`profile-network-visual flex flex-col items-center gap-1 overflow-x-clip overflow-y-visible sm:overflow-visible ${PHOTO_W} ${className}`.trim()}
    >
      <span className="network-heading-enter w-full text-center text-xs font-bold tracking-tight text-slate-900 sm:text-sm">
        Network
      </span>

      <div className="network-grid-open network-grid-anim relative aspect-square w-full overflow-visible">
        <svg
          className="network-svg h-full w-full"
          viewBox="0 0 400 400"
          preserveAspectRatio="xMidYMid meet"
          role="img"
        >
          <title>Network: YD hub with connections</title>
          {NODES.map(({ label, angleDeg }, i) => {
            const { x1, y1, x2, y2 } = edgeToEdgeLine(angleDeg);
            return (
              <line
                key={`line-${label}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#cbd5e1"
                strokeWidth={2.25}
                strokeLinecap="round"
                className="network-edge network-edge-anim transition-[stroke,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  animationDelay: `calc(var(--reveal-delay, 0ms) + ${220 + i * 38}ms)`,
                }}
              />
            );
          })}

          <HubYD />

          {NODES.map(({ label, angleDeg }, i) => {
            const { x, y } = polarToXY(angleDeg);
            return (
              <g
                key={label}
                className="network-satellite-group pointer-events-auto"
                transform={`translate(${x}, ${y})`}
              >
                <g
                  className="network-satellite-inner network-satellite-enter"
                  style={{
                    animationDelay: `calc(var(--reveal-delay, 0ms) + ${320 + i * 42}ms)`,
                  }}
                >
                  <circle
                    cx={0}
                    cy={0}
                    r={NODE_R}
                    fill="#ffffff"
                    stroke="#e2e8f0"
                    strokeWidth="1.5"
                    className="network-satellite-circle"
                  />
                  <text
                    x={0}
                    y={0}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="#64748b"
                    className="pointer-events-none select-none network-satellite-label"
                    style={{
                      fontSize: label.length > 6 ? "8px" : label.length > 4 ? "9px" : "10px",
                      fontWeight: 600,
                      fontFamily: "inherit",
                    }}
                  >
                    {label}
                  </text>
                </g>
              </g>
            );
          })}
        </svg>
      </div>

      <p className="network-caption-enter max-w-[16rem] text-center text-[10px] leading-snug text-slate-500 sm:max-w-none sm:text-[11px]">
        Research, employers, and stack.
      </p>
    </div>
  );
}
