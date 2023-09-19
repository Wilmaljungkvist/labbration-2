import { LinearCongruentialGenerator } from './LinearCongruentialGenerator.js'

const lcg = new LinearCongruentialGenerator()
const range = lcg.nextIntRange(1, 20003)
console.log(range + ' this is in the range')

// export function mathRandomInt (min, max) {
//     if (handleMinMax(min, max)) {
//     const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min
//     return randomInteger
//   }
// }

// export function randomDecimal (min, max) {
//     if (handleMinMax(min, max)) {
//     return Math.random() * (max - min) + min
//     }
// }
    
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
    if (handleMinMax(min, max) && length > 0) {
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
}

export function isPrime (number) {
    if (number <= 1) {
        return false
    } else if (number <= 3) {
        return true
    } else if (number % 2 === 0 || number % 3 === 0 ) {
        return false
    }

    for (let i = 5; i * i <= number; i+= 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
    }
    return true
}
