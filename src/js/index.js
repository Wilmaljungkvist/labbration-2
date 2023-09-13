import { randomInt, randomArrayItem } from "./randomGenerator.js"

const randomInteger = randomInt(1, 10)
console.log('Slumpat heltal:', randomInteger)

const arr = ['Hej', 'Vad', 'Heter', 'du?', 'lol', 'jag', 'heter', 'wilma']
const randomArray = randomArrayItem(arr)
console.log('slumpad sträng i array:', randomArray)