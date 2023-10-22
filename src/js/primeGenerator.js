import { LinearCongruentialGenerator } from './LinearCongruentialGenerator.js'
import { ErrorHandling } from './errorHandling.js'
export class PrimeGenerator {

  constructor () {
    this.numberGenerator = new LinearCongruentialGenerator()
    this.error = new ErrorHandling()
  }

  /**
   * Generates an random prime number between the specified range.
   * Throws error if max is less than min.
   */
  getRandomPrimeNumber (min, max) {
    let number
    this.error.validateMinMaxRange(min, max)
    do {
      number = this.numberGenerator.getNextIntRange(min, max)
    } while (!this.numberGenerator.isPrime(number))
    return number
  }

  /**
   * Creates an array with an specified amount of numbers between the specified range.
   */
  getRandomPrimeNumberSequence (min, max, length) {
    this.error.validateMinMaxRange(min, max)
    this.error.validateLength(length)
    const arr = []
    for (let i = 0; i < length; i++) {
      arr.push(this.getRandomPrimeNumber(min, max))
    }
    return arr
  }
}
