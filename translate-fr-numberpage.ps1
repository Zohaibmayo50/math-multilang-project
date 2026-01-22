# Comprehensive Spanish to French Translation Script for NumberPage.tsx
# This script translates all Spanish content to French in app/components/fr/NumberPage.tsx

$filePath = "app\components\fr\NumberPage.tsx"
$encoding = [System.Text.UTF8Encoding]::new($false) # UTF-8 without BOM

Write-Host "Starting comprehensive Spanish to French translation for NumberPage.tsx..." -ForegroundColor Cyan
Write-Host "File: $filePath" -ForegroundColor Yellow

# Read the file content
$content = Get-Content -Path $filePath -Raw -Encoding UTF8

# Counter for replacements
$replacementCount = 0

# Function to perform replacement and count
function Replace-Text {
    param($old, $new)
    if ($script:content -match [regex]::Escape($old)) {
        $script:content = $script:content -replace [regex]::Escape($old), $new
        $script:replacementCount++
        return $true
    }
    return $false
}

Write-Host "`n=== Phase 1: UI Elements and Print Function ===" -ForegroundColor Green

# Print function title
Replace-Text "Tabla de Multiplicar del" "Table de Multiplication de"

# Print/Download buttons
Replace-Text "Tabla del" "Table de"
Replace-Text "Imprimir" "Imprimer"
Replace-Text "Descargar" "Télécharger"

# Section headings
Replace-Text "Patrones en la Tabla del" "Modèles dans la Table de"
Replace-Text "Cómo Practicar la Tabla del" "Comment Pratiquer la Table de"
Replace-Text "Errores Comunes al Aprender la Tabla del" "Erreurs Courantes lors de l'Apprentissage de la Table de"
Replace-Text "Tablas de Multiplicar Relacionadas" "Tables de Multiplication Associées"

# Section descriptions
Replace-Text "Entender los patrones hace que el aprendizaje sea más fácil y divertido. La tabla del" "Comprendre les modèles rend l'apprentissage plus facile et amusant. La table de"
Replace-Text "tiene`nhermosos patrones que pueden ayudarte a recordarla sin memorizar de memoria." "a de beaux modèles qui peuvent vous aider à vous en souvenir sans mémorisation par cœur."

Replace-Text "Aprender las tablas de multiplicar requiere práctica consistente con las estrategias correctas." "Apprendre les tables de multiplication nécessite une pratique cohérente avec les bonnes stratégies."
Replace-Text "Aquí hay métodos comprobados para dominar específicamente la tabla del" "Voici des méthodes éprouvées pour maîtriser spécifiquement la table de"

Replace-Text "Muchos estudiantes cometen errores similares al aprender esta tabla. Ser consciente de estos errores comunes" "De nombreux élèves commettent des erreurs similaires en apprenant cette table. Être conscient de ces erreurs courantes"
Replace-Text "te ayudará a evitarlos y aprender de manera más efectiva." "vous aidera à les éviter et à apprendre plus efficacement."

Replace-Text "La tabla del" "La table de"
Replace-Text "es parte de un sistema de aprendizaje más amplio." "fait partie d'un système d'apprentissage plus large."
Replace-Text "Puedes explorar otras tablas en el mismo rango o pasar al siguiente número lógico." "Vous pouvez explorer d'autres tables dans la même plage ou passer au nombre logique suivant."

# Navigation links
Replace-Text "← Número Anterior" "← Nombre Précédent"
Replace-Text "Siguiente Número →" "Nombre Suivant →"
Replace-Text "↑ Rango Superior" "↑ Plage Supérieure"
Replace-Text "Tablas del" "Tables de"
Replace-Text "Explora todas las tablas de multiplicar en este rango con herramientas de práctica y juegos" "Explorez toutes les tables de multiplication dans cette plage avec des outils de pratique et des jeux"

Replace-Text "Solución:" "Solution :"

Write-Host "`n=== Phase 2: Common Words and Phrases ===" -ForegroundColor Green

# Core mathematical terms
Replace-Text "Multiplicar por" "Multiplier par"
Replace-Text "significa" "signifie"
Replace-Text "número" "nombre"
Replace-Text "números" "nombres"
Replace-Text "tabla" "table"
Replace-Text "cuando" "lorsque"
Replace-Text "cualquier" "n'importe quel"
Replace-Text "resultado" "résultat"
Replace-Text "siempre" "toujours"
Replace-Text "propiedad" "propriété"
Replace-Text "identidad" "identité"
Replace-Text "grupos" "groupes"
Replace-Text "veces" "fois"
Replace-Text "patrón" "modèle"
Replace-Text "patrones" "modèles"

