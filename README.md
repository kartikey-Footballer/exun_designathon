# EEUN COMMAND // Extradigital Forensic Suite

A fully client-side, **build-free** React forensics dashboard for **Exun 2026**.
Cyberpunk dark theme, animated starfield + synthwave floor grid, live energy telemetry,
C++ code forensics diff viewer, interactive arcade-cabinet hotspot map, play
yourself-in-the-breach ASCII game simulator, a 4-section official case dossier,
and a classified **Suspension Vault** holding the documents that end the case:
the EIA suspension notice (EIA/EXUN/SUS-01), Nano's 23:54 breakthrough
assessment log, and Nano's untraceable farewell transmission about a worldwide
digital jailbreak.

No `npm install`, no bundler, no node backend — open it on any web server and done.

---

## 🚀 Run the Project (Quick Start)

> **Important:** the app must be served over HTTP, not opened via `file://`
> (the in-browser JSX loader fetches files with XHR, which browsers block on `file://`).

### macOS / Linux
```bash
cd /path/to/kartikey
python3 -m http.server 8000
# open → http://localhost:8000
```

### Windows
```bat
cd C:\path\to\kartikey
python -m http.server 8000
```

### Zero-install alternatives (any OS)
```bash
npx serve .          # Node-based static server
```
```bash
./run.sh             # helper script (python3 server on port 8000)
```

### npm script ( convenience )
```bash
npm start            # runs python3 -m http.server 8000
npm run serve        # runs npx serve .
```

Then browse to **http://localhost:8000** (port is whatever the console prints if 8000 is busy).

**Requirements:** any modern browser (Chrome/Firefox/Safari/Edge). Internet needed
once per page-load for the CDN libraries and Google Fonts.

---

## 📁 File Structure

```
kartikey/
├── index.html                        # Entry point — a thin "shell": background layers,
│                                     # CDN libs (Tailwind, React 18, Babel) and the
│                                     # ordered <script> manifest. NO app logic lives here.
│
├── run.sh                            # One-command local server (bash)
├── package.json                      # npm wrapper: "start" / "serve" scripts
├── README.md                         # This file
│
├── css/
│   └── styles.css                    # Entire design system: global resets, scrollbar,
│   │                                 # aurora/nebula, starfield layers, synthwave floor grid,
│   │                                 # glassmorphism (.glass/.glass-red), neon text glow,
│   │                                 # CRT scanlines/vignette/phosphor/flicker, modal
│   │                                 # gradient shell + sheen, keyframes & entrance anims
│
└── js/
    ├── background.js                 # Vanilla-JS ambient engine (independent of React):
    │                                 # DPR-aware canvas particles with depth + mouse
    │                                 # parallax, twinkle stars, constellation links
    │
    ├── app.jsx                       # ROOT APP: owns global state (tab, audio, modal,
    │                                 # scrub) + keyboard shortcuts + footer + modal host
    │
    ├── core/
    │   ├── globals.js                # Un-hooks React hooks into module-shared consts
    │   │                             # (useState, useEffect, useCallback, …)
    │   └── audio.js                  # WebAudio synth: mkAudio/tone/alarm/laser —
    │                                 # ALL sound effects are generated at runtime,
    │                                 # zero audio files shipped
    │
    ├── data/                         # ── THE ONLY FILES YOU EDIT FOR NEW CASE CONTENT ──
    │   ├── energy-telemetry.js       # ED: 14 days of kWh/THD/compressor readings,
    │   │                             #     flags isA (anomaly) / isD (residual)
    │   ├── incident-timeline.js      # TLEvents: timeline log entries
    │   │                             #           (CRITICAL/INTERCEPT/FORENSIC)
    │   ├── hotspots.js               # HS: 5 arcade-cabinet damage nodes; each carries a
    │   │                             #     full report {section, obs, rec, integ, photo}
    │   │                             #     + top/left % = position on the cabinet SVG
    │   └── source-code.js            # OC + AC: Original vs Altered C++ listings,
    │                                 #           line-by-line typed (s/c/d/e codes)
    │   ├── vault-docs.js             # VDNotice + VDLog + VDNote + VDGlobal: the
    │                                 #     3 sealed SUS-01 documents & world feed
    │                                 #
    ├── components/...                # ── PRESENTATION LAYER (one widget per file) ──
        ├── icons.jsx                 # Svg base + all inline SVG icons
        ├── shared.jsx                # SHdr: shared glass-card section header
        ├── header.jsx                # Top bar: UTC clock, EXUN badge, audio toggle,
        │                             # critical-anomaly button, tab bar, case-ID strip
        ├── telemetry-chart.jsx       # Energy telemetry bars (3 view modes), hover
        │                             # tooltips, timeline scrubber, KPI tiles
        ├── incident-timeline.jsx     # Filterable/searchable incident feed
        ├── code-diff.jsx             # Split/unified C++ diff viewer, RAM scan sim,
        │                             # copy-to-clipboard, fatal-fault banner
        ├── asset-map.jsx             # SVG arcade-cabinet wireframe + 5 animated
        │                             # hotspots + mini CRT runtime + joystick buttons
        ├── game-sim.jsx              # Tab 2: playable 24×12 ASCII World::render sim
        │                             # with std::clamp vs breach mode + CRT skin
        ├── dossier.jsx               # Tab 3: 4 sub-tabs — Case Debrief, Asset
        │                             #     Integrity report, redacted photo evidence,
        │                             #     surveillance transcript
        ├── vault.jsx                 # Tab 4: SUSPENSION VAULT — locked-paper
        │                             #     document reader with LIFT-SEAL
        │                             #     declassification, a line-by-line
        │                             #     typewriter replay of Nano's note,
        │                             #     EXUN status board & global jailbreak feed
        └── modal.jsx                 # Universal modal (hotspot dossier / case
                                      # debrief / Nano&Mega report) with glass shell
```

