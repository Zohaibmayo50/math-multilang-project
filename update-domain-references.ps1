# PowerShell script to update all domain references from old domains to mathematives.com

Write-Host "Starting domain migration to mathematives.com..." -ForegroundColor Green

# Define old domains to replace
$oldDomains = @(
    'https://carpimtablosu.com.tr',
    'https://multilang-math.com',
    'https://math-multilang-project.vercel.app'
)

$newDomain = 'https://mathematives.com'

# Get all relevant files
$files = Get-ChildItem -Path "app" -Include "*.tsx","*.ts" -Recurse -File

$totalFiles = 0
$totalReplacements = 0

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $originalContent = $content
    $fileHadChanges = $false
    
    # Replace each old domain with new domain
    foreach ($oldDomain in $oldDomains) {
        if ($content -match [regex]::Escape($oldDomain)) {
            $content = $content -replace [regex]::Escape($oldDomain), $newDomain
            $fileHadChanges = $true
        }
    }
    
    # If changes were made, write back to file
    if ($fileHadChanges) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -NoNewline
        $totalFiles++
        
        # Count how many replacements were made in this file
        $replacements = 0
        foreach ($oldDomain in $oldDomains) {
            $replacements += ([regex]::Matches($originalContent, [regex]::Escape($oldDomain))).Count
        }
        $totalReplacements += $replacements
        
        Write-Host "  Updated: $($file.FullName.Replace((Get-Location).Path + '\', '')) - $replacements replacements" -ForegroundColor Cyan
    }
}

Write-Host ""
Write-Host "Domain migration complete!" -ForegroundColor Green
Write-Host "  Files updated: $totalFiles" -ForegroundColor Yellow
Write-Host "  Total replacements made: $totalReplacements" -ForegroundColor Yellow
Write-Host ""
Write-Host "All domain references updated to: $newDomain" -ForegroundColor Green