# Action verbs
Replace-Text "duplicar" "doubler"
Replace-Text "triplicar" "tripler"
Replace-Text "cuadruplicar" "quadrupler"
Replace-Text "facilita" "facilite"
Replace-Text "desarrolla" "développe"
Replace-Text "requiere" "nécessite"
Replace-Text "enseña" "enseigne"
Replace-Text "muestra" "montre"
Replace-Text "genera" "génère"
Replace-Text "fortalece" "renforce"
Replace-Text "refuerza" "renforce"
Replace-Text "aumenta" "augmente"
Replace-Text "mejora" "améliore"
Replace-Text "profundiza" "approfondit"

# Adjectives and descriptors
Replace-Text "importante" "important"
Replace-Text "especial" "spécial"
Replace-Text "práctico" "pratique"
Replace-Text "útil" "utile"
Replace-Text "fácil" "facile"
Replace-Text "difícil" "difficile"
Replace-Text "simple" "simple"
Replace-Text "complejo" "complexe"
Replace-Text "efectivo" "efficace"
Replace-Text "perfecto" "parfait"
Replace-Text "hermoso" "beau"
Replace-Text "interesante" "intéressant"
Replace-Text "fundamental" "fondamental"
Replace-Text "crítico" "critique"
Replace-Text "esencial" "essentiel"

# Number types
Replace-Text "números primos" "nombres premiers"
Replace-Text "número primo" "nombre premier"
Replace-Text "números pares" "nombres pairs"
Replace-Text "número par" "nombre pair"
Replace-Text "números impares" "nombres impairs"
Replace-Text "número impar" "nombre impair"
Replace-Text "número cuadrado" "nombre carré"

# Mathematical operations and concepts
Replace-Text "multiplicación" "multiplication"
Replace-Text "división" "division"
Replace-Text "suma" "somme"
Replace-Text "sumar" "additionner"
Replace-Text "agregar" "ajouter"
Replace-Text "restar" "soustraire"
Replace-Text "doble" "double"
Replace-Text "cuadrado" "carré"
Replace-Text "potencia" "puissance"
Replace-Text "divisible" "divisible"
Replace-Text "divisor" "diviseur"
Replace-Text "divisores" "diviseurs"
Replace-Text "múltiplo" "multiple"
Replace-Text "múltiplos" "multiples"
Replace-Text "factores" "facteurs"
Replace-Text "factor" "facteur"
Replace-Text "relación" "relation"
Replace-Text "estrategia" "stratégie"
Replace-Text "estrategias" "stratégies"
Replace-Text "método" "méthode"
Replace-Text "métodos" "méthodes"

# Common phrases with "es"
Replace-Text "es un caso especial" "est un cas spécial"
Replace-Text "es importante" "est important"
Replace-Text "es muy" "est très"
Replace-Text "es una" "est une"
Replace-Text "es el" "est le"
Replace-Text "es la" "est la"
Replace-Text "es como" "est comme"

# Thinking and understanding
Replace-Text "Piénsalo como" "Pensez-y comme"
Replace-Text "Puedes pensarlo como" "Vous pouvez le concevoir comme"
Replace-Text "pensar en" "penser à"
Replace-Text "Pensar en" "Penser à"

# Learning and students
Replace-Text "estudiantes" "élèves"
Replace-Text "estudiante" "élève"
Replace-Text "aprender" "apprendre"
Replace-Text "Aprender" "Apprendre"
Replace-Text "aprendizaje" "apprentissage"
Replace-Text "habilidades" "compétences"
Replace-Text "habilidad" "compétence"
Replace-Text "capacidad" "capacité"
Replace-Text "comprensión" "compréhension"
Replace-Text "entender" "comprendre"
Replace-Text "Entender" "Comprendre"
Replace-Text "conocer" "connaître"
Replace-Text "memorizar" "mémoriser"
Replace-Text "práctica" "pratique"
Replace-Text "Practica" "Pratiquez"

# Mathematics and geometry
Replace-Text "en matemáticas" "en mathématiques"
Replace-Text "matemáticas" "mathématiques"
Replace-Text "geometría" "géométrie"
Replace-Text "área" "aire"
Replace-Text "ángulo" "angle"
Replace-Text "grados" "degrés"

