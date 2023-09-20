import { LinearCongruentialGenerator } from './LinearCongruentialGenerator.js'
import { handleMinMax, handleArray } from './errorHandling'

export class RandomArrayGenerator {
    constructor () {
        this.lcg = new LinearCongruentialGenerator()
    }

randomArrayIndex (arr) {
    if (handleArray(arr)) {
    const length = arr.length
    const randomIndex = this.lcg.nextIntRange(0, length - 1)
    return randomIndex
    } 
}

randomSequenceArray (min, max, length) {
    if (handleMinMax(min, max) && length > 0) {
    const arr = []
    for (let i = 0; i < length; i++) {
        arr.push(this.lcg.nextIntRange(min, max))
    }
    arr = shuffleArray(arr)
    return arr
   }
}

shuffleArray (arr) {
    for (let i = 0; i < arr.length; i++) {
        const randomIndex = this.randomArrayIndex(arr)
        const number = arr[randomIndex]
        arr[randomIndex] = arr[i]
        arr[i] = number 
    }
  }
}
