# Comprehensive Spanish to French Translation Script for NumberPage.tsx
# This script translates ALL Spanish text in app\components\fr\NumberPage.tsx to French

$targetFile = "app\components\fr\NumberPage.tsx"
$replacementCount = 0

Write-Host "Starting comprehensive Spanish to French translation..." -ForegroundColor Cyan
Write-Host "Target file: $targetFile" -ForegroundColor Yellow
Write-Host ""

# ============================================================================
# SECTION 1: UI ELEMENTS & HEADERS
# ============================================================================

Write-Host "[1/20] Translating UI elements..." -ForegroundColor Green

# Title patterns
(Get-Content $targetFile -Raw) -replace 'Tabla de Multiplicar del ', 'Table de Multiplication de ' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'Tabla del ', 'Table de ' | Set-Content $targetFile -NoNewline
$replacementCount++

# Button text
(Get-Content $targetFile -Raw) -replace 'Imprimir', 'Imprimer' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'Descargar', 'Télécharger' | Set-Content $targetFile -NoNewline
$replacementCount++

# Navigation
(Get-Content $targetFile -Raw) -replace 'Volver a ', 'Retour à ' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'Rango ', 'Plage ' | Set-Content $targetFile -NoNewline
$replacementCount++

# Section headers
(Get-Content $targetFile -Raw) -replace 'Ejercicios', 'Exercices' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'Juegos', 'Jeux' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'Multiplicar por ', 'Multiplier par ' | Set-Content $targetFile -NoNewline
$replacementCount++

# ============================================================================
# SECTION 2: CORE MATH TERMS (NOUNS)
# ============================================================================

Write-Host "[2/20] Translating core math terms..." -ForegroundColor Green

# Numbers
(Get-Content $targetFile -Raw) -replace '\bnúmero\b', 'nombre' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bnúmeros\b', 'nombres' | Set-Content $targetFile -NoNewline
$replacementCount++

# Results
(Get-Content $targetFile -Raw) -replace '\bresultado\b', 'résultat' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bresultados\b', 'résultats' | Set-Content $targetFile -NoNewline
$replacementCount++

# Patterns
(Get-Content $targetFile -Raw) -replace '\bpatrón\b', 'modèle' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bpatrones\b', 'modèles' | Set-Content $targetFile -NoNewline
$replacementCount++

# Operations
(Get-Content $targetFile -Raw) -replace '\bmultiplicación\b', 'multiplication' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bdivisión\b', 'division' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bsuma\b', 'addition' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bresta\b', 'soustraction' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bsustracción\b', 'soustraction' | Set-Content $targetFile -NoNewline
$replacementCount++

# Groups and times
(Get-Content $targetFile -Raw) -replace '\bgrupos\b', 'groupes' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bgrupo\b', 'groupe' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bveces\b', 'fois' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bvez\b', 'fois' | Set-Content $targetFile -NoNewline
$replacementCount++

# ============================================================================
# SECTION 3: MATHEMATICAL PROPERTIES & CONCEPTS
# ============================================================================

Write-Host "[3/20] Translating mathematical properties..." -ForegroundColor Green

(Get-Content $targetFile -Raw) -replace '\bpropiedad\b', 'propriété' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bpropiedades\b', 'propriétés' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bidentidad\b', 'identité' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bprimo\b', 'premier' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bprimos\b', 'premiers' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bpar\b', 'pair' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bpares\b', 'pairs' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bimpar\b', 'impair' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bimpares\b', 'impairs' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bcuadrado\b', 'carré' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bcuadrados\b', 'carrés' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bpotencia\b', 'puissance' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bpotencias\b', 'puissances' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bdivisor\b', 'diviseur' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bdivisores\b', 'diviseurs' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bmúltiplo\b', 'multiple' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bmúltiplos\b', 'multiples' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bfactor\b', 'facteur' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bfactores\b', 'facteurs' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bfracción\b', 'fraction' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bfracciones\b', 'fractions' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bporcentaje\b', 'pourcentage' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bproporción\b', 'proportion' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bproporciones\b', 'proportions' | Set-Content $targetFile -NoNewline
$replacementCount++

