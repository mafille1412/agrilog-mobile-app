@echo off
title AgriLog - VSIC 2026 Prototype
cd /d "%~dp0"
echo ===================================================
echo     DANG KHOI CHAY UNG DUNG AGRILOG (PROTOTYPE)
echo ===================================================
echo.
echo Ung dung dang chay tai:
echo   - Tren may tinh: http://localhost:4173
echo   - Tren dien thoai (cung Wi-Fi): http://192.168.1.6:4173
echo.
echo [!] Luu y: Giu cua so nay mo de ung dung hoat dong.
echo [!] Dong cua so nay khi muon tat ung dung.
echo.
call npm run preview
pause
