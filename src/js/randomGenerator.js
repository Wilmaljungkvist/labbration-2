export function randomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
    }

    
export function randomArrayItem (Arr) {
    const length = Arr.length
    const randomIndex = randomInt(0, length - 1)
    return Arr[randomIndex]
}