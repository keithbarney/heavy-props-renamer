# Changelog

All notable changes to **Heavy Props Renamer** will be documented here.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).  
This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