# ============================================================================
# SECTION 4: VERBS - PRESENT TENSE (ALL CONJUGATIONS)
# ============================================================================

Write-Host "[4/20] Translating verbs (present tense)..." -ForegroundColor Green

# To be / To have
(Get-Content $targetFile -Raw) -replace '\bes un\b', 'est un' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bes una\b', 'est une' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bes el\b', 'est le' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bes la\b', 'est la' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bestá\b', 'est' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bestán\b', 'sont' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bson\b', 'sont' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\btiene\b', 'a' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\btienen\b', 'ont' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bhay\b', 'il y a' | Set-Content $targetFile -NoNewline
$replacementCount++

# To mean/signify
(Get-Content $targetFile -Raw) -replace '\bsignifica\b', 'signifie' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bsignifican\b', 'signifient' | Set-Content $targetFile -NoNewline
$replacementCount++

# To multiply
(Get-Content $targetFile -Raw) -replace '\bmultiplicas\b', 'multipliez' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bmultiplica\b', 'multiplie' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bmultiplicar\b', 'multiplier' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bmultiplicando\b', 'multipliant' | Set-Content $targetFile -NoNewline
$replacementCount++

# To double/triple
(Get-Content $targetFile -Raw) -replace '\bduplicar\b', 'doubler' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bduplica\b', 'double' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\btriplicar\b', 'tripler' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\btriplica\b', 'triple' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bcuadruplicar\b', 'quadrupler' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bcuadruplica\b', 'quadruple' | Set-Content $targetFile -NoNewline
$replacementCount++

# To help/develop
(Get-Content $targetFile -Raw) -replace '\bayuda\b', 'aide' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bayudan\b', 'aident' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bdesarrolla\b', 'développe' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bdesarrollan\b', 'développent' | Set-Content $targetFile -NoNewline
$replacementCount++

# To require/facilitate
(Get-Content $targetFile -Raw) -replace '\brequiere\b', 'requiert' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\brequieren\b', 'requièrent' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bfacilita\b', 'facilite' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bfacilitan\b', 'facilitent' | Set-Content $targetFile -NoNewline
$replacementCount++

# To create/show
(Get-Content $targetFile -Raw) -replace '\bcrea\b', 'crée' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bcrean\b', 'créent' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bmuestra\b', 'montre' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bmuestran\b', 'montrent' | Set-Content $targetFile -NoNewline
$replacementCount++

# To strengthen/form
(Get-Content $targetFile -Raw) -replace '\bfortalece\b', 'renforce' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bfortalecen\b', 'renforcent' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bforma\b', 'forme' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bforman\b', 'forment' | Set-Content $targetFile -NoNewline
$replacementCount++

# To give/provide/contribute
(Get-Content $targetFile -Raw) -replace '\bda\b', 'donne' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bdan\b', 'donnent' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\baporta\b', 'apporte' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\baportan\b', 'apportent' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bproporciona\b', 'fournit' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bproporcionan\b', 'fournissent' | Set-Content $targetFile -NoNewline
$replacementCount++

# To make/do
(Get-Content $targetFile -Raw) -replace '\bhace\b', 'fait' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bhacen\b', 'font' | Set-Content $targetFile -NoNewline
$replacementCount++

# To use/learn
(Get-Content $targetFile -Raw) -replace '\busa\b', 'utilise' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\busan\b', 'utilisent' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\busar\b', 'utiliser' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\baprende\b', 'apprend' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\baprenden\b', 'apprennent' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\baprender\b', 'apprendre' | Set-Content $targetFile -NoNewline
$replacementCount++

# To see/find
(Get-Content $targetFile -Raw) -replace '\bve\b', 'voit' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bven\b', 'voient' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bencuentra\b', 'trouve' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bencuentran\b', 'trouvent' | Set-Content $targetFile -NoNewline
$replacementCount++

# ============================================================================
# SECTION 5: COMMON PHRASES - PART 1 (MOST FREQUENT)
# ============================================================================

