/* Run on the same Paseo browser origin/profile used for installation. */
(() => {
  const KEY = "@paseo:keyboard-shortcut-overrides";
  const backups = Object.keys(localStorage).filter(k => k.startsWith(KEY + ":backup:")).sort();
  if (!backups.length) { console.warn("No installer backup found; no changes made."); return; }
  const latest = backups[backups.length - 1];
  const original = localStorage.getItem(latest);
  console.log("Restore backup:", latest);
  if (!confirm("Restore shortcut settings from this backup?")) return;
  if (original === "null") localStorage.removeItem(KEY);
  else localStorage.setItem(KEY, original);
  console.info("Restored. Reload Paseo.");
})();
