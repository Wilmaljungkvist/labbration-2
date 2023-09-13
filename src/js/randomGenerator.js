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