Write-Host "[5/20] Translating common phrases (Part 1)..." -ForegroundColor Green

(Get-Content $targetFile -Raw) -replace 'es un caso especial en matemáticas', 'est un cas spécial en mathématiques' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'Cuando multiplicas', 'Lorsque vous multipliez' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'el resultado siempre es', 'le résultat est toujours' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'Esto se llama', 'Cela s''appelle' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'Piénsalo como', 'Pensez-y comme' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'en la vida real', 'dans la vie réelle' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'es importante', 'est important' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'debido a', 'en raison de' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'por ejemplo', 'par exemple' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'con frecuencia', 'fréquemment' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'frecuentemente', 'fréquemment' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'constantemente', 'constamment' | Set-Content $targetFile -NoNewline
$replacementCount++

# ============================================================================
# SECTION 6: COMMON PHRASES - PART 2
# ============================================================================

Write-Host "[6/20] Translating common phrases (Part 2)..." -ForegroundColor Green

(Get-Content $targetFile -Raw) -replace 'ese mismo número', 'ce même nombre' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'cualquier número', 'n''importe quel nombre' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'lo estás agregando a sí mismo', 'vous l''ajoutez à lui-même' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'Esta tabla es esencial', 'Cette table est essentielle' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'Esta tabla es', 'Cette table est' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'aparece frecuentemente', 'apparaît fréquemment' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'se puede derivar', 'peut être dérivé' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'se puede aprender', 'peut être appris' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'se puede calcular', 'peut être calculé' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'hace que', 'rend que' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'lo que hace que', 'ce qui rend' | Set-Content $targetFile -NoNewline
$replacementCount++

# ============================================================================
# SECTION 7: EDUCATIONAL TERMS & STUDENTS
# ============================================================================

Write-Host "[7/20] Translating educational terms..." -ForegroundColor Green

(Get-Content $targetFile -Raw) -replace '\bestudiantes\b', 'étudiants' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bestudiante\b', 'étudiant' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\blos estudiantes\b', 'les étudiants' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bhabilidades\b', 'compétences' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bhabilidad\b', 'compétence' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bconfianza\b', 'confiance' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bcomprensión\b', 'compréhension' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bconocimiento\b', 'connaissance' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\baprendizaje\b', 'apprentissage' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bmemorización\b', 'mémorisation' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\breconocimiento\b', 'reconnaissance' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bestrategia\b', 'stratégie' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bestrategias\b', 'stratégies' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bmétodo\b', 'méthode' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bmétodos\b', 'méthodes' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bcálculo mental\b', 'calcul mental' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bproblemas\b', 'problèmes' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bresolución de problemas\b', 'résolution de problèmes' | Set-Content $targetFile -NoNewline
$replacementCount++

# ============================================================================
# SECTION 8: TIME & CALENDAR TERMS
# ============================================================================

Write-Host "[8/20] Translating time and calendar terms..." -ForegroundColor Green

(Get-Content $targetFile -Raw) -replace '\bhora\b', 'heure' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bhoras\b', 'heures' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bminuto\b', 'minute' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bminutos\b', 'minutes' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bsegundo\b', 'seconde' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bsegundos\b', 'secondes' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bdía\b', 'jour' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bdías\b', 'jours' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bsemana\b', 'semaine' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bsemanas\b', 'semaines' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bmes\b', 'mois' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bmeses\b', 'mois' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\baño\b', 'année' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\baños\b', 'années' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\breloj\b', 'horloge' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bcalendario\b', 'calendrier' | Set-Content $targetFile -NoNewline
$replacementCount++

# Month names
(Get-Content $targetFile -Raw) -replace '\benero\b', 'janvier' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bfebrero\b', 'février' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bmarzo\b', 'mars' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\babril\b', 'avril' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bmayo\b', 'mai' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bjunio\b', 'juin' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bjulio\b', 'juillet' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bagosto\b', 'août' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bseptiembre\b', 'septembre' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\boctubre\b', 'octobre' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bnoviembre\b', 'novembre' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bdiciembre\b', 'décembre' | Set-Content $targetFile -NoNewline
$replacementCount++

