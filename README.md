# Heavy Props Renamer

**Search and rename component property names across your entire Figma file — in one shot.**

Part of the [Heavy Suite](https://heavy.lemonsqueezy.com) of Figma plugins.

---

## What It Does

Component properties in Figma accumulate naming inconsistencies over time. `isActive` becomes `active` becomes `isEnabled` depending on who created the component and when. Fixing them one-by-one is tedious and error-prone.

**Heavy Props Renamer** scans every component and component set in your file, finds property names matching your search term, and renames them all at once — preserving the Figma-internal `#id` suffix automatically.

## Features

- **File-wide search** — finds property names across all components and component sets
- **Find & replace** — replaces the matched portion of the name (e.g. search `Active` → replace `Enabled` renames `isActive` to `isEnabled`)
- **Selective rename** — checkboxes let you pick exactly which matches to rename
- **Type badges** — see at a glance whether a property is `BOOL`, `TEXT`, `INST`, or `VAR`
- **Live refresh** — after rename, search re-runs automatically to confirm the changes
- **Heavy theme** — dark Spacegray UI, consistent with the rest of the Heavy Suite

## Supported Property Types

| Type | Renameable |
|------|-----------|
| `BOOLEAN` | ✓ |
| `TEXT` | ✓ |
| `INSTANCE_SWAP` | ✓ |
| `VARIANT` | ✓ (name only) |

> **Note:** Figma variant property names (on component sets) can be renamed but their default values cannot be changed via `editComponentProperty`.

## Usage

1. Open a Figma file with components
2. Run **Plugins → Heavy Props Renamer**
3. Type a search term in the **Find** field and press Enter (or click **Search**)
4. Type the replacement in the **Replace With** field
5. Use checkboxes to select which properties to rename
6. Click **Rename**

## Install

### From Figma Community

Search for **Heavy Props Renamer** in the Figma Community, or use the plugin ID:

```
6037143007635277875
```

### Development

**Requirements:** Node.js 18+, npm

```bash
git clone https://github.com/keithbarney/heavy-props-renamer.git
cd heavy-props-renamer
npm install
```

**Build once:**
```bash
npm run build
```

**Watch mode (development):**
```bash
npm run dev
```

**Type check:**
```bash
npm run typecheck
```

**Load in Figma:**
1. Open Figma Desktop
2. Go to **Plugins → Development → Import plugin from manifest…**
3. Select `manifest.json` from this repo

## File Structure

```
heavy-props-renamer/
├── code.ts          # Plugin main thread (Figma API)
├── ui.html          # Plugin UI (self-contained)
├── manifest.json    # Figma plugin manifest
├── tsconfig.json    # TypeScript config
├── package.json
└── dist/
    └── code.js      # Compiled output (committed)
```

## How Property Keys Work

Figma stores component properties as `DisplayName#uniqueId` (e.g. `ButtonLabel#0:1`). The `#0:1` suffix is an internal unique identifier that Figma manages. Heavy Props Renamer handles this automatically — you search and replace display names only.

## Part of Heavy Suite

- [Heavy Documentation Extractor](https://github.com/keithbarney/heavy-documentation-extractor)
- **Heavy Props Renamer** ← you are here

---

Built by [Keith Barney](https://github.com/keithbarney) · [Support ♥](https://heavy.lemonsqueezy.com)
