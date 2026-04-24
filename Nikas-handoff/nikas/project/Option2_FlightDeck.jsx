// Option2_FlightDeck.jsx
// Split editorial: serif hero + prose on left, dispatcher/manifest panel on right.
// Real-time flight tracker placeholder on the right. Denser, more data-forward.

function Option2FlightDeck() {
  return (
    <div className="cc opt2-root">
      <style>{`
        .opt2-root {
          background: var(--bg-0);
          color: var(--fg-2);
          min-height: 100%;
          padding: 40px 48px 80px;
        }

        /* Top strip — aviation manifest bar */
        .opt2-strip {
          display: grid;
          grid-template-columns: 1fr auto auto auto auto 1fr;
          column-gap: 36px;
          align-items: baseline;
          padding: 10px 0 14px;
          border-bottom: 1px solid var(--line-1);
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--fg-4);
          margin-bottom: 40px;
        }
        .opt2-strip .brand {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: 18px;
          letter-spacing: 0;
          text-transform: none;
          color: var(--fg-0);
        }
        .opt2-strip .item b { color: var(--fg-1); font-weight: 500; margin-right: 6px; }
        .opt2-strip .nav { text-align: right; color: var(--fg-3); }
        .opt2-strip .nav span { margin-left: 18px; cursor: pointer; }
        .opt2-strip .nav span:hover { color: var(--fg-0); }
        .opt2-strip .pulse { width: 6px; height: 6px; border-radius: 50%; background: var(--sem-success); display: inline-block; margin-right: 6px; vertical-align: 1px; animation: opt2-pulse 1.6s ease-in-out infinite; }
        @keyframes opt2-pulse { 0%, 100% { opacity: 1 } 50% { opacity: 0.3 } }

        /* Main split */
        .opt2-main {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 56px;
          max-width: 1280px;
          margin: 0 auto;
        }

        /* LEFT column */
        .opt2-left { min-width: 0; }
        .opt2-kicker {
          font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--fg-4); margin-bottom: 36px;
        }
        .opt2-kicker .sep { color: var(--fg-5); margin: 0 10px; }
        .opt2-title {
          font-family: var(--font-serif);
          font-size: 108px;
          line-height: 0.92;
          letter-spacing: -0.03em;
          color: var(--fg-0);
          margin: 0 0 32px;
          font-weight: 400;
          text-wrap: balance;
        }
        .opt2-title i { font-style: italic; }
        .opt2-title .ampersand {
          font-family: var(--font-serif);
          font-style: italic;
          color: var(--acc-amber);
        }
        .opt2-lede {
          font-size: 17px; line-height: 1.55; color: var(--fg-1);
          max-width: 640px; margin-bottom: 20px;
          text-wrap: pretty;
          font-family: var(--font-serif);
          font-weight: 400;
        }
        .opt2-sub {
          font-size: 14px; line-height: 1.65; color: var(--fg-3);
          max-width: 580px; margin-bottom: 18px;
          text-wrap: pretty;
        }
        .opt2-sub code { color: var(--fg-1); font-weight: 500; }

        .opt2-actions { display: flex; gap: 10px; margin-top: 32px; align-items: center; }
        .opt2-btn {
          font-family: var(--font-mono);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 11px 18px;
          border: 1px solid var(--fg-1);
          background: var(--fg-1);
          color: var(--bg-0);
          cursor: pointer;
          transition: all 0.2s;
        }
        .opt2-btn:hover { background: var(--fg-0); border-color: var(--fg-0); }
        .opt2-btn.ghost { background: transparent; color: var(--fg-1); }
        .opt2-btn.ghost:hover { background: var(--bg-1); border-color: var(--fg-0); color: var(--fg-0); }

        /* Section head */
        .opt2-sh {
          display: flex; justify-content: space-between; align-items: baseline;
          font-family: var(--font-mono);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--fg-1);
          font-weight: 500;
          border-top: 1px solid var(--line-1);
          padding-top: 16px;
          margin: 64px 0 24px;
        }
        .opt2-sh .muted { color: var(--fg-4); font-weight: 400; }

        /* Project cards — 2 column, editorial */
        .opt2-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          border: 1px solid var(--line-1);
          background: var(--line-1);
        }
        .opt2-card {
          background: var(--bg-1);
          padding: 24px 24px 20px;
          cursor: pointer;
          transition: background 0.2s;
          display: flex;
          flex-direction: column;
          min-height: 200px;
        }
        .opt2-card:hover { background: var(--bg-2); }
        .opt2-card-head {
          display: flex; justify-content: space-between; align-items: baseline;
          font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.08em;
          text-transform: uppercase; color: var(--fg-4);
          margin-bottom: 14px;
        }
        .opt2-card-head .reg { color: var(--fg-1); font-weight: 500; }
        .opt2-card-title {
          font-family: var(--font-serif);
          font-size: 30px;
          line-height: 1.05;
          letter-spacing: -0.01em;
          color: var(--fg-0);
          margin: 0 0 10px;
        }
        .opt2-card p {
          font-size: 13px; line-height: 1.55; color: var(--fg-3);
          margin: 0;
          text-wrap: pretty;
        }
        .opt2-card-foot {
          margin-top: auto;
          padding-top: 16px;
          display: flex; gap: 16px;
          font-family: var(--font-mono); font-size: 11px; color: var(--fg-4);
          letter-spacing: 0.04em;
        }
        .opt2-card-foot b { color: var(--fg-1); font-weight: 500; margin-right: 4px; }

        /* RIGHT column — dispatcher panel */
        .opt2-right { position: sticky; top: 32px; align-self: start; }
        .opt2-panel {
          background: var(--bg-1);
          border: 1px solid var(--line-1);
          padding: 16px;
          margin-bottom: 16px;
        }
        .opt2-panel-head {
          display: flex; justify-content: space-between; align-items: center;
          border-bottom: 1px solid var(--line-1);
          padding-bottom: 10px; margin-bottom: 12px;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--fg-4);
        }
        .opt2-panel-head b { color: var(--fg-1); font-weight: 500; }

        .opt2-stat-row {
          display: grid; grid-template-columns: 1fr auto;
          font-family: var(--font-mono);
          font-size: 12px;
          padding: 5px 0;
          border-bottom: 1px dashed var(--line-1);
          align-items: baseline;
        }
        .opt2-stat-row:last-child { border-bottom: 0; }
        .opt2-stat-row .k { color: var(--fg-4); text-transform: uppercase; letter-spacing: 0.06em; font-size: 10px; }
        .opt2-stat-row .v { color: var(--fg-0); font-weight: 500; }
        .opt2-stat-row .v.sm { font-size: 11px; font-weight: 400; color: var(--fg-1); }

        /* Radar plot */
        .opt2-radar-wrap { padding: 8px 0 0; }

        /* Contact mini */
        .opt2-contact { font-family: var(--font-mono); font-size: 12px; color: var(--fg-2); }
        .opt2-contact div { padding: 4px 0; }
        .opt2-contact b { color: var(--fg-4); display: inline-block; width: 72px; text-transform: uppercase; font-size: 10px; letter-spacing: 0.08em; }

        .opt2-foot {
          max-width: 1280px; margin: 72px auto 0;
          padding-top: 20px;
          border-top: 1px solid var(--line-1);
          display: flex; justify-content: space-between;
          font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.06em;
          color: var(--fg-4); text-transform: uppercase;
        }
      `}</style>

      {/* Top strip */}
      <div className="opt2-strip">
        <div className="brand">Nika Larsen</div>
        <div className="item"><span className="pulse"></span><b>ON STAND</b>Helsinki / EFHK</div>
        <div className="item"><b>CLOCK</b>14:32 UTC</div>
        <div className="item"><b>METAR</b>VRB03KT 9999 FEW040</div>
        <div className="item"><b>BRIEF</b>vol 4 · apr 2026</div>
        <div className="nav">
          <span>work</span>
          <span>writing</span>
          <span>about</span>
          <span>contact</span>
        </div>
      </div>

      <div className="opt2-main">
        {/* ──────── LEFT ──────── */}
        <div className="opt2-left">
          <div className="opt2-kicker">
            principal designer<span className="sep">·</span>
            aviation &amp; real-time systems<span className="sep">·</span>
            selected work 2018—2026
          </div>

          <h1 className="opt2-title">
            The second<br/>
            <i>between knowing</i> <span className="ampersand">&amp;</span><br/>
            not knowing.
          </h1>

          <p className="opt2-lede">
            I design the interfaces that collapse that second — for cockpits,
            dispatchers, and the control rooms that keep the sky ordered.
          </p>
          <p className="opt2-sub">
            Fifteen years on flight-deck avionics, ATC workstations, and
            ground-ops dashboards. Currently leading the traffic-flow product
            at <code>AERONAV/OY</code>, used across thirty-one European air
            navigation service providers to route roughly forty-one thousand
            daily movements.
          </p>

          <div className="opt2-actions">
            <button className="opt2-btn">View Work →</button>
            <button className="opt2-btn ghost">Download CV · PDF</button>
          </div>

          {/* Projects */}
          <h2 className="opt2-sh">
            <span>Selected work</span>
            <span className="muted">6 of 14 · sorted by relevance</span>
          </h2>
          <div className="opt2-grid">
            {DECK_PROJECTS.map((p, i) => (
              <div className="opt2-card" key={i}>
                <div className="opt2-card-head">
                  <span>{p.year}</span>
                  <span className="reg">{p.reg}</span>
                </div>
                <h3 className="opt2-card-title">{p.title}</h3>
                <p>{p.blurb}</p>
                <div className="opt2-card-foot">
                  <div><b>CLIENT</b>{p.client}</div>
                  <div><b>ROLE</b>{p.role}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Writing list */}
          <h2 className="opt2-sh">
            <span>Field notes</span>
            <span className="muted">writing, talks, interviews</span>
          </h2>
          <ul className="dash-list" style={{margin: 0}}>
            <li><span style={{color: 'var(--fg-4)', marginRight: 10, fontSize: 11}}>2026·03</span> <a href="#">On the grammar of altitude tapes</a> — Aerospace &amp; Flight, issue 14</li>
            <li><span style={{color: 'var(--fg-4)', marginRight: 10, fontSize: 11}}>2025·11</span> <a href="#">Designing for the 97th percentile second</a> — talk, UX-Copenhagen</li>
            <li><span style={{color: 'var(--fg-4)', marginRight: 10, fontSize: 11}}>2025·06</span> <a href="#">A short glossary for non-pilots</a> — personal essay</li>
            <li><span style={{color: 'var(--fg-4)', marginRight: 10, fontSize: 11}}>2024·10</span> <a href="#">Interview with Flight-Sim Quarterly</a> — on ATC training tools</li>
          </ul>
        </div>

        {/* ──────── RIGHT ──────── */}
        <div className="opt2-right">
          {/* Traffic radar panel */}
          <div className="opt2-panel">
            <div className="opt2-panel-head">
              <span><b>■ ACC·HELSINKI</b> · live traffic</span>
              <span>sector 03</span>
            </div>
            <div className="opt2-radar-wrap">
              <RadarPlot />
            </div>
            <div className="opt2-stat-row"><span className="k">aircraft</span><span className="v">47</span></div>
            <div className="opt2-stat-row"><span className="k">separation min</span><span className="v">5.2 nm</span></div>
            <div className="opt2-stat-row"><span className="k">flow rate</span><span className="v">38 /hr</span></div>
          </div>

          {/* Now-on-my-desk */}
          <div className="opt2-panel">
            <div className="opt2-panel-head">
              <span><b>□ NOW</b></span>
              <span>apr 2026</span>
            </div>
            <div style={{fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.55}}>
              Wireframing the next release of Skylane — a four-dimensional
              traffic-flow view that adds ETA confidence bands to the usual
              lat/long/altitude trio.
            </div>
          </div>

          {/* About strip */}
          <div className="opt2-panel">
            <div className="opt2-panel-head">
              <span><b>◆ PROFILE</b></span>
              <span>nika larsen</span>
            </div>
            <div className="opt2-contact">
              <div><b>Based</b> Helsinki, FI</div>
              <div><b>Since</b> 2011</div>
              <div><b>PPL</b> SE-KRM (Cessna 172)</div>
              <div><b>Speaking</b> EN · FI · SE</div>
              <div><b>Email</b> <a href="#">nika@aeronav.oy</a></div>
            </div>
          </div>

          {/* Active engagements list */}
          <div className="opt2-panel">
            <div className="opt2-panel-head">
              <span><b>▲ AVAILABILITY</b></span>
              <span>Q3 2026</span>
            </div>
            <div style={{fontFamily: 'var(--font-mono)', fontSize: 12}}>
              <div style={{display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px dashed var(--line-1)'}}>
                <span style={{color: 'var(--fg-2)'}}>consulting</span>
                <span style={{color: 'var(--sem-success)'}}>◐ limited</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px dashed var(--line-1)'}}>
                <span style={{color: 'var(--fg-2)'}}>talks &amp; teaching</span>
                <span style={{color: 'var(--sem-success)'}}>● open</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', padding: '4px 0'}}>
                <span style={{color: 'var(--fg-2)'}}>full-time roles</span>
                <span style={{color: 'var(--fg-4)'}}>○ closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="opt2-foot">
        <div>© 2026 · Nika Larsen · set on a warm grid</div>
        <div>version 4.26 · last compiled 14:32 UTC</div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Radar plot — simulated sector with slow-sweeping aircraft.
   Deterministic trajectories; one sweep line that rotates.
   ───────────────────────────────────────────────────────────── */
function RadarPlot() {
  const [t, setT] = React.useState(0);
  React.useEffect(() => {
    let raf;
    let start = performance.now();
    const tick = (now) => {
      setT((now - start) / 1000);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const S = 300;
  const cx = S / 2, cy = S / 2;
  const R = 128;
  const sweep = (t * 0.6) % (Math.PI * 2);

  // 9 aircraft — each with a base angle, radius, speed
  const craft = [
    { id: 'FIN236',  a0: 0.2,   r0: 0.55, v: 0.12, hdg: 0.8 },
    { id: 'SAS904',  a0: 1.1,   r0: 0.82, v: 0.09, hdg: 2.3 },
    { id: 'BAW779',  a0: 2.4,   r0: 0.35, v: 0.14, hdg: 4.1 },
    { id: 'DLH1404', a0: 3.2,   r0: 0.72, v: 0.08, hdg: 1.6 },
    { id: 'KLM1177', a0: 4.4,   r0: 0.48, v: 0.11, hdg: 5.2 },
    { id: 'AFR1552', a0: 5.1,   r0: 0.90, v: 0.07, hdg: 3.0 },
    { id: 'FIN014',  a0: 5.8,   r0: 0.28, v: 0.13, hdg: 0.3 },
    { id: 'NAX3340', a0: 0.9,   r0: 0.62, v: 0.10, hdg: 2.7 },
    { id: 'AY19',    a0: 3.9,   r0: 0.48, v: 0.12, hdg: 5.8 },
  ];

  return (
    <svg viewBox={`0 0 ${S} ${S}`} width="100%" height="260" style={{display: 'block'}}>
      {/* range rings */}
      {[0.33, 0.66, 1.0].map((f, i) => (
        <circle key={i} cx={cx} cy={cy} r={R * f} fill="none" stroke="var(--line-1)" strokeDasharray="2 3" />
      ))}
      {/* cardinal lines */}
      <line x1={cx - R} y1={cy} x2={cx + R} y2={cy} stroke="var(--line-1)" strokeDasharray="2 3" />
      <line x1={cx} y1={cy - R} x2={cx} y2={cy + R} stroke="var(--line-1)" strokeDasharray="2 3" />
      {/* cardinal labels */}
      <text x={cx} y={cy - R - 4} textAnchor="middle" fontSize="9" fill="var(--fg-4)" fontFamily="var(--font-mono)" letterSpacing="0.08em">N</text>
      <text x={cx + R + 4} y={cy + 3} textAnchor="start" fontSize="9" fill="var(--fg-4)" fontFamily="var(--font-mono)" letterSpacing="0.08em">E</text>
      <text x={cx} y={cy + R + 11} textAnchor="middle" fontSize="9" fill="var(--fg-4)" fontFamily="var(--font-mono)" letterSpacing="0.08em">S</text>
      <text x={cx - R - 4} y={cy + 3} textAnchor="end" fontSize="9" fill="var(--fg-4)" fontFamily="var(--font-mono)" letterSpacing="0.08em">W</text>

      {/* sweep wedge */}
      <defs>
        <radialGradient id="sweep" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="var(--acc-amber)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="var(--acc-amber)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g transform={`translate(${cx} ${cy}) rotate(${(sweep * 180 / Math.PI) - 90})`}>
        <path d={`M 0 0 L ${R} 0 A ${R} ${R} 0 0 0 ${R * Math.cos(-0.45)} ${R * Math.sin(-0.45)} Z`}
              fill="url(#sweep)" />
        <line x1="0" y1="0" x2={R} y2="0" stroke="var(--acc-amber)" strokeWidth="0.6" opacity="0.5" />
      </g>

      {/* aircraft */}
      {craft.map((c, i) => {
        const a = c.a0 + t * c.v * 0.15;
        const r = (c.r0 + Math.sin(t * 0.1 + i) * 0.04) * R;
        const x = cx + Math.cos(a) * r;
        const y = cy + Math.sin(a) * r;
        const hx = x + Math.cos(c.hdg) * 7;
        const hy = y + Math.sin(c.hdg) * 7;
        // brightness — dim unless swept recently
        const delta = ((a - sweep + Math.PI * 4) % (Math.PI * 2));
        const bright = Math.max(0.35, 1 - delta / (Math.PI * 2));
        return (
          <g key={c.id} opacity={bright}>
            <line x1={x} y1={y} x2={hx} y2={hy} stroke="var(--fg-1)" strokeWidth="0.8" />
            <circle cx={x} cy={y} r="2.2" fill="var(--fg-0)" />
            <text x={x + 6} y={y - 4} fontSize="8" fill="var(--fg-2)" fontFamily="var(--font-mono)" letterSpacing="0.04em">{c.id}</text>
          </g>
        );
      })}

      {/* center */}
      <circle cx={cx} cy={cy} r="2" fill="var(--acc-amber)" />
      <text x={cx + 5} y={cy + 12} fontSize="8" fill="var(--fg-4)" fontFamily="var(--font-mono)" letterSpacing="0.06em">EFHK</text>
    </svg>
  );
}

const DECK_PROJECTS = [
  { year: '2026', reg: 'NK—14', title: 'Skylane',         client: 'AERONAV/OY',        role: 'Principal',  blurb: 'Traffic-flow console for European ANSPs. Two-screen workstation, live for 18 months across 31 area-control centres.' },
  { year: '2025', reg: 'NK—13', title: 'Halo',            client: 'Leonardo Helicopters', role: 'Lead',      blurb: 'Collision-avoidance readout for the AW139. Replaced a 12-row numeric list with a tape-strip and a single bearing arc.' },
  { year: '2025', reg: 'NK—12', title: 'Approach Brief',  client: 'Finnair line pilots', role: 'Designer',  blurb: 'An EFB redesign for iPad — brief cards, chart overlay, weather ribbon. Adopted fleet-wide May 2025.' },
  { year: '2025', reg: 'NK—11', title: 'Remote Tower',    client: 'Fintraffic ANS',      role: 'Lead',      blurb: 'Controller workstation for three regional airports operated from a single tower in Tampere.' },
  { year: '2024', reg: 'NK—10', title: 'Winds Aloft',     client: 'AERONAV/OY',          role: 'Designer',  blurb: 'Real-time meteorology layer. Barbs, isotachs, turbulence — at 24 Hz, without giving a dispatcher a headache.' },
  { year: '2023', reg: 'NK—08', title: 'Fuel Plan',       client: 'Lufthansa Systems',   role: 'Consulting', blurb: 'Flight-plan optimisation UI. Introduced a cost-index slider with legible trade-off readouts.' },
];

Object.assign(window, { Option2FlightDeck });
