import { LinearCongruentialGenerator } from './LinearCongruentialGenerator.js'

   export function randomBoolean () {
        const lcg = new LinearCongruentialGenerator()
        const oneOrTwo = lcg.nextIntRange(1, 2) 
        if (oneOrTwo === 1) {
            return true
        } else {
            return false
        }
    }
