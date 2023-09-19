import { LinearCongruentialGenerator } from './LinearCongruentialGenerator.js'

export class RandomPrimeGenerator {
    constructor () {
        this.lcg = new LinearCongruentialGenerator()
    }

    randomPrimeNumber (min, max) {
        let number
        if (this.#handleMinMax(min, max)) {
            do {
                number = this.lcg.nextIntRange(min, max)
            } while (!this.#isPrime(number))
            
        return number
    }
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

    #handleMinMax (min, max) {
        if (max < min) {
            throw new Error('min must be smaller then max')
        }
        return true
    }
}