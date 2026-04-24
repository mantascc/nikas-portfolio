// Option1_Logbook.jsx
// Editorial single-column — serif masthead, chronological flight-log of projects.
// Most restrained of the three. Pure Clear Channel translated to warm light canvas.

function Option1Logbook() {
  const now = new Date();
  const stamp = now.toISOString().slice(0, 16).replace('T', ' ') + ' UTC';

  return (
    <div className="cc opt1-root">
      <style>{`
        .opt1-root {
          background: var(--bg-0);
          color: var(--fg-2);
          min-height: 100%;
          padding: 64px 40px 96px;
        }
        .opt1-col { max-width: 680px; margin: 0 auto; }

        /* Masthead bar */
        .opt1-masthead {
          display: flex; justify-content: space-between; align-items: baseline;
          border-bottom: 1px solid var(--line-1);
          padding-bottom: 12px;
          margin-bottom: 56px;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--fg-4);
        }
        .opt1-masthead .mono-id { color: var(--fg-1); font-weight: 500; }
        .opt1-masthead .dot { display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: var(--acc-amber); margin-right: 6px; vertical-align: 1px; animation: opt1-pulse 2.4s ease-in-out infinite; }
        @keyframes opt1-pulse { 0%, 100% { opacity: 1 } 50% { opacity: 0.25 } }

        /* Hero */
        .opt1-kicker {
          font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--fg-4); margin-bottom: 28px;
        }
        .opt1-kicker .bar { color: var(--fg-5); margin: 0 10px; }
        .opt1-title {
          font-family: var(--font-serif);
          font-size: 88px;
          line-height: 0.95;
          letter-spacing: -0.025em;
          color: var(--fg-0);
          margin: 0 0 32px;
          font-weight: 400;
        }
        .opt1-title i { font-style: italic; color: var(--fg-1); }
        .opt1-lede {
          font-size: 15px; line-height: 1.65; color: var(--fg-2);
          max-width: 540px; margin-bottom: 14px;
          text-wrap: pretty;
        }
        .opt1-lede .mono { font-family: var(--font-mono); font-size: 13px; color: var(--fg-1); }
        .opt1-meta {
          font-size: 12px; color: var(--fg-4); margin-top: 32px;
          display: flex; gap: 32px; flex-wrap: wrap;
          border-top: 1px solid var(--line-1);
          padding-top: 14px;
        }
        .opt1-meta b { color: var(--fg-1); font-weight: 500; }

        /* Section header */
        .opt1-h2 {
          display: flex; justify-content: space-between; align-items: baseline;
          font-family: var(--font-mono);
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--fg-1);
          font-weight: 500;
          border-top: 1px solid var(--line-1);
          padding-top: 18px;
          margin: 72px 0 32px;
        }
        .opt1-h2 .count { color: var(--fg-4); font-weight: 400; }

        /* Viz — altitude profile, full-bleed in the column */
        .opt1-viz {
          background: var(--bg-1);
          border: 1px solid var(--line-1);
          padding: 20px 24px 16px;
          margin: 0 0 32px;
        }
        .opt1-viz-head {
          display: flex; justify-content: space-between; align-items: baseline;
          font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--fg-4); margin-bottom: 14px;
        }
        .opt1-viz-head .place { color: var(--fg-1); font-weight: 500; letter-spacing: 0.04em; }
        .opt1-viz-head .place em { font-family: var(--font-serif); font-style: italic; font-size: 15px; letter-spacing: 0; text-transform: none; color: var(--fg-0); margin-right: 8px; }
        .opt1-viz-caption {
          font-size: 11px; color: var(--fg-4); margin-top: 10px;
          display: flex; justify-content: space-between;
          border-top: 1px dashed var(--line-1); padding-top: 8px;
        }
        .opt1-viz-caption .src { font-family: var(--font-mono); }

        /* Log table */
        .opt1-log {
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--fg-2);
        }
        .opt1-log-row {
          display: grid;
          grid-template-columns: 72px 60px 1fr 64px;
          column-gap: 20px;
          padding: 18px 0;
          border-bottom: 1px solid var(--line-1);
          align-items: baseline;
          cursor: pointer;
          transition: background 0.2s;
        }
        .opt1-log-row:hover { background: var(--bg-1); padding-left: 6px; padding-right: 6px; margin: 0 -6px; }
        .opt1-log-row:first-child { border-top: 1px solid var(--line-1); }
        .opt1-log-date { font-size: 11px; color: var(--fg-4); letter-spacing: 0.04em; }
        .opt1-log-code { font-size: 11px; color: var(--fg-1); font-weight: 500; letter-spacing: 0.04em; }
        .opt1-log-title {
          font-family: var(--font-serif);
          font-size: 22px;
          color: var(--fg-0);
          line-height: 1.2;
          letter-spacing: -0.01em;
        }
        .opt1-log-title .sub {
          display: block;
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--fg-3);
          margin-top: 4px;
          letter-spacing: 0;
        }
        .opt1-log-alt { font-size: 11px; color: var(--fg-3); text-align: right; letter-spacing: 0.02em; }
        .opt1-log-alt b { color: var(--fg-1); font-weight: 500; }

        /* Writing / notes block */
        .opt1-notes { margin-top: 12px; }
        .opt1-note {
          display: grid;
          grid-template-columns: 84px 1fr;
          column-gap: 20px;
          padding: 14px 0;
          border-bottom: 1px dashed var(--line-1);
          font-size: 13px;
        }
        .opt1-note .date { color: var(--fg-4); font-size: 11px; letter-spacing: 0.04em; padding-top: 2px; }
        .opt1-note a { color: var(--fg-1); border-bottom-color: var(--line-2); }

        /* Sign-off */
        .opt1-signoff {
          margin-top: 72px;
          padding-top: 32px;
          border-top: 1px solid var(--line-1);
          display: flex; justify-content: space-between; align-items: flex-end;
          color: var(--fg-4); font-size: 11px; letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .opt1-signoff .mark {
          font-family: var(--font-serif);
          font-size: 42px; line-height: 1; color: var(--fg-0);
          letter-spacing: -0.02em;
          font-style: italic;
          text-transform: none;
        }
      `}</style>

      <div className="opt1-col">

        {/* Masthead */}
        <div className="opt1-masthead">
          <div><span className="dot"></span><span className="mono-id">NK · LOG</span> &nbsp; · &nbsp; vol 04, issue 26</div>
          <div>{stamp}</div>
        </div>

        {/* Hero */}
        <div className="opt1-kicker">
          designer<span className="bar">/</span>aviation data<span className="bar">/</span>based in helsinki
        </div>
        <h1 className="opt1-title">
          Nika Larsen.<br/>
          Designs for<br/>
          <i>moving things.</i>
        </h1>
        <p className="opt1-lede">
          Fifteen years of interface work for cockpits, dispatch desks, and ground-ops
          control rooms. Currently principal designer at <span className="mono">AERONAV/OY</span>,
          leading the real-time traffic-flow product used across thirty-one European air
          navigation service providers.
        </p>
        <p className="opt1-lede">
          This page is a working logbook. Projects are listed in reverse chronology with
          altitude, duration, and the aircraft type I was flying at the time.
        </p>

        <div className="opt1-meta">
          <div><b>Based</b> &nbsp; Helsinki, FI (EFHK)</div>
          <div><b>Logged</b> &nbsp; 14,820 hours</div>
          <div><b>Contact</b> &nbsp; <a href="#">nika@aeronav.oy</a></div>
        </div>

        {/* Live viz — altitude profile placeholder */}
        <h2 className="opt1-h2">
          <span>01 &nbsp;·&nbsp; Departure Profile</span>
          <span className="count">live · EFHK → EGLL</span>
        </h2>
        <AltitudeProfile />

        {/* Project log */}
        <h2 className="opt1-h2">
          <span>02 &nbsp;·&nbsp; Flight Log</span>
          <span className="count">014 entries</span>
        </h2>
        <div className="opt1-log">
          {PROJECTS.map((p, i) => (
            <div className="opt1-log-row" key={i}>
              <div className="opt1-log-date">{p.date}</div>
              <div className="opt1-log-code">{p.code}</div>
              <div className="opt1-log-title">
                {p.title}
                <span className="sub">{p.sub}</span>
              </div>
              <div className="opt1-log-alt"><b>{p.alt}</b><br/>{p.unit}</div>
            </div>
          ))}
        </div>

        {/* Notes */}
        <h2 className="opt1-h2">
          <span>03 &nbsp;·&nbsp; Field Notes</span>
          <span className="count">writing</span>
        </h2>
        <div className="opt1-notes">
          {NOTES.map((n, i) => (
            <div className="opt1-note" key={i}>
              <div className="date">{n.date}</div>
              <div>
                <a href="#">{n.title}</a>
                <div style={{color: 'var(--fg-3)', marginTop: 4, fontSize: 13}}>{n.blurb}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Sign-off */}
        <div className="opt1-signoff">
          <div>© 2026 · compiled from logbook entries · set in Instrument Serif &amp; JetBrains Mono</div>
          <div className="mark">N.L.</div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Altitude profile — live-ticking SVG placeholder.
   Horizontal axis: time. Vertical axis: altitude in feet.
   Soft warm fill under the curve, 1px stroke on top.
   ───────────────────────────────────────────────────────────── */
function AltitudeProfile() {
  const [t, setT] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setT(x => x + 1), 1600);
    return () => clearInterval(id);
  }, []);

  // Deterministic-ish altitude curve: climb, cruise w/ drift, descend.
  const W = 640, H = 160, PAD_L = 0, PAD_R = 0, PAD_T = 18, PAD_B = 22;
  const N = 64;
  const pts = [];
  for (let i = 0; i < N; i++) {
    const u = i / (N - 1);
    // piecewise: climb 0→0.3, cruise 0.3→0.75, descend 0.75→1
    let alt;
    if (u < 0.3) alt = (u / 0.3) ** 0.85;
    else if (u < 0.75) {
      const v = (u - 0.3) / 0.45;
      alt = 1 - 0.05 * v;
    } else {
      alt = (1 - (u - 0.75) / 0.25) * 0.95;
    }
    // add small drift based on phase t
    alt += Math.sin((i + t * 0.7) * 0.55) * 0.012;
    const x = PAD_L + u * (W - PAD_L - PAD_R);
    const y = PAD_T + (1 - alt) * (H - PAD_T - PAD_B);
    pts.push([x, y]);
  }
  const path = pts.map((p, i) => (i === 0 ? 'M' : 'L') + p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ');
  const fill = path + ` L${W},${H - PAD_B} L0,${H - PAD_B} Z`;

  // live aircraft dot at u ≈ 0.52 + small drift
  const liveIdx = 33 + (t % 3);
  const live = pts[liveIdx] || pts[33];

  return (
    <div className="opt1-viz">
      <div className="opt1-viz-head">
        <div className="place"><em>EFHK</em>Helsinki · Vantaa</div>
        <div className="place" style={{textAlign: 'right'}}><em>EGLL</em>London · Heathrow</div>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} width="100%" height={H} preserveAspectRatio="none" style={{display: 'block'}}>
        {/* Horizontal grid lines at 10k, 20k, 30k ft */}
        {[0.25, 0.5, 0.75].map((g, i) => {
          const y = PAD_T + (1 - g) * (H - PAD_T - PAD_B);
          return (
            <g key={i}>
              <line x1="0" x2={W} y1={y} y2={y} stroke="var(--line-1)" strokeDasharray="2 4" />
              <text x="4" y={y - 3} fontSize="9" fill="var(--fg-4)" fontFamily="var(--font-mono)" letterSpacing="0.04em">
                {['10,000','20,000','30,000'][i]} ft
              </text>
            </g>
          );
        })}
        {/* fill */}
        <path d={fill} fill="var(--acc-amber-soft)" opacity="0.55" />
        {/* stroke */}
        <path d={path} fill="none" stroke="var(--fg-1)" strokeWidth="1" />
        {/* live dot */}
        <circle cx={live[0]} cy={live[1]} r="3.5" fill="var(--acc-amber)" />
        <circle cx={live[0]} cy={live[1]} r="7" fill="none" stroke="var(--acc-amber)" strokeWidth="1" opacity="0.4">
          <animate attributeName="r" values="3.5;10;3.5" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite" />
        </circle>
        {/* baseline */}
        <line x1="0" x2={W} y1={H - PAD_B} y2={H - PAD_B} stroke="var(--line-2)" />
      </svg>

      <div className="opt1-viz-caption">
        <div className="src">fig. 01 — FIN236 · Airbus A320 · 36,000 ft · M0.78</div>
        <div className="src">↑ updates every 1.6s</div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Data: projects + notes. Written in aviation-register voice.
   Every alt number is plausible for the aircraft listed.
   ───────────────────────────────────────────────────────────── */
const PROJECTS = [
  { date: '2026·04', code: 'NK—14', title: 'Skylane',           sub: 'traffic-flow console for 31 ANSPs · AERONAV/OY',         alt: 'FL360', unit: 'cruise' },
  { date: '2025·11', code: 'NK—13', title: 'Halo',              sub: 'collision-avoidance readout · Leonardo AW139',          alt: 'FL110', unit: 'climb' },
  { date: '2025·06', code: 'NK—12', title: 'Approach Brief',    sub: 'ipad EFB redesign · Finnair line pilots',               alt: 'FL080', unit: 'approach' },
  { date: '2025·02', code: 'NK—11', title: 'Remote Tower',      sub: 'control tower UX, 3 regional airports · Fintraffic ANS', alt: 'FL000', unit: 'ground' },
  { date: '2024·10', code: 'NK—10', title: 'Winds Aloft',       sub: 'real-time meteorology layer · AERONAV/OY',              alt: 'FL240', unit: 'enroute' },
  { date: '2024·04', code: 'NK—09', title: 'Gate 14',           sub: 'turnaround dispatcher desktop · ICF Mostostal',         alt: 'FL000', unit: 'ground' },
  { date: '2023·09', code: 'NK—08', title: 'Fuel Plan',         sub: 'flight-plan optimisation UI · Lufthansa Systems',       alt: 'FL330', unit: 'cruise' },
];

const NOTES = [
  { date: '2026·04', title: 'On the grammar of altitude tapes', blurb: 'Why the rolling digit wins over the sliding numeral. 1,400 words, published in Aerospace & Flight magazine.' },
  { date: '2026·01', title: 'Designing for the 97th percentile second', blurb: 'Latency budgets in ATC displays, and why 200ms is a ceiling, not a target.' },
  { date: '2025·10', title: 'A short glossary for non-pilots', blurb: 'FL, QNH, squawk, vector, handoff — what every aviation-product designer should recognise by sight.' },
];

Object.assign(window, { Option1Logbook });