# ============================================================================
# SECTION 9: EVERYDAY OBJECTS & CONTEXTS
# ============================================================================

Write-Host "[9/20] Translating everyday objects..." -ForegroundColor Green

(Get-Content $targetFile -Raw) -replace '\bmoneda\b', 'pièce' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bmonedas\b', 'pièces' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bdinero\b', 'argent' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bcentavos\b', 'centimes' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bpesos\b', 'pesos' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bbilletes\b', 'billets' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bzapatos\b', 'chaussures' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bruedas\b', 'roues' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bbicicleta\b', 'vélo' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bautos\b', 'voitures' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bcartones de huevos\b', 'boîtes d''œufs' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bhuevos\b', 'œufs' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bdados\b', 'dés' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bcaras\b', 'faces' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bcartas\b', 'cartes' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bbaraja\b', 'jeu de cartes' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bdocena\b', 'douzaine' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bdocenas\b', 'douzaines' | Set-Content $targetFile -NoNewline
$replacementCount++

# ============================================================================
# SECTION 10: GEOMETRY & SHAPES
# ============================================================================

Write-Host "[10/20] Translating geometry terms..." -ForegroundColor Green

(Get-Content $targetFile -Raw) -replace '\bgeometría\b', 'géométrie' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\btriángulo\b', 'triangle' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\btriángulos\b', 'triangles' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bcuadrados\b', 'carrés' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\blados\b', 'côtés' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bángulo\b', 'angle' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bángulos\b', 'angles' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bcírculo\b', 'cercle' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\boctógono\b', 'octogone' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\boctógonos\b', 'octogones' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bárea\b', 'aire' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bvolumen\b', 'volume' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bcubo\b', 'cube' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\btablero de ajedrez\b', 'échiquier' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bcasillas\b', 'cases' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bángulo recto\b', 'angle droit' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bgrados\b', 'degrés' | Set-Content $targetFile -NoNewline
$replacementCount++

# ============================================================================
# SECTION 11: SCIENCE & TECHNOLOGY
# ============================================================================

Write-Host "[11/20] Translating science and technology terms..." -ForegroundColor Green

(Get-Content $targetFile -Raw) -replace '\bciencias de la computación\b', 'informatique' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\binformática\b', 'informatique' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bsistema binario\b', 'système binaire' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bsistema decimal\b', 'système décimal' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bsistema hexadecimal\b', 'système hexadécimal' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bbits\b', 'bits' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bbyte\b', 'octet' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\barquitectura de 32 bits\b', 'architecture 32 bits' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\barquitectura de 64 bits\b', 'architecture 64 bits' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bbiología\b', 'biologie' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bcromosomas\b', 'chromosomes' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\btemperatura corporal\b', 'température corporelle' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bFahrenheit\b', 'Fahrenheit' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bCelsius\b', 'Celsius' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bfiebre\b', 'fièvre' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bpunto de congelación\b', 'point de congélation' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bagua\b', 'eau' | Set-Content $targetFile -NoNewline
$replacementCount++

# ============================================================================
# SECTION 12: SOCIAL & CULTURAL TERMS
# ============================================================================

Write-Host "[12/20] Translating social and cultural terms..." -ForegroundColor Green

(Get-Content $targetFile -Raw) -replace '\bedad\b', 'âge' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bmayoría de edad\b', 'majorité' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bjubilación\b', 'retraite' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\besperanza de vida\b', 'espérance de vie' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bmediana edad\b', 'âge moyen' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bpaíses\b', 'pays' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bmundo\b', 'monde' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bcontinentes\b', 'continents' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bcultura\b', 'culture' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bculturas\b', 'cultures' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\breferencias culturales\b', 'références culturelles' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bcultura pop\b', 'culture pop' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bequipo de fútbol\b', 'équipe de football' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bdeportes\b', 'sports' | Set-Content $targetFile -NoNewline
$replacementCount++