# Real-world applications
Replace-Text "vida real" "vie réelle"
Replace-Text "vida diaria" "vie quotidienne"
Replace-Text "vida cotidiana" "vie quotidienne"
Replace-Text "frecuentemente" "fréquemment"
Replace-Text "constantemente" "constamment"

# Time-related
Replace-Text "hora" "heure"
Replace-Text "horas" "heures"
Replace-Text "minutos" "minutes"
Replace-Text "minuto" "minute"
Replace-Text "segundos" "secondes"
Replace-Text "segundo" "seconde"
Replace-Text "días" "jours"
Replace-Text "día" "jour"
Replace-Text "semana" "semaine"
Replace-Text "semanas" "semaines"
Replace-Text "mes" "mois"
Replace-Text "meses" "mois"
Replace-Text "año" "an"
Replace-Text "años" "ans"

# Quantity and counting
Replace-Text "contar" "compter"
Replace-Text "cuenta" "compte"
Replace-Text "cálculo" "calcul"
Replace-Text "cálculos" "calculs"
Replace-Text "conteo" "comptage"

Write-Host "`n=== Phase 3: Number-Specific Meanings Translations ===" -ForegroundColor Green

# Common phrases in number meanings
Replace-Text "Como" "Comme"
Replace-Text "Cuando" "Lorsque"
Replace-Text "Esto se llama" "Cela s'appelle"
Replace-Text "Esta es una de" "C'est l'une de"
Replace-Text "Esta tabla" "Cette table"
Replace-Text "Esta relación" "Cette relation"
Replace-Text "Este" "Ce"
Replace-Text "Esta" "Cette"
Replace-Text "Todos los" "Tous les"
Replace-Text "Todas las" "Toutes les"
Replace-Text "Al multiplicar" "En multipliant"
Replace-Text "Sin embargo" "Cependant"
Replace-Text "Además" "De plus"
Replace-Text "También" "Aussi"
Replace-Text "Por lo tanto" "Par conséquent"
Replace-Text "Debido a" "En raison de"

# Specific phrases
Replace-Text "lo estás agregando a sí mismo" "vous l'ajoutez à lui-même"
Replace-Text "tomar un número" "prendre un nombre"
Replace-Text "es parte de" "fait partie de"
Replace-Text "se puede" "peut être"
Replace-Text "se usa" "est utilisé"
Replace-Text "se encuentra" "se trouve"
Replace-Text "aparece" "apparaît"
Replace-Text "termina en" "se termine par"
Replace-Text "terminan en" "se terminent par"

# "Que" phrases
Replace-Text "Que" "Que"
Replace-Text "que es" "qui est"
Replace-Text "que tiene" "qui a"
Replace-Text "que sea" "qui soit"
Replace-Text "que son" "qui sont"
Replace-Text "que puede" "qui peut"
Replace-Text "que muestra" "qui montre"

# Common sentence starters for explanations
Replace-Text "Esto hace que" "Cela fait que"
Replace-Text "Esto significa" "Cela signifie"
Replace-Text "Esto enseña" "Cela enseigne"
Replace-Text "Esto forma" "Cela forme"
Replace-Text "Esto desarrolla" "Cela développe"
Replace-Text "Esto muestra" "Cela montre"
Replace-Text "Esto requiere" "Cela nécessite"

Replace-Text "hace que el" "rend le"
Replace-Text "hace que la" "rend la"
Replace-Text "hace que aprender" "rend l'apprentissage"

# Specific mathematical expressions
Replace-Text "de memoria" "par cœur"
Replace-Text "truco de" "astuce de"
Replace-Text "regla de" "règle de"
Replace-Text "suma de" "somme de"
Replace-Text "base de" "base de"
Replace-Text "punto de" "point de"

Write-Host "`n=== Phase 4: Pattern Descriptions ===" -ForegroundColor Green

# Pattern-specific terms
Replace-Text "Patrón" "Modèle"
Replace-Text "Observa" "Observez"
Replace-Text "Nota" "Notez"
Replace-Text "Recuerda" "Rappelez-vous"
Replace-Text "dígito" "chiffre"
Replace-Text "dígitos" "chiffres"
Replace-Text "unidades" "unités"
Replace-Text "decenas" "dizaines"
Replace-Text "centenas" "centaines"

# Common pattern phrases
Replace-Text "Siempre Termina en" "Se Termine Toujours par"
Replace-Text "Siempre termina en" "se termine toujours par"
Replace-Text "Siempre Par" "Toujours Pair"
Replace-Text "Siempre par" "toujours pair"
Replace-Text "Siempre Números Pares" "Toujours des Nombres Pairs"
Replace-Text "Siempre Divisible por" "Toujours Divisible par"
Replace-Text "Siempre divisible por" "toujours divisible par"

Replace-Text "Doble del" "Double de"
Replace-Text "Triple del" "Triple de"
Replace-Text "Cuatro Veces el" "Quatre Fois le"
Replace-Text "Cuatro veces el" "quatre fois le"

Replace-Text "Cuadrado del" "Carré de"
Replace-Text "Potencia de" "Puissance de"
Replace-Text "Potencia del" "Puissance de"

Replace-Text "Relación con" "Relation avec"
Replace-Text "Relación de" "Relation de"
Replace-Text "Relaciones de" "Relations de"

Replace-Text "Alternativa" "Alternative"
Replace-Text "Múltiples" "Multiples"

Replace-Text "Similar a" "Similaire à"
Replace-Text "Cadena de" "Chaîne de"

# Strategy names
Replace-Text "Estrategia" "Stratégie"
Replace-Text "Singularidad de Número Primo" "Particularité de Nombre Premier"
Replace-Text "Propiedad de Número Primo" "Propriété de Nombre Premier"
Replace-Text "Propiedades de Número Primo" "Propriétés de Nombre Premier"

Replace-Text "Muchos Divisores" "Nombreux Diviseurs"
Replace-Text "Muy regular" "Très régulier"
Replace-Text "predecible" "prévisible"

Write-Host "`n=== Phase 5: Practice Strategies ===" -ForegroundColor Green

# Practice instruction verbs
Replace-Text "Usa" "Utilisez"
Replace-Text "Ejemplo:" "Exemple :"
Replace-Text "Relaciónalo con" "Reliez-le à"
Replace-Text "Cuenta de" "Comptez de"
Replace-Text "Memoriza" "Mémorisez"
Replace-Text "Descubre" "Découvrez"

# Practice-specific phrases
Replace-Text "multiplica por" "multipliez par"
Replace-Text "duplica" "doublez"
Replace-Text "duplica:" "doublez :"
Replace-Text "duplica la tabla" "doublez la table"
Replace-Text "duplica cada resultado" "doublez chaque résultat"
Replace-Text "triplica" "triplez"
Replace-Text "triplica la tabla" "triplez la table"
Replace-Text "cuadruplica" "quadruplez"
Replace-Text "cuadruplica la tabla" "quadruplez la table"

Replace-Text "Si conoces" "Si vous connaissez"
Replace-Text "O usa" "Ou utilisez"
Replace-Text "agrega un" "ajoutez un"
Replace-Text "agrega un 0" "ajoutez un 0"
Replace-Text "agrega 0" "ajoutez 0"
Replace-Text "menos" "moins"
Replace-Text "más" "plus"
Replace-Text "entonces" "alors"

Replace-Text "Practica los múltiplos más difíciles:" "Pratiquez les multiples les plus difficiles :"
Replace-Text "Practica los múltiplos más útiles:" "Pratiquez les multiples les plus utiles :"

# Common applications
Replace-Text "Tiempo:" "Temps :"
Replace-Text "Calendario:" "Calendrier :"
Replace-Text "Medición de ángulos:" "Mesure d'angle :"
Replace-Text "Cálculo porcentual:" "Calcul de pourcentage :"
Replace-Text "Ángulo:" "Angle :"
Replace-Text "Computación:" "Informatique :"
Replace-Text "Biología:" "Biologie :"
Replace-Text "Ajedrez:" "Échecs :"
Replace-Text "Semana laboral:" "Semaine de travail :"
Replace-Text "Referencia a" "Référence à"

# Additional common phrases
Replace-Text "para cálculos" "pour les calculs"
Replace-Text "para el cálculo" "pour le calcul"
Replace-Text "Útil en" "Utile dans"
Replace-Text "Útil para" "Utile pour"
Replace-Text "aplicación" "application"
Replace-Text "contexto" "contexte"
Replace-Text "importante en" "important dans"
Replace-Text "crítico para" "critique pour"

Write-Host "`n=== Phase 6: Common Mistakes ===" -ForegroundColor Green

