// Option3_Sectional.jsx
// Chart-inspired editorial. Hero as a departure/arrival strip.
// Projects plotted as "waypoints" on a warm sectional-chart field.
// Most ambitious visual: a live sectional/radar map is the centrepiece.

function Option3Sectional() {
  return (
    <div className="cc opt3-root">
      <style>{`
        .opt3-root {
          background: var(--bg-0);
          color: var(--fg-2);
          min-height: 100%;
          padding: 32px 40px 72px;
        }

        /* Flight strip — aviation-form-style hero */
        .opt3-strip {
          border: 1px solid var(--fg-1);
          background: var(--bg-1);
          padding: 0;
          margin: 0 auto 56px;
          max-width: 1240px;
          display: grid;
          grid-template-columns: 72px 1fr 1fr 1fr 110px;
          font-family: var(--font-mono);
        }
        .opt3-strip .cell { padding: 14px 18px; border-right: 1px solid var(--line-1); }
        .opt3-strip .cell:last-child { border-right: 0; }
        .opt3-strip .k {
          font-size: 9px; letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--fg-4);
        }
        .opt3-strip .v {
          font-family: var(--font-mono);
          font-size: 13px; color: var(--fg-0); font-weight: 500;
          letter-spacing: 0.02em;
          margin-top: 3px;
        }
        .opt3-strip .reg {
          background: var(--fg-1); color: var(--bg-1);
          display: flex; align-items: center; justify-content: center;
          font-size: 14px; letter-spacing: 0.12em; font-weight: 500;
          writing-mode: vertical-rl; transform: rotate(180deg);
          text-transform: uppercase;
          padding: 18px 0;
        }
        .opt3-strip .eta {
          background: var(--acc-amber);
          color: var(--bg-1);
          display: flex; align-items: center; justify-content: center;
          font-weight: 500;
          font-size: 13px; letter-spacing: 0.06em;
        }

        /* Hero */
        .opt3-hero {
          max-width: 1240px;
          margin: 0 auto 48px;
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: 64px;
          align-items: end;
        }
        .opt3-title {
          font-family: var(--font-serif);
          font-size: 140px;
          line-height: 0.88;
          letter-spacing: -0.035em;
          color: var(--fg-0);
          margin: 0;
          font-weight: 400;
          text-wrap: balance;
        }
        .opt3-title i { font-style: italic; color: var(--fg-1); }
        .opt3-hero-meta {
          font-family: var(--font-mono);
          font-size: 13px; color: var(--fg-3);
          line-height: 1.65;
          padding-bottom: 12px;
        }
        .opt3-hero-meta p { margin: 0 0 12px; }
        .opt3-hero-meta .lede {
          font-family: var(--font-serif);
          font-size: 22px;
          line-height: 1.3;
          color: var(--fg-0);
          margin-bottom: 20px;
          text-wrap: pretty;
          font-style: italic;
        }

        /* Sectional */
        .opt3-sec-wrap {
          max-width: 1240px;
          margin: 0 auto 48px;
          border: 1px solid var(--line-1);
          background: var(--bg-1);
          padding: 14px;
        }
        .opt3-sec-head {
          display: flex; justify-content: space-between; align-items: baseline;
          font-family: var(--font-mono); font-size: 10px;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--fg-4); padding-bottom: 12px;
          border-bottom: 1px solid var(--line-1);
          margin-bottom: 14px;
        }
        .opt3-sec-head b { color: var(--fg-1); font-weight: 500; }
        .opt3-sec-head .chip {
          display: inline-block; padding: 2px 6px; border: 1px solid var(--line-2);
          background: var(--bg-0); margin-left: 8px; color: var(--fg-2);
        }

        /* Waypoints / Legend */
        .opt3-legend {
          display: flex; gap: 24px; font-family: var(--font-mono);
          font-size: 10px; letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--fg-3); margin-top: 14px;
          padding-top: 12px; border-top: 1px solid var(--line-1);
        }
        .opt3-legend-item { display: flex; align-items: center; gap: 6px; }
        .opt3-legend-item .sw { width: 10px; height: 10px; border: 1px solid var(--fg-1); display: inline-block; }

        /* Project waypoints list */
        .opt3-waypoints-grid {
          max-width: 1240px;
          margin: 0 auto 48px;
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 48px;
          align-items: start;
        }
        .opt3-sh {
          font-family: var(--font-mono);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--fg-1);
          font-weight: 500;
          padding-top: 14px;
          border-top: 1px solid var(--fg-1);
          margin: 0 0 20px;
        }
        .opt3-sh-sub { color: var(--fg-4); font-weight: 400; display: block; margin-top: 6px; letter-spacing: 0.08em; }
        .opt3-wp {
          display: grid;
          grid-template-columns: 40px 80px 1fr 90px 90px;
          column-gap: 16px;
          padding: 18px 0;
          border-bottom: 1px solid var(--line-1);
          align-items: baseline;
          font-family: var(--font-mono);
          cursor: pointer;
          transition: padding 0.15s, background 0.2s;
        }
        .opt3-wp:first-child { border-top: 1px solid var(--line-1); }
        .opt3-wp:hover { background: var(--bg-1); padding-left: 10px; }
        .opt3-wp .num {
          font-size: 11px; color: var(--bg-0); letter-spacing: 0.04em;
          background: var(--fg-1); padding: 3px 5px; text-align: center;
          font-weight: 500;
          align-self: start;
          margin-top: 3px;
        }
        .opt3-wp .fix { font-size: 11px; color: var(--fg-1); font-weight: 500; letter-spacing: 0.08em; }
        .opt3-wp .fix .coord { display: block; color: var(--fg-4); font-size: 10px; margin-top: 3px; letter-spacing: 0.02em; font-weight: 400; }
        .opt3-wp .title {
          font-family: var(--font-serif);
          font-size: 24px;
          color: var(--fg-0);
          line-height: 1.15;
        }
        .opt3-wp .title .sub {
          display: block;
          font-family: var(--font-mono);
          font-size: 12px; color: var(--fg-3);
          margin-top: 4px; letter-spacing: 0;
          font-style: normal;
        }
        .opt3-wp .meta { font-size: 11px; color: var(--fg-3); letter-spacing: 0.04em; }
        .opt3-wp .meta b { color: var(--fg-1); font-weight: 500; display: block; font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--fg-4); margin-bottom: 3px; }

        /* Winds panel */
        .opt3-winds {
          background: var(--bg-1);
          border: 1px solid var(--line-1);
          padding: 16px;
          margin-bottom: 20px;
        }
        .opt3-winds h4 {
          font-family: var(--font-mono); font-size: 11px;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--fg-1); font-weight: 500;
          padding-bottom: 10px; border-bottom: 1px solid var(--line-1);
          margin: 0 0 12px;
        }
        .opt3-winds-row {
          display: grid; grid-template-columns: 36px 1fr 54px;
          font-family: var(--font-mono); font-size: 11px;
          padding: 5px 0;
          color: var(--fg-2);
          align-items: center;
        }
        .opt3-winds-row .fl { color: var(--fg-4); letter-spacing: 0.04em; }
        .opt3-winds-row .temp { color: var(--fg-1); text-align: right; font-weight: 500; }

        /* Foot */
        .opt3-foot {
          max-width: 1240px; margin: 64px auto 0;
          border-top: 1px solid var(--line-1);
          padding-top: 20px;
          display: flex; justify-content: space-between;
          font-family: var(--font-mono); font-size: 11px;
          letter-spacing: 0.06em; color: var(--fg-4); text-transform: uppercase;
        }
        .opt3-foot .signoff {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: 18px; color: var(--fg-0);
          letter-spacing: 0;
          text-transform: none;
        }
      `}</style>

      {/* Flight strip (the masthead — as if NIKA is a callsign) */}
      <div className="opt3-strip">
        <div className="reg">NL—26</div>
        <div className="cell">
          <div className="k">Callsign · Legal</div>
          <div className="v">NIKA LARSEN</div>
        </div>
        <div className="cell">
          <div className="k">Type · Discipline</div>
          <div className="v">DESIGN · REAL-TIME AVIATION</div>
        </div>
        <div className="cell">
          <div className="k">Base · Availability</div>
          <div className="v">EFHK · Q3 2026 · LIMITED</div>
        </div>
        <div className="eta">◐ ACTIVE</div>
      </div>

      {/* Hero */}
      <div className="opt3-hero">
        <h1 className="opt3-title">
          Charts,<br/>
          tapes, and<br/>
          <i>approach<br/>plates.</i>
        </h1>
        <div className="opt3-hero-meta">
          <p className="lede">
            A portfolio for interfaces that carry weight — the ones pilots read at
            200 knots and dispatchers read at three in the morning.
          </p>
          <p>
            I'm Nika. Fifteen years of design for cockpits, control rooms, and the
            apps that route things through the sky. Principal at
            <b style={{color: 'var(--fg-1)'}}> AERONAV/OY</b>. Licensed PPL since 2018.
          </p>
          <p style={{color: 'var(--fg-4)'}}>
            Below: a working sectional of active and recent projects. Each waypoint
            opens to a brief.
          </p>
        </div>
      </div>

      {/* Sectional / radar map */}
      <div className="opt3-sec-wrap">
        <div className="opt3-sec-head">
          <div><b>SECTIONAL · 001</b> &nbsp; North Europe work-area &nbsp; <span className="chip">UPDATED 14:32 UTC</span></div>
          <div>1 : 500,000 &nbsp;·&nbsp; Magnetic variation 09°E</div>
        </div>
        <Sectional />
        <div className="opt3-legend">
          <span className="opt3-legend-item"><span className="sw" style={{background: 'var(--fg-1)'}}></span>Delivered</span>
          <span className="opt3-legend-item"><span className="sw" style={{background: 'var(--acc-amber)', borderColor: 'var(--acc-amber)'}}></span>In flight</span>
          <span className="opt3-legend-item"><span className="sw" style={{background: 'var(--bg-1)'}}></span>Planned / standby</span>
          <span className="opt3-legend-item" style={{marginLeft: 'auto'}}>▵ airports &nbsp; ○ waypoints &nbsp; ⊹ restricted</span>
        </div>
      </div>

      {/* Waypoint list + winds sidebar */}
      <div className="opt3-waypoints-grid">
        <aside>
          <div className="opt3-winds">
            <h4>Winds aloft · EFHK</h4>
            {[
              { fl: 'FL390', wind: '↙ 280° / 62 kt', t: '−54°C' },
              { fl: 'FL340', wind: '↙ 275° / 48 kt', t: '−44°C' },
              { fl: 'FL290', wind: '↓ 260° / 35 kt', t: '−34°C' },
              { fl: 'FL240', wind: '↘ 240° / 24 kt', t: '−22°C' },
              { fl: 'FL180', wind: '↘ 230° / 18 kt', t: '−08°C' },
              { fl: 'FL090', wind: '→ 210° / 12 kt', t: '+02°C' },
              { fl: 'FL030', wind: '→ 180° / 06 kt', t: '+08°C' },
            ].map((r, i) => (
              <div className="opt3-winds-row" key={i}>
                <span className="fl">{r.fl}</span>
                <span>{r.wind}</span>
                <span className="temp">{r.t}</span>
              </div>
            ))}
          </div>

          <div className="opt3-winds">
            <h4>Filed plan · Summary</h4>
            <ul className="dash-list" style={{margin: 0, fontSize: 12}}>
              <li>Principal designer, 2022—now</li>
              <li>14 delivered products, 4 active</li>
              <li>31 ANSPs served through Skylane</li>
              <li>Regular speaker at UX-Copenhagen &amp; AAIN</li>
            </ul>
          </div>

          <div className="opt3-winds">
            <h4>Clearance · Contact</h4>
            <div style={{fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-2)', lineHeight: 1.7}}>
              <div><span style={{color: 'var(--fg-4)', letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: 10, display: 'inline-block', width: 60}}>email</span> <a href="#">nika@aeronav.oy</a></div>
              <div><span style={{color: 'var(--fg-4)', letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: 10, display: 'inline-block', width: 60}}>phone</span> +358 40 ···</div>
              <div><span style={{color: 'var(--fg-4)', letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: 10, display: 'inline-block', width: 60}}>signal</span> @nika.06</div>
              <div><span style={{color: 'var(--fg-4)', letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: 10, display: 'inline-block', width: 60}}>press</span> <a href="#">CV · PDF</a></div>
            </div>
          </div>
        </aside>

        <section>
          <h2 className="opt3-sh">
            Waypoint index <span className="opt3-sh-sub">— the projects plotted on the chart above</span>
          </h2>
          {WAYPOINTS.map((w, i) => (
            <div className="opt3-wp" key={i}>
              <div className="num">{String(w.n).padStart(2, '0')}</div>
              <div className="fix">
                {w.fix}
                <span className="coord">{w.coord}</span>
              </div>
              <div className="title">
                {w.title}
                <span className="sub">{w.sub}</span>
              </div>
              <div className="meta"><b>status</b>{w.status}</div>
              <div className="meta"><b>year</b>{w.year}</div>
            </div>
          ))}
        </section>
      </div>

      <div className="opt3-foot">
        <div>© 2026 · chart dated 2026-04-24 · not for navigation</div>
        <div className="signoff">Tailwinds, Nika.</div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Sectional — warm-off-white chart with lat/long grid, a couple
   airways, airport triangles, and animated aircraft moving along
   the airways. Project waypoints are labelled plot fixes.
   ───────────────────────────────────────────────────────────── */
function Sectional() {
  const [t, setT] = React.useState(0);
  React.useEffect(() => {
    let raf;
    const start = performance.now();
    const tick = (now) => {
      setT((now - start) / 1000);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const W = 1180, H = 520;

  // Airports
  const airports = [
    { code: 'EFHK', x: 780, y: 240, name: 'Helsinki' },
    { code: 'ESSA', x: 540, y: 260, name: 'Stockholm' },
    { code: 'EKCH', x: 430, y: 360, name: 'Copenhagen' },
    { code: 'EGLL', x: 220, y: 400, name: 'London' },
    { code: 'EHAM', x: 330, y: 410, name: 'Amsterdam' },
    { code: 'EDDF', x: 400, y: 460, name: 'Frankfurt' },
    { code: 'ENGM', x: 480, y: 200, name: 'Oslo' },
    { code: 'ULLI', x: 960, y: 220, name: 'St. Petersburg' },
  ];

  // Airways (polyline routes between airports)
  const airways = [
    { from: 'EFHK', to: 'ESSA', name: 'UN623' },
    { from: 'EFHK', to: 'EGLL', name: 'UM725' },
    { from: 'EFHK', to: 'EDDF', name: 'UN869' },
    { from: 'ESSA', to: 'EKCH', name: 'UL621' },
    { from: 'ENGM', to: 'EDDF', name: 'UN873' },
    { from: 'EHAM', to: 'EFHK', name: 'UM976' },
  ];
  const apMap = Object.fromEntries(airports.map(a => [a.code, a]));

  // Project waypoints — positioned on the chart
  const wps = [
    { n: 1, x: 705, y: 205, code: 'SKYLN', status: 'active' },
    { n: 2, x: 590, y: 180, code: 'HALO',  status: 'active' },
    { n: 3, x: 625, y: 325, code: 'BRIEF', status: 'done' },
    { n: 4, x: 830, y: 295, code: 'RMTWR', status: 'done' },
    { n: 5, x: 478, y: 335, code: 'WINDS', status: 'active' },
    { n: 6, x: 350, y: 350, code: 'GATE',  status: 'done' },
    { n: 7, x: 285, y: 455, code: 'FUEL',  status: 'done' },
    { n: 8, x: 880, y: 160, code: 'APRCH', status: 'plan' },
  ];

  // Moving aircraft along airways
  const flights = [
    { aw: 0, p: (t * 0.06) % 1, id: 'FIN236' },
    { aw: 1, p: (t * 0.04 + 0.3) % 1, id: 'BAW779' },
    { aw: 2, p: (t * 0.05 + 0.6) % 1, id: 'DLH1404' },
    { aw: 4, p: (t * 0.035 + 0.2) % 1, id: 'SAS904' },
    { aw: 5, p: (t * 0.045 + 0.75) % 1, id: 'KLM1177' },
  ];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{display: 'block'}}>
      {/* lat/long grid */}
      {Array.from({length: 8}).map((_, i) => {
        const x = (i + 1) * (W / 9);
        return <line key={'v' + i} x1={x} x2={x} y1={0} y2={H} stroke="var(--line-1)" strokeDasharray="1 4" />;
      })}
      {Array.from({length: 5}).map((_, i) => {
        const y = (i + 1) * (H / 6);
        return <line key={'h' + i} x1={0} x2={W} y1={y} y2={y} stroke="var(--line-1)" strokeDasharray="1 4" />;
      })}

      {/* lat/long labels */}
      {['60°N','58°N','56°N','54°N','52°N'].map((lbl, i) => (
        <text key={lbl} x={8} y={(i + 1) * (H / 6) - 4} fontSize="9" fill="var(--fg-4)" fontFamily="var(--font-mono)" letterSpacing="0.04em">{lbl}</text>
      ))}
      {['00°','05°E','10°E','15°E','20°E','25°E','30°E'].map((lbl, i) => (
        <text key={lbl} x={(i + 2) * (W / 9) + 4} y={H - 6} fontSize="9" fill="var(--fg-4)" fontFamily="var(--font-mono)" letterSpacing="0.04em">{lbl}</text>
      ))}

      {/* Airways */}
      {airways.map((aw, i) => {
        const a = apMap[aw.from], b = apMap[aw.to];
        const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
        const ang = Math.atan2(b.y - a.y, b.x - a.x) * 180 / Math.PI;
        return (
          <g key={i}>
            <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="var(--fg-2)" strokeWidth="0.7" opacity="0.45" strokeDasharray="5 3" />
            <g transform={`translate(${mx} ${my}) rotate(${ang})`}>
              <rect x="-20" y="-9" width="40" height="12" fill="var(--bg-1)" stroke="var(--line-2)" />
              <text x="0" y="0" textAnchor="middle" fontSize="9" fill="var(--fg-1)" fontFamily="var(--font-mono)" letterSpacing="0.06em">{aw.name}</text>
            </g>
          </g>
        );
      })}

      {/* Moving flights */}
      {flights.map((f, i) => {
        const aw = airways[f.aw];
        const a = apMap[aw.from], b = apMap[aw.to];
        const x = a.x + (b.x - a.x) * f.p;
        const y = a.y + (b.y - a.y) * f.p;
        const ang = Math.atan2(b.y - a.y, b.x - a.x) * 180 / Math.PI;
        return (
          <g key={f.id} transform={`translate(${x} ${y}) rotate(${ang - 90})`}>
            <path d="M 0 -7 L 5 4 L 0 1 L -5 4 Z" fill="var(--acc-amber)" stroke="var(--acc-amber)" strokeLinejoin="round" />
            <text x="8" y="0" fontSize="9" fill="var(--fg-2)" fontFamily="var(--font-mono)" letterSpacing="0.04em" transform={`rotate(${90 - ang})`}>{f.id}</text>
          </g>
        );
      })}

      {/* Airports (magenta-style triangles but in our ink) */}
      {airports.map(a => (
        <g key={a.code}>
          <polygon points={`${a.x},${a.y - 6} ${a.x - 5},${a.y + 3} ${a.x + 5},${a.y + 3}`} fill="var(--fg-1)" />
          <text x={a.x + 8} y={a.y - 5} fontSize="10" fill="var(--fg-1)" fontFamily="var(--font-mono)" letterSpacing="0.06em" fontWeight="500">{a.code}</text>
          <text x={a.x + 8} y={a.y + 6} fontSize="8" fill="var(--fg-4)" fontFamily="var(--font-mono)">{a.name}</text>
        </g>
      ))}

      {/* Project waypoints */}
      {wps.map((w, i) => {
        const fill = w.status === 'active' ? 'var(--acc-amber)' : w.status === 'done' ? 'var(--fg-1)' : 'var(--bg-1)';
        const stroke = w.status === 'plan' ? 'var(--fg-1)' : fill;
        return (
          <g key={w.n}>
            <circle cx={w.x} cy={w.y} r="4.5" fill={fill} stroke={stroke} strokeWidth="1.2" />
            <circle cx={w.x} cy={w.y} r="10" fill="none" stroke="var(--line-2)" />
            <text x={w.x + 14} y={w.y - 6} fontSize="10" fontFamily="var(--font-mono)" fill="var(--fg-0)" letterSpacing="0.08em" fontWeight="500">{String(w.n).padStart(2, '0')} · {w.code}</text>
          </g>
        );
      })}

      {/* compass rose */}
      <g transform={`translate(${W - 70} 90)`}>
        <circle cx="0" cy="0" r="32" fill="var(--bg-0)" stroke="var(--line-2)" />
        <circle cx="0" cy="0" r="22" fill="none" stroke="var(--line-1)" strokeDasharray="1 3" />
        <line x1="0" y1="-30" x2="0" y2="30" stroke="var(--line-2)" />
        <line x1="-30" y1="0" x2="30" y2="0" stroke="var(--line-2)" />
        <polygon points="0,-28 -4,-8 0,-14 4,-8" fill="var(--acc-amber)" />
        <text x="0" y="-36" textAnchor="middle" fontSize="9" fill="var(--fg-1)" fontFamily="var(--font-mono)" letterSpacing="0.1em" fontWeight="500">N</text>
      </g>

      {/* scale bar */}
      <g transform={`translate(40 ${H - 40})`}>
        <line x1="0" y1="0" x2="120" y2="0" stroke="var(--fg-1)" strokeWidth="1" />
        <line x1="0" y1="-4" x2="0" y2="4" stroke="var(--fg-1)" />
        <line x1="60" y1="-3" x2="60" y2="3" stroke="var(--fg-1)" />
        <line x1="120" y1="-4" x2="120" y2="4" stroke="var(--fg-1)" />
        <text x="0" y="15" fontSize="9" fill="var(--fg-4)" fontFamily="var(--font-mono)">0</text>
        <text x="60" y="15" fontSize="9" fill="var(--fg-4)" fontFamily="var(--font-mono)" textAnchor="middle">50</text>
        <text x="120" y="15" fontSize="9" fill="var(--fg-4)" fontFamily="var(--font-mono)" textAnchor="middle">100 nm</text>
      </g>
    </svg>
  );
}

const WAYPOINTS = [
  { n: 1, fix: 'SKYLN', coord: 'N60°11 E024°58', title: 'Skylane',         sub: 'traffic-flow console · 31 ANSPs · AERONAV/OY',       status: 'active',  year: '2022—' },
  { n: 2, fix: 'HALO',  coord: 'N59°36 E018°02', title: 'Halo',            sub: 'collision-avoidance readout · Leonardo AW139',       status: 'active',  year: '2025' },
  { n: 3, fix: 'BRIEF', coord: 'N60°18 E024°58', title: 'Approach Brief',  sub: 'iPad EFB redesign · Finnair',                        status: 'done',    year: '2025' },
  { n: 4, fix: 'RMTWR', coord: 'N61°29 E023°36', title: 'Remote Tower',    sub: 'three regional airports · Fintraffic ANS',           status: 'done',    year: '2024' },
  { n: 5, fix: 'WINDS', coord: 'N55°37 E012°39', title: 'Winds Aloft',     sub: 'real-time meteorology layer · AERONAV/OY',           status: 'active',  year: '2024' },
  { n: 6, fix: 'GATE',  coord: 'N52°18 E004°45', title: 'Gate 14',         sub: 'turnaround dispatcher desktop',                      status: 'done',    year: '2024' },
  { n: 7, fix: 'FUEL',  coord: 'N50°02 E008°34', title: 'Fuel Plan',       sub: 'flight-plan optimisation UI · Lufthansa Systems',    status: 'done',    year: '2023' },
  { n: 8, fix: 'APRCH', coord: 'N62°18 E027°41', title: 'Approach Plates', sub: 'chart renderer · in design review',                  status: 'plan',    year: 'Q4 2026' },
];

Object.assign(window, { Option3Sectional });
