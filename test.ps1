# Thư mục lưu file
$downloadPath = "C:\temp"
if (-not (Test-Path $downloadPath)) {
    New-Item -ItemType Directory -Path $downloadPath
}

# URL file cần tải
$fileUrl = "https://github.com/leduckhuong/publics/raw/refs/heads/main/UniKeyNT.exe"

# Đường dẫn lưu file
$outputFile = Join-Path $downloadPath "UniKeyNT.exe"

# Tải file
Invoke-WebRequest -Uri $fileUrl -OutFile $outputFile -UseBasicParsing

Write-Host "File downloaded: $outputFile"