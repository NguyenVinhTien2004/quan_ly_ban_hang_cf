@echo off
title Mocha Delight Server
color 0A

echo.
echo ========================================
echo    MOCHA DELIGHT - LOCAL SERVER
echo ========================================
echo.

REM Kiểm tra Python
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Python chưa được cài đặt!
    echo 📥 Vui lòng tải Python tại: https://python.org
    pause
    exit /b 1
)

echo ✅ Python đã sẵn sàng
echo 🚀 Đang khởi động server...
echo.

REM Chạy server
python server.py

pause