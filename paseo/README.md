# Paseo stock shortcut setup (Windows browser, safe subset)

Updated: 2026-09-25. Source-inspected, not yet tested in the user's installed Paseo.

## How to use
Download/clone the **whole** `paseo` directory on Windows, then double-click `setup.cmd`. Menu options copy the matching JavaScript to clipboard; **they do not directly change Paseo**. Open the trusted Paseo browser page, F12 → Console, inspect/paste/run the copied script, confirm, and reload. For restoration run menu option 2 on the **same origin and browser profile**. Status (3) is read-only. Browser developer consoles may restrict pasting.

## What this version can actually set
The inspected upstream `keyboard-shortcuts.ts` has the following non-Mac bindings:
- Ctrl+A then A: new agent/open project action
- Ctrl+A then T: new terminal (not while terminal has focus)
- Ctrl+A then ArrowLeft / ArrowRight: previous/next workspace (desktop-only, not while terminal has focus)
- Ctrl+A then P: command center (not while terminal has focus)

**Important limitations:**
- Upstream currently gates pane split/focus/move-tab/close shortcut binding definitions with `when: { mac: true }`. Changing those Mac-only binding IDs does **not** enable them on Windows. The previous script incorrectly attempted this; it has been corrected to omit them.
- Upstream parser requires `ArrowLeft` etc., not `Left`; and `%` / `"` are not accepted as raw shortcut key names. Earlier script values were invalid and have been removed.
- Ctrl+A may conflict with terminal readline. Project sidebar seamless traversal, true pane swapping, and terminal→native-agent conversion are not implemented by this preset.
- This is **not** a Windows Electron app one-click installer: desktop storage write location/interface and end-to-end behavior remain unverified. Never modify Electron profile files by guessing.

## Safety
Installer backs up the previous overrides in timestamped browser localStorage, rejects malformed existing overrides and detected duplicates, and asks for confirmation. Restore chooses the latest installer backup and warns that subsequent user edits will be overwritten. Backup remains on the same browser origin/profile; clearing site data also clears it. If you have installed repeatedly, inspect backups before restoring. Status only checks persisted values, not runtime handling.

## Acceptance checklist
1. Verify backup exists and only five Windows-supported binding IDs changed.
2. Reload, test agent/terminal creation and workspace navigation outside terminal focus.
3. Test command center; check Ctrl+A interaction with terminal.
4. Restore and verify previous overrides exactly reappear.
5. Confirm browser configuration does not imply Windows Electron app configuration.

## Upstream source
- https://github.com/getpaseo/paseo/blob/main/packages/app/src/keyboard/keyboard-shortcuts.ts
- https://github.com/getpaseo/paseo/blob/main/packages/app/src/keyboard/shortcut-string.ts
- https://github.com/getpaseo/paseo/blob/main/packages/app/src/hooks/use-keyboard-shortcut-overrides.ts
- https://github.com/getpaseo/paseo/blob/main/packages/app/e2e/browser/keyboard-shortcut-sequence.spec.ts

## Next milestone
Verify actual Windows Electron shortcut storage and supported pane actions before offering genuine one-click desktop install/uninstall. Until then keep setup explicitly browser-guided.
