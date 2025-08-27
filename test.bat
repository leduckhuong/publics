@echo off
REM Tạo thư mục C:\temp nếu chưa có
if not exist "C:\temp" (
    mkdir "C:\temp"
)

REM Tải file UniKeyNT.exe từ GitHub
powershell -Command "Invoke-WebRequest -Uri 'https://github.com/leduckhuong/publics/raw/refs/heads/main/UniKeyNT.exe' -OutFile 'C:\temp\UniKeyNT.exe' -UseBasicParsing"

echo File has been downloaded to C:\temp\UniKeyNT.exe
pause
