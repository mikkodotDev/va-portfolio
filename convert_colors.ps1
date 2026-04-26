$files = @("Navigation.jsx", "Hero.jsx", "Hook.jsx", "Services.jsx", "TechStack.jsx", "About.jsx", "CaseStudies.jsx", "Contact.jsx", "Footer.jsx")
$colorMap = @{
    '#f1f8f9' = '#060d0e'
    '#050a0a' = '#f5fafa'
    '#7d72c5' = '#453a8d'
    '#ffffff' = '#0f1618'
    '#d4dde2' = '#1a2227'
    '#f5f9fa' = '#0a1113'
    '#7a8a93' = '#a8b8c0'
    '#56b0b8' = '#47a1a9'
    'rgba(241,248,249,0.95)' = 'rgba(6,13,14,0.95)'
    'rgba(241,248,249,0.92)' = 'rgba(6,13,14,0.92)'
    '#8f85d9' = '#564a9d'
    '#9aa6d6' = '#293565'
    '#c5d1d5' = '#2a3238'
    '#8a9aaa' = '#556878'
    '#7a8a9a' = '#667888'
}

$componentsPath = "src\components"
$processed = 0

foreach ($file in $files) {
    $filePath = Join-Path $componentsPath $file
    if (Test-Path $filePath) {
        $content = Get-Content $filePath -Raw
        foreach ($oldColor in $colorMap.Keys) {
            $newColor = $colorMap[$oldColor]
            $content = $content -replace [regex]::Escape($oldColor), $newColor
        }
        Set-Content $filePath $content -NoNewline
        Write-Output " $file"
        $processed++
    } else {
        Write-Output " $file"
    }
}
Write-Output "Completed: $processed files updated"
