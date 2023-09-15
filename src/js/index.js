import { mathRandomInt, randomInt, randomDecimal, randomArrayIndex, randomBoolean, randomSequenceArray } from "./randomGenerator.js"

import { linearCongruentialGenerator } from "./lCGTest.js"

for(let i = 0; i < 20; i++) {
    console.log(linearCongruentialGenerator(1, 10))
}

const randomInteger = randomInt(1, 10)
console.log('Slumpat heltal:', randomInteger)
const e = mathRandomInt(1, 10)
console.log('Slumpat heltal:', e)

const randomFloat = randomDecimal(1, 10)
console.log('Slumpat decimaltal:', randomFloat)

const arr = ['Hej', 'Vad', 'Heter', 'du?', 'lol', 'jag', 'heter', 'wilma']
const arrayIndex = randomArrayIndex(arr)
console.log('slumpad sträng i array:', arr[arrayIndex])

const randBoolean = randomBoolean()

console.log('true or false?', randBoolean)

console.log(randomSequenceArray(1, 10, 10))