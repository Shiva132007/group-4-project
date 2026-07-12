# Nexus — Scientific Collaboration Network Analyzer (Frontend Preview)

Frontend-only prototype covering Milestone 1 scope from the project plan:
authentication (login/register UI), researcher profiles, and a dashboard shell
with the remaining modules shown as roadmap items. No backend, no database —
everything runs client-side and data lives only in memory (resets on refresh).

## Project structure

```
project/
├── index.html      # markup for landing, login, register, dashboard
├── css/
│   └── styles.css   # all styling
├── js/
│   └── script.js    # page routing, form validation, profile logic
└── README.md
```

## Run it in VS Code

**Option A — just open the file**
Double-click `index.html`, or right-click it in VS Code's file explorer and choose
"Reveal in Finder/Explorer" → open with your browser.

**Option B — Live Server (recommended, avoids any file:// quirks)**
1. Install the **Live Server** extension in VS Code (by Ritwick Dey).
2. Right-click `index.html` in the VS Code explorer.
3. Click **"Open with Live Server."**
4. It opens at `http://127.0.0.1:5500` (or similar) and hot-reloads on save.

**Option C — any static server**
```bash
cd project
python3 -m http.server 8000
# then open http://localhost:8000
```

## What's live vs. roadmap

- **Live:** landing page, login, register, researcher profile (skills, interests,
  department, institution, ORCID, bio), dashboard overview.
- **Roadmap (shown as locked cards, not built):** publications, conferences,
  collaborators, reports/exports — these belong to later milestones per the
  original project plan (FastAPI + PostgreSQL backend, file storage, etc.).

## Notes

- Login/register forms are simulated: any valid-looking email + 6+ character
  password will sign you in. No request is sent anywhere.
- Fonts are pulled from Google Fonts via CDN — an internet connection is needed
  for the intended typography (Fraunces / Inter / JetBrains Mono). Everything
  else works fully offline.
