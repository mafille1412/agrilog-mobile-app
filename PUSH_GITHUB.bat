@echo off
title Push AgriLog to GitHub
cd /d "%~dp0"
echo ========================================================
echo             PUSH DU AN AGRILOG LEN GITHUB
echo ========================================================
echo.
echo Hay dam bao ban da tao mot Repository moi tren https://github.com/new
echo.
set /p REPO_URL="Dan link GitHub Repository cua ban vao day (vi du: https://github.com/username/agrilog.git): "

if "%REPO_URL%"=="" (
    echo Ban chua nhap link! Vui long chay lai file.
    pause
    exit /b
)

echo.
echo [1] Dang cau hinh nhanh main...
git branch -M main

echo [2] Dang ket noi remote origin...
git remote remove origin 2>nul
git remote add origin %REPO_URL%

echo [3] Dang day code len GitHub...
git push -u origin main

echo.
echo ========================================================
if %errorlevel% equ 0 (
    echo [THANH CONG] Code da duoc push len GitHub!
) else (
    echo [CHUYEN Y] Neu GitHub hoi dang nhap, hay dang nhap tren trinh duyet hoac dung Personal Access Token.
)
echo ========================================================
pause
