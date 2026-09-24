/* Read-only status; run on the same Paseo browser origin/profile. */
(() => {
  const KEY = "@paseo:keyboard-shortcut-overrides";
  let settings;
  try { settings = JSON.parse(localStorage.getItem(KEY) || "{}"); }
  catch (e) { console.error("Invalid shortcut JSON", e); return; }
  const backups = Object.keys(localStorage).filter(k => k.startsWith(KEY + ":backup:")).sort();
  const expected = {
    "workspace-pane-split-right-cmd-backslash": "Ctrl+A %",
    "agent-new-ctrl-shift-o-non-mac": "Ctrl+A A",
    "workspace-terminal-new-ctrl-shift-t-non-mac": "Ctrl+A T"
  };
  console.table(Object.entries(expected).map(([id, wanted]) =>
    ({ binding: id, wanted, actual: settings[id] || "(default)", match: settings[id] === wanted })));
  console.log("Overrides:", Object.keys(settings).length, "Backups:", backups.length);
  console.warn("Storage status only; cannot guarantee shortcut runtime behavior.");
})();
