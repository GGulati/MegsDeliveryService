# Chrome MCP acceptance recipe

Start `npm.cmd run dev -- --port 5174 --strictPort`, open `http://127.0.0.1:5174/?test=1` in Chrome MCP, and emulate `1440x900x1`. Take a snapshot before using element UIDs; HMR invalidates old UIDs. All browser verification uses Chrome MCP per user instruction.

## Flight

Click Start flying. Evaluate `window.advanceTime(5500)`, press Space, evaluate `window.advanceTime(1000)`. Expect hover, speed zero, Harbor Cafe within 7m, ready to deliver. Click Deliver parcel. Expect practice complete. Inspect a full-page screenshot before delivery to verify broom, cat, destination and HUD.

Reset with `window.__game.reset()` when running isolated scenarios. Advance input bursts through `window.dispatchEvent(new KeyboardEvent('keydown',{key:'ArrowRight',bubbles:true}))`, `window.advanceTime(400)`, corresponding keyup. Assert heading changes clockwise. Repeat climb, throttle and hover. These are browser event-handler tests; also use Chrome's real key/click tools.

## Pause and mobile

Press Escape, record JSON player state, advance 10000ms, verify unchanged. Resume by button. Emulate `844x390x1,mobile,touch,landscape`; inspect all controls for overlap. Exercise simultaneous stick and action pointer events, then pointercancel and verify zero further turn. Emulate `390x844x1,mobile,touch`; verify pause/rotate prompt. Restore landscape and explicitly resume. Inspect console errors after every scenario.

## Delivery and deadline

After completing practice, start a delivery day and repeat the Harbor Cafe route. Expect two job offers and 20 unbanked coins, with zero added to savings. Choose return home, turn around while hovering, resume flight, approach the home marker, hover and bank. Expect one successful summary and 20 added once. Start another run, make a delivery, then advance beyond 480 seconds; expect rescue with prior savings intact. Pause while selecting offers and verify the clock freezes; resume and verify it continues. Unit tests also check exact deadline boundaries and repeated settlement.

## Evidence

`window.render_game_to_text()` reports authoritative state and coordinate conventions. Canvas CSS bounds must equal viewport bounds. Capture full screenshots including DOM overlays. An emulated phone is not a real-device performance measurement.
