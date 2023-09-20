import { LinearCongruentialGenerator } from './LinearCongruentialGenerator.js'

export class RandomArrayGenerator {
    constructor () {
        this.lcg = new LinearCongruentialGenerator()
    }

randomArrayIndex (arr) {
    if (this.#handleArray) {
    const length = arr.length
    const randomIndex = this.lcg.nextIntRange(0, length - 1)
    return randomIndex
    } 
}

randomSequenceArray (min, max, length) {
    if (this.#handleMinMax(min, max) && length > 0) {
    const arr = []
    for (let i = 0; i < length; i++) {
        arr.push(this.lcg.nextIntRange(min, max))
    }
    for (let i = 0; i < arr.length; i++) {
        const randomIndex = this.randomArrayIndex(arr)
        const number = arr[randomIndex]
        arr[randomIndex] = arr[i]
        arr[i] = number 
    }
    return arr
   }
}

#handleArray (arr) {
    if(arr.length === 0) {
        throw new Error('Array can not be empty.')
    } else if (!Array.isArray(arr)) {
        throw new Error('Must be an array.')
    }
    return true
}

    #handleMinMax (min, max) {
        if (max < min) {
            throw new Error('Minimum must be the same or smaller than maximum.')
        }
        return true
    }
}
