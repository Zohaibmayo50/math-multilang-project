# French translation script for RangePage and NumberPage
$ErrorActionPreference = "Stop"

# Translate RangePage.tsx
Write-Host "Translating RangePage.tsx to French..." -ForegroundColor Cyan
$rangePage = Get-Content "app\components\fr\RangePage.tsx" -Raw -Encoding UTF8

# Common phrases
$rangePage = $rangePage -replace '¿Qué Cubre la Tabla del','Que Couvre la Table de'
$rangePage = $rangePage -replace 'del \$\{rangeStart\} al \$\{rangeEnd\}','de ${rangeStart} à ${rangeEnd}'
$rangePage = $rangePage -replace 'Este rango incluye','Cette plage comprend'
$rangePage = $rangePage -replace 'entre \$\{rangeStart\} y \$\{rangeEnd\}','entre ${rangeStart} et ${rangeEnd}'
$rangePage = $rangePage -replace 'del 1 al 10','de 1 à 10'
$rangePage = $rangePage -replace 'Los estudiantes aprenden','Les étudiants apprennent'
$rangePage = $rangePage -replace 'operaciones de multiplicación','opérations de multiplication'
$rangePage = $rangePage -replace 'propiedad conmutativa','propriété commutative'
$rangePage = $rangePage -replace 'Descargar / Imprimir','Télécharger / Imprimer'
$rangePage = $rangePage -replace 'Lista Completa','Liste Complète'
$rangePage = $rangePage -replace 'Individuales en este Rango','Individuelles dans cette Plage'
$rangePage = $rangePage -replace 'Explicación detallada y ejemplos del número','Explication détaillée et exemples du nombre'
$rangePage = $rangePage -replace '¿Por Qué es Importante este Rango\?','Pourquoi cette Plage est-elle Importante?'
$rangePage = $rangePage -replace 'Desarrollo Cognitivo','Développement Cognitif'
$rangePage = $rangePage -replace 'Preparación para el Siguiente Paso','Préparation pour l''Étape Suivante'
$rangePage = $rangePage -replace 'Patrones en la','Modèles dans la'
$rangePage = $rangePage -replace 'Simetría \(Propiedad Conmutativa\)','Symétrie (Propriété Commutative)'
$rangePage = $rangePage -replace 'Suma Repetida','Addition Répétée'
$rangePage = $rangePage -replace 'Patrones de Números Pares','Modèles de Nombres Pairs'
$rangePage = $rangePage -replace 'Patrones del Último Dígito','Modèles du Dernier Chiffre'
$rangePage = $rangePage -replace '¿Cómo Aprender','Comment Apprendre'
$rangePage = $rangePage -replace 'Enfoque Sistemático','Approche Systématique'
$rangePage = $rangePage -replace 'Técnicas de Visualización','Techniques de Visualisation'
$rangePage = $rangePage -replace 'Ejercicios de Práctica','Exercices de Pratique'
$rangePage = $rangePage -replace 'Continúa tu Viaje de Aprendizaje','Continuez votre Parcours d''Apprentissage'
$rangePage = $rangePage -replace '¡Felicitaciones!','Félicitations!'
$rangePage = $rangePage -replace 'Rango Anterior','Plage Précédente'
$rangePage = $rangePage -replace 'Ir al Siguiente Rango','Aller à la Plage Suivante'
$rangePage = $rangePage -replace 'Juegos','Jeux'
$rangePage = $rangePage -replace 'Competir con Amigos','Concourir avec des Amis'
$rangePage = $rangePage -replace 'Preguntas y Respuestas Rápidas','Questions et Réponses Rapides'
$rangePage = $rangePage -replace 'Pruebas Escritas','Tests Écrits'

# Long phrases
$rangePage = $rangePage -replace 'A continuación puedes ver todas las tablas de multiplicar','Vous pouvez voir ci-dessous toutes les tables de multiplication'
$rangePage = $rangePage -replace 'juntas\. \s*Cada número tiene su propia casilla de color\.','ensemble. Chaque nombre a sa propre case colorée.'
$rangePage = $rangePage -replace 'Si deseas aprender la tabla de multiplicar de cada número en detalle','Si vous souhaitez apprendre la table de multiplication de chaque nombre en détail'
$rangePage = $rangePage -replace 'puedes acceder a la \s*página correspondiente a través de los siguientes enlaces','vous pouvez accéder à la page correspondante via les liens suivants'
$rangePage = $rangePage -replace 'Cada página contiene patrones, \s*consejos y herramientas de práctica específicas','Chaque page contient des modèles, des conseils et des outils de pratique spécifiques'

$rangePage | Set-Content "app\components\fr\RangePage.tsx" -Encoding UTF8 -NoNewline
Write-Host "RangePage.tsx translated!" -ForegroundColor Green

# Translate NumberPage.tsx
Write-Host "Translating NumberPage.tsx to French..." -ForegroundColor Cyan
$numberPage = Get-Content "app\components\fr\NumberPage.tsx" -Raw -Encoding UTF8

$numberPage = $numberPage -replace 'Tabla de Multiplicar del','Table de Multiplication de'
$numberPage = $numberPage -replace 'Imprimir Tabla','Imprimer la Table'
$numberPage = $numberPage -replace 'Número','Nombre'
$numberPage = $numberPage -replace 'Propiedades Especiales','Propriétés Spéciales'
$numberPage = $numberPage -replace '¿Qué es','Qu''est-ce que'
$numberPage = $numberPage -replace 'Patrones','Modèles'
$numberPage = $numberPage -replace 'Consejos','Conseils'
$numberPage = $numberPage -replace 'Ejemplos','Exemples'
$numberPage = $numberPage -replace 'Juegos','Jeux'
$numberPage = $numberPage -replace 'Hojas de Trabajo Imprimibles','Feuilles de Travail Imprimables'
$numberPage = $numberPage -replace 'Ejercicios de Práctica','Exercices de Pratique'
$numberPage = $numberPage -replace 'Volver al Rango','Retour à la Plage'
$numberPage = $numberPage -replace 'Número Anterior','Nombre Précédent'
$numberPage = $numberPage -replace 'Siguiente Número','Nombre Suivant'
$numberPage = $numberPage -replace 'Aprende la','Apprenez la'
$numberPage = $numberPage -replace 'con ejemplos visuales','avec des exemples visuels'
$numberPage = $numberPage -replace 'ejercicios interactivos','exercices interactifs'
$numberPage = $numberPage -replace 'juegos divertidos','jeux amusants'

$numberPage | Set-Content "app\components\fr\NumberPage.tsx" -Encoding UTF8 -NoNewline
Write-Host "NumberPage.tsx translated!" -ForegroundColor Green

Write-Host "`nTranslation complete!" -ForegroundColor Green
