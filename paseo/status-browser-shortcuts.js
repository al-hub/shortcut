/* Read-only browser storage inspection. */
(() => {
 const KEY="@paseo:keyboard-shortcut-overrides";
 let settings;
 try {
   settings=JSON.parse(localStorage.getItem(KEY)||"{}");
   if(!settings || typeof settings!=="object" || Array.isArray(settings))throw Error("Invalid JSON shape");
 }catch(e){console.error("Settings invalid:",e);return;}
 const expected={
  "agent-new-ctrl-shift-o-non-mac":"Ctrl+A A",
  "workspace-terminal-new-ctrl-shift-t-non-mac":"Ctrl+A T",
  "workspace-navigate-relative-ctrl-left-non-mac":"Ctrl+A ArrowLeft",
  "workspace-navigate-relative-ctrl-right-non-mac":"Ctrl+A ArrowRight",
  "command-center-toggle-ctrl-k-non-mac":"Ctrl+A P"
 };
 console.table(Object.entries(expected).map(([id,wanted])=>({id,wanted,actual:settings[id]??"(default)",match:settings[id]===wanted})));
 console.log("Backups:",Object.keys(localStorage).filter(k=>k.startsWith(KEY+":backup:")).length);
 console.warn("Storage-only check; Windows desktop app and actual keyboard behavior unverified.");
})();
