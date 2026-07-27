// Illustrative mockup only — not a screenshot of a real client project.
const DashboardMockup = () => {
  return (
    <svg
      viewBox="0 0 560 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      role="img"
      aria-label="Illustrative mockup of a CRM dashboard showing pipeline stats, a chart, and a lead list"
    >
      <rect x="1" y="1" width="558" height="418" rx="14" fill="white" stroke="#E5E9F0" strokeWidth="1.5" />

      {/* Sidebar */}
      <rect x="1" y="1" width="120" height="418" rx="14" fill="#F7F9FC" />
      <rect x="1" y="1" width="120" height="418" fill="#F7F9FC" />
      <rect x="24" y="28" width="72" height="10" rx="3" fill="#2455C9" />
      {[72, 104, 136, 168, 200].map((y, i) => (
        <g key={i}>
          <rect x="24" y={y} width="14" height="14" rx="4" fill={i === 0 ? "#DCE6FB" : "#EDEFF3"} />
          <rect x="46" y={y + 4} width="56" height="6" rx="3" fill={i === 0 ? "#2455C9" : "#C7CDD8"} />
        </g>
      ))}

      {/* Top bar */}
      <rect x="140" y="26" width="140" height="14" rx="4" fill="#1B2430" />
      <rect x="420" y="24" width="120" height="28" rx="8" fill="#F7F9FC" />

      {/* Stat cards */}
      {[
        { x: 140, label: "OPEN DEALS", value: "24" },
        { x: 268, label: "ORDERS IN PROGRESS", value: "12" },
        { x: 396, label: "APPROVALS PENDING", value: "3" },
      ].map((card, i) => (
        <g key={i}>
          <rect x={card.x} y="64" width="112" height="72" rx="10" fill="white" stroke="#E5E9F0" />
          <rect x={card.x + 14} y="80" width="70" height="6" rx="3" fill="#9CA6B4" />
          <text x={card.x + 14} y="112" fontFamily="Inter, sans-serif" fontSize="22" fontWeight="700" fill="#1B2430">
            {card.value}
          </text>
        </g>
      ))}

      {/* Chart block */}
      <rect x="140" y="152" width="180" height="120" rx="10" fill="white" stroke="#E5E9F0" />
      <rect x="156" y="166" width="90" height="7" rx="3" fill="#1B2430" />
      <polyline
        points="160,240 190,220 220,232 250,196 280,206 300,180"
        fill="none"
        stroke="#2455C9"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {[160, 190, 220, 250, 280, 300].map((x, i) => (
        <circle key={i} cx={x} cy={[240, 220, 232, 196, 206, 180][i]} r="3" fill="#2455C9" />
      ))}

      {/* Mini donut / status block */}
      <rect x="332" y="152" width="184" height="120" rx="10" fill="white" stroke="#E5E9F0" />
      <rect x="348" y="166" width="80" height="7" rx="3" fill="#1B2430" />
      <circle cx="378" cy="222" r="30" fill="none" stroke="#DCE6FB" strokeWidth="12" />
      <circle
        cx="378"
        cy="222"
        r="30"
        fill="none"
        stroke="#2455C9"
        strokeWidth="12"
        strokeDasharray="141 188"
        strokeLinecap="round"
        transform="rotate(-90 378 222)"
      />
      <rect x="430" y="204" width="10" height="10" rx="2" fill="#2455C9" />
      <rect x="446" y="205" width="50" height="6" rx="3" fill="#C7CDD8" />
      <rect x="430" y="228" width="10" height="10" rx="2" fill="#DCE6FB" />
      <rect x="446" y="229" width="50" height="6" rx="3" fill="#C7CDD8" />

      {/* Lead list table */}
      <rect x="140" y="288" width="376" height="112" rx="10" fill="white" stroke="#E5E9F0" />
      <rect x="156" y="302" width="110" height="7" rx="3" fill="#1B2430" />
      {[0, 1, 2].map((row) => (
        <g key={row} transform={`translate(0, ${row * 26})`}>
          <circle cx="164" cy="336" r="8" fill="#EDEFF3" />
          <rect x="180" y="332" width="120" height="7" rx="3" fill="#9CA6B4" />
          <rect x="420" y="330" width="70" height="16" rx="8" fill={row === 1 ? "#FBF0E4" : "#E9F3EC"} />
          <rect x="430" y="335" width="50" height="6" rx="3" fill={row === 1 ? "#B4732E" : "#2E8B57"} />
        </g>
      ))}
    </svg>
  );
};

export default DashboardMockup;