# Mistake phrases
Replace-Text "Pensar que" "Penser que"
Replace-Text "Confundir" "Confondre"
Replace-Text "Olvidar" "Oublier"
Replace-Text "Calcular incorrectamente" "Calculer incorrectement"
Replace-Text "en lugar de" "au lieu de"
Replace-Text "con" "avec"
Replace-Text "es correcto" "est correct"
Replace-Text "es otro resultado" "est un autre résultat"
Replace-Text "es otro cálculo" "est un autre calcul"
Replace-Text "en realidad es" "est en réalité"
Replace-Text "Siempre recuerda" "Rappelez-vous toujours"
Replace-Text "deben terminar en" "doivent se terminer par"

# Specific mistake-related words
Replace-Text "error" "erreur"
Replace-Text "errores" "erreurs"
Replace-Text "Errores" "Erreurs"
Replace-Text "Comunes" "Courantes"
Replace-Text "comunes" "courantes"
Replace-Text "evitar" "éviter"
Replace-Text "evitarlos" "les éviter"
Replace-Text "consciente" "conscient"

Write-Host "`n=== Phase 7: Specific Number Descriptions ===" -ForegroundColor Green

# Numbers and counting in French
Replace-Text " 1 " " 1 "
Replace-Text " 2 " " 2 "
# (Numbers themselves stay the same, but context changes)

# Ordinal and sequential
Replace-Text "primera" "première"
Replace-Text "primer" "premier"
Replace-Text "segunda" "deuxième"
Replace-Text "segundo" "deuxième"
Replace-Text "tercera" "troisième"
Replace-Text "tercer" "troisième"
Replace-Text "cuarta" "quatrième"
Replace-Text "cuarto" "quatrième"
Replace-Text "quinta" "cinquième"
Replace-Text "quinto" "cinquième"

# Number-related adjectives
Replace-Text "docena" "douzaine"
Replace-Text "docenas" "douzaines"
Replace-Text "mitad" "moitié"
Replace-Text "cuarto" "quart"
Replace-Text "cuartos" "quarts"
Replace-Text "tercio" "tiers"
Replace-Text "tercios" "tiers"

# Collections and groups
Replace-Text "pares" "paires"
Replace-Text "par" "paire"
Replace-Text "tríos" "trios"
Replace-Text "trío" "trio"
Replace-Text "conjunto" "ensemble"
Replace-Text "conjuntos" "ensembles"
Replace-Text "equitativamente" "équitablement"

# Geometry terms
Replace-Text "triángulos" "triangles"
Replace-Text "triángulo" "triangle"
Replace-Text "cuadrados" "carrés"
Replace-Text "cuadrado" "carré"
Replace-Text "lados" "côtés"
Replace-Text "lado" "côté"
Replace-Text "casillas" "cases"
Replace-Text "casilla" "case"
Replace-Text "tablero" "plateau"
Replace-Text "octógonos" "octogones"
Replace-Text "octógono" "octogone"
Replace-Text "hexágonos" "hexagones"
Replace-Text "hexágono" "hexagone"

# Comparative and superlative
Replace-Text "más fácil" "plus facile"
Replace-Text "más difícil" "plus difficile"
Replace-Text "más práctico" "plus pratique"
Replace-Text "más útil" "plus utile"
Replace-Text "MÁS DIFÍCIL" "PLUS DIFFICILE"
Replace-Text "SÚPER FÁCIL" "SUPER FACILE"
Replace-Text "MUY FÁCIL" "TRÈS FACILE"
Replace-Text "PERFECTO" "PARFAIT"
Replace-Text "PERFECTA" "PARFAITE"

# Questions and expressions
Replace-Text "¿Cuál es más fácil?" "Laquelle est plus facile ?"
Replace-Text "¿cuál es" "laquelle est"
Replace-Text "¿Cuántos" "Combien de"
Replace-Text "¿cuántos" "combien de"

# Exclamations
Replace-Text "¡Muy simple!" "Très simple !"
Replace-Text "¡Muy fácil!" "Très facile !"
Replace-Text "¡Muy práctico!" "Très pratique !"
Replace-Text "¡PERFECTO!" "PARFAIT !"
Replace-Text "¡Simple!" "Simple !"

Write-Host "`n=== Phase 8: Educational and Cultural References ===" -ForegroundColor Green

# Educational context
Replace-Text "Guía del Autoestopista Galáctico" "Guide du Voyageur Galactique"
Replace-Text "cultura popular" "culture populaire"
Replace-Text "cultura de ciencia ficción" "culture de science-fiction"

# Ages and legal terms
Replace-Text "mayoría de edad" "majorité"
Replace-Text "edad de jubilación" "âge de la retraite"
Replace-Text "edad legal" "âge légal"
Replace-Text "mediana edad" "âge moyen"
Replace-Text "esperanza de vida" "espérance de vie"
Replace-Text "temperatura corporal" "température corporelle"
Replace-Text "fiebre" "fièvre"

# Physical and biological
Replace-Text "zapatos" "chaussures"
Replace-Text "ruedas" "roues"
Replace-Text "bicicleta" "vélo"
Replace-Text "patas" "pattes"
Replace-Text "sillas" "chaises"
Replace-Text "autos" "voitures"
Replace-Text "cromosomas" "chromosomes"
Replace-Text "ADN humano" "ADN humain"
Replace-Text "pares de cromosomas" "paires de chromosomes"

# Money and commerce
Replace-Text "dinero" "argent"
Replace-Text "monedas" "pièces"
Replace-Text "billetes" "billets"
Replace-Text "centavos" "centimes"
Replace-Text "pesos" "pesos"
Replace-Text "dólares" "dollars"
Replace-Text "euros" "euros"
Replace-Text "descuento" "réduction"
Replace-Text "propina" "pourboire"
Replace-Text "porcentaje" "pourcentage"
Replace-Text "porcentajes" "pourcentages"

# Games and entertainment
Replace-Text "dados" "dés"
Replace-Text "dado" "dé"
Replace-Text "cartas" "cartes"
Replace-Text "carta" "carte"
Replace-Text "baraja" "jeu"
Replace-Text "juegos" "jeux"
Replace-Text "juego" "jeu"
Replace-Text "equipo de fútbol" "équipe de football"
Replace-Text "deportes" "sports"

# Food and household
Replace-Text "cartones de huevos" "boîtes d'œufs"
Replace-Text "cartón de huevos" "boîte d'œufs"
Replace-Text "huevos" "œufs"
Replace-Text "huevo" "œuf"
Replace-Text "celdas de panal" "cellules de nid d'abeilles"
Replace-Text "embalaje" "emballage"
Replace-Text "agrupación" "groupement"

# Technology and computers
Replace-Text "informática" "informatique"
Replace-Text "ciencias de la computación" "sciences informatiques"
Replace-Text "sistema de 32 bits" "système 32 bits"
Replace-Text "sistema de 64 bits" "système 64 bits"
Replace-Text "arquitectura de 64 bits" "architecture 64 bits"
Replace-Text "sistema binario" "système binaire"
Replace-Text "sistema hexadecimal" "système hexadécimal"
Replace-Text "bits" "bits"
Replace-Text "byte" "octet"
Replace-Text "bytes" "octets"

# Measurements and units
Replace-Text "metros" "mètres"
Replace-Text "metro" "mètre"
Replace-Text "kilogramos" "kilogrammes"
Replace-Text "kilogramo" "kilogramme"
Replace-Text "mediciones" "mesures"
Replace-Text "medición" "mesure"
Replace-Text "unidades de medida" "unités de mesure"
Replace-Text "punto de congelación" "point de congélation"
Replace-Text "agua" "eau"
Replace-Text "Fahrenheit" "Fahrenheit"
Replace-Text "Celsius" "Celsius"

# Time and calendar
Replace-Text "intervalos de 5 minutos" "intervalles de 5 minutes"
Replace-Text "cuarto de hora" "quart d'heure"
Replace-Text "media hora" "demi-heure"
Replace-Text "tres cuartos de hora" "trois quarts d'heure"
Replace-Text "sexto de" "sixième de"
Replace-Text "círculo" "cercle"
Replace-Text "vuelta completa" "tour complet"
Replace-Text "décima parte" "dixième partie"

Replace-Text "continentes" "continents"
Replace-Text "continente" "continent"
Replace-Text "países" "pays"
Replace-Text "país" "pays"
Replace-Text "mundo" "monde"

# Nature and science
Replace-Text "naturaleza" "nature"
Replace-Text "panal de abeja" "nid d'abeilles"
Replace-Text "planeta" "planète"
Replace-Text "universo" "univers"

# Music and arts
Replace-Text "música" "musique"
Replace-Text "octava" "octave"
Replace-Text "octavas" "octaves"
Replace-Text "teoría musical" "théorie musicale"

# Other common words
Replace-Text "alfabeto" "alphabet"
Replace-Text "letras" "lettres"
Replace-Text "letra" "lettre"
Replace-Text "referencias culturales" "références culturelles"
Replace-Text "significado" "signification"
Replace-Text "especialmente" "spécialement"
Replace-Text "principalmente" "principalement"
Replace-Text "generalmente" "généralement"

Write-Host "`n=== Phase 9: Long Phrase Replacements ===" -ForegroundColor Green

# Specific long phrases that need special attention
Replace-Text "cada vez que multiplicas" "chaque fois que vous multipliez"
Replace-Text "estás contando grupos de" "vous comptez des groupes de"
Replace-Text "hay un patrón hermoso" "il y a un beau modèle"
Replace-Text "tiene propiedades" "a des propriétés"
Replace-Text "solo es divisible por" "n'est divisible que par"
Replace-Text "se puede calcular" "peut être calculé"
Replace-Text "puede calcularse" "peut être calculé"
Replace-Text "se puede derivar" "peut être dérivé"
Replace-Text "no se puede derivar" "ne peut pas être dérivé"

Replace-Text "sistema decimal" "système décimal"
Replace-Text "valor posicional" "valeur positionnelle"
Replace-Text "reconocimiento de patrones" "reconnaissance de modèles"
Replace-Text "cálculo mental" "calcul mental"
Replace-Text "aritmética mental" "arithmétique mentale"
Replace-Text "resolución de problemas" "résolution de problèmes"
Replace-Text "pensamiento matemático" "pensée mathématique"

Replace-Text "fracciones" "fractions"
Replace-Text "fracción" "fraction"
Replace-Text "proporciones" "proportions"
Replace-Text "proporción" "proportion"
Replace-Text "ecuaciones" "équations"
Replace-Text "ecuación" "équation"

Write-Host "`n=== Phase 10: Verb Conjugations and Complex Sentences ===" -ForegroundColor Green

# Common verb forms
Replace-Text "tienes" "vous avez"
Replace-Text "tengo" "j'ai"
Replace-Text "tiene" "a"
Replace-Text "tienen" "ont"
Replace-Text "puedes" "vous pouvez"
Replace-Text "puede" "peut"
Replace-Text "pueden" "peuvent"
Replace-Text "debes" "vous devez"
Replace-Text "debe" "doit"
Replace-Text "deben" "doivent"
Replace-Text "hay" "il y a"

# Helping verbs and modal verbs
Replace-Text "necesitas" "vous avez besoin de"
Replace-Text "necesita" "a besoin de"
Replace-Text "necesitan" "ont besoin de"
Replace-Text "quieres" "vous voulez"
Replace-Text "quiere" "veut"
Replace-Text "quieren" "veulent"
Replace-Text "sabes" "vous savez"
Replace-Text "sabe" "sait"
Replace-Text "saben" "savent"

# Reflexive and passive forms
Replace-Text "se llama" "s'appelle"
Replace-Text "se llaman" "s'appellent"
Replace-Text "se ve" "se voit"
Replace-Text "se ven" "se voient"
Replace-Text "se puede ver" "peut être vu"
Replace-Text "se encuentran" "se trouvent"

# Gerunds and continuous forms
Replace-Text "multiplicando" "en multipliant"
Replace-Text "sumando" "en additionnant"
Replace-Text "restando" "en soustrayant"
Replace-Text "dividiendo" "en divisant"
Replace-Text "usando" "en utilisant"
Replace-Text "aprendiendo" "en apprenant"
Replace-Text "practicando" "en pratiquant"

# Imperatives (commands) - additional ones
Replace-Text "Observa el" "Observez le"
Replace-Text "Observa la" "Observez la"
Replace-Text "Nota que" "Notez que"
Replace-Text "Recuerda que" "Rappelez-vous que"
Replace-Text "Utiliza" "Utilisez"
Replace-Text "Aplica" "Appliquez"
Replace-Text "Considera" "Considérez"
Replace-Text "Explora" "Explorez"

Write-Host "`n=== Phase 11: Final Cleanup and Edge Cases ===" -ForegroundColor Green

# Remaining common words
Replace-Text "cada" "chaque"
Replace-Text "todo" "tout"
Replace-Text "todos" "tous"
Replace-Text "toda" "toute"
Replace-Text "algunas" "quelques"
Replace-Text "algunos" "quelques"
Replace-Text "muchas" "beaucoup de"
Replace-Text "muchos" "beaucoup de"
Replace-Text "varias" "plusieurs"
Replace-Text "varios" "plusieurs"

Replace-Text "solo" "seulement"
Replace-Text "solamente" "seulement"
Replace-Text "únicamente" "uniquement"
Replace-Text "principalmente" "principalement"

Replace-Text "así" "ainsi"
Replace-Text "tal" "tel"
Replace-Text "mismo" "même"
Replace-Text "misma" "même"
Replace-Text "mismos" "mêmes"
Replace-Text "mismas" "mêmes"

Replace-Text "otro" "autre"
Replace-Text "otra" "autre"
Replace-Text "otros" "autres"
Replace-Text "otras" "autres"

Replace-Text "nuevo" "nouveau"
Replace-Text "nueva" "nouvelle"
Replace-Text "nuevos" "nouveaux"
Replace-Text "nuevas" "nouvelles"

Replace-Text "diferente" "différent"
Replace-Text "diferentes" "différents"
Replace-Text "distinto" "distinct"
Replace-Text "distintos" "distincts"

Replace-Text "siguiente" "suivant"
Replace-Text "siguientes" "suivants"
Replace-Text "anterior" "précédent"
Replace-Text "anteriores" "précédents"

Replace-Text "mayor" "plus grand"
Replace-Text "menor" "plus petit"
Replace-Text "máximo" "maximum"
Replace-Text "mínimo" "minimum"

Replace-Text "grande" "grand"
Replace-Text "grandes" "grands"
Replace-Text "pequeño" "petit"
Replace-Text "pequeños" "petits"
Replace-Text "pequeña" "petite"
Replace-Text "pequeñas" "petites"

Replace-Text "largo" "long"
Replace-Text "corto" "court"
Replace-Text "alto" "haut"
Replace-Text "bajo" "bas"

Replace-Text "rápido" "rapide"
Replace-Text "rápida" "rapide"
Replace-Text "lento" "lent"
Replace-Text "lenta" "lente"

Replace-Text "mejor" "meilleur"
Replace-Text "peor" "pire"

Replace-Text "aquí" "ici"
Replace-Text "allí" "là"
Replace-Text "ahora" "maintenant"
Replace-Text "después" "après"
Replace-Text "antes" "avant"
Replace-Text "luego" "ensuite"

Replace-Text "donde" "où"
Replace-Text "cómo" "comment"
Replace-Text "por qué" "pourquoi"
Replace-Text "porque" "parce que"

Replace-Text "muy" "très"
Replace-Text "mucho" "beaucoup"
Replace-Text "poco" "peu"
Replace-Text "demasiado" "trop"
Replace-Text "bastante" "assez"

Replace-Text "bien" "bien"
Replace-Text "mal" "mal"

Replace-Text "sí" "oui"
Replace-Text "no" "non"

Replace-Text "con" "avec"
Replace-Text "sin" "sans"
Replace-Text "para" "pour"
Replace-Text "por" "par"
Replace-Text "de" "de"
Replace-Text "en" "dans"
Replace-Text "sobre" "sur"
Replace-Text "bajo" "sous"
Replace-Text "entre" "entre"
Replace-Text "desde" "depuis"
Replace-Text "hasta" "jusqu'à"

Replace-Text "o" "ou"
Replace-Text "y" "et"
Replace-Text "pero" "mais"

Replace-Text "su" "son"
Replace-Text "sus" "ses"
Replace-Text "tu" "ton"
Replace-Text "tus" "tes"

Replace-Text "este" "ce"
Replace-Text "esta" "cette"
Replace-Text "estos" "ces"
Replace-Text "estas" "ces"
Replace-Text "ese" "ce"
Replace-Text "esa" "cette"
Replace-Text "esos" "ces"
Replace-Text "esas" "ces"

Replace-Text "él" "il"
Replace-Text "ella" "elle"
Replace-Text "ellos" "ils"
Replace-Text "ellas" "elles"

# Save the file with UTF-8 encoding (no BOM)
[System.IO.File]::WriteAllText($filePath, $content, $encoding)

Write-Host "`n=== Translation Complete ===" -ForegroundColor Green
Write-Host "Total replacements made: $replacementCount" -ForegroundColor Cyan
Write-Host "File saved: $filePath" -ForegroundColor Yellow
Write-Host "`nPlease review the file to ensure all translations are correct." -ForegroundColor Magenta
Write-Host "Run 'npm run build' to verify there are no errors." -ForegroundColor Magenta
