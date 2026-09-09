# Meg’s Delivery Service

A small original 3D broom-delivery game for desktop and landscape mobile browsers. Meg and her cat Pumpkin explore a seaside town, return before nightfall, and improve their home.

## Development

Requires Node 22.16+ (Vite 6), npm, and WebGL 2. Install with `npm.cmd ci`, run `npm.cmd run dev`, and open http://127.0.0.1:5173. Build with `npm.cmd run build`. Production is a static HTTPS site; no backend or account is needed.

## Architecture

TypeScript simulation owns authoritative state, fixed at 60 updates per second. Three.js renders one canvas; DOM UI, input, audio and persistence are adapters. World coordinates are x east, y up, z south. Yaw zero faces negative z. `?test=1` disables live simulation advancement and exposes deterministic `window.advanceTime(ms)` plus JSON `window.render_game_to_text()`; tests and live play share the same step.

## Controls

WASD/arrows steer and climb, Q/E change speed, Space toggles hover, Enter interacts, P/Escape pauses, F toggles supported fullscreen. Phones use a left stick and right speed/hover/interact controls. Rotate phones to landscape. Hidden pages pause without advancing offline time.

## Verification

`npm.cmd run typecheck`, `npm.cmd test`, `npm.cmd run build`. Browser testing uses Chrome MCP as explicitly requested: inspect snapshots, operate controls, advance deterministic time, emulate landscape/portrait devices, inspect full-page screenshots and console errors. See `tests/chrome-scenarios.md`. Browser artifacts belong under ignored `output/`. This replaces the skill's default Playwright client.

Actual iPhone 12 Safari and Pixel 6 Chrome performance are acceptance targets, not yet measured. Browser emulation does not establish real-device performance.
The 4–6 deliveries per shift and 6–8 successful shifts to complete the home are tuning targets, not validated playtest results. The production build is about 617 KB uncompressed (164 KB gzip); Vite's single-chunk size advisory is expected for the bundled renderer.

## Current scope

Implementation follows four reviewed milestones: flight/visual foundation; complete delivery runs; home/persistence; polish/integration. Weather, durability, multiplayer and free furniture placement are deferred.

## Delivery days

Each shift lasts eight minutes of active game time. Finish a parcel by hovering near its marked pad, then choose another offer or return home. The clock continues while choosing jobs. Banking at home ends the run; missing nightfall forfeits only the current run's earnings. Saved coins from earlier runs remain safe. The next-job menu offers two seeded routes, so the same test seed yields the same choices.

Meg's model uses the inverse Three.js yaw sign to match her simulated flight vector. Camera heading follows with damping and bounded lag, remains behind her, and never rolls with flight controls.

## Sound and comfort

Sound starts muted. The speaker button unlocks an original procedural melody, soft ambience, and delivery/purchase/cat cues. Pause, hidden pages, portrait mode, and graphics interruption silence audio. Quality reduces the render budget from two million to one million pixels; reduced motion disables decorative movement and UI animation. Settings apply to the current tab session.

## Home and saving

After practice, enter Meg's room. Walk with WASD/arrows to POST to start a delivery, BROOMS for permanent upgrades, HOME for furnishings, and the cat's corner for a cuddle. Purchases appear in fixed spots around the walking area. Each broom track has two levels (60 then 120 coins). Six furnishings cost 30–80 coins. Completing every purchase unlocks a home celebration while allowing replay.

One v1 localStorage snapshot (`megs-delivery-save-v1`) contains wallet, upgrades, room and active run. Saves occur after meaningful actions, every five seconds of play and on leaving the page. Reloaded active runs are paused with no offline elapsed time. Web Locks allow only one shared-save writer. A second tab can retry after the owner leaves. Invalid saves remain untouched with download/session recovery; failed or unavailable storage explicitly uses session-only progress. Test save data in isolated Chrome contexts to avoid changing a player's save.
