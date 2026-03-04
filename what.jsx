import { useState } from "react";

const phases = [
  {
    id: 1,
    label: "PHASE 01",
    title: "Math Arsenal",
    duration: "Month 1–2 · Mar–Apr",
    color: "#00ff9d",
    icon: "∑",
    description: "Before physics, you need the math. No calculus = no olympiad physics. Period.",
    tasks: [
      { id: "m1", text: "Derivatives — power rule, chain rule, product rule" },
      { id: "m2", text: "Integration — basic integrals, area under curve" },
      { id: "m3", text: "Vectors — dot product, cross product, components" },
      { id: "m4", text: "Trigonometry — all identities, inverse trig" },
      { id: "m5", text: "Basic differential equations (just exposure for now)" },
      { id: "m6", text: "HCV Vol 1: Ch 1–5 (Introduction + Kinematics)" },
    ],
    resources: [
      { label: "Khan Academy Calculus", url: "https://www.khanacademy.org/math/calculus-1" },
      { label: "3Blue1Brown Essence of Calculus", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr" },
    ]
  },
  {
    id: 2,
    label: "PHASE 02",
    title: "Mechanics Mastery",
    duration: "Month 2–3 · Apr–May",
    color: "#00cfff",
    icon: "F",
    description: "Mechanics is ~40% of NSEP. If you own mechanics, you're already halfway there.",
    tasks: [
      { id: "p1", text: "HCV Vol 1: Ch 6–10 (Newton's Laws, Friction, Work-Energy)" },
      { id: "p2", text: "HCV Vol 1: Ch 11–15 (Rotational Motion, Gravitation)" },
      { id: "p3", text: "HCV Vol 1: Ch 16–20 (SHM, Waves, Fluid Mechanics)" },
      { id: "p4", text: "Do ALL exercises at end of each HCV chapter" },
      { id: "p5", text: "Irodov: Section 1 (Mechanics) — attempt 30 problems" },
      { id: "p6", text: "Solve NSEP 2019, 2020 mechanics-only questions" },
    ],
    resources: [
      { label: "Walter Lewin MIT 8.01 (Mechanics)", url: "https://www.youtube.com/playlist?list=PLyQSN7X0ro203puVhQsmCj9qhlFQ-As8e" },
      { label: "HC Verma Solutions", url: "https://www.hcverma.in/" },
    ]
  },
  {
    id: 3,
    label: "PHASE 03",
    title: "Electromagnetism + Optics",
    duration: "Month 3–4 · May–Jun",
    color: "#ff6b9d",
    icon: "⚡",
    description: "E&M is the second biggest topic. Optics is surprisingly scoring — don't skip it.",
    tasks: [
      { id: "e1", text: "HCV Vol 2: Ch 29–34 (Electric Field, Gauss's Law, Potential)" },
      { id: "e2", text: "HCV Vol 2: Ch 35–38 (Capacitors, Current, Circuits)" },
      { id: "e3", text: "HCV Vol 2: Ch 39–42 (Magnetic Field, Induction, EMF)" },
      { id: "e4", text: "HCV Vol 2: Ch 43–47 (Optics — Reflection, Refraction, Lenses)" },
      { id: "e5", text: "Irodov: Section 3 (Electricity) — attempt 25 problems" },
      { id: "e6", text: "Irodov: Section 5 (Optics) — attempt 15 problems" },
    ],
    resources: [
      { label: "Walter Lewin MIT 8.02 (E&M)", url: "https://www.youtube.com/playlist?list=PLyQSN7X0ro2314mKyUiOILaOC2hk6Pc3j" },
      { label: "Michel van Biezen Physics", url: "https://www.youtube.com/user/ilectureonline" },
    ]
  },
  {
    id: 4,
    label: "PHASE 04",
    title: "Thermo + Modern Physics",
    duration: "Month 4–5 · Jun–Jul",
    color: "#ffaa00",
    icon: "λ",
    description: "Thermodynamics trips people up. Modern physics is usually the easiest scoring section.",
    tasks: [
      { id: "t1", text: "HCV Vol 2: Ch 24–28 (Heat, Thermodynamics, KTG)" },
      { id: "t2", text: "HCV Vol 2: Ch 48–50 (Photoelectric, Bohr Model, Nuclear)" },
      { id: "t3", text: "Irodov: Section 2 (Thermodynamics) — attempt 20 problems" },
      { id: "t4", text: "Irodov: Section 6 (Nuclear) — attempt 10 problems" },
      { id: "t5", text: "Attempt full NSEP 2021, 2022 papers (timed)" },
      { id: "t6", text: "Identify your weakest 2 topics and revisit HCV chapters" },
    ],
    resources: [
      { label: "Physics Galaxy (Thermo)", url: "https://www.youtube.com/@PhysicsGalaxyOfficial" },
      { label: "AoPS Physics Forum", url: "https://artofproblemsolving.com/community/c76_physics" },
    ]
  },
  {
    id: 5,
    label: "PHASE 05",
    title: "Olympiad Mode",
    duration: "Month 5–6 · Aug–Sep",
    color: "#c084fc",
    icon: "★",
    description: "Stop doing textbook problems. Start doing olympiad problems. Completely different mindset.",
    tasks: [
      { id: "o1", text: "200 Puzzling Physics Problems (Gnädig) — 50 problems minimum" },
      { id: "o2", text: "Krotov: Science for Everyone — selective chapters" },
      { id: "o3", text: "Solve NSEP 2015–2023 all papers fully (timed, strict)" },
      { id: "o4", text: "Solve 3 INPhO past papers to see what's beyond NSEP" },
      { id: "o5", text: "Join a study group or forum (AoPS, Telegram olympiad groups)" },
      { id: "o6", text: "Weekly: 1 full mock paper + error analysis" },
    ],
    resources: [
      { label: "HBCSE INPhO Past Papers", url: "https://olympiads.hbcse.tifr.res.in/how-to-prepare/past-papers/" },
      { label: "NSEP Past Papers (IAPT)", url: "https://www.iapt.org.in" },
    ]
  },
  {
    id: 6,
    label: "PHASE 06",
    title: "Final Sprint",
    duration: "Month 6–7 · Oct–Nov",
    color: "#ff4444",
    icon: "⚑",
    description: "No new topics. Only sharpening. Sleep. Revision. Mock tests. That's it.",
    tasks: [
      { id: "f1", text: "1 full NSEP mock paper every 3 days (timed)" },
      { id: "f2", text: "Revise every formula — make a 2-page cheat sheet" },
      { id: "f3", text: "Revisit your personal error log from all practice" },
      { id: "f4", text: "Speed drills on MCQ-format problems" },
      { id: "f5", text: "Go through NSEP marking scheme — understand negative marking strategy" },
      { id: "f6", text: "Sleep 8hrs. Eat well. Don't burn out the week before." },
    ],
    resources: [
      { label: "NSEP Official Page", url: "https://www.iapt.org.in/sop/nsep.html" },
      { label: "IPhO Syllabus (official)", url: "https://ipho-new.org/statutes-and-regulations/syllabus/" },
    ]
  }
];

const books = [
  { title: "HC Verma Vol 1 & 2", role: "CORE", note: "Do every single exercise. Non-negotiable." },
  { title: "Irodov — Problems in General Physics", role: "CORE", note: "Don't do all 1500. Target ~100 selective problems." },
  { title: "200 Puzzling Physics Problems", role: "OLYMPIAD", note: "Gnädig & Honyek. Best for olympiad thinking." },
  { title: "Krotov — Science for Everyone", role: "OLYMPIAD", note: "Underrated gem. Great intuition builder." },
  { title: "Resnick, Halliday & Krane", role: "REFERENCE", note: "Use as reference when HCV isn't enough depth." },
  { title: "Physics Olympiad: Basic to Advanced", role: "OLYMPIAD", note: "Japanese olympiad book. Excellent structured problems." },
];

const links = [
  { label: "IPhO Official Syllabus", url: "https://ipho-new.org/statutes-and-regulations/syllabus/", tag: "SYLLABUS" },
  { label: "NSEP Past Papers (IAPT)", url: "https://www.iapt.org.in", tag: "PAPERS" },
  { label: "INPhO + OCSC Past Papers (HBCSE)", url: "https://olympiads.hbcse.tifr.res.in/how-to-prepare/past-papers/", tag: "PAPERS" },
  { label: "IPhO Past Papers Archive", url: "https://ipho-new.org/problems-and-solutions/", tag: "PAPERS" },
  { label: "AoPS Physics Community", url: "https://artofproblemsolving.com/community/c76_physics", tag: "COMMUNITY" },
  { label: "PhysicsOlympiad.com", url: "https://physicsolympiad.com", tag: "PREP" },
  { label: "MIT OCW 8.01 Mechanics", url: "https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/", tag: "LECTURES" },
  { label: "MIT OCW 8.02 E&M", url: "https://ocw.mit.edu/courses/8-02-physics-ii-electricity-and-magnetism-spring-2007/", tag: "LECTURES" },
];

export default function IPhOPlan() {
  const [checked, setChecked] = useState({});
  const [open, setOpen] = useState({ 1: true });

  const toggle = (id) => setChecked(p => ({ ...p, [id]: !p[id] }));
  const togglePhase = (id) => setOpen(p => ({ ...p, [id]: !p[id] }));

  const totalTasks = phases.reduce((acc, p) => acc + p.tasks.length, 0);
  const doneTasks = Object.values(checked).filter(Boolean).length;
  const pct = Math.round((doneTasks / totalTasks) * 100);

  return (
    <div style={{
      background: "#080c12",
      minHeight: "100vh",
      fontFamily: "'Courier New', monospace",
      color: "#c8d6e5",
      padding: "0",
    }}>
      {/* Header */}
      <div style={{
        borderBottom: "1px solid #1a2535",
        padding: "40px 32px 32px",
        background: "linear-gradient(180deg, #0d1520 0%, #080c12 100%)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: "radial-gradient(ellipse at 20% 50%, rgba(0,255,157,0.03) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(0,207,255,0.04) 0%, transparent 50%)",
          pointerEvents: "none",
        }} />
        <div style={{ fontSize: "10px", letterSpacing: "4px", color: "#00ff9d", marginBottom: "12px", opacity: 0.8 }}>
          MISSION BRIEFING · OPERATION IPHO
        </div>
        <h1 style={{
          fontSize: "clamp(28px, 5vw, 48px)",
          fontWeight: "900",
          margin: "0 0 8px",
          color: "#fff",
          letterSpacing: "-1px",
          lineHeight: 1.1,
        }}>
          From Zero → IPhO<br />
          <span style={{ color: "#00ff9d" }}>7 Month Roadmap</span>
        </h1>
        <div style={{ fontSize: "12px", color: "#5a7a9a", marginTop: "12px", letterSpacing: "1px" }}>
          NSEP NOV 2026 → INPhO JAN 2027 → OCSC MAY 2027 → IPhO JUL 2027
        </div>

        {/* Progress bar */}
        <div style={{ marginTop: "28px", maxWidth: "400px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", letterSpacing: "2px", color: "#5a7a9a", marginBottom: "8px" }}>
            <span>MISSION PROGRESS</span>
            <span style={{ color: "#00ff9d" }}>{doneTasks}/{totalTasks} TASKS · {pct}%</span>
          </div>
          <div style={{ height: "3px", background: "#1a2535", borderRadius: "2px", overflow: "hidden" }}>
            <div style={{
              height: "100%",
              width: `${pct}%`,
              background: "linear-gradient(90deg, #00ff9d, #00cfff)",
              borderRadius: "2px",
              transition: "width 0.4s ease",
            }} />
          </div>
        </div>
      </div>

      <div style={{ padding: "32px", maxWidth: "860px", margin: "0 auto" }}>

        {/* Honest warning */}
        <div style={{
          border: "1px solid #ff444433",
          background: "#ff444408",
          borderRadius: "8px",
          padding: "16px 20px",
          marginBottom: "32px",
          fontSize: "12px",
          lineHeight: 1.7,
          color: "#ff8888",
        }}>
          <span style={{ letterSpacing: "2px", fontWeight: "bold" }}>⚠ HONEST BRIEF</span><br />
          <span style={{ color: "#8899aa" }}>
            IPhO selects only 5 students from India. This plan gets you to NSEP → INPhO for sure if you execute it. IPhO is the stretch goal — go all in and treat each stage as the target. Most IPhO kids started prepping in 9th. You're starting in 10th. That's late, but not impossible. What matters now: <span style={{ color: "#fff" }}>consistency over intensity.</span>
          </span>
        </div>

        {/* Phases */}
        <div style={{ marginBottom: "40px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "4px", color: "#5a7a9a", marginBottom: "20px" }}>THE PLAN</div>
          {phases.map((phase) => {
            const done = phase.tasks.filter(t => checked[t.id]).length;
            const isOpen = open[phase.id];
            return (
              <div key={phase.id} style={{
                border: `1px solid ${isOpen ? phase.color + "33" : "#1a2535"}`,
                borderRadius: "8px",
                marginBottom: "12px",
                overflow: "hidden",
                transition: "border-color 0.2s",
              }}>
                <div
                  onClick={() => togglePhase(phase.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "18px 20px",
                    cursor: "pointer",
                    background: isOpen ? `${phase.color}08` : "transparent",
                    transition: "background 0.2s",
                  }}
                >
                  <div style={{
                    width: "36px", height: "36px",
                    border: `1px solid ${phase.color}55`,
                    borderRadius: "6px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: phase.color,
                    fontSize: "16px",
                    fontWeight: "bold",
                    flexShrink: 0,
                  }}>
                    {phase.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                      <span style={{ fontSize: "9px", letterSpacing: "3px", color: phase.color, opacity: 0.8 }}>{phase.label}</span>
                      <span style={{ fontSize: "15px", fontWeight: "bold", color: "#fff" }}>{phase.title}</span>
                    </div>
                    <div style={{ fontSize: "11px", color: "#5a7a9a", marginTop: "2px" }}>{phase.duration}</div>
                  </div>
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <div style={{ fontSize: "11px", color: done === phase.tasks.length ? "#00ff9d" : "#5a7a9a" }}>
                      {done}/{phase.tasks.length}
                    </div>
                    <div style={{ fontSize: "16px", color: "#5a7a9a", lineHeight: 1 }}>{isOpen ? "−" : "+"}</div>
                  </div>
                </div>

                {isOpen && (
                  <div style={{ padding: "0 20px 20px", borderTop: `1px solid ${phase.color}20` }}>
                    <p style={{ fontSize: "12px", color: "#7a9ab5", margin: "16px 0 14px", lineHeight: 1.6 }}>
                      {phase.description}
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      {phase.tasks.map(task => (
                        <div
                          key={task.id}
                          onClick={() => toggle(task.id)}
                          style={{
                            display: "flex", alignItems: "flex-start", gap: "12px",
                            cursor: "pointer",
                            padding: "8px 12px",
                            borderRadius: "6px",
                            background: checked[task.id] ? `${phase.color}0d` : "#0d1520",
                            border: `1px solid ${checked[task.id] ? phase.color + "40" : "#1a2535"}`,
                            transition: "all 0.15s",
                          }}
                        >
                          <div style={{
                            width: "16px", height: "16px", borderRadius: "4px",
                            border: `1.5px solid ${checked[task.id] ? phase.color : "#2a3a4a"}`,
                            background: checked[task.id] ? phase.color : "transparent",
                            flexShrink: 0, marginTop: "1px",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            transition: "all 0.15s",
                          }}>
                            {checked[task.id] && <span style={{ fontSize: "10px", color: "#000", fontWeight: "bold" }}>✓</span>}
                          </div>
                          <span style={{
                            fontSize: "12px", lineHeight: 1.5,
                            color: checked[task.id] ? "#5a7a9a" : "#c8d6e5",
                            textDecoration: checked[task.id] ? "line-through" : "none",
                            transition: "all 0.15s",
                          }}>
                            {task.text}
                          </span>
                        </div>
                      ))}
                    </div>

                    {phase.resources.length > 0 && (
                      <div style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid #1a2535" }}>
                        <div style={{ fontSize: "9px", letterSpacing: "3px", color: "#5a7a9a", marginBottom: "10px" }}>RESOURCES</div>
                        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                          {phase.resources.map((r, i) => (
                            <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" style={{
                              fontSize: "11px",
                              color: phase.color,
                              border: `1px solid ${phase.color}40`,
                              borderRadius: "4px",
                              padding: "4px 10px",
                              textDecoration: "none",
                              transition: "background 0.15s",
                            }}
                              onMouseEnter={e => e.target.style.background = phase.color + "15"}
                              onMouseLeave={e => e.target.style.background = "transparent"}
                            >
                              ↗ {r.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Books */}
        <div style={{ marginBottom: "40px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "4px", color: "#5a7a9a", marginBottom: "20px" }}>BOOKS ARSENAL</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "10px" }}>
            {books.map((b, i) => (
              <div key={i} style={{
                border: "1px solid #1a2535",
                borderRadius: "8px",
                padding: "14px 16px",
                background: "#0d1520",
              }}>
                <div style={{
                  display: "inline-block",
                  fontSize: "8px", letterSpacing: "2px",
                  padding: "2px 8px", borderRadius: "3px",
                  marginBottom: "8px",
                  background: b.role === "CORE" ? "#00ff9d20" : b.role === "OLYMPIAD" ? "#c084fc20" : "#00cfff15",
                  color: b.role === "CORE" ? "#00ff9d" : b.role === "OLYMPIAD" ? "#c084fc" : "#00cfff",
                  border: `1px solid ${b.role === "CORE" ? "#00ff9d40" : b.role === "OLYMPIAD" ? "#c084fc40" : "#00cfff30"}`,
                }}>
                  {b.role}
                </div>
                <div style={{ fontSize: "13px", color: "#fff", fontWeight: "bold", marginBottom: "4px" }}>{b.title}</div>
                <div style={{ fontSize: "11px", color: "#5a7a9a", lineHeight: 1.5 }}>{b.note}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div style={{ marginBottom: "40px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "4px", color: "#5a7a9a", marginBottom: "20px" }}>SYLLABUS · PAPERS · LINKS</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "8px" }}>
            {links.map((l, i) => (
              <a key={i} href={l.url} target="_blank" rel="noopener noreferrer" style={{
                display: "flex", alignItems: "center", gap: "12px",
                border: "1px solid #1a2535",
                borderRadius: "6px",
                padding: "12px 14px",
                background: "#0d1520",
                textDecoration: "none",
                transition: "border-color 0.15s, background 0.15s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#2a4060"; e.currentTarget.style.background = "#111827"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#1a2535"; e.currentTarget.style.background = "#0d1520"; }}
              >
                <span style={{
                  fontSize: "8px", letterSpacing: "1px",
                  padding: "2px 6px", borderRadius: "3px", flexShrink: 0,
                  background: l.tag === "SYLLABUS" ? "#ffaa0020" : l.tag === "PAPERS" ? "#00ff9d15" : l.tag === "COMMUNITY" ? "#c084fc15" : "#00cfff10",
                  color: l.tag === "SYLLABUS" ? "#ffaa00" : l.tag === "PAPERS" ? "#00ff9d" : l.tag === "COMMUNITY" ? "#c084fc" : "#00cfff",
                }}>
                  {l.tag}
                </span>
                <span style={{ fontSize: "12px", color: "#c8d6e5" }}>{l.label}</span>
                <span style={{ marginLeft: "auto", color: "#2a4060", fontSize: "14px" }}>↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* Pipeline */}
        <div style={{
          border: "1px solid #1a2535",
          borderRadius: "8px",
          padding: "24px",
          background: "#0d1520",
          marginBottom: "32px",
        }}>
          <div style={{ fontSize: "10px", letterSpacing: "4px", color: "#5a7a9a", marginBottom: "20px" }}>THE PIPELINE</div>
          <div style={{ display: "flex", alignItems: "center", gap: "0", flexWrap: "wrap", rowGap: "12px" }}>
            {[
              { stage: "NSEP", when: "Nov 2026", color: "#00ff9d", note: "~Top 300 qualify" },
              { stage: "INPhO", when: "Jan 2027", color: "#00cfff", note: "~Top 35 qualify" },
              { stage: "OCSC", when: "May 2027", color: "#ffaa00", note: "~Top 6 qualify" },
              { stage: "IPhO", when: "Jul 2027", color: "#ff6b9d", note: "5 go to IPhO" },
            ].map((s, i, arr) => (
              <div key={i} style={{ display: "flex", alignItems: "center" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{
                    border: `2px solid ${s.color}`,
                    borderRadius: "6px",
                    padding: "8px 14px",
                    color: s.color,
                    fontSize: "13px",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                  }}>{s.stage}</div>
                  <div style={{ fontSize: "9px", color: "#5a7a9a", marginTop: "4px" }}>{s.when}</div>
                  <div style={{ fontSize: "9px", color: "#3a5a7a", marginTop: "2px" }}>{s.note}</div>
                </div>
                {i < arr.length - 1 && (
                  <div style={{ color: "#2a4060", fontSize: "18px", padding: "0 8px", marginBottom: "18px" }}>→</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div style={{ fontSize: "10px", color: "#2a4060", textAlign: "center", letterSpacing: "2px", paddingBottom: "32px" }}>
          MISSION CONTROL · OPERATION IPHO · GOOD LUCK SOLDIER
        </div>
      </div>
    </div>
  );
}