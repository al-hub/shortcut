/* Restore latest installer backup on same Paseo browser origin/profile. */
(() => {
 const KEY="@paseo:keyboard-shortcut-overrides";
 const backups=Object.keys(localStorage).filter(k=>k.startsWith(KEY+":backup:")).sort();
 if(!backups.length){console.warn("No backup; no changes.");return;}
 const latest=backups[backups.length-1];let data;
 try {
   data=JSON.parse(localStorage.getItem(latest));
   if(typeof data.existed!=="boolean" || (data.existed && typeof data.value!=="string"))
     throw Error("Invalid backup format");
 }catch(e){console.error("Backup invalid; no changes.",e);return;}
 console.log("Restore from:",latest);
 if(!confirm("Restore previous shortcuts? Any changes made since installation will be overwritten."))return;
 try { if(data.existed)localStorage.setItem(KEY,data.value);else localStorage.removeItem(KEY); }
 catch(e){console.error("Restore failed:",e);return;}
 console.info("Restored. Reload Paseo.");
})();
