import { LinearCongruentialGenerator } from './LinearCongruentialGenerator.js'
import { ErrorHandling } from './errorHandling.js'

/**
 * Class for an random prime generator.
 */
export class RandomPrimeGenerator {
  /**
   * The constructor creates a new instance of the ErrorHandling and LinearCongruentialGenerator class.
   */
  constructor () {
    this.lcg = new LinearCongruentialGenerator()
    this.error = new ErrorHandling()
  }

  /**
   * Generates an random prime number between the specified range.
   *
   * @param {number} min - The minimun number in the range.
   * @param {number} max - The maximum number in the range.
   * @returns {number} - Returns the generated prime number or undefined if an error occurs.
   */
  getRandomPrimeNumber (min, max) {
    let number
    this.error.validateMinMaxRange(min, max)
    do {
      number = this.lcg.nextIntRange(min, max)
    } while (!this.lcg.isPrime(number))
    return number
  }

  /**
   * Creates an array with an specified amount of number between the specified range.
   *
   * @param {number} min - The minimum number in the range.
   * @param {number} max - The maximum number in the range.
   * @param {number} length - The length of the array.
   * @returns {Array} - Returns the array.
   */
  getRandomPrimeNumberSequence (min, max, length) {
    this.error.validateMinMaxRange(min, max)
    this.error.validateLength(length)
    const arr = []
    for (let i = 0; i < length; i++) {
      arr.push(this.randomPrimeNumber(min, max))
    }
    return arr
  }
}
