# Slumpgenerator
## Random Number and Array Generator

Detta är ett Javascript bibliotek som erbjuder funktioner för att slumpa fram olika typer av nummer och arrayer som använder sig av en linear congruential metod. Nedanför finns klasser och metoder som går att använda i detta bibliotek tillsammans med kodexempel.

Det går att läsa om en Linear congruential generator här:
[Linear congruential generator](https://en.wikipedia.org/wiki/Linear_congruential_generator)

## Installation

### Installera detta bibliotek med npm:

```bash
npm install slumpgenerator
```

### importera biblioteket:

```Javascript
import { RandomArrayGenerator, RandomNumberGenerator, RandomPrimeGenerator, LinearCongruentialGenerator } from 'slumpgenerator'
```

### Användningsexempel

Här är ett exempel på hur du kan använda RandomNumberGenerator för att generera slumpade tal:

```javascript
import { RandomNumberGenerator } from 'slumpgenerator'
const rng = new RandomNumberGenerator()

// Generera ett slumpat heltal mellan 1 och 10
const randomNumber = rng.randomInt(1, 10)
console.log(`Slumpat heltal: ${randomNumber}`)
```
```bash
Slumpat heltal: 1
```

## RandomArrayGenerator class
Klass med metoder som slumpar ett index i en array och genererar en array med slumpade nummer mellan ett specificerat intervall och längd.

## Constructor
```Javascript
const randomArrayGen = new RandomArrayGenerator()
```

## randomArrayIndex(arr)
Returnerar ett slumpat index i den inskickade arrayen. 

```Javascript
const randomArrayGen = new RandomArrayGenerator()
const arr = [10, 20, 30, 40, 50]
const index = randomArrayGen.randomArrayIndex(arr) // Returnerar de slumpade index från arrayen.
console.log(index)
```
```bash
1
```

## randomSequenceArray(min, max, length)
En metod som genererar en array baserat på inskickade min, max och length värde. Där min är det minsta numret som kan finnas med, max det största numret och length är längden på arrayen. Metoden blandar dessutom arrayen.

```Javascript
const randomArrayGen = new RandomArrayGenerator()
const arr = randomArrayGen.randomSequenceArray(1, 100, 5) // Returnerar en array som innehåller 5 nummer mellan 1-100.
console.log(arr)
```
```bash
[4, 78, 34, 75, 65]
```

## RandomNumberGenerator class
En klass med metoder som genererar slumpade decimaler, heltal och booleans.

### Constructor 
```Javascript
const randomNumberGen = new RandomNumberGenerator()
```

## randomInt(min, max)
Returnerar ett slumpat heltal inom de specifiserade intervallet.
```Javascript
const randomNumberGen = new RandomNumberGenerator()
randomNumberGen.randomInt(1, 10) // Returnerar ett slumpat heltal mellan 1-10.
```

### randomDecimal(min, max)
Returnerar ett slumpat decimaltal inom de specifiserade intervallet.
```Javascript
const randomNumberGen = new RandomNumberGenerator()
randomNumberGen.randomDecimal(0, 1) // Returnerar ett slumpat decimaltal mellan 0-1.
```

### randomBoolean()
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
Returnerar en array med slumpade primtal baserat på den specifiserade längden och intervallet.

```Javascript
const randomPrimeGen = new RandomPrimeGenerator()
randomPrimeGen.randomPrimeNumberSequence(1, 100, 5) // Returnerar en array med 5 primtal och primtalen är mellan 1-100.
```

### Till utvecklare som vill bidra till koden.

#### Issues
https://github.com/Wilmaljungkvist/slumpgenerator/issues

1. 
Klona projektet, detta kommando klonar projektet.
```bash
git clone https://github.com/Wilmaljungkvist/slumpgenerator.git 
```
2. 
Skapa en separat gren.
```bash
git checkout -b din-gren-namn
```

3. 
Pusha sedan dina ändringar till den nya grenen.

4. 
Gör sedan en pull request från din egen gren till main grenen. 

För frågor går det bra att maila:
wl222ek@student.lnu.se

### License

This project is licensed under the [GNU General Public License v3.0](LICENSE). You can find the full text of the license in the [LICENSE](LICENSE.txt) file.