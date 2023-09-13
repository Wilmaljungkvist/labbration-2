import { randomInt, randomDecimal, randomArrayIndex } from "./randomGenerator.js"

const randomInteger = randomInt(1, 10)
console.log('Slumpat heltal:', randomInteger)

const randomFloat = randomDecimal(1, 10)
console.log('Slumpat decimaltal:', randomFloat)

const arr = ['Hej', 'Vad', 'Heter', 'du?', 'lol', 'jag', 'heter', 'wilma']
const arrayIndex = randomArrayIndex(arr)
console.log('slumpad sträng i array:', arr[arrayIndex])