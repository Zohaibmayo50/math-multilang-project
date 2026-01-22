# Complete German to French translation for all components
$ErrorActionPreference = "Stop"

Write-Host "=== Copying German templates and translating to French ===" -ForegroundColor Cyan

# Copy German templates
Copy-Item "app\components\de\NumberPage.tsx" "app\components\fr\NumberPage.tsx" -Force
Copy-Item "app\components\de\RangePage.tsx" "app\components\fr\RangePage.tsx" -Force  
Copy-Item "app\components\de\PracticePreview.tsx" "app\components\fr\PracticePreview.tsx" -Force
Copy-Item "app\components\de\PrintableExercises.tsx" "app\components\fr\PrintableExercises.tsx" -Force
Copy-Item "app\components\de\GamesSection.tsx" "app\components\fr\GamesSection.tsx" -Force
Copy-Item "app\components\de\LearningPaths.tsx" "app\components\fr\LearningPaths.tsx" -Force

Write-Host "Files copied. Starting translation..." -ForegroundColor Yellow

$files = @(
    "app\components\fr\NumberPage.tsx",
    "app\components\fr\RangePage.tsx",
    "app\components\fr\PracticePreview.tsx",
    "app\components\fr\PrintableExercises.tsx",
    "app\components\fr\GamesSection.tsx",
    "app\components\fr\LearningPaths.tsx"
)

foreach ($file in $files) {
    Write-Host "Translating $file..." -ForegroundColor Green
    
    $content = Get-Content $file -Raw -Encoding UTF8
    
    # Fix imports
    $content = $content -replace "import NumberGames from '\.\./NumberGames'","import NumberGames from './NumberGames'"
    
    # German to French - UI Elements & Headers
    $content = $content -replace 'Einmaleins-Tabelle','Table de Multiplication'
    $content = $content -replace 'Einmaleins','Table de Multiplication'
    $content = $content -replace 'einmaleins','table-de-multiplication'
    $content = $content -replace 'Multiplikationstabelle','Table de Multiplication'
    $content = $content -replace 'Drucken','Imprimer'
    $content = $content -replace 'Herunterladen','Télécharger'  
    $content = $content -replace 'Übungen','Exercices'
    $content = $content -replace 'Spiele','Jeux'
    $content = $content -replace 'Zurück zu','Retour à'
    $content = $content -replace 'Bereich','Plage'
    
    # Section Headers
    $content = $content -replace 'Vollständige Multiplikationstabelle von','Table de multiplication complète de'
    $content = $content -replace 'Was bedeutet mit','Que signifie multiplier par'
    $content = $content -replace 'multiplizieren\?','?'
    $content = $content -replace 'Warum ist es wichtig','Pourquoi est-il important'
    $content = $content -replace 'Muster in der','Modèles dans la table de'
    $content = $content -replace 'Tabelle','table'
    $content = $content -replace 'Häufige Fehler','Erreurs courantes'  
    $content = $content -replace 'und wie man sie vermeidet','et comment les éviter'
    $content = $content -replace 'Lerntipps für','Conseils d''apprentissage pour'
    $content = $content -replace 'Regelmäßige Übung','Pratique régulière'
    $content = $content -replace 'Visuelle Hilfsmittel','Aides visuelles'
    $content = $content -replace 'Auswendiglernen','Mémorisation'
    $content = $content -replace 'Mehr Übungsmöglichkeiten','Plus d''options de pratique'
    
    # Core Math Terms
    $content = $content -replace '\bZahl\b','nombre'
    $content = $content -replace '\bZahlen\b','nombres'
    $content = $content -replace '\bErgebnis\b','résultat'
    $content = $content -replace '\bErgebnisse\b','résultats'
    $content = $content -replace '\bMuster\b','modèle'
    $content = $content -replace '\bGruppen\b','groupes'
    $content = $content -replace '\bMal\b','fois'
    $content = $content -replace '\bMultiplikation\b','multiplication'
    $content = $content -replace '\bDivision\b','division'
    $content = $content -replace '\bAddition\b','addition'
    $content = $content -replace '\bSubtraktion\b','soustraction'
    $content = $content -replace '\bEigenschaft\b','propriété'
    
    # Number Properties
    $content = $content -replace '\bgerade\b','pair'
    $content = $content -replace '\bungerade\b','impair'
    $content = $content -replace '\bPrimzahl\b','nombre premier'
    $content = $content -replace '\bQuadratzahl\b','carré'
    $content = $content -replace '\bPotenz\b','puissance'
    
    # Verbs - German to French
    $content = $content -replace ' ist ein besonderer Fall',' est un cas spécial'
    $content = $content -replace ' ist ',' est '
    $content = $content -replace ' sind ',' sont '
    $content = $content -replace ' hat ',' a '
    $content = $content -replace ' haben ',' ont '
    $content = $content -replace ' wird ',' est '
    $content = $content -replace ' werden ',' sont '
    $content = $content -replace ' kann ',' peut '
    $content = $content -replace ' können ',' peuvent '
    $content = $content -replace ' muss ',' doit '
    $content = $content -replace ' müssen ',' doivent '
    $content = $content -replace ' macht ',' rend '
    $content = $content -replace ' gibt ',' donne '
    $content = $content -replace ' hilft ',' aide '
    $content = $content -replace ' zeigt ',' montre '
    $content = $content -replace ' entwickelt ',' développe '
    $content = $content -replace ' erfordert ',' requiert '
    $content = $content -replace ' verwendet ',' utilise '
    $content = $content -replace ' schafft ',' crée '
    $content = $content -replace ' stärkt ',' renforce '
    $content = $content -replace ' bildet ',' forme '
    $content = $content -replace ' bedeutet ',' signifie '
    $content = $content -replace ' bringt ',' apporte '
    
    # Common Words
    $content = $content -replace '\bverdoppeln\b','doubler'
    $content = $content -replace '\bhalbieren\b','diviser par deux'
    $content = $content -replace '\bimmer\b','toujours'
    $content = $content -replace '\bnie\b','jamais'
    $content = $content -replace '\bauch\b','aussi'
    $content = $content -replace '\bnur\b','seulement'
    $content = $content -replace '\bgenau\b','exactement'
    $content = $content -replace '\bweil\b','parce que'
    $content = $content -replace '\bhäufig\b','souvent'
    $content = $content -replace '\bpraktisch\b','pratique'
    $content = $content -replace '\bDinge\b','choses'
    $content = $content -replace '\bzum Beispiel\b','par exemple'
    $content = $content -replace '\boder\b','ou'
    $content = $content -replace '\bund\b','et'
    $content = $content -replace '\bzwischen\b','entre'
    $content = $content -replace '\bals\b','comme'
    $content = $content -replace '\bfür\b','pour'
    $content = $content -replace '\bvon\b','de'
    $content = $content -replace '\bmit\b','avec'
    $content = $content -replace '\bsich selbst\b','lui-même'
    $content = $content -replace '\bdreimal\b','trois fois'
    $content = $content -replace '\bzweimal\b','deux fois'
    $content = $content -replace '\beinmal\b','une fois'
    
    # Comparatives
    $content = $content -replace '\bmehr\b','plus'
    $content = $content -replace '\bweniger\b','moins'
    $content = $content -replace '\bbesser\b','meilleur'
    $content = $content -replace '\beinfacher\b','plus facile'
    $content = $content -replace '\bschwieriger\b','plus difficile'
    
    # Time & Calendar
    $content = $content -replace '\bTage\b','jours'
    $content = $content -replace '\bTag\b','jour'
    $content = $content -replace '\bStunden\b','heures'
    $content = $content -replace '\bStunde\b','heure'
    $content = $content -replace '\bMinuten\b','minutes'
    $content = $content -replace '\bWoche\b','semaine'
    $content = $content -replace '\bWochen\b','semaines'
    $content = $content -replace '\bMonat\b','mois'
    $content = $content -replace '\bMonate\b','mois'
    $content = $content -replace '\bJahr\b','année'
    $content = $content -replace '\bJahre\b','années'
    
    # Objects & Items  
    $content = $content -replace '\bSchuhe\b','chaussures'
    $content = $content -replace '\bFahrradräder\b','roues de vélo'
    $content = $content -replace '\bPersonen\b','personnes'
    $content = $content -replace '\bSchüler\b','élèves'
    $content = $content -replace '\bGeld\b','argent'
    
    # Geometry
    $content = $content -replace '\bDreiecke\b','triangles'
    $content = $content -replace '\bDreieck\b','triangle'
    $content = $content -replace '\bQuadrate\b','carrés'
    $content = $content -replace '\bQuadrat\b','carré'
    $content = $content -replace '\bSeiten\b','côtés'
    $content = $content -replace '\bOktogone\b','octogones'
    
    # Learning Terms
    $content = $content -replace '\bSchwierigkeiten\b','difficultés'
    $content = $content -replace '\bPraxis\b','pratique'
    $content = $content -replace '\bLernen\b','apprentissage'
    $content = $content -replace '\bFähigkeiten\b','compétences'
    $content = $content -replace '\bStrategien\b','stratégies'
    $content = $content -replace '\bTrick\b','astuce'
    
    # Common Phrases
    $content = $content -replace 'Wenn du','Lorsque vous'
    $content = $content -replace 'eine Zahl','un nombre'
    $content = $content -replace 'das Ergebnis','le résultat'
    $content = $content -replace 'dieselbe Zahl','le même nombre'
    $content = $content -replace 'Dies wird','Cela s''appelle'
    $content = $content -replace 'genannt','appelé'
    $content = $content -replace 'Denke daran','Pensez-y'
    $content = $content -replace 'wie','comme'
    $content = $content -replace 'Wie viele','Combien de'
    $content = $content -replace 'im täglichen Leben','dans la vie quotidienne'
    $content = $content -replace 'mathematisches Denken','pensée mathématique'
    $content = $content -replace 'wiederholte Addition','addition répétée'
    $content = $content -replace 'Die Multiplikation mit','La multiplication par'
    $content = $content -replace 'multiplizierst','multipliez'
    $content = $content -replace 'angefangen hast','avez commencé'
    $content = $content -replace 'hinzufügen','ajouter'
    $content = $content -replace 'ist entscheidend','est essentielle'
    $content = $content -replace 'für das Verständnis von','pour comprendre'
    $content = $content -replace 'in Dreiergruppen kommt','vient en groupes de trois'
    $content = $content -replace 'gerecht teilen','partager équitablement'
    
    # Questions & Practice
    $content = $content -replace 'Fragen','questions'
    $content = $content -replace 'Antworten','réponses'
    $content = $content -replace 'Richtig','Correct'
    $content = $content -replace 'Falsch','Incorrect'
    $content = $content -replace 'Starten','Commencer'
    $content = $content -replace 'Beginnen','Commencer'
    $content = $content -replace 'Lösen','Résoudre'
    
    # Game & Practice Terms
    $content = $content -replace 'Spiel','Jeu'
    $content = $content -replace 'Niveau','Niveau'
    $content = $content -replace 'Punkte','Points'
    $content = $content -replace 'Glückwunsch','Félicitations'
    $content = $content -replace 'Geschafft','Terminé'
    
    # Fix any remaining German articles
    $content = $content -replace '\bdie\b','la/le/les'
    $content = $content -replace '\bder\b','le/de'
    $content = $content -replace '\bdas\b','le/la'
    $content = $content -replace '\bdes\b','du/de'
    $content = $content -replace '\bdem\b','le/au'
    $content = $content -replace '\bden\b','les/le'
    $content = $content -replace '\beim\b','au/dans le'
    
    # Fix encoding issues
    $content = $content -replace 'Ã ','à'
    $content = $content -replace 'Ã©','é'
    $content = $content -replace 'Ã¨','è'
    $content = $content -replace 'Ã§','ç'
    $content = $content -replace 'Ã´','ô'
    $content = $content -replace 'Ã»','û'
    $content = $content -replace 'Ã®','î'
    $content = $content -replace 'Ã«','ë'
    
    # Save
    $content | Set-Content $file -Encoding UTF8 -NoNewline
}

Write-Host "`n=== Translation Complete ===" -ForegroundColor Green
Write-Host "All French components have been translated from German templates." -ForegroundColor Green
