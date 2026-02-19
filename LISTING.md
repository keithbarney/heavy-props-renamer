# Figma Community Listing — Heavy Props Renamer

---

## Title

**Heavy Props Renamer**

---

## Short Description (≤80 chars)

> Search and rename component property names across your entire Figma file.

_(73 characters)_

---

## Long Description

**Tired of hunting down mismatched component property names one-by-one?**

Heavy Props Renamer lets you search for any component property name across your entire Figma file and rename all matches at once — a bulk find-and-replace for component properties.

### Who It's For

- Design system teams maintaining large component libraries
- Designers cleaning up naming conventions (e.g. `isActive` → `isEnabled`)
- Anyone who has ever stared down a component with 20+ inconsistently named properties

### How It Works

1. Type a search term — the plugin scans every component and component set in the file
2. Results show the property name, the component it belongs to, and its type (Boolean, Text, Instance Swap, or Variant)
3. Enter a replacement — the plugin does a find-and-replace within the name (searching for `Active` and replacing with `Enabled` turns `isActive` into `isEnabled`)
4. Use checkboxes to select exactly which matches to rename
5. Click Rename — all selected properties are renamed instantly

### Features

- 🔍 File-wide search across all components and component sets
- ✏️ Inline find-and-replace within property names
- ☑️ Selective rename with per-result checkboxes + select all
- 🏷 Type badges (BOOL / TEXT / INST / VAR) for quick scanning
- 🔄 Auto-refreshes results after rename to confirm changes
- 🌑 Dark Spacegray UI — part of the Heavy Suite design system

### Notes

- Works on all property types: Boolean, Text, Instance Swap, and Variant
- Variant property *names* can be renamed; default values cannot (Figma limitation)
- Rename is non-destructive — existing property bindings are preserved
- Only renames display names; Figma's internal `#id` suffix is managed automatically

---

## Tags

`components` `properties` `rename` `bulk` `design systems` `component library` `naming` `refactor` `productivity` `heavy suite`

---

## Plugin ID

`6037143007635277875`

---

## Category

Developer Tools / Productivity

---

## Support URL

https://heavy.lemonsqueezy.com
