# Comprehensive French translation script
$ErrorActionPreference = "Stop"

Write-Host "Comprehensive French translation..." -ForegroundColor Cyan

# Translate RangePage.tsx
$rangePage = Get-Content "app\components\fr\RangePage.tsx" -Raw -Encoding UTF8

# Fix mixed Spanish/French phrases
$rangePage = $rangePage -replace '¿Qué Cubre la Table de \$\{rangeStart\} al \$\{rangeEnd\}\?','Que Couvre la Table de ${rangeStart} à ${rangeEnd}?'
$rangePage = $rangePage -replace 'de cada número entre','de chaque nombre entre'
$rangePage = $rangePage -replace 'entre \$\{rangeStart\} y \$\{rangeEnd\}','entre ${rangeStart} et ${rangeEnd}'
$rangePage = $rangePage -replace 'Cada uno de estos Nombres se multiplica por los Nombres','Chacun de ces nombres est multiplié par les nombres'
$rangePage = $rangePage -replace 'de 1 à  10 para aprenderlos','de 1 à 10 pour les apprendre'
$rangePage = $rangePage -replace 'Opérations de multiplicación','opérations de multiplication'
$rangePage = $rangePage -replace 'en este rango','dans cette plage'
$rangePage = $rangePage -replace 'en realidad necesitan memorizar menos Opérations','ils ont en réalité besoin de mémoriser moins d''opérations'
$rangePage = $rangePage -replace 'por ejemplo','par exemple'
$rangePage = $rangePage -replace 'Table de Multiplication - Liste Complète','Table de Multiplication - Liste Complète'
$rangePage = $rangePage -replace 'Individuelles dans cette Plage','Individuelles dans cette Plage'
$rangePage = $rangePage -replace 'Si vous souhaitez apprendre la Table de Multiplication de cada número en detalle','Si vous souhaitez apprendre la table de multiplication de chaque nombre en détail'
$rangePage = $rangePage -replace 'página correspondiente','page correspondante'
$rangePage = $rangePage -replace 'a través de los siguientes enlaces','via les liens suivants'
$rangePage = $rangePage -replace 'Cada página contiene patrones','Chaque page contient des modèles'
$rangePage = $rangePage -replace 'consejos y herramientas de práctica específicas para ese número','des conseils et des outils de pratique spécifiques à ce nombre'
$rangePage = $rangePage -replace 'Este rango ayuda a los estudiantes a desarrollar sus habilidades de cálculo mental','Cette plage aide les étudiants à développer leurs compétences en calcul mental'
$rangePage = $rangePage -replace 'Con la práctica regular','Avec une pratique régulière'
$rangePage = $rangePage -replace 'comienzan a recordar automáticamente las multiplicaciones de estos Nombres','ils commencent à se rappeler automatiquement les multiplications de ces nombres'
$rangePage = $rangePage -replace 'Los estudiantes que aprenden bien este rango están listos para pasar al siguiente','Les étudiants qui maîtrisent bien cette plage sont prêts à passer à la suivante'
$rangePage = $rangePage -replace 'Cada rango refuerza aún más la lógica de la multiplicación y desarrolla el pensamiento matemático','Chaque plage renforce davantage la logique de la multiplication et développe la pensée mathématique'
$rangePage = $rangePage -replace 'En lugar de intentar memorizar la Table de Multiplication','Plutôt que d''essayer de mémoriser la table de multiplication'
$rangePage = $rangePage -replace 'entender los patrones que contiene','comprendre les modèles qu''elle contient'
$rangePage = $rangePage -replace 'acelera el proceso de aprendizaje y lo hace más duradero','accélère le processus d''apprentissage et le rend plus durable'
$rangePage = $rangePage -replace 'En la multiplicación, el orden se puede cambiar','Dans la multiplication, l''ordre peut être changé'
$rangePage = $rangePage -replace 'Esta propiedad facilita el aprendizaje','Cette propriété facilite l''apprentissage'
$rangePage = $rangePage -replace 'Si vous connaissez un número','Si vous connaissez un nombre'
$rangePage = $rangePage -replace 'también conoces su inverso','vous connaissez aussi son inverse'
$rangePage = $rangePage -replace 'La multiplicación es la suma repetida del mismo número','La multiplication est l''addition répétée du même nombre'
$rangePage = $rangePage -replace 'Esta lógica es importante para comprender el significado fundamental de la multiplicación','Cette logique est importante pour comprendre la signification fondamentale de la multiplication'
$rangePage = $rangePage -replace 'Los Nombres pares en este rango','Les nombres pairs dans cette plage'
$rangePage = $rangePage -replace 'siempre dan resultados pares','donnent toujours des résultats pairs'
$rangePage = $rangePage -replace 'Las Tables de Multiplication de los Nombres en este rango muestran patrones específicos','Les tables de multiplication des nombres dans cette plage montrent des modèles spécifiques'
$rangePage = $rangePage -replace 'Comprender la lógica de los Nombres pares e impares reduce los errores','Comprendre la logique des nombres pairs et impairs réduit les erreurs'
$rangePage = $rangePage -replace 'en la Table de Multiplication de cada número','dans la table de multiplication de chaque nombre'
$rangePage = $rangePage -replace 'los últimos dígitos se repiten en un orden específico','les derniers chiffres se répètent dans un ordre spécifique'
$rangePage = $rangePage -replace 'Notar este patrón es útil para la verificación','Remarquer ce modèle est utile pour la vérification'
$rangePage = $rangePage -replace 'Los Nombres que terminan en 5 siempre terminan en 0 o 5','Les nombres se terminant par 5 se terminent toujours par 0 ou 5'
$rangePage = $rangePage -replace 'En lugar de intentar aprender todos los Nombres de este rango a la vez','Au lieu d''essayer d''apprendre tous les nombres de cette plage en une fois'
$rangePage = $rangePage -replace 'concéntrate en 1-2 Nombres','concentrez-vous sur 1-2 nombres'
$rangePage = $rangePage -replace 'cada día','chaque jour'
$rangePage = $rangePage -replace 'Después de aprender bien un número, pasa al siguiente','Après avoir bien appris un nombre, passez au suivant'
$rangePage = $rangePage -replace 'Después de repasar cada número durante 3-4 días consecutivos','Après avoir révisé chaque nombre pendant 3-4 jours consécutifs'
$rangePage = $rangePage -replace 'comienza a resolver problemas mezclados','commencez à résoudre des problèmes mélangés'
$rangePage = $rangePage -replace 'Imaginar los Nombres visualmente facilita recordarlos','Imaginer les nombres visuellement facilite leur mémorisation'
$rangePage = $rangePage -replace 'Imagina \$\{rangeStart\} × 4 como \$\{rangeStart\} personas','Imaginez ${rangeStart} × 4 comme ${rangeStart} personnes'
$rangePage = $rangePage -replace 'formando 4 grupos','formant 4 groupes'
$rangePage = $rangePage -replace 'Crear una historia corta para cada número hace','Créer une courte histoire pour chaque nombre rend'
$rangePage = $rangePage -replace 'que recordar sea divertido','la mémorisation amusante'
$rangePage = $rangePage -replace 'Asignar un color diferente a cada número fortalece','Attribuer une couleur différente à chaque nombre renforce'
$rangePage = $rangePage -replace 'la memoria visual','la mémoire visuelle'
$rangePage = $rangePage -replace 'La práctica regular asegura que la información aprendida sea permanente','La pratique régulière garantit que les informations apprises soient permanentes'
$rangePage = $rangePage -replace 'Resuelve al menos 10 preguntas aleatorias al día y mide tu tiempo','Résolvez au moins 10 questions aléatoires par jour et mesurez votre temps'
$rangePage = $rangePage -replace 'Haz una prueba escrita una vez a la semana y analiza tus errores','Faites un test écrit une fois par semaine et analysez vos erreurs'
$rangePage = $rangePage -replace 'Jugar Jeux de Tables de Multiplication permite aprender mientras te diviertes','Jouer à des jeux de tables de multiplication vous permet d''apprendre tout en vous amusant'
$rangePage = $rangePage -replace 'Puedes aumentar tu motivación compitiendo con tus amigos','Vous pouvez augmenter votre motivation en concourant avec vos amis'
$rangePage = $rangePage -replace 'Si puedes usar cómodamente la Table de Multiplication de \$\{rangeStart\} a \$\{rangeEnd\}','Si vous pouvez utiliser confortablement la table de multiplication de ${rangeStart} à ${rangeEnd}'
$rangePage = $rangePage -replace '¡estás listo para pasar al siguiente paso!','vous êtes prêt à passer à l''étape suivante!'
$rangePage = $rangePage -replace '¡Has completado todas las Tables de Multiplication!','Vous avez terminé toutes les tables de multiplication!'
$rangePage = $rangePage -replace 'Ahora conoces todas las Opérations de multiplicación de 1 Ã  100','Vous connaissez maintenant toutes les opérations de multiplication de 1 à 100'
$rangePage = $rangePage -replace 'Sé paciente y constante para aprender todas las Tables de Multiplication','Soyez patient et constant pour apprendre toutes les tables de multiplication'
$rangePage = $rangePage -replace 'Cada plage se construye sobre el anterior','Chaque plage s''appuie sur la précédente'

# Fix encoding issues
$rangePage = $rangePage -replace 'Ã ','à'
$rangePage = $rangePage -replace 'Ã©','é'
$rangePage = $rangePage -replace 'Ã¨','è'

$rangePage | Set-Content "app\components\fr\RangePage.tsx" -Encoding UTF8 -NoNewline
Write-Host "RangePage.tsx fully translated!" -ForegroundColor Green

# Translate NumberPage.tsx
$numberPage = Get-Content "app\components\fr\NumberPage.tsx" -Raw -Encoding UTF8

# Common Spanish to French replacements
$numberPage = $numberPage -replace 'Aprende la Table de Multiplication de','Apprenez la table de multiplication de'
$numberPage = $numberPage -replace 'con ejemplos visuales','avec des exemples visuels'
$numberPage = $numberPage -replace 'y ejercicios interactivos','et des exercices interactifs'
$numberPage = $numberPage -replace '¿Sabías que','Saviez-vous que'
$numberPage = $numberPage -replace 'tiene propiedades especiales\?','a des propriétés spéciales?'
$numberPage = $numberPage -replace '¡Explorémoslas juntos!','Explorons-les ensemble!'
$numberPage = $numberPage -replace 'Definición','Définition'
$numberPage = $numberPage -replace 'La multiplicación','La multiplication'
$numberPage = $numberPage -replace 'significa sumar el número','signifie ajouter le nombre'
$numberPage = $numberPage -replace 'veces','fois'
$numberPage = $numberPage -replace 'Suma repetida','Addition répétée'
$numberPage = $numberPage -replace 'Visualización','Visualisation'
$numberPage = $numberPage -replace 'Imagina','Imaginez'
$numberPage = $numberPage -replace 'grupos de','groupes de'
$numberPage = $numberPage -replace 'objetos cada uno','objets chacun'
$numberPage = $numberPage -replace 'Como se ve en la tabla','Comme le montre le tableau'
$numberPage = $numberPage -replace 'multiplicar por','multiplier par'
$numberPage = $numberPage -replace 'da estos resultados','donne ces résultats'
$numberPage = $numberPage -replace '¿Por qué es importante','Pourquoi est-il important'
$numberPage = $numberPage -replace 'aprender esta tabla\?','d''apprendre cette table?'
$numberPage = $numberPage -replace 'Base para otras operaciones','Base pour d''autres opérations'
$numberPage = $numberPage -replace 'Uso en la vida diaria','Utilisation dans la vie quotidienne'
$numberPage = $numberPage -replace 'Desarrollo del pensamiento matemático','Développement de la pensée mathématique'
$numberPage = $numberPage -replace 'Consejos para aprender','Conseils pour apprendre'
$numberPage = $numberPage -replace 'Practica regularmente','Pratiquez régulièrement'
$numberPage = $numberPage -replace 'Usa trucos visuales','Utilisez des astuces visuelles'
$numberPage = $numberPage -replace 'Repite en voz alta','Répétez à voix haute'
$numberPage = $numberPage -replace 'Juega Jeux educativos','Jouez à des jeux éducatifs'

# Fix encoding
$numberPage = $numberPage -replace 'Ã ','à'
$numberPage = $numberPage -replace 'Ã©','é'
$numberPage = $numberPage -replace 'Ã¨','è'

$numberPage | Set-Content "app\components\fr\NumberPage.tsx" -Encoding UTF8 -NoNewline
Write-Host "NumberPage.tsx fully translated!" -ForegroundColor Green

Write-Host "`nFrench translation complete!" -ForegroundColor Green
