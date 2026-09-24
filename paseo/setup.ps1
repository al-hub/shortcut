$ErrorActionPreference = 'Stop'
$base = Split-Path -Parent $MyInvocation.MyCommand.Path
function Pause-Menu { Write-Host ''; Read-Host 'Press Enter to continue' | Out-Null }
function Copy-Script([string]$name) {
  $path = Join-Path $base $name
  if (-not (Test-Path $path)) { Write-Host "Missing file: $path"; return }
  Set-Clipboard -Value ([IO.File]::ReadAllText($path))
  Write-Host "Copied $name to clipboard."
  Write-Host '1. Open Paseo in Edge/Chrome (the same browser/profile used for Paseo).'
  Write-Host '2. Press F12 and select Console. Review the script before pasting.'
  Write-Host '3. Paste (Ctrl+V), run (Enter), confirm if prompted, then reload.'
  Write-Host 'NOTE: This is a guided browser setup, NOT an automatic Windows desktop app installer.'
}
while ($true) {
  Clear-Host
  Write-Host '==========================================='
  Write-Host '  PASEO SHORTCUT SETUP (stock / safe mode)'
  Write-Host '==========================================='
  Write-Host '1. Install (browser: copy installer)'
  Write-Host '2. Uninstall (browser: copy restore helper)'
  Write-Host '3. Status (browser: copy status helper)'
  Write-Host '4. Open README'
  Write-Host '0. Exit'
  Write-Host ''
  Write-Host 'Windows desktop app direct editing: NOT SUPPORTED until verified.'
  $choice = Read-Host 'Select'
  switch ($choice) {
    '1' { Copy-Script 'apply-browser-shortcuts.js'; Pause-Menu }
    '2' { Copy-Script 'restore-browser-shortcuts.js'; Pause-Menu }
    '3' { Copy-Script 'status-browser-shortcuts.js'; Pause-Menu }
    '4' { Start-Process (Join-Path $base 'README.md'); Pause-Menu }
    '0' { exit 0 }
    default { Write-Host 'Invalid selection.'; Pause-Menu }
  }
}
