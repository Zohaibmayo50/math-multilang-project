# Comprehensive Portuguese Translation Fix Script
# Replaces ALL remaining Swedish text in Portuguese components

$files = @(
    "app\components\pt\NumberPage.tsx",
    "app\components\pt\RangePage.tsx",
    "app\components\pt\NumberGames.tsx"
)

$translations = @{
    # Common Swedish phrases
    "Att multiplicera med" = "Multiplicar por"
    "Att lära sig" = "Aprender"
    "Att märka" = "Perceber"
    "Att skapa" = "Criar"
    "Att spela" = "Jogar"
    "När du multiplicerar" = "Quando você multiplica"
    "vilket tal som helst" = "qualquer número"
    "är resultatet alltid" = "o resultado é sempre"
    "Detta kallas" = "Isso é chamado de"
    "Tänk på det så här" = "Pense assim"
    "Hur många grupper" = "Quantos grupos"
    "betyder att ta" = "significa pegar"
    "Du kan tänka" = "Você pode pensar"
    "att lägga till" = "adicionar"
    "samma tal" = "o mesmo número"
    "Denna tabell" = "Esta tabuada"
    "är viktig för" = "é importante para"
    "att förstå" = "entender"
    "förekommer ofta" = "ocorre frequentemente"
    "i vardagen" = "no dia a dia"
    "i naturen" = "na natureza"
    "är vanligtvis" = "é geralmente"
    "en av de" = "uma das"
    "svåraste tabellerna" = "tabuadas mais difíceis"
    "enklaste tabellerna" = "tabuadas mais fáceis"
    "eftersom" = "porque"
    "är ett primtal" = "é um número primo"
    "inte lätt" = "não é fácil"
    "kan härledas" = "pode ser derivado"
    "från andra tabeller" = "de outras tabuadas"
    "Men alla" = "Mas todos"
    "multiplar av" = "múltiplos de"
    "har vackra mönster" = "têm belos padrões"
    "kan läras genom" = "podem ser aprendidos através de"
    "är ett viktigt tal för" = "é um número importante para"
    "veckodagar" = "dias da semana"
    "kontinenter" = "continentes"
    "många kulturella" = "muitas culturais"
    "referenser" = "referências"
    "lägger du bara till" = "você apenas adiciona"
    "en nolla i slutet" = "um zero no final"
    "utgör grunden för" = "forma a base para"
    "vårt decimalsystem" = "nosso sistema decimal"
    "lär eleverna" = "ensina os alunos"
    "begreppet platsvärde" = "o conceito de valor posicional"
    "hur man arbetar med" = "como trabalhar com"
    "stora tal" = "números grandes"
    "är jämförelsepunkten" = "é o ponto de referência"
    "är grunden för alla" = "é a base de todas"
    "multiplikationsoperationer" = "operações de multiplicação"
    "De lär" = "Eles ensinam"
    "har en identitet" = "têm uma identidade"
    "när de multipliceras" = "quando multiplicados"
    "förblir de oförändrade" = "permanecem inalterados"
    "Detta koncept" = "Este conceito"
    "för att förstå senare" = "para entender mais tarde"
    "algebraiska egenskaper" = "propriedades algébricas"
    "Även om det verkar" = "Embora pareça"
    "bygger inlärning" = "aprender constrói"
    "självförtroende" = "autoconfiança"
    "etablerar mönstret" = "estabelece o padrão"
    "är ordnad och" = "é ordenada e"
    "förutsägbar" = "previsível"
    "den första riktiga" = "a primeira verdadeira"
    "det finns en god anledning" = "há uma boa razão"
    "Dubblering" = "Dobrar"
    "är ett naturligt koncept" = "é um conceito natural"
    "som barn möter" = "que as crianças encontram"
    "dagligen" = "diariamente"
    "gör mental aritmetik" = "torna a aritmética mental"
    "mycket snabbare" = "muito mais rápida"
    "förbereder eleverna för" = "prepara os alunos para"
    "jämna tal" = "números pares"
    "bråk" = "frações"
    "halvor" = "metades"
    "grundläggande division" = "divisão básica"
    "Många elever tycker" = "Muitos alunos acham"
    "den enklaste tabellen" = "a tabuada mais fácil"
    "vilket bygger" = "o que constrói"
    "för mer komplexa" = "para tabuadas mais complexas"
    "fyller gapet mellan" = "preenche a lacuna entre"
    "enkla och komplexa" = "simples e complexas"
    "Den kräver att" = "Ela exige que"
    "går bortom enkel" = "vão além da simples"
    "känner igen nya" = "reconheçam novos"
    "förekommer ständigt" = "ocorre constantemente"
    "verkliga sammanhang" = "contextos reais"
    "att räkna i grupper" = "contar em grupos"
    "triangelformer" = "formas triangulares"
    "arbeta med tid" = "trabalhar com tempo"
    "tre tidsperioder per dag" = "três períodos por dia"
    "Elever som lär sig" = "Alunos que aprendem"
    "visar behärskning av" = "demonstram domínio de"
    "abstrakt räkning" = "contagem abstrata"
    "hjälper elever att utveckla" = "ajuda os alunos a desenvolver"
    "flyt med" = "fluência com"
    "detta viktiga tal" = "este número importante"
    "Det förekommer ofta i" = "Ocorre frequentemente em"
    "matematik och vardagsliv" = "matemática e vida cotidiana"
    "är avgörande för" = "é crucial para"
    "att bygga en solid" = "construir uma sólida"
    "räknefärdighet" = "habilidade de cálculo"
    
    # Specific phrases
    "Grunden för Alla Tabeller" = "Base para Todas as Tabuadas"
    "Varje Tabuada börjar med" = "Cada tabuada começa com"
    "så detta mönster" = "então este padrão"
    "förekommer i alla tabeller" = "ocorre em todas as tabuadas"
    "Räkna med två" = "Conte de dois em dois"
    "medan du går" = "enquanto caminha"
    "eller går upp för trappor" = "ou sobe escadas"
    "Använd flashkort för" = "Use cartões de memória para"
    "slumpmässig testning" = "teste aleatório"
    "Öva 5-10 minuter dagligen" = "Pratique 5-10 minutos diariamente"
    "istället för långt studerande" = "em vez de longas sessões de estudo"
    "på en gång" = "de uma vez"
    "Övningar" = "Exercícios"
    "lär dig praktiska sätt" = "aprenda maneiras práticas"
    "att bemästra den" = "de dominar"
    "Börja Öva" = "Começar a Praticar"
    "Ladda ner Övningar" = "Baixar Exercícios"
    "Detta lär dig" = "Isso ensina"
    "grundläggande operationer" = "operações básicas"
    "som hjälper dig mycket" = "que ajudam muito"
    "och avancerade matematikämnen" = "e tópicos avançados de matemática"
    "Varför Är Det Viktigt Att Lära Sig" = "Por Que É Importante Aprender"
    "Tabuadaen" = "a Tabuada do"
    "kräver konsekvent övning" = "requer prática consistente"
    "med rätta strategier" = "com as estratégias corretas"
    "Här är beprövade metoder" = "Aqui estão métodos comprovados"
    "för att specifikt bemästra" = "para dominar especificamente"
    "Vanliga Misstag När Man Lär Sig" = "Erros Comuns ao Aprender"
    "gör liknande misstag" = "cometem erros semelhantes"
    "när de lär sig" = "ao aprender"
    "Att vara medveten om" = "Estar ciente de"
    "dessa vanliga misstag" = "esses erros comuns"
    "Utforska alla Tabuadaer" = "Explore todas as Tabuadas"
    "i detta intervall med" = "neste intervalo com"
    "övningsverktyg och spel" = "ferramentas de prática e jogos"
    "för tal i este intervalo" = "para números neste intervalo"
    "visar specifika mönster" = "mostram padrões específicos"
    "detta mönster är användbart" = "este padrão é útil"
    "för verifiering" = "para verificação"
    "Skapa berättelser" = "Criar histórias"
    "Att skapa en kort historia" = "Criar uma história curta"
    "för varje tal" = "para cada número"
    "Övningsuppgifter" = "Tarefas de Prática"
    "Regelbunden övning" = "Prática regular"
    "säkerställer att" = "garante que"
    "den inlärda kunskapen" = "o conhecimento aprendido"
    "blir bestående" = "se torne permanente"
    "Att spela multiplikationsspel" = "Jogar jogos de multiplicação"
    "gör att man lär sig" = "faz com que se aprenda"
    "genom att ha kul" = "se divertindo"
    "Var tålmodig och regelbunden" = "Seja paciente e consistente"
    "för att lära dig alla" = "para aprender todas"
    "Varje intervall bygger på" = "Cada intervalo se baseia"
    "det föregående" = "no anterior"
    
    # Swedish words to Portuguese
    "Tabuadaerna" = "As Tabuadas"
    "tabellerna" = "tabuadas"
    "tabeller" = "tabuadas"
    "tabell" = "tabuada"
}

foreach ($file in $files) {
    $filePath = Join-Path $PSScriptRoot $file
    if (Test-Path $filePath) {
        Write-Host "Processing: $file" -ForegroundColor Cyan
        $content = Get-Content $filePath -Raw -Encoding UTF8
        
        $changeCount = 0
        foreach ($swedish in $translations.Keys) {
            $portuguese = $translations[$swedish]
            if ($content -match [regex]::Escape($swedish)) {
                $content = $content -replace [regex]::Escape($swedish), $portuguese
                $changeCount++
            }
        }
        
        if ($changeCount -gt 0) {
            $content | Set-Content $filePath -Encoding UTF8 -NoNewline
            Write-Host "  ✓ Made $changeCount translations" -ForegroundColor Green
        } else {
            Write-Host "  - No Swedish text found" -ForegroundColor Yellow
        }
    } else {
        Write-Host "File not found: $file" -ForegroundColor Red
    }
}

Write-Host "`n✅ Translation fix complete!" -ForegroundColor Green