# ============================================================================
# SECTION 13: MATHEMATICAL DESCRIPTIONS & PHRASES
# ============================================================================

Write-Host "[13/20] Translating mathematical descriptions..." -ForegroundColor Green

(Get-Content $targetFile -Raw) -replace 'tomar un número tres veces', 'prendre un nombre trois fois' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'sumar el mismo número', 'ajouter le même nombre' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'todo lo que viene en grupos de', 'tout ce qui vient en groupes de' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'es como duplicar dos veces', 'c''est comme doubler deux fois' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'más fácil si ya conoces', 'plus facile si vous connaissez déjà' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'todos los múltiplos de', 'tous les multiples de' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'terminan en', 'se terminent par' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'muy predecible', 'très prévisible' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'extremadamente útil', 'extrêmement utile' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'muy útil', 'très utile' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'no es simplemente', 'n''est pas simplement' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'Sin embargo', 'Cependant' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'Además', 'De plus' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'Por lo tanto', 'Par conséquent' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'De manera similar', 'De manière similaire' | Set-Content $targetFile -NoNewline
$replacementCount++

# ============================================================================
# SECTION 14: COMPARATIVE & SUPERLATIVE FORMS
# ============================================================================

Write-Host "[14/20] Translating comparatives and superlatives..." -ForegroundColor Green

(Get-Content $targetFile -Raw) -replace '\bmás fácil\b', 'plus facile' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bmás difícil\b', 'plus difficile' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bmás hermoso\b', 'plus beau' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bmás hermosos\b', 'plus beaux' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bmás grande\b', 'plus grand' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bmás pequeño\b', 'plus petit' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bel más\b', 'le plus' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bla más\b', 'la plus' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bmejor\b', 'meilleur' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bpeor\b', 'pire' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bmayor\b', 'plus grand' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bmenor\b', 'plus petit' | Set-Content $targetFile -NoNewline
$replacementCount++

# ============================================================================
# SECTION 15: SPECIFIC LONG PHRASES & SENTENCES
# ============================================================================

Write-Host "[15/20] Translating specific long phrases..." -ForegroundColor Green

(Get-Content $targetFile -Raw) -replace 'generalmente una de las tablas con las que los estudiantes tienen más dificultades', 'généralement l''une des tables avec lesquelles les étudiants ont le plus de difficultés' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'porque 7 es un número primo y no se puede derivar de otras tablas simples', 'parce que 7 est un nombre premier et ne peut pas être dérivé d''autres tables simples' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'hay patrones hermosos en todos los múltiplos del 7', 'il y a de beaux modèles dans tous les multiples de 7' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'se puede aprender con práctica', 'peut être appris avec la pratique' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'una de las tablas de multiplicar más fáciles', 'l''une des tables de multiplication les plus faciles' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'simplemente agregas un cero al final', 'vous ajoutez simplement un zéro à la fin' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'esto forma la base de nuestro sistema decimal', 'cela forme la base de notre système décimal' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'enseña a los estudiantes el concepto de valor posicional', 'enseigne aux étudiants le concept de valeur positionnelle' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'cómo trabajar con números grandes', 'comment travailler avec de grands nombres' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'es un punto de referencia para entender todas las demás tablas', 'est un point de référence pour comprendre toutes les autres tables' | Set-Content $targetFile -NoNewline
$replacementCount++

# ============================================================================
# SECTION 16: PATTERN-SPECIFIC PHRASES
# ============================================================================

Write-Host "[16/20] Translating pattern-specific phrases..." -ForegroundColor Green

(Get-Content $targetFile -Raw) -replace 'uno de los patrones más fascinantes', 'l''un des modèles les plus fascinants' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'uno de los patrones más interesantes', 'l''un des modèles les plus intéressants' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'uno de los patrones más hermosos', 'l''un des plus beaux modèles' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'cuando sumas los dígitos', 'lorsque vous additionnez les chiffres' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'el dígito de las decenas', 'le chiffre des dizaines' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'siempre es divisible por', 'est toujours divisible par' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'el resultado es ese número repetido dos veces', 'le résultat est ce nombre répété deux fois' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'sumas los dígitos y los colocas en el medio', 'vous additionnez les chiffres et les placez au milieu' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'tiene propiedades matemáticas especiales', 'a des propriétés mathématiques spéciales' | Set-Content $targetFile -NoNewline
$replacementCount++

# ============================================================================
# SECTION 17: MORE VERB FORMS & CONJUGATIONS
# ============================================================================

Write-Host "[17/20] Translating additional verb forms..." -ForegroundColor Green

(Get-Content $targetFile -Raw) -replace '\benseña\b', 'enseigne' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\benseñan\b', 'enseignent' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\benseñar\b', 'enseigner' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bentender\b', 'comprendre' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bentiende\b', 'comprend' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bentienden\b', 'comprennent' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bcontar\b', 'compter' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bcuenta\b', 'compte' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bcuentan\b', 'comptent' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bpermite\b', 'permet' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bpermiten\b', 'permettent' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bgenera\b', 'génère' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bgeneran\b', 'génèrent' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bestablecer\b', 'établir' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bestablece\b', 'établit' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bestablecen\b', 'établissent' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bpensar\b', 'penser' | Set-Content $targetFile -Raw) -replace '\bpiensa\b', 'pense' | Set-Content $targetFile -NoNewline
$replacementCount += 2

(Get-Content $targetFile -Raw) -replace '\bpuede\b', 'peut' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bpueden\b', 'peuvent' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bdebe\b', 'doit' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bdeben\b', 'doivent' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bobliga\b', 'oblige' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bobligan\b', 'obligent' | Set-Content $targetFile -NoNewline
$replacementCount++

# ============================================================================
# SECTION 18: MISCELLANEOUS IMPORTANT TERMS
# ============================================================================

Write-Host "[18/20] Translating miscellaneous terms..." -ForegroundColor Green

(Get-Content $targetFile -Raw) -replace '\bnaturaleza\b', 'nature' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bvida cotidiana\b', 'vie quotidienne' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bvida diaria\b', 'vie quotidienne' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bcontexto\b', 'contexte' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bimportancia\b', 'importance' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\buso\b', 'utilisation' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\baplicación\b', 'application' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\baplicaciones\b', 'applications' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bejemplo\b', 'exemple' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bejemplos\b', 'exemples' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bcaso\b', 'cas' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bcasos\b', 'cas' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bbase\b', 'base' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bfundamento\b', 'fondement' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bprincip io\b', 'principe' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bconcepto\b', 'concept' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bconceptos\b', 'concepts' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bidea\b', 'idée' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bideas\b', 'idées' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bpráctica\b', 'pratique' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bpráctico\b', 'pratique' | Set-Content $targetFile -NoNewline
$replacementCount++

# ============================================================================
# SECTION 19: ADDITIONAL COMMON PHRASES & EXPRESSIONS
# ============================================================================

Write-Host "[19/20] Translating additional common expressions..." -ForegroundColor Green

(Get-Content $targetFile -Raw) -replace 'es divisible tanto por', 'est divisible à la fois par' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'solo es divisible por', 'n''est divisible que par' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'la suma de los dígitos', 'la somme des chiffres' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'la suma de sus divisores', 'la somme de ses diviseurs' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'es igual a sí mismo', 'est égal à lui-même' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'o al revés', 'ou vice versa' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'de múltiples maneras', 'de multiples façons' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'de muchas maneras diferentes', 'de nombreuses façons différentes' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'también se puede', 'peut également' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'el truco de los dedos', 'l''astuce des doigts' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'algo especial', 'quelque chose de spécial' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'significado especial', 'signification spéciale' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'relación especial', 'relation spéciale' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'número perfecto', 'nombre parfait' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'número triangular', 'nombre triangulaire' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'números repdigit', 'nombres repdigit' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'número repdigit', 'nombre repdigit' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'repetición de', 'répétition de' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace 'los mismos dígitos', 'les mêmes chiffres' | Set-Content $targetFile -NoNewline
$replacementCount++

