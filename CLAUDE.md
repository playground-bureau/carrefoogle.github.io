# CLAUDE.md

Static website for Carrefoogle Corporation. Vanilla HTML/CSS/JS, no build process.

## Browser Preview

Chrome extensions (like Claude-in-Chrome) can't interact with `file:///` URLs. To preview the site in Chrome, start a local server:

```bash
python3 -m http.server 8765
```

Then navigate to `http://localhost:8765/index.html`.
