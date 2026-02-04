# Heavy Props Renamer

Figma plugin to search for component property names across all components in a file.

## What it does

1. Run the plugin
2. Type a property name to search for
3. See all matching properties with their parent component names

Searches across all components and component sets in the entire file (all pages). Results show each matching property alongside the component it belongs to.

## Features

- Search component property names across all pages
- Case-insensitive partial matching
- Results include component context (property name + component name)
- Keyboard shortcut: Enter to search

## Status

This plugin is in the ideation stage and not yet published.

## Development

```bash
npm install
npm run dev        # Watch mode
npm run build      # Production build
npm run typecheck   # Type checking
```

## Tech Stack

- TypeScript
- esbuild (bundler)
- Figma Plugin API

## Files

| File | Purpose |
|------|---------|
| `code.ts` | Search logic |
| `ui.html` | Search input and results UI |
| `manifest.json` | Plugin config |
