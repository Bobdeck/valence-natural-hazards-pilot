@echo off
setlocal
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0serve-map.ps1"
if errorlevel 1 (
  echo.
  echo The map could not be started. Keep this window open and report the message above.
  pause
)
endlocal
