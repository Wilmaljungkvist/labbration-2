# Reflektion
**Namngivning (Kapitel 2)**

<table>
<tr>
<td>

**_Namn och förklaring_**
</td>
<td>

**_Reflektion och regler från clean code_**
</td>
</tr>
<tr>
<td>

**_handleMinMax:_**<br>Metod som används för att validera minimum och maximum värden. Metoden kastar ett fel om minimum är större än maximum.
</td>
<td>

**Use Intention-Revealing Names:** 

handleMinMax är inte jätte beskrivande och det är svårt att veta vad metoden faktiskt gör utan att läsa hela metoden. validateMinMaxRange skulle vara ett bättre namn för metoden. För nu ser det mest ut som att metoden hanterar min och  max.

\
**Method Names:**

Enligt boken ska metodnamn ha ett verb i sig eller verbfraser vilket handleMinMax har där handle är ett verb och då beskriver att metoden ska göra något, men validate hade varit ett bättre verb istället för handle.
</td>
</tr>
<tr>
<td>

**randomIndex:**

Konstant som är de randomIndex som slumpas fram i konstantens metod.
</td>
<td>

**Avoid Disinformation:** 

Namnet ‘randomIndex’ ger intrycket att konstanten ska vara ett slumpat index av något slag. Vilket denna konstant är och följer då principen om att inte ge ut fel information med namnet.

**Use Solution Domain Names:**

Namnet ‘randomIndex’ använder sig av ord som personer som läser kod oftast förstår sig av. Random är ett ord som ofta används som prefix till variabler som är kopplade till slump eller chans och index refererar ofta till en position, men inte alltid.
</td>
</tr>
<tr>
<td>

**_RandomArrayGenerator:_**<br>Klass för random metoder som har med arrayer att göra.
</td>
<td>

**Class Names:**

En klass ska enligt boken vara uppbyggd av substantiv. Array och generator är substantiv men Random är ett adjektiv. Därför hade det varit bättre om klassen enbart hette ArrayGenerator.

**Use Searchable Names:** 

Lätt att söka efter och risken för att många andra namn skulle komma upp när man söker efter detta är låg.
</td>
</tr>
<tr>
<td>

**randomBoolean:**<br>Metod som har i uppgift att retunera en slumpad boolean dvs true eller false.
</td>
<td>

**Use Pronounceable Names:**

Namnet är lätt att uttala och går därför lätt att diskutera utan att det låter konstigt när man säger det högt.

**Pick One Word Per Concept**

De flesta av metoderna i klasserna saknar ett verb i sina namn. Enligt Clean Code boken bör metoder inkludera ett verb för att tydligt visa vad de gör. När jag ändrar namnen och lägger till ett verb för att göra det mer uppenbart vad metoderna gör, skulle jag välja 'get' före namnen på de metoderna som returnerar något. Till exempel, 'getRandomBoolean' skulle vara ett bättre och mer beskrivande namn eftersom det innehåller ett verb och gör funktionen tydligare.
</td>
</tr>
<tr>
<td>

**temp:**

Variabel som i shuffleArray metoden temporärt håller ett nummer i arrayen.
</td>
<td>

**Avoid Mental Mapping och Avoid Encodings:** 

Namnet kan kräva att läsaren har hört detta namnet tidigare för att förså att den temporärt håller namn.

Ett bättre namn hade varit currentValue, ElementToSwap eller temporaryValue vilket hade varit mer beskrivande, undvikit att användaren behöver veta vad de betyder innan och förklarat vad variabeln gör bättre.

Denna variabel är en förkortning av “temporarily” och vet inte en ny person som ska kolla i koden detta kan det bli svårt att veta vad de står för. Temp skulle dessutom kunna stå för flera saker som t.ex temperatur vilket även här kan göra så att personen missförstår vad den gör utan att nogrannt gå igenom koden. Funktionen är liten och kontexten kommer snabbt fram iallafall, men det hade varit tydligare med ett bättre namn.
</td>
</tr>
</table>


### Reflektion på kapitel 2

När jag reflekterar över innehållet i boken och mina egna namn finns det en del saker jag hade kunnat göra bättre. 

Jag har inte använt några verb i mina metodnamn. För att göra det tydligare och lättare att läsa hade jag lagt till verb för att visa vad metoderna gör. Så om den returnerar något hade jag använt mig av ‘get’ i början av namnet. Ett exempel är ‘randomInt’ som hade varit tydligare om metoden hette ‘getRandomInt’. Om den validerar hade jag kunnat använda ‘validate’ istället för ‘handle’, eftersom ‘validate’ är tydligare då ‘handle’ bara visar att något hanteras egentligen.

Jag hade även kunnat förbättra mina klassnamn genom att ta bort adjektiven och enbart använda subjektiv, dock anser inte jag att ‘Random’ i början förstörde läsbarheten, men ska man följa boken skulle de enbart vara subjektiv för att visa för framtida läsare att det faktiskt är en klass.

Jag vill dock ge mig en klapp på axeln för att jag ändå använt mig av mestadels tydliga och beskrivande namn och hållt mig till att namnet ska va ungefär lika tydligt och långt som scopet de ska användas i. Har inte heller ljugit med mina namn och sagt number i namnet när de egentligen är en sträng. 

**Funktioner (Kapitel 3)**

<table>
<tr>
<td>Metodnamn och länk eller kod</td>
<td>antal rader</td>
<td>reflektion</td>
</tr>
<tr>
<td>

handleArray

handleArray (arr) {

if (arr.length \<= 0) {

throw new Error('Array can not be empty.')

} else if (!Array.isArray(arr)) {

throw new Error('Must be an array.')

} else {

return true

}

}
</td>
<td>9</td>
<td>

**Small & Do One Thing**

Enligt boken bör en funktion vara liten och enbart göra en sak. Det funktionen gör bör återspeglas i namnet. Denna funktion kallas ‘handleArray’ och det den gör är att validera en array. Den kastar ett undantag om arrayen som skickats in inte uppfyller kraven. Skulle den uppfylla kraven returnerar funktionen true. Detta gör att funktionen enbart gör det som står i namnet och följer både principen om att den ska vara liten och göra en sak.
</td>
</tr>
<tr>
<td>

randomSequenceArray

randomSequenceArray (min, max, length) {

this.error.handleMinMax(min, max)

if (length \<= 0) {

throw new Error('length must be bigger than 0')

}

const arr = \[\]

for (let i = 0; i \< length; i++) {

arr.push(this.lcg.nextIntRange(min, max))

}

const shuffledArray = this.shuffleArray(arr)

return shuffledArray

}
</td>
<td>12</td>
<td>

**Use Descriptive Names:** 

Denna funktion hade kunnat ha ett mer beskrivande namn för att göra koden lättare att läsa. Inte bara är namnet inte tillräckligt beskrivande, funktionen utför också flera uppgifter. Den hanterar både en array och kastar ett fel om längden är mindre än eller lika med noll. Där den kastar ett fel skulle kunna brytas ut till felhantering klassen. Ett mer passande namn skulle kunna vara 'generateRandomArray' för att ge en tydligare beskrivning av dess syfte. Dessutom kan ordet 'sequence' vara en synonym för 'array', vilket kan vara förvirrande.

**Function Arguments:**
Enligt boken bör en funktion helst inte ha några argument, och att ha tre argument bör undvikas så mycket som möjligt. Jag håller dock inte med om detta i fallet med denna funktion, eftersom den genererar en array baserad på 'min', 'max', och 'length', vilket gör det nödvändigt att ha tre argument.
</td>
</tr>
<tr>
<td>

shuffleArray

shuffleArray (arr) {

const shuffledArray = \[...arr\]

for (let i = shuffledArray.length - 1; i \> 0; i--) {

const randomIndex = this.lcg.nextIntRange(0, i)

const temp = shuffledArray\[i\]

shuffledArray\[i\] = shuffledArray\[randomIndex\]

shuffledArray\[randomIndex\] = temp

}

return shuffledArray

}
</td>
<td>10</td>
<td>

**Have No Side Effects:**

Jag har följt denna princip genom att inte modifiera arrayen som kommer in direkt utan jag gör en kopia av arrayen som jag sen använder mig utav för att blanda den. Detta för att undvika sidoeffekter i funktionen.

**Command Query Separation:** 

Enligt boken borde funktioner göra något eller svara på något. De kan antingen ändra på objektets tillstånd eller ge svar om objektet. Min funktion följer detta eftersom den först skapar en kopia av den ursprungliga arrayen och sedan ger tillbaka den blandade arrayen. Så, den ändrar inte den ursprungliga arrayens tillstånd.
</td>
</tr>
<tr>
<td>

randomBoolean

randomBoolean () {

const lcg = new LinearCongruentialGenerator()

const oneOrTwo = lcg.nextIntRange(1, 2)

if (oneOrTwo === 1) {

return true

} else {

return false

}

}
</td>
<td>9</td>
<td>

**Blocks and Indenting:**

Enligt boken ska raderna mellan if, else och while statements vara 1 rad. Denna funktion följer denna princip.  

**One Level of Abstraction Per Function:** 

Denna funktion följer principen eftersom skapandet av lcg instans och if satserna är på samma låga abstraktionsnivå och följer det som står i boken om att enbart ha en nivå av abstraktionsnivå per klass.
</td>
</tr>
<tr>
<td>

randomPrimeNumberSequence

randomPrimeNumberSequence (min, max, length) {

this.error.handleMinMax(min, max)

if (length \<= 0) {

throw new Error('length must be bigger than 0')

}

const arr = \[\]

for (let i = 0; i \< length; i++) {

arr.push(this.randomPrimeNumber(min, max))

}

return arr

}
</td>
<td>11</td>
<td>

**Prefer Exceptions to Returning Error Codes:**

Denna funktion följer denna kod genom att kasta ett undantag om längden som bestäms är = 0 eller mindre. Detta för att man inte ska kunna fortsätta om ett felvärde skickas in, dock visar inte namnet på funktionen att den ska kasta undantag. Istället hade jag kunnat lägga in en metod i min ErrorHandling klass som gör detta. Som this.error.handleMinMax(min, max) i raden innan.

**Don’t Repeat Yourself:**

Om jag skulle separera felhanteringen i den här koden och inkludera felhanteringen av längden i ErrorHandling klassen skulle jag följa DRY. För om jag nu skulle skapa flera funktioner som tar ett 'length'-argument och kravet är att det inte får vara under 0, skulle jag behöva upprepa felhanteringen flera gånger, vilket inte är bra eller nödvändigt.
</td>
</tr>
</table>


### Reflektion på kapitel 3

När jag reflekterar innehållet i kapitel 3 med min kod är det några få saker jag kom att tänka på. 

Jag är bra på att skapa små metoder med beskrivande namn som förklarar vad de gör. Men jag kan göra det ännu bättre genom att använda ännu mer beskrivande och tydliga namn för att göra koden ännu mer läsbar och lättförståelig. Den metoden jag hade kunnat förbättra är den där jag kastar ett fel i metoden istället för att kasta felet i en metod i ErrorHandling klassen. Detta hade varit bättre eftersom jag vill hålla mig till principen om att funktioner enbart ska göra en sak. Att jag kastar fel direkt i metoden istället för att bryta ut gör också att det blir omöjligt att hålla mig till DRY. Det hade varit både bättre och smidigare att bryta ut de till en ny metod. 

Jag håller med om boken när det gäller att kasta undantag istället för att returnera felkod. Om det enbart skulle returnera felkod skulle det bli lätt att missa vad som är fel. Men om det kastas undantag så kommer det förhoppningsvis att krascha och då kommer den som håller på med koden att identifiera snabbt vad som är fel. Även principen att undvika upprepning av kod (DRY) är en värdefull lärdom. I början av utbildningen tyckte jag att det var jobbigt med alla påminnelser om DRY och att aldrig upprepa kod flera gånger utan att bryta ut det i flera funktioner. Men nu, efter ett år, har jag insett hur mycket lättare det är att läsa och underhålla koden. Jag sparar även tid på att inte upprepa koden och kan istället fokusera på andra delar av kodandet.

När det kommer till antalet argument i mina funktioner, säger boken att de ska hållas lågt. I vissa av mina metoder har jag dock flera argument, upp till tre.  Jag anser att dessa argument är nödvändiga för att det ska fungera som tänkt, men det kanske finns en mer effektiv metod att hantera dem och undvika att ha många argument i en och samma funktion. 


### Reflektion på hela slumpgeneratorn

Denna uppgift har varit mycket lärorik och har fått mig att reflektera mycket över min egen kodkvalitet och de två kapitel jag har läst i boken. Det har varit mycket intressant att se vad jag redan gör men få en förklaring till varför, samt att få det på svart och vitt hur det ska vara. Jag kommer att ta med mig mycket från dessa kapitel, och det mest tydliga är att jag kommer att använda mer beskrivande namn och faktiskt lägga ner lite tid på att välja namn istället för att bara ta det första och bästa. Metoder/funktioner kommer jag va väldigt noga med att lägga till ett verb i början också då jag insett att de är viktigt för att få koden tydlig. Jag kommer också att ägna mer tid åt att bryta ut delar av funktioner till nya funktioner för att öka läsbarheten och se till att funktionerna endast har en uppgift. Genom att fortsätta att följa de saker jag lärt mig med denna uppgift kommer jag att kunna förbättra min kodkvalitet och göra min kod ännu mer underhållbar och lättförståelig för andra utvecklare.