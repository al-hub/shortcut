/* Stock Paseo browser-only shortcut experiment.
 * Paste in DevTools Console on your trusted Paseo browser origin.
 * No writes unless user confirms. Does not target Windows app storage.
 */
(() => {
  const KEY = "@paseo:keyboard-shortcut-overrides";
  const backupKey = KEY + ":backup:" + new Date().toISOString();
  const original = localStorage.getItem(KEY);
  let current;
  try {
    current = original === null ? {} : JSON.parse(original);
    if (!current || Array.isArray(current) || typeof current !== "object")
      throw new Error("Unexpected existing shortcut format");
  } catch (e) {
    console.error("Cannot parse existing settings; no changes made.", e);
    return;
  }

  // Paseo's stock binding IDs (check against installed version).
  const proposed = {
    "workspace-pane-split-right-cmd-backslash": "Ctrl+A %",
    "workspace-pane-split-down-cmd-shift-backslash": 'Ctrl+A "',
    "agent-new-ctrl-shift-o-non-mac": "Ctrl+A A",
    "workspace-terminal-new-ctrl-shift-t-non-mac": "Ctrl+A T",
    "workspace-pane-close-cmd-shift-w": "Ctrl+A X",
    "workspace-navigate-relative-ctrl-left-non-mac": "Ctrl+A Left",
    "workspace-navigate-relative-ctrl-right-non-mac": "Ctrl+A Right",
    "command-center-toggle-ctrl-k-non-mac": "Ctrl+A P"
  };
  for (const [direction, key] of Object.entries({
    left: "Left", right: "Right", up: "Up", down: "Down"
  })) {
    proposed[`workspace-pane-focus-${direction}-cmd-shift-${direction}`] =
      `Alt+${key}`;
    proposed[`workspace-pane-move-tab-${direction}-cmd-shift-alt-${direction}`] =
      `Ctrl+Alt+${key}`;
  }
  console.table(proposed);
  console.warn("Experimental browser-local overrides. Ctrl+A may conflict with terminal input.");
  if (!confirm("Back up existing shortcuts and apply the displayed Paseo bindings?")) return;
  if (original !== null) localStorage.setItem(backupKey, original);
  else localStorage.setItem(backupKey, "null");
  localStorage.setItem(KEY, JSON.stringify({ ...current, ...proposed }));
  console.info("Saved. Backup:", backupKey, "Reload Paseo and test each shortcut.");
  console.info("Restore with: localStorage.setItem(" + JSON.stringify(KEY) +
    ", localStorage.getItem(" + JSON.stringify(backupKey) +
    ") === 'null' ? '{}' : localStorage.getItem(" + JSON.stringify(backupKey) + ")); location.reload();");
})();