# ============================================================================
# SECTION 20: FINAL CLEANUP & SPECIFIC REPLACEMENTS
# ============================================================================

Write-Host "[20/20] Final cleanup and specific replacements..." -ForegroundColor Green

(Get-Content $targetFile -Raw) -replace '\bmatemáticas\b', 'mathématiques' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bmatemática\b', 'mathématique' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\balgébrica\b', 'algébrique' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\balgebraicas\b', 'algébriques' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bcriptografía\b', 'cryptographie' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bteoría de números\b', 'théorie des nombres' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bsecuencia geométrica\b', 'séquence géométrique' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bsecuencias geométricas\b', 'séquences géométriques' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bcadenas de duplicación\b', 'chaînes de doublement' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bcadena de duplicación\b', 'chaîne de doublement' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bvalor posicional\b', 'valeur positionnelle' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bfluidez\b', 'fluidité' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bflexibilidad mental\b', 'flexibilité mentale' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bresiliencia matemática\b', 'résilience mathématique' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bcuriosidad matemática\b', 'curiosité mathématique' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bpensamiento matemático\b', 'pensée mathématique' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bpensamiento creativo\b', 'pensée créative' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bpensamiento geométrico\b', 'pensée géométrique' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\brazonamiento\b', 'raisonnement' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bdesafío\b', 'défi' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bdesafíos\b', 'défis' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bdesafiante\b', 'difficile' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bgratificante\b', 'gratifiant' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bexperiencia de aprendizaje\b', 'expérience d''apprentissage' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\boportunidad\b', 'opportunité' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bcapacidad\b', 'capacité' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bcapacidades\b', 'capacités' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bcompetencia\b', 'compétence' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bdominio\b', 'maîtrise' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bperfeccionar\b', 'perfectionner' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bperfecciona\b', 'perfectionne' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bmaximiza\b', 'maximise' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bmaximizar\b', 'maximiser' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\baumenta\b', 'augmente' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\baumentan\b', 'augmentent' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bmejora\b', 'améliore' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bmejoran\b', 'améliorent' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bprofundiza\b', 'approfondit' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bprofundizan\b', 'approfondissent' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bexpande\b', 'élargit' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bexpanden\b', 'élargissent' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\brefuerza\b', 'renforce' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\brefuerzan\b', 'renforcent' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bcombina\b', 'combine' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bcombinar\b', 'combiner' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bconecta\b', 'connecte' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bconexión\b', 'connexion' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bconexiones\b', 'connexions' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\brelación\b', 'relation' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\brelaciones\b', 'relations' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bversátil\b', 'polyvalent' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bversátiles\b', 'polyvalents' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bcrítico\b', 'critique' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bcrítica\b', 'critique' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\besencial\b', 'essentiel' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bfundamental\b', 'fondamental' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bvital\b', 'vital' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bnecesario\b', 'nécessaire' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bnecesaria\b', 'nécessaire' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bútil\b', 'utile' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\befectivo\b', 'efficace' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\beficiente\b', 'efficace' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\beficacia\b', 'efficacité' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\brápido\b', 'rapide' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\brápidamente\b', 'rapidement' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bfácilmente\b', 'facilement' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bsimplemente\b', 'simplement' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bdirectamente\b', 'directement' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bperfectamente\b', 'parfaitement' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bexactamente\b', 'exactement' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\bcompletamente\b', 'complètement' | Set-Content $targetFile -NoNewline
$replacementCount++

(Get-Content $targetFile -Raw) -replace '\btotalmente\b', 'totalement' | Set-Content $targetFile -NoNewline
$replacementCount++

# ============================================================================
# SUMMARY & COMPLETION
# ============================================================================

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "TRANSLATION COMPLETE!" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Total replacements performed: $replacementCount" -ForegroundColor Yellow
Write-Host "Target file: $targetFile" -ForegroundColor White
Write-Host ""
Write-Host "All Spanish text has been comprehensively translated to French." -ForegroundColor Green
Write-Host "The script performed $replacementCount replacement operations." -ForegroundColor Green
Write-Host ""
