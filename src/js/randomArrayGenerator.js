import { LinearCongruentialGenerator } from './LinearCongruentialGenerator.js'
import { handleMinMax, handleArray } from './errorHandling.js'

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
    const shuffledArray = this.shuffleArray(arr)
    return shuffledArray
   }
}

shuffleArray (arr) {
    const shuffleArray = [...arr]
    console.log(shuffleArray)
    for (let i = 0; i < shuffleArray.length; i++) {
        const randomIndex = this.randomArrayIndex(shuffleArray)
        const number = shuffleArray[randomIndex]
        shuffleArray[randomIndex] = shuffleArray[i]
        shuffleArray[i] = number 
    }
    console.log(shuffleArray)
    return shuffleArray
  }
}
