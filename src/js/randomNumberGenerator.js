import { LinearCongruentialGenerator } from './LinearCongruentialGenerator.js'

export class RandomNumberGenerator {
    constructor () {
        this.lcg = new LinearCongruentialGenerator()
    }

    mathRandomInt (min, max) {
        if (this.#handleMinMax(min, max)) {
        const randomInteger = this.lcg.nextIntRange(min, max)
        return Math.floor(randomInteger)
    }
}

randomDecimal (min, max) {
    if (handleMinMax(min, max)) {
        const randomDecimal = this.lcg.nextIntRange(min, max)
    return randomDecimal
    }
}

    #handleMinMax (min, max) {
        if (max < min) {
            throw new Error('min must be smaller then max')
        }
        return true
    }
}