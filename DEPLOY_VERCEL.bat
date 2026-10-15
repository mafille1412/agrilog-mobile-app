@echo off
title Deploy AgriLog to Vercel
cd /d "%~dp0"
echo ========================================================
echo          DANG TRIEN KHAI AGRILOG LEN VERCEL
echo ========================================================
echo.
echo [1] He thong se tu dong build ban production moi nhat...
call npm run build
echo.
echo [2] Dang ket noi toi Vercel...
echo (Neu la lan dau tien, Vercel se hoi Email de xac nhan)
echo (Cac cau hoi tiep theo ban chi can bam ENTER chon mac dinh)
echo.
npx vercel --prod
echo.
pause
