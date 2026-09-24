# Paseo keyboard workflow (stock-first)

Updated: 2026-09-25. Target: Windows Paseo; validate against installed version.

## Intent
Keep tmux-session-dock-rs muscle memory while retaining Paseo's native agent UX and workspace/worktree management. Split is spatial; do not assume it creates a new worktree. Do not claim terminal CLI automatically morphs into a native Paseo agent pane.

## Target bindings

| Action | Desired keys | Stock action / limitation |
|---|---|---|
| Split right | Ctrl+A then % | workspace.pane.split.right |
| Split down | Ctrl+A then " | workspace.pane.split.down |
| Focus pane | Alt+arrows | workspace.pane.focus.* |
| Move tab between panes | Ctrl+Alt+arrows | workspace.pane.move-tab.*; **not** tmux pane swap |
| New agent | Ctrl+A then A | agent.new |
| New terminal | Ctrl+A then T | workspace.terminal.new |
| Close pane | Ctrl+A then X | workspace.pane.close |
| Previous/next workspace | Ctrl+A then Left/Right | workspace.navigate.relative |
| Command center | Ctrl+A then P | command-center.toggle; **not guaranteed direct project selector** |

### Known limits
- Alt+Left at the leftmost pane does **not** automatically focus the project sidebar with stock key rebinding.
- Ctrl+Alt+arrows moves tabs between panes, not entire-pane swaps.
- Terminal `codex` / `claude` does not automatically replace its pane with native Paseo agent UX.
- Ctrl+A may conflict with terminal readline and keyboard event handling; test inside agent input and terminal.
- Shift symbols %, " and chord strings require validation in Settings on the installed version.
- The source defines binding IDs for platform variants; avoid overriding unrelated Mac/web variants.

## Applying on browser Paseo
1. Open the same Paseo origin in your browser and inspect Settings → Keyboard Shortcuts.
2. Save current settings before changes. Run `apply-browser-shortcuts.js` in the browser developer console on the trusted Paseo page (paste its contents, not the filename). Review its preview and confirm.
3. Reload; check Settings and test every binding. Restore from the generated backup if any conflicts appear.
4. On Windows desktop/Electron, **do not assume** browser localStorage is the same as its persistent storage. Set one shortcut through Settings and verify the actual storage backend before automation.

Source references:
- https://github.com/getpaseo/paseo/blob/main/packages/app/src/keyboard/keyboard-shortcuts.ts
- https://github.com/getpaseo/paseo/blob/main/packages/app/src/hooks/use-keyboard-shortcut-overrides.ts
- https://github.com/getpaseo/paseo/blob/main/packages/app/e2e/browser/keyboard-shortcut-sequence.spec.ts

## Acceptance test
1. Agent input and terminal focus: Alt+arrows move between panes.
2. Ctrl+Alt+arrows move a tab, without silently treating it as pane swap.
3. Ctrl+A then % / " split in expected directions.
4. Ctrl+A then A / T invoke native new agent / terminal.
5. Ctrl+A then arrows change workspace; Ctrl+A then P opens command center.
6. Existing settings can be restored after a failed test.

## Follow-up
After stock usage, measure friction in sidebar traversal, same-pane terminal→native-agent UX, and true pane swap. Only then consider Paseo patches.
