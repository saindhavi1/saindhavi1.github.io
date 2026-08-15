# saindhavi1.github.io

My personal website — a portfolio plus a couple of interactive, résumé-themed experiences.
Everything is static (HTML / CSS / SVG / vanilla JavaScript) with no build step or dependencies,
served through GitHub Pages.

## Live pages

| Page | Link | What it is |
|------|------|------------|
| 🏠 **Main portfolio** | https://saindhavi1.github.io/ | My primary personal website — about me, projects, and skills. |
| 🖥️ **Terminal desk** | https://saindhavi1.github.io/desk/ | A cozy CSS-illustrated desk scene. Click the monitor to zoom into a fully typeable terminal résumé. |
| 🧭 **Trail map** | https://saindhavi1.github.io/trail/ | My career shown as a horizontal trail you can walk through, stop by stop. |

## About the experiences

### 🖥️ Terminal desk — `/desk`
Opens on an illustrated desk (window with a sunset, string lights, plants, a lamp, a shelf, and a movie poster).
Click the monitor and it zooms into an **interactive terminal** where you can type real commands:

- `help` — list everything you can do
- `about`, `experience`, `education`, `skills`, `projects`, `contact` — browse the résumé
- `ls`, `cat <file>`, `open <link>` — explore it like a shell (with ↑/↓ history and Tab autocomplete)
- Fun extras: `game`, `quiz`, `neofetch`, `matrix`, `theme <name>`, `coffee` ☕
  (brew a coffee and it appears on the desk when you head back out)

### 🧭 Trail map — `/trail`
My internships and education laid out as a horizontal **trail**. Use the ◀ ▶ controls (or arrow keys)
to walk the guided tour stop by stop, or tap any pin to jump there. There's also a small easter egg —
try clicking the compass. 🙂

## Tech

- **HTML** for structure
- **CSS** for all styling, layout, lighting, and animation
- **SVG** (inline) for the illustrated objects (lamp, plants, window art, poster)
- **Vanilla JavaScript** for the interactivity (terminal commands, games, the desk→terminal zoom,
  the trail tour, and small `localStorage` touches)

## Local preview

No tooling required — just open any of the HTML files in a browser:

```bash
open index.html      # main portfolio
open desk/index.html # terminal desk
open trail/index.html # trail map
```