---

## 🧠 Architecture

### Single-page, 4-layer stack (no build tools)

```
┌──────────────────────────────────────────────────────────────────┐
│  LAYER 1 · HEAD (static)                                         │
│  Google Fonts · Tailwind CDN · global css/styles.css             │
├──────────────────────────────────────────────────────────────────┤
│  LAYER 2 · AMBIENT BACKGROUND (fixed, behind everything)         │
│  aurora → dot-grid → floorGrid → stars → particle canvas → scanlines   │
│  Vanilla-JS rAF loop — never re-renders, never touches React    │
│  (React tree sits at z-10 above it all)                          │
├──────────────────────────────────────────────────────────────────┤
│  LAYER 3 · DATA CONSTANTS (plain classic scripts)                │
│  ED / TLEvents / HS / OC / AC — pure JSON-ish consts, no logic   │
├──────────────────────────────────────────────────────────────────┤
│  LAYER 4 · REACT UI (JSX compiled in-browser by Babel standalone)│
│  globals.js → audio → icons → shared → widgets → app.jsx(CONTROL)│
└──────────────────────────────────────────────────────────────────┘
```

**Why this works without a bundler:**
- Files are loaded as **classic scripts in manifest order** (see `index.html`), so
  top-level `const`s become ambient global bindings — data files don't need imports.
- Files ending in `.jsx` get `type="text/babel"`, and Babel standalone fetches,
  compiles and runs them in load order at page start.
- `js/core/globals.js` declares the React hooks once; every later file uses them.

> ⚠️ **Load order matters.** If you add a file: data/effects constants → icons →
> shared → widgets → `app.jsx` last (it mounts the tree).

### State model — one-way data flow

```
                ┌────────────── state (App) ──────────────┐
                │  tab · snd · audio · scrub · modal · mdata │
                └────── props go down ───┬────────────────┘
                                         │
   Header (tab switcher, audio toggle)   │   Modal host (always mounted)
   TelChart (scrub ⇅ bars share state)   │   Footer
   IncTimeline → openD (debrief modal)   │
   CodeDiff → onLaunch → setTab('simulator')
   AssetMap → onHotspot → hotspot modal
   GameSim → onBreach → alarm sound
                callbacks flow UP ▲
```

- **`tab`** decides which screen mounts (`matrix` / `simulator` / `dossier` / `vault`).
  Because switching unmounts/remounts components, the cinematic entrance
  animations replay on every tab change.
- **`scrub`** is shared between the timeline scrubber slider and the chart bars —
  hovering a bar scrubs the same value.
- **`modal` + `mdata`** implement one polymorphic modal; the hotspot map, header
  buttons and timeline all funnel into it.

### Rendering pipeline

1. Browser fetches CDNs; Tailwind JIT parses classes; Babel compiles `text/babel`.
2. `background.js` starts its rAF loop immediately (React mounts independently).
3. `app.jsx` calls `ReactDOM.createRoot(#root).render(<App/>)`.
4. No routing lib — `App` swaps screens with a conditional `{tab===…&&<…/>}`.
5. No network calls, no storage — the entire case is compile-time data.

### Sound pipeline (zero assets)

`App` creates one lazily-woken `AudioContext` → all interactions call
`tone(ctx, freq, waveType, dur, vol)` → oscillator+gain envelopes. Voice presets:
hover ticks (`square`), scrub chirps (`triangle`), hotspot IDs (`sawtooth`),
and `alarm()` — a 5-note descending siren for breach events. Gated by the
**MUTED/AUDIO ON** header toggle (`snd`).

---

## 🔄 Workflows

### Workflow A — Forensic Matrix (Tab 1)
```
Energy spike bar (Oct 23) ⇄ scrubber slider     (shared `scrub` state)
Timeline log click  ─────────────┐
Header "CASE DEBRIEF"/"N&M" ─────┼──→ Modal.open(dispatch)
Hotspot A–E click  ──────────────┘        hotspot · debrief · report
"RUN C++ SIMULATOR" ──→ setTab('simulator')  (Workflow B)
```

### Workflow B — Breach Simulation (Tab 2)
```
Start: Character(12,6) bounded by std::clamp (0–23 × 0–11)
  WASD / arrows / on-screen D-pad → bounded move + log line
  "SIMULATE EXTRADIGITAL BREACH"
    → clamp class deleted → moves unbounded
    → entity exits matrix | ESCAPE CONFIRMED overlay | alarm()
  "RESET RUNTIME" → re-flash clean engine
```

### Workflow C — Case Dossier (Tab 3)
Four stateless sub-tabs: Debrief letter → Nano&Mega integrity report (§2.a–§3) →
redacted photo evidence with a de-redaction spectral filter toggle →
surveillance transcript from 22:30 to 22:33 UTC.

### Workflow E — Suspension Vault (Tab 4)
Story-closure documents, sealed red:
```
Document pills: SUSPENSION NOTICE · PROGRESS ASSESSMENT LOG · NOTE FROM NANO
  notice / log → rendered as classified paper — "LIFT SEAL" stamps DECLASSIFIED
  note         → Nano's farewell transmits line-by-line (typewriter + ticks),
                 ends on "What are you going to do now?"
Sidebar: EXUN status board (DUTIES SUSPENDED) + global jailbreak feed
```

### Workflow D — Keyboard
| Key | Action |
|---|---|
| `1` / `2` / `3` / `4` | Switch tabs (Matrix / Simulator / Dossier / Vault) |
| `Esc` | Close modal |
| `W A S D` / arrows | Move entity (Tab 2, and mini-CRT via joystick buttons) |
| Click CRT in Asset Map | Toggle mini runtime |

---

## 🛠 Customization Guide

| I want to… | Edit |
|---|---|
| Add a telemetry day | append a row to `ED` (`isA:true` marks it critical) |
| Add a timeline entry | push a `{id,time,type,title,detail,bc}` in `TLEvents` |
| Move/rename a hotspot | change `top`/`left` (%) in `HS` — positions map onto the SVG cabinet in `asset-map.jsx` |
| Add a vault document | extend `js/data/vault-docs.js` and (optionally) the doc pills in `vault.jsx` |
| Add a worldwide report | push a `{id,region,detail}` into `VDGlobal` |
| Change game resolution | constants `W/H` in `game-sim.jsx` (also update clamp text) |
| Re-skin everything | `css/styles.css` (palette + glass + CRT variables live here) |
| Replace a sound | the `tone(...)` call sites — all synthesized, no files |

---

## 🧰 Tech Stack

| Concern | Choice | Why |
|---|---|---|
| UI framework | React 18 (UMD) | state-driven forensic dashboard |
| Compilation | Babel standalone | JSX in-browser, no build step |
| Styling | Tailwind CDN + custom CSS layer | rapid cyberpunk theming |
| Fonts | Google Fonts (Chakra Petch, Fira Code, Manrope, VT323) | terminal/forensic identity |
| Sound | WebAudio API oscillators | zero asset footprint |
| Animation | CSS keyframes + canvas rAF | 60fps ambient layer off React's critical path |

---

## 🩺 Troubleshooting

| Symptom | Cause / Fix |
|---|---|
| Blank page, console shows `Failed to fetch` file | Served via `file://` — run a local server (see Quick Start) |
| Nothing loads / 404 in console | Start the server from the project root, not a parent folder |
| No sound | Toggle **AUDIO ON** in the header (browser autoplay policy) |
| CDN blocked (offline) | The app needs internet at first load for Tailwind/React/Babel/fonts |
| Fonts look wrong | Offline/intranet without fonts.googleapis.com access |
