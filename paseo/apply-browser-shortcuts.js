/* Paseo browser Windows-safe preset. Paste on trusted Paseo origin.
 * Stock upstream currently marks split/focus/move/close bindings mac:true:
 * do not write inactive Mac binding IDs on Windows.
 */
(() => {
  const KEY = "@paseo:keyboard-shortcut-overrides";
  const BACKUP = KEY + ":backup:" + new Date().toISOString();
  const proposed = {
    "agent-new-ctrl-shift-o-non-mac": "Ctrl+A A",
    "workspace-terminal-new-ctrl-shift-t-non-mac": "Ctrl+A T",
    "workspace-navigate-relative-ctrl-left-non-mac": "Ctrl+A ArrowLeft",
    "workspace-navigate-relative-ctrl-right-non-mac": "Ctrl+A ArrowRight",
    "command-center-toggle-ctrl-k-non-mac": "Ctrl+A P"
  };
  let raw, old;
  try {
    raw = localStorage.getItem(KEY);
    old = raw === null ? {} : JSON.parse(raw);
    if (!old || Array.isArray(old) || typeof old !== "object") throw Error("Unexpected JSON shape");
    for (const [k,v] of Object.entries(old))
      if (v !== null && typeof v !== "string") throw Error("Invalid override: " + k);
  } catch (e) { console.error("Existing settings invalid; no changes.",e); return; }
  const conflicts = Object.entries(proposed).filter(([id, combo]) =>
    Object.entries(old).some(([other, assigned]) => other !== id && assigned === combo));
  console.table(Object.entries(proposed).map(([id, combo]) => ({id, combo})));
  if (conflicts.length) {
    console.warn("Potential existing duplicate shortcuts:", conflicts);
    console.warn("Resolve duplicates in Paseo Settings before applying.");
    return;
  }
  console.warn("Windows stock does NOT expose native pane split/focus/move/close bindings in inspected source.");
  console.warn("Ctrl+A may be consumed by terminal; new agent/terminal actions exclude terminal focus.");
  if (!confirm("Back up and apply 5 verified non-Mac binding overrides?")) return;
  try {
    // Store an envelope, avoiding the ambiguous string 'null' backup sentinel.
    localStorage.setItem(BACKUP, JSON.stringify({ existed: raw !== null, value: raw }));
    localStorage.setItem(KEY, JSON.stringify({...old, ...proposed}));
  } catch(e) {
    console.error("Write failed; attempt rollback.", e);
    try { if (raw === null) localStorage.removeItem(KEY); else localStorage.setItem(KEY,raw); }
    catch (rollback) { console.error("Rollback failed:",rollback); }
    return;
  }
  console.info("Applied; backup:", BACKUP, "Reload Paseo and test. This does not modify Windows desktop app storage.");
})();
