# Lab5Lab - UI Prototype (Based on Figma Assignment)

This lab is completed as a **clickable web prototype** that maps directly to the requested Figma deliverables.

## Product idea

- **Theme**: Food delivery app
- **Scope**: A small, realistic user flow for ordering food

## Implemented user flow (4 connected screens)

1. Welcome screen
2. Sign In screen
3. Home screen
4. Food Detail screen

Flow navigation:

- `Welcome -> Sign In -> Home -> Food Detail`
- `Food Detail -> Home` (back path)

## Visual design principles applied

- Consistent color palette (`primary`, `secondary`, `neutral`)
- Readable typography with hierarchy (`H1`, body, caption)
- Spacing system using 8px-based scale
- Clear buttons, tags, and bottom navigation
- Repeated card layout for consistency

## Reusable components included

At least 3 reusable components are implemented and reused:

- Buttons (`.btn`, variants primary/secondary/text)
- Input fields (`.input-group`)
- Cards (`.card`, `.food-card`)
- Navigation items (`.nav-item`, `.chip`)
- Tags/Pills (`.tag`, `.pill`)

## Mini style guide section

Included in the same file (`index.html`) under **Style Guide**:

- Primary / Secondary / Neutral colors
- Text styles (H1, Body, Caption)
- Button + Input component samples
- Spacing/grid notes

## Files

- `index.html`: 4 prototype screens + style guide section
- `styles.css`: full visual system and responsive layout
- `script.js`: prototype interactions (screen-to-screen click flow)

## How to review

Open `index.html` in a browser, then click through buttons and navigation links to test the full flow.

## Mapping to Figma submission

If your class requires Figma specifically, this lab can be converted quickly by rebuilding these same 4 screens and components in one Figma page using this exact structure.
