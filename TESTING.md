# Heavy Props Renamer — User Stories

## Core: Search Properties

### US-1: Search for a property name across all components
**As a** designer managing a component library,
**I want to** search for property names across all components in the file,
**So that** I can find where a specific prop is used.

**Given** components with properties like "isActive", "isDisabled", "isVisible"
**When** I search for "active"
**Then** I see "isActive" in the results

---

### US-2: Results include component context
**As a** designer reviewing search results,
**I want to** see which component each property belongs to,
**So that** I can identify duplicates and plan renames.

**Given** "Button" has prop "size" and "Input" has prop "size"
**When** I search for "size"
**Then** results show "size — Button" and "size — Input" as separate entries

---

### US-3: Case-insensitive search
**As a** designer,
**I want** search to be case-insensitive,
**So that** I can find "isActive" by searching "isactive" or "ISACTIVE".

**Given** a component with property "isActive"
**When** I search for "isactive"
**Then** "isActive" appears in the results

---

### US-4: Search across all pages
**As a** designer with components spread across multiple pages,
**I want** the search to cover the entire file,
**So that** I don't miss any matches.

**Given** components on Page 1 and Page 2 both have a prop "label"
**When** I search for "label"
**Then** both instances appear in the results

---

### US-5: Submit search with Enter key
**As a** designer,
**I want to** press Enter to run the search,
**So that** I don't have to click the button.

**Given** I've typed a query in the search input
**When** I press Enter
**Then** the search runs immediately

---

## Edge Cases

### US-6: Empty search shows validation
**As a** user,
**I want** a message if I search without typing anything,
**So that** I know to enter a query.

**Given** the search input is empty
**When** I click Search Props or press Enter
**Then** a message appears: "Please enter a prop name to search."

---

### US-7: No components in file
**As a** user working in a file without components,
**I want** a clear notification,
**So that** I know there's nothing to search.

**Given** the file has no components or component sets
**When** I search for any term
**Then** a notification says "No components found to search." and results show 0 matches

---

### US-8: No matches found
**As a** designer,
**I want** a clear result when nothing matches,
**So that** I know the prop name doesn't exist.

**Given** no properties match my search query
**When** the search completes
**Then** the status shows "0 match(es) found." with an empty results list
