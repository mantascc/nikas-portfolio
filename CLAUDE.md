# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page personal portfolio for Nikas Lilis (Product Designer at SITA). One self-contained `index.html` — no build step, no dependencies, no framework. Read `seed.md` for the project brief, content priorities, and design direction (the source of truth for editorial decisions).

## Develop

Serve locally:

    npx serve -s .

Default port is 3000. There is no test suite, lint, or build pipeline — changes are verified by loading the page and visually checking on desktop and mobile widths. Resize past the 560px breakpoint to confirm the responsive paths still hold.

## Architecture

The site is one HTML file with inline `<style>` and `<script>` blocks. Three things are worth understanding before editing:

**Design tokens.** All color, type, spacing, and accent values live as CSS custom properties in the `:root` block at the top of `index.html` (`--bg-*`, `--fg-*`, `--line-*`, `--acc`, `--font-*`, `--s1`–`--s9`). The accent is ube purple (`--acc: #7b5ea8`). Don't introduce new color values inline — extend the token set.

**Flight-path viz IIFE.** A looping VNO → GRQ → BCN itinerary drawn into `<svg id="pathViz">`. The IIFE defines two layout configs (`LAYOUTS.wide` for desktop, `LAYOUTS.tall` for narrow screens) with viewBox, city positions, bezier control points, label anchors, and marker/font/plane sizes. `matchMedia('(max-width: 560px)')` selects the layout and rebuilds DOM on breakpoint cross. Animation is a `requestAnimationFrame` loop driven by phase timings (`L1`, `H1`, `L2`, `H2`, total ≈18s). Edit a single layout to tweak positioning; edit both if changing the path shape.

**Procedural tile bands IIFE.** Top and bottom `<canvas>` strips (`#bandTop`, `#bandBottom`) drawn with a seeded RNG and a function table (`TILES`) of pattern primitives (`quarterArcs`, `halfDisk`, `bars`, etc.). Redraws on resize (debounced). Seeds `seedTop`/`seedBot` are stable so the pattern doesn't reshuffle — change the seeds to reroll.

Case studies are static HTML in `<article class="case">` blocks. Background list, masthead, and sign-off are static markup.

## Design direction

From `seed.md`: clean & minimal, single long-scroll, editorial tone, first-person copy. Avoid generic designer-speak and template flourish. Restraint over decoration — when adding visual elements, default to less.

## Collaboration

**All changes must go through a new branch and a pull request. Never push to `main` directly.** Workflow:

1. `git checkout -b <descriptive-branch-name>` off latest `main`
2. Commit your work
3. `git push -u origin <branch>`
4. Open a PR for review
5. Delete the branch after merge

This applies even to small edits. The repo has multiple collaborators using Claude Code, and the PR is the coordination point — skipping it causes silent conflicts.

## Handoff bundle

`Nikas-handoff/nikas/` is the original Claude Design export (three concept options — `Option1_Logbook.jsx`, `Option2_FlightDeck.jsx`, `Option3_Sectional.jsx` — plus `tokens.css` and `design-canvas.jsx`). The Logbook option was selected and is what `index.html` implements. Treat the bundle as reference material; don't import from it.
