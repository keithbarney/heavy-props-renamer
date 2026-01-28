# Heavy Props Renamer

Figma plugin that searches for component property names across all components in a file.

**Important:** When working on this project, reference the official Figma Plugin documentation for API details, best practices, and capabilities: https://www.figma.com/plugin-docs/

## Files

| File | Purpose |
|------|---------|
| `code.ts` | Main plugin logic |
| `ui.html` | UI panel with search input and results |
| `manifest.json` | Plugin configuration |
| `package.json` | Build scripts |

## Build

```bash
npm install      # Install dependencies
npm run build    # Compile TypeScript
npm run watch    # Watch mode
```

## How It Works

1. Run the plugin
2. Enter a property name to search for (e.g., "isActive")
3. Click Search Props
4. Results show all matching property names from components and component sets
