import { LinearCongruentialGenerator } from './LinearCongruentialGenerator.js'
import { ErrorHandling } from './errorHandling.js'

export class RandomArrayGenerator {
    constructor () {
        this.lcg = new LinearCongruentialGenerator()
        this.error = new ErrorHandling()
    }

randomArrayIndex (arr) {
    if (this.error.handleArray(arr)) {
    const length = arr.length
    const randomIndex = this.lcg.nextIntRange(0, length - 1)
    return randomIndex
    } 
  }

randomSequenceArray (min, max, length) {
    if (this.error.handleMinMax(min, max) && length > 0) {
    const arr = []
    for (let i = 0; i < length; i++) {
        arr.push(this.lcg.nextIntRange(min, max))
    }
    if (length <= 0) {
        throw new error('length must be bigger than 0')
    }
    const shuffledArray = this.shuffleArray(arr)
    return shuffledArray
   }
}

shuffleArray(arr) {
    const shuffledArray = [...arr]
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const randomIndex = this.lcg.nextIntRange(0, i)
        const temp = shuffledArray[i]
        shuffledArray[i] = shuffledArray[randomIndex]
        shuffledArray[randomIndex] = temp
    }
    return shuffledArray
}
}
