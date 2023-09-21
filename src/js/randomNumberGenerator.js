import { LinearCongruentialGenerator } from './LinearCongruentialGenerator.js'
import { handleMinMax } from './errorHandling.js'

export class RandomNumberGenerator {
    constructor () {
        this.lcg = new LinearCongruentialGenerator()
    }

    randomInt (min, max) {
        if (handleMinMax(min, max)) {
        const randomInteger = this.lcg.nextIntRange(min, max)
        return randomInteger
    }
}

    randomDecimal (min, max) {
    if (handleMinMax(min, max)) {
        const randomDecimal = this.lcg.nextDecimalRange(min, max)
    return randomDecimal
    }
}
}