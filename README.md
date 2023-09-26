# labbration-2
Detta är ett Javascript bibliotek som erbjuder funktioner för att slumpa fram olika typer av nummer och arrayer användandes av en linear congruential metod. Nedanför finns klasser och metoder som går att använda i detta biblitek tillsammans med kodexempel.

## Installation

### Installera detta bibliotek med npm:

```bash
npm install labbration-2
```

### importera bibliotek:

```Javascript
import { RandomArrayGenerator, RandomNumberGenerator, RandomPrimeGenerator, LinearCongruentialGenerator } from 'labbration-2'
```

### Användings exempel

### Användningsexempel

Här är ett exempel på hur du kan använda RandomNumberGenerator för att generera slumpade tal:

```javascript
import { RandomNumberGenerator } from 'labbration-2'
const rng = new RandomNumberGenerator()

// Generera ett slumpat heltal mellan 1 och 10
const randomNumber = rng.randomInt(1, 10)
console.log(`Slumpat heltal: ${randomNumber}`)
```

## RandomArrayGenerator class
Klass med metoder som kan slumpa ett index i en array och generera en array med slumpade nummer mellan ett specificerat intervall och längd.

## Constructor
```Javascript
const randomArrayGen = new RandomArrayGenerator()
```

## randomArrayIndex(arr)
Retunerar ett slumpat index i den inskickade arrayen. 

```Javascript
const randomArrayGen = new RandomArrayGenerator()
const arr = [10, 20, 30, 40, 50]
randomArrayGen.randomArrayIndex(arr) // Retunerar de slumpade index från arrayen.
```

## randomSequenceArray(min, max, length)
En metod som genererar en array baserat på inskickade min, max och length värde. Där min är det minsta numret som kan finnas med, max det största numret och length vilket blir längden på arrayen. Metoden blandar dessutom arrayen.

```Javascript
const randomArrayGen = new RandomArrayGenerator();
randomArrayGen.randomSequenceArray(1, 100, 5); // Retunerar en array som innehåller 5 nummer mellan 1-100.
```

## RandomNumberGenerator class
En klass med metoder som genererar slumpade decimaler, heltal och booleans.

### Constructor 
```Javascript
const randomNumberGen = new RandomNumberGenerator()
```

## randomInt(min, max)
Retunerar ett slumpat heltal inom de specifiserade intervallet.
```Javascript
const randomNumberGen = new RandomNumberGenerator()
randomNumberGen.randomInt(1, 10) // Returnerar ett slumpat heltal mellan 1-10.
```

### randomDecimal(min, max)
Retunerar ett slumpat decimaltal inom de specifiserade intervallet.
```Javascript
const randomNumberGen = new RandomNumberGenerator()
randomNumberGen.randomDecimal(0, 1) // Returnerar ett slumpat decimaltal mellan 0-1.
```

### randomBoolean()
slumpar och retunerar true eller false.
```Javascript
const randomNumberGen = new RandomNumberGenerator()
randomNumberGen.randomBoolean() // Slumpar och returnerar true eller false.
```

## RandomPrimeGenerator class
En klass som används för att få fram slumpade primtal och kan generera arrayer med slumpade primtal baserat på de specifiserade intervallet och den valda längden.

### constructor
```Javascript
const randomPrimeGen = new RandomPrimeGenerator()
```

### randomPrimeNumber(min, max)
Retunerar ett slumpat primtal inom de specifiserade intervallet.

```Javascript
const randomPrimeGen = new RandomPrimeGenerator()
randomPrimeGen.randomPrimeNumber(1, 100) // Returnerar ett slumpat primtal mellan 1-100
```

### randomPrimeNumberSequence(min, max, length)
Retunerar en array med slumpade primtal baserat på den specifiserade längden och intervallet.

```Javascript
const randomPrimeGen = new RandomPrimeGenerator()
randomPrimeGen.randomPrimeNumberSequence(1, 100, 5) // Retunerar en array med 5 nummer och numrerna är mellan 1-100.
```

## LinearCongruentialGenerator Class
LinearCongruentialGenerator klassen implementerar en nummer slumpgenerator som använder sig utav linear congruential metoden. Klassen genererar och validerar även parametrar för generatorn.
Exempel på hur denna klass kan användas:  

### constructor

```Javascript
// Går att använda utan parametrar och de är då generatorn genererar fram nummer utifrån olika validerings krav i klassen.
// Har användaren av biblioteket egna krav på parametrarna går det att välja dessa.
const lcg = new LinearCongruentialGenerator(seed, multiplier, increment, modulus)
const lcg = new LinearCongruentialGenerator()
```

### nextDecimalRange(min, max)
Genererar ett slumpat decimaltal mellan ett specifierat intervall.

```Javascript
const lcg = new LinearCongruentialGenerator()
lcg.nextDecimalRange(0, 1) // Retunerar ett slumpat decimaltal mellan 0-1.
```

### nextIntRange(min, max)
Genererar ett slumpat heltal mellan ett specifikt intervall.

```Javascript
const lcg = new LinearCongruentialGenerator()
lcg.nextIntRange(1, 10) // Retunerar ett slumpat heltal mellan 1 - 10
```


## ErrorHandling class

ErrorHandlling klassen hanterar fel relaterade till minimum, maximum och validering av arrayer.

### handleMinMax(min, max)
Kastar ett fel om minimum är större än maximum.
Exempel på hur denna klass kan användas:

```Javascript
const error = new ErrorHandling()
error.handleMinMax(1, 5) // Retunerar true.
error.handleMinMax(5, 1) // Kastar ett fel: "Minimum must be the same or smaller than maximum."
```

### handleArray(arr)
Kastar ett fel om arrayen har en längd på 0 eller mindre och om inputen inte är av typen array.

```Javascript
const error = new ErrorHandling()
error.handleArray([1, 2, 3]) // Returnerar true.
error.handleArray([]) // Kastar ett fel: "Array can not be empty."
error.handleArray("inte en array") // Kastar ett fel: "Must be an array."
```