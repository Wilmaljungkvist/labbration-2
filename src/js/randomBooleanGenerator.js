import { LinearCongruentialGenerator } from './LinearCongruentialGenerator.js'

export class RandomArrayGenerator {
    constructor () {
        this.lcg = new LinearCongruentialGenerator()
    }

    randomBoolean () {
        const oneOrTwo = this.lcg.nextIntRange(1, 2) 
        if (oneOrTwo === 1) {
            return true
        } else {
            return false
        }
    }
    
}
