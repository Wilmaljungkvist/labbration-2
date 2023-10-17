import { LinearCongruentialGenerator } from './LinearCongruentialGenerator.js'
import { ErrorHandling } from './errorHandling.js'

/**
 * Class for random number generators.
 */
export class NumberGenerator {
  /**
   * The constructor creates a new instance of the ErrorHandling and LinearCongruentialGenerator class.
   */
  constructor () {
    this.numberGenerator = new LinearCongruentialGenerator()
    this.error = new ErrorHandling()
  }

  /**
   * Generates a random integer between the specified range.
   * Throws error if max is less than min.
   *
   * @param {number} min - The minimum number in the range.
   * @param {number} max - The maximum number in the range.
   * @returns {number} - Returns the generated number.
   */
  getRandomInt (min, max) {
    this.error.validateMinMaxRange(min, max)
    const randomInteger = this.numberGenerator.getNextIntRange(min, max)
    return randomInteger
  }

  /**
   * Generates a random decimal in the specified range.
   * Throws error if max is less than min.
   *
   * @param {number} min - The minimum number in the range.
   * @param {number} max - The maximum number in the range.
   * @returns {number} - Returns the generated number.
   */
  getRandomDecimal (min, max) {
    this.error.validateMinMaxRange(min, max)
    const randomDecimal = this.numberGenerator.getNextDecimalRange(min, max)
    return randomDecimal
  }

  /**
   * Returns an random boolean.
   *
   * @returns {boolean} - Returns the boolean.
   */
  getRandomBoolean () {
    const oneOrTwo = this.numberGenerator.getNextIntRange(1, 2)
    if (oneOrTwo === 1) {
      return true
    } else {
      return false
    }
  }
}
