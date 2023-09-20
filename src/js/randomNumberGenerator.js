import { LinearCongruentialGenerator } from './LinearCongruentialGenerator.js'

export class RandomNumberGenerator {
    constructor () {
        this.lcg = new LinearCongruentialGenerator()
    }

    randomInt (min, max) {
        if (this.#handleMinMax(min, max)) {
        const randomInteger = this.lcg.nextIntRange(min, max)
        return randomInteger
    }
}

    randomDecimal (min, max) {
    if (this.#handleMinMax(min, max)) {
        const randomDecimal = this.lcg.nextDecimalRange(min, max)
    return randomDecimal
    }
}

    #handleMinMax (min, max) {
        if (max < min) {
            throw new Error('Minimum must be the same or smaller than maximum.')
        }
        return true
    }
}