# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for Carrefoogle. The site uses vanilla HTML, CSS, and JavaScript with a retro 90s aesthetic design.

## Architecture & Structure

- **Static HTML Site**: No build process or framework - pure HTML/CSS/JS
- **Page Structure**: Each page is a standalone HTML file in the root directory
- **Assets Organization**:
  - `/assets/css/`: Stylesheets organized by page/component
  - `/assets/js/`: JavaScript files for interactive features
  - `/assets/images/`: Images organized by section/feature
  - `/assets/fonts/`: Custom fonts (Comic Sans)

## Key Features

- **Random Logo System**: `random-logo.js` randomly selects from 15 spinning logo GIFs on page load
- **Retro Design**: Intentionally uses 90s web design patterns (Comic Sans, animated GIFs, broken images)

## Development Guidelines

- **No Build Process**: Edit HTML/CSS/JS files directly
- **Browser Compatibility**: Site intentionally mimics old browser constraints while functioning in modern browsers
- **Styling**: Each major page has its own CSS file plus shared `base.css`

## Common Tasks

- **Add New Page**: Create HTML file in root, link corresponding CSS in `/assets/css/`
- **Update Navigation**: Edit menu links in individual HTML files (no templating system)
- **Add Images**: Place in appropriate `/assets/images/` subdirectory
- **Modify Styles**: Check both `base.css` and page-specific CSS files
