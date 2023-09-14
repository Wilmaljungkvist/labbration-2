export function randomInt (min, max) {
    // TODO: min måste vara mindre än max.
    const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min
    return randomInteger
    }

export function randomDecimal (min, max) {
    // TODO: min måste vara mindre än max.
    return Math.random() * (max - min) + min
}
    
export function randomArrayIndex (Arr) {
    // TODO: en Array kan inte vara tom eller om de skickas in annat än en array.
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

export function randomSequenceArray (min, max, length) {
    // TODO: min måste vara mindre än max och längden kan inte vara 0.
    const arr = []
    for (let i = 0; i < length; i++) {
        arr.push(randomInt(min, max))
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




