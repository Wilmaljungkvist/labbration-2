export class LinearCongruentialGenerator {
    constructor () {
        this.seed = 0
        this.multiplier = 0
        this.increment = 0
        this.modulus = 0
        this.parametersGenerated = false

        if (!this.parametersGenerated) {
            this.generateValidParameters()
            this.parametersGenerated = true
        }
    }

    generateValidParameters () {
        do {
        this.seed = Math.floor(Math.random() * 10000) + 1
        this.multiplier = Math.floor(Math.random() * 100000 ) + 1
        this.increment = Math.floor(Math.random() * 1000000 ) + 1
        this.modulus = Math.floor(Math.random() * 10000000 ) + 1
        } while (!this.isValidParameters())
    }

    isValidParameters () {
    const modulus = this.modulus
    const multiplier = this.multiplier
    const increment = this.increment
    const seed = this.seed

        if (!this.isPrime(modulus)) {
            console.log('its false')
            return false
        }

        if(this.biggestCommonDivisor(modulus, multiplier) !== 1 || this.biggestCommonDivisor(modulus, increment) !== 1) {
            console.log('it´s false')
            return false
        }

        if (modulus % 2 === 0) {
            if ((multiplier - 1) % 8 !== 0 || (increment % 4) !== 0) {
                return false
            }
        }

        return true
    }

    biggestCommonDivisor (biggerNumber, smallerNumber) {
        while (smallerNumber !== 0) {
            const temporary = smallerNumber
            smallerNumber = biggerNumber % smallerNumber
            biggerNumber = temporary
        }
        return biggerNumber
    }



    isPrime (number) {
        if (number <= 1) {
            return false
        } else if (number <= 3) {
            return true
        } else if (number % 2 === 0 || number % 3 === 0 ) {
            return false
        }

        for (let i = 5; i * i <= number; i+= 6) {
            if (number % i === 0 || number % (i + 2) === 0) {
                return false;
            }
        }
        return true
    }

     nextDecimalInSequence () {
        this.seed = (this.multiplier * this.seed + this.increment) % this.modulus
        return this.seed / this.modulus 
    }

    nextIntRange (min, max) {
        const randomValue = this.nextDecimalInSequence()
        const minMaxValue = min + randomValue * (max - min)
        return Math.floor(minMaxValue)
    }

    // However, it's important to note that LCGs have limitations and are not suitable for all applications, especially those requiring high-quality or cryptographic randomness. 
    // TODO: Det kan inte vara vilka nummer som helst för då kommer generatorn börja repetera nummer efter ett tag. Uttrycket för denna generator är: Xn+1 = (a * Xn + c) % m. 
    // Xn is the current pseudo-random number (seed).
    // Xn+1 is the next pseudo-random number in the sequence.
    // a is the multiplier.
    // c is the increment.
    // m is the modulus.

    // TODO: göra ett default värde för seed, multiplier, increment och modulus för att underlätta för användaren som ska använda koden. The initional value is the seed.

    // 1. M och c är relativy prime: 
    // 2. a - 1 går att dela med alla primetal av m: 
    // 3. a - 1 är delbart med 4 om m är delbart med 4: 
    // modulus large prime or a large power of 2.

    // Numrerna ska annars vara stora och prime tal. 

    // För att kunna välja min och max värde som numrerna ska vara i så kan man skriva (float)Xn+1/m då får man ett nummer mellan 0 och 1. Bestämma min och max värde i koden. Max - min och får då ett nytt min och max. (int)(det nya max värdet * (float)Xn+1/m + min) = the range

    // The general idea is to use a modulus that is a large prime or a large power of 2.  If you use a large prime, 'c' should be zero and 'a' should be a primitive root of that prime
}