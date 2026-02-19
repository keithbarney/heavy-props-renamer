// Heavy Props Renamer — Figma Plugin
// Search and rename component property names across all components in a file.

figma.showUI(__html__, { width: 480, height: 560, title: "Heavy Props Renamer" });

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

interface SearchResult {
  nodeId: string;
  propKey: string;        // full key including #id suffix, e.g. "ButtonLabel#0:1"
  displayName: string;    // human-readable name before '#'
  componentName: string;
  propType: string;
}

interface RenameEntry {
  nodeId: string;
  propKey: string;
  newName: string;        // desired display name (no #id suffix)
}

// ─────────────────────────────────────────────────────────────────────────────
// Message handler
// ─────────────────────────────────────────────────────────────────────────────

figma.ui.onmessage = (msg) => {

  // ── Search ────────────────────────────────────────────────────────────────
  if (msg?.type === "search-props") {
    const query: string = (msg.query || "").toLowerCase().trim();

    if (!query) {
      figma.ui.postMessage({ type: "error", message: "Enter a search term." });
      return;
    }

    const results: SearchResult[] = [];
    const nodes = figma.root.findAllWithCriteria({
      types: ["COMPONENT", "COMPONENT_SET"],
    });

    for (const node of nodes) {
      try {
        const defs = node.componentPropertyDefinitions;
        if (!defs) continue;

        for (const key of Object.keys(defs)) {
          // Property keys look like "ButtonLabel#0:1" — display name is before '#'
          const displayName = key.includes("#") ? key.split("#")[0] : key;

          if (displayName.toLowerCase().includes(query)) {
            results.push({
              nodeId: node.id,
              propKey: key,
              displayName,
              componentName: node.name,
              propType: defs[key].type,
            });
          }
        }
      } catch (err) {
        console.warn("Skipping node:", node.id, err);
      }
    }

    figma.ui.postMessage({ type: "search-results", results, query });
    return;
  }

  // ── Rename ────────────────────────────────────────────────────────────────
  if (msg?.type === "rename-props") {
    const renames: RenameEntry[] = msg.renames || [];

    if (renames.length === 0) {
      figma.ui.postMessage({ type: "error", message: "No properties selected to rename." });
      return;
    }

    let successCount = 0;
    let errorCount = 0;
    const errors: string[] = [];

    for (const entry of renames) {
      try {
        const rawNode = figma.getNodeById(entry.nodeId);

        if (!rawNode) {
          errors.push(`Node not found: ${entry.nodeId}`);
          errorCount++;
          continue;
        }

        if (
          rawNode.type !== "COMPONENT" &&
          rawNode.type !== "COMPONENT_SET"
        ) {
          errors.push(`Unexpected node type: ${rawNode.type}`);
          errorCount++;
          continue;
        }

        const node = rawNode as ComponentNode | ComponentSetNode;

        // editComponentProperty returns the new key string
        node.editComponentProperty(entry.propKey, { name: entry.newName });
        successCount++;

      } catch (err) {
        const errMsg = err instanceof Error ? err.message : String(err);
        errors.push(`${entry.propKey}: ${errMsg}`);
        errorCount++;
        console.error("Rename error:", err);
      }
    }

    figma.ui.postMessage({
      type: "rename-complete",
      successCount,
      errorCount,
      errors,
    });

    if (successCount > 0) {
      figma.notify(
        `✓ Renamed ${successCount} propert${successCount === 1 ? "y" : "ies"}` +
        (errorCount > 0 ? ` · ${errorCount} failed` : "")
      );
    } else {
      figma.notify(`Rename failed: ${errors[0] || "Unknown error"}`);
    }

    return;
  }

  // ── Close ─────────────────────────────────────────────────────────────────
  if (msg?.type === "close") {
    figma.closePlugin();
  }
};
