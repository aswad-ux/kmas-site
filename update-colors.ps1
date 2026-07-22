$srcPath = 'C:\Users\aswad\OneDrive\Documents\KMAS\kmas-site\src'
$files = Get-ChildItem -Recurse -Path $srcPath -Include '*.tsx','*.ts','*.css'
foreach ($file in $files) {
    $content = Get-Content -Raw -Path $file.FullName
    $content = $content -replace '#FF5500','#DC1B1B'
    $content = $content -replace '#cc4400','#a81212'
    Set-Content -Path $file.FullName -Value $content -NoNewline
}
Write-Host "Color update complete. Files updated: $($files.Count)"
