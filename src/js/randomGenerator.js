import { LinearCongruentialGenerator } from './LinearCongruentialGenerator.js'

const lcg = new LinearCongruentialGenerator()

const sequence = lcg.nextDecimalInSequence()
const range = lcg.nextIntRange(1, 20)
console.log(sequence + ' this is a sequence')
console.log(range + ' this is in the range')

export function mathRandomInt (min, max) {
    // TODO: min måste vara mindre än max.
    const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min
    return randomInteger
    }

export function randomDecimal (min, max) {
    // TODO: min måste vara mindre än max.
    return Math.random() * (max - min) + min
}

export function randomInt (min, max) {
 // TODO: mitt eget matematiska uttryck för att få fram något random. 
}
    
export function randomArrayIndex (arr) {
    if (arr.length === 0) {
        throw new Error('Array can not be empty')
    } else if (!Array.isArray(arr)) {
        throw new Error('Must be an array.')
    }
    const length = arr.length
    const randomIndex = mathRandomInt(0, length - 1)
    return randomIndex
}

export function randomBoolean () {
    const oneOrTwo = mathRandomInt(1, 2) 
    if (oneOrTwo === 1) {
        return true
    } else {
        return false
    }
}

export function randomSequenceArray (min, max, length) {
    // TODO: min måste vara mindre än max och längden kan inte vara 0.
    const arr = []
    for (let i = 0; i < length; i++) {
        arr.push(mathRandomInt(min, max))
    }
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        const randomIndex = randomArrayIndex(arr)
        const number = arr[randomIndex]
        arr[randomIndex] = arr[i]
        arr[i] = number 
    }
    return arr
}




