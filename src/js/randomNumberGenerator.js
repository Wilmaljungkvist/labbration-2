import { LinearCongruentialGenerator } from './LinearCongruentialGenerator.js'
import { ErrorHandling } from './errorHandling.js'

/**
 * Class for random number generators.
 */
export class RandomNumberGenerator {
  /**
   * The constructor creates a new instance of the ErrorHandling and LinearCongruentialGenerator class.
   */
  constructor () {
    this.lcg = new LinearCongruentialGenerator()
    this.error = new ErrorHandling()
  }

  /**
   * Generates a random integer between the specified range.
   *
   * @param {number} min - The minimum number in the range.
   * @param {number} max - The maximum number in the range.
   * @returns {number} - Returns the generated number or undefined if an error occurs.
   */
  randomInt (min, max) {
    if (this.error.handleMinMax(min, max)) {
      const randomInteger = this.lcg.nextIntRange(min, max)
      return randomInteger
    }
    return undefined
  }

  /**
   * Generates a random decimal in the specified range.
   *
   * @param {number} min - The minimum number in the range.
   * @param {number} max - The maximum number in the range.
   * @returns {number} - Returns the generated number or undefined if an error occurs.
   */
  randomDecimal (min, max) {
    if (this.error.handleMinMax(min, max)) {
      const randomDecimal = this.lcg.nextDecimalRange(min, max)
      return randomDecimal
    }
    return undefined
  }

  /**
   * Returns an random boolean.
   *
   * @returns {boolean} - Returns the boolean.
   */
  randomBoolean () {
    const lcg = new LinearCongruentialGenerator()
    const oneOrTwo = lcg.nextIntRange(1, 2)
    if (oneOrTwo === 1) {
      return true
    } else {
      return false
    }
  }
}
