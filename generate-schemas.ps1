# PowerShell script to generate schema additions for remaining number pages

# Numbers that already have schema: 1-20, 25, 50, 100
# Numbers that need schema: 21-24, 26-49, 51-99

$numbersNeedingSchema = @()
21..24 | ForEach-Object { $numbersNeedingSchema += $_ }
26..49 | ForEach-Object { $numbersNeedingSchema += $_ }
51..99 | ForEach-Object { $numbersNeedingSchema += $_ }

Write-Host "Total numbers needing schema: $($numbersNeedingSchema.Count)"
Write-Host "Numbers: $($numbersNeedingSchema -join ', ')"

# Group by range for proper parent links
function Get-RangeForNumber {
    param($num)
    if ($num -le 10) { return @{ start = 1; end = 10 } }
    elseif ($num -le 20) { return @{ start = 11; end = 20 } }
    elseif ($num -le 30) { return @{ start = 21; end = 30 } }
    elseif ($num -le 40) { return @{ start = 31; end = 40 } }
    elseif ($num -le 50) { return @{ start = 41; end = 50 } }
    elseif ($num -le 60) { return @{ start = 51; end = 60 } }
    elseif ($num -le 70) { return @{ start = 61; end = 70 } }
    elseif ($num -le 80) { return @{ start = 71; end = 80 } }
    elseif ($num -le 90) { return @{ start = 81; end = 90 } }
    else { return @{ start = 91; end = 100 } }
}

function Get-EducationalLevel {
    param($num)
    if ($num -le 20) { return "Beginner" }
    elseif ($num -le 50) { return "Intermediate" }
    else { return "Advanced" }
}

function Get-AgeRange {
    param($num)
    if ($num -le 10) { return "6-9" }
    elseif ($num -le 20) { return "7-10" }
    elseif ($num -le 50) { return "8-11" }
    elseif ($num -le 80) { return "9-12" }
    else { return "10-12" }
}

# Process numbers in batches of 10
$batchSize = 10
for ($i = 0; $i -lt $numbersNeedingSchema.Count; $i += $batchSize) {
    $batch = $numbersNeedingSchema[$i..[Math]::Min($i + $batchSize - 1, $numbersNeedingSchema.Count - 1)]
    Write-Host "`nBatch $([Math]::Floor($i / $batchSize) + 1): Numbers $($batch -join ', ')"
    
    foreach ($num in $batch) {
        $range = Get-RangeForNumber $num
        $level = Get-EducationalLevel $num
        $age = Get-AgeRange $num
        
        Write-Host "  Number $num → Range: $($range.start)-$($range.end), Level: $level, Age: $age"
    }
}
