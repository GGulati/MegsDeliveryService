# Chrome MCP acceptance recipe

Start `npm.cmd run dev -- --port 5174 --strictPort`, open `http://127.0.0.1:5174/?test=1` in Chrome MCP, and emulate `1440x900x1`. Take a snapshot before using element UIDs; HMR invalidates old UIDs. All browser verification uses Chrome MCP per user instruction.

## Flight

Click Learn to fly. Advance 330 frames of `window.advanceTime(1000/60)`, click Hover, then advance 60 more frames. Expect hover, speed zero, Harbor Cafe within 7m, ready to deliver. Click Deliver parcel. Expect practice complete. Inspect a full-page screenshot before delivery to verify broom, cat, destination and HUD. Small frame bursts also allow visual interpolation to settle.

Reset with `window.__game.reset()` when running isolated scenarios. Advance input bursts through `window.dispatchEvent(new KeyboardEvent('keydown',{key:'ArrowRight',bubbles:true}))`, `window.advanceTime(400)`, corresponding keyup. Assert heading changes clockwise. Repeat climb, throttle and hover. These are browser event-handler tests; also use Chrome's real key/click tools.

## Pause and mobile

Press Escape, record JSON player state, advance 10000ms, verify unchanged. Resume by button. Emulate `844x390x1,mobile,touch,landscape`; inspect all controls for overlap. Exercise simultaneous stick and action pointer events, then pointercancel and verify zero further turn. Emulate `390x844x1,mobile,touch`; verify pause/rotate prompt. Restore landscape and explicitly resume. Inspect console errors after every scenario.

## Delivery and deadline

After completing practice, start a delivery day and repeat the Harbor Cafe route. Expect two job offers and 20 unbanked coins, with zero added to savings. Choose return home, turn around while hovering, resume flight, approach the home marker, hover and bank. Expect one successful summary and 20 added once. Start another run, make a delivery, then advance beyond 480 seconds; expect rescue with prior savings intact. Pause while selecting offers and verify the clock freezes; resume and verify it continues. Unit tests also check exact deadline boundaries and repeated settlement.

## Evidence

## Home, saves, and polish

After practice click Come on in. Hold A for 1430ms and W for 1715ms (using the keydown/advance/keyup sequence), then Enter to open POST. Pack a parcel starts a shift. After a Cafe delivery choose Return home, hold D for 86 frames while hovering, resume flight for 342 frames, hover for 60 frames, then interact. Expect a successful 20-coin summary. Tests use the initial, non-upgraded broom for these timings.

Use isolated contexts for purchase fixtures: give `window.__game.state.profile.coins=900` in test mode, visit the decor and broom panels, and click every purchase. Expect 30 coins remaining, six furnishings, all three tracks at level two, and the completion ribbon. Reload and verify persistence. Open another tab in the same isolated context to verify read-only protection; close the owner and Retry. Malformed save fixtures must offer download/session recovery and retain the original raw storage value.

Click the speaker using Chrome's real click tool. `window.__game.audio()` should report running/unmuted, suspended when paused, running after resume, and suspended/muted after muting. Reduced motion must suppress the countdown animation and decorative motion. Test portrait pause and a WebGL `WEBGL_lose_context` loss/restore cycle: movement must freeze and explicit resume must work after restoration. Inspect console errors.

For live rendering checks run `npm.cmd run build`, then `npm.cmd run preview -- --port 4174 --strictPort`, and open `http://127.0.0.1:4174/` without test mode. Sample RAF intervals while flying, not just on the title screen. This measures the local Chrome environment only, not phone hardware.

`window.render_game_to_text()` reports authoritative state and coordinate conventions. Canvas CSS bounds must equal viewport bounds. Capture full screenshots including DOM overlays. An emulated phone is not a real-device performance measurement.
