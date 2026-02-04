// Heavy Props Renamer — Figma Plugin
// Search for component property names across all components

figma.showUI(__html__, { width: 400, height: 400 });

// Listen for messages from the UI
figma.ui.onmessage = (msg) => {
  if (msg?.type === "search-props") {
    try {
      figma.notify("Searching components...");

      const query = msg.query?.toLowerCase() || "";
      if (!query) {
        figma.ui.postMessage({
          type: "error",
          message: "No search query provided."
        });
        return;
      }

      const matches: { propName: string; componentName: string }[] = [];
      const nodes = figma.root.findAllWithCriteria({ types: ["COMPONENT", "COMPONENT_SET"] });

      if (nodes.length === 0) {
        figma.notify("No components found to search.");
        figma.ui.postMessage({
          type: "search-results",
          results: matches
        });
        return;
      }

      for (const node of nodes) {
        try {
          if (node.componentPropertyDefinitions) {
            for (const key of Object.keys(node.componentPropertyDefinitions)) {
              if (key.toLowerCase().includes(query)) {
                matches.push({ propName: key, componentName: node.name });
              }
            }
          }
        } catch (err) {
          console.warn("Skipping node due to error:", err);
        }
      }

      figma.ui.postMessage({
        type: "search-results",
        results: matches
      });

      figma.notify(`Search finished: ${matches.length} matches`);

    } catch (error) {
      console.error("Error in search-props:", error);
      figma.ui.postMessage({
        type: "error",
        message: `Search failed: ${error}`
      });
      figma.notify("Search failed.");
    }
    return;
  }

  if (msg?.type === "close") {
    figma.closePlugin();
  }
};
