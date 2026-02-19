# Changelog

All notable changes to **Heavy Props Renamer** will be documented here.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).  
This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.1.0] — 2026-02-19

### Fixed

- **Multi-page search** — plugin now correctly searches components across all pages in the file. Previously, `figma.root.findAllWithCriteria` was called without explicitly loading non-current pages (Figma `dynamic-page` access model requires `loadPageAsync` for pages not currently open). Components on other pages were silently skipped.

### Added

- **Page name in results** — when a file has components on multiple pages, each result row shows the page name (e.g. `Button · 🗂 Components`) so you know exactly where each match lives.
- **Navigate to component** — each result row now has a crosshair focus button. Click it to jump directly to that component on the canvas (switches page if needed and scrolls/zooms into view).

---

## [1.0.0] — 2026-02-18

### Added

- **File-wide search** — scans all components and component sets in the current Figma document
- **Rename functionality** — find-and-replace within property display names; replaces the matched substring (e.g. searching `Active`, replacing with `Enabled` renames `isActive` → `isEnabled`)
- **Selective rename** — per-result checkboxes plus a Select All toggle
- **Type badges** — visual labels for `BOOL`, `TEXT`, `INST`, and `VAR` property types
- **Match highlighting** — matched portion of property name highlighted in results
- **Auto-refresh** — re-runs search after a successful rename to confirm the changes
- **Heavy theme UI** — dark Spacegray/Base16 Ocean aesthetic consistent with the Heavy Suite
- **Error handling** — per-property error reporting; failed renames don't abort the batch
