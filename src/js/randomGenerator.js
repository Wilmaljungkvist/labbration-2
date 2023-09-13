export function randomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
    }

export function randomDecimal (min, max) {
    return Math.random() * (max - min) + min
}
    
export function randomArrayIndex (Arr) {
    const length = Arr.length
    const randomIndex = randomInt(0, length - 1)
    return randomIndex
}

export function randomBoolean () {
    const oneOrTwo = randomInt(1, 2) 
    if (oneOrTwo === 1) {
        return true
    } else {
        return false
    }
}

export function randomSequence (min, max, length) {
    const arr = []
    for (let i = 0; i < length; i++) {
        arr.push(randomInt(min, max))
    }
    for (let i = 0; i < arr.length; i++) {
        const randomIndex = randomInt(0, arr.length -1)
        const number = arr[randomIndex]
        arr[randomIndex] = arr[i]
        arr[i] = number 
    }
    return arr
}


