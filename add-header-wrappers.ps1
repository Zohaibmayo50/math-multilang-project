# PowerShell script to add Header wrappers to all language RangePage and NumberPage components

Write-Host "Adding Header component wrappers to language components..." -ForegroundColor Green

$files = @(
    # Turkish
    'app/components/RangePage.tsx',
    # Spanish
    'app/components/es/RangePage.tsx',
    'app/components/es/NumberPage.tsx',
    # German
    'app/components/de/RangePage.tsx',
    'app/components/de/NumberPage.tsx',
    # Czech
    'app/components/cs/RangePage.tsx',
    'app/components/cs/NumberPage.tsx',
    # Ukrainian
    'app/components/uk/RangePage.tsx',
    'app/components/uk/NumberPage.tsx',
    # Finnish
    'app/components/fi/RangePage.tsx',
    'app/components/fi/NumberPage.tsx',
    # French
    'app/components/fr/RangePage.tsx',
    'app/components/fr/NumberPage.tsx'
)

$totalFiles = 0

foreach ($file in $files) {
    $fullPath = Join-Path $PWD $file
    
    if (Test-Path $fullPath) {
        $content = Get-Content $fullPath -Raw
        $modified = $false
        
        # Pattern 1: Add <> and <Header /> after "return ("
        if ($content -match '(\s+)return \(\s+<main className') {
            $content = $content -replace '(\s+)return \(\s+<main className', '$1return ($1  <>$1    <Header />$1    <main className'
            $modified = $true
        }
        
        # Pattern 2: Add </> before final ")"
        if ($content -match '</main>\s+\)\s+\}$') {
            $content = $content -replace '</main>\s+\)\s+\}$', "</main>`n    </>`n  )`n}"
            $modified = $true
        }
        
        if ($modified) {
            Set-Content -Path $fullPath -Value $content -NoNewline
            $totalFiles++
            Write-Host "  Updated: $file" -ForegroundColor Cyan
        }
    } else {
        Write-Host "  Skipped (not found): $file" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "Header wrappers added!" -ForegroundColor Green
Write-Host "  Files updated: $totalFiles" -ForegroundColor Yellow
