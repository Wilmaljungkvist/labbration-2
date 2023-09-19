export class LinearCongruentialGenerator {
    constructor () {
        this.seed = 0
        this.multiplier = 0
        this.increment = 0
        this.modulus = 0
        this.parametersGenerated = false

        if (!this.parametersGenerated) {
            this.#generateValidParameters()
            this.parametersGenerated = true
        }
    }

    #generateValidParameters () {
        do {
        this.seed = Math.floor(Math.random() * 10000) + 1
        this.multiplier = Math.floor(Math.random() * 100000 ) + 1
        this.increment = Math.floor(Math.random() * 1000000 ) + 1
        this.modulus = Math.floor(Math.random() * 10000000 ) + 1
        } while (!this.#isValidParameters())
    }

    #isValidParameters () {
    const modulus = this.modulus
    const multiplier = this.multiplier
    const increment = this.increment
    const seed = this.seed

        if (!this.#isPrime(modulus)) {
            return false
        }

        if(this.#biggestCommonDivisor(modulus, multiplier) !== 1 || this.#biggestCommonDivisor(modulus, increment) !== 1) {
            return false
        }

        if (modulus % 2 === 0) {
            if ((multiplier - 1) % 8 !== 0 || (increment % 4) !== 0) {
                return false
            }
        }

        return true
    }

    #biggestCommonDivisor (biggerNumber, smallerNumber) {
        while (smallerNumber !== 0) {
            const temporary = smallerNumber
            smallerNumber = biggerNumber % smallerNumber
            biggerNumber = temporary
        }
        return biggerNumber
    }

    #isPrime (number) {
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

    #nextDecimalInSequence () {
        this.seed = (this.multiplier * this.seed + this.increment) % this.modulus
        return this.seed / this.modulus 
    }

    nextDecimalRange (min, max) {
        const randomValue = this.#nextDecimalInSequence()
        const minMaxValue = min + randomValue * (max - min)
        return minMaxValue
    }

    nextIntRange (min, max) {
        const randomValue = this.#nextDecimalInSequence()
        const minMaxValue = min + randomValue * (max - min)
        return Math.floor(minMaxValue)
    }
}