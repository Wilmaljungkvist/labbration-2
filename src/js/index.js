import { RandomArrayGenerator } from "./randomArrayGenerator.js"
import { RandomPrimeGenerator } from "./randomPrimeGenerator.js"

const randomArrayGenerator = new RandomArrayGenerator()

console.log(randomArrayGenerator.randomSequenceArray(1, 10, 10))

const randomPrimeGenerator = new RandomPrimeGenerator()

console.log(randomPrimeGenerator.randomPrimeNumberSequence(1,10,10))