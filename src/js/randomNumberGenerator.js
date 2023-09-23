import { LinearCongruentialGenerator } from './LinearCongruentialGenerator.js'
import { ErrorHandling } from './errorHandling.js'

export class RandomNumberGenerator {
    constructor () {
        this.lcg = new LinearCongruentialGenerator()
        this.error = new ErrorHandling()
    }

    randomInt (min, max) {
        if (this.error.handleMinMax(min, max)) {
        const randomInteger = this.lcg.nextIntRange(min, max)
        return randomInteger
    }
}

    randomDecimal (min, max) {
    if (this.error.handleMinMax(min, max)) {
        const randomDecimal = this.lcg.nextDecimalRange(min, max)
    return randomDecimal
    }
}

randomBoolean () {
    const lcg = new LinearCongruentialGenerator()
    const oneOrTwo = lcg.nextIntRange(1, 2) 
    if (oneOrTwo === 1) {
        return true
    } else {
        return false
    }
}
}