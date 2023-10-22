import { LinearCongruentialGenerator } from './linearCongruentialGenerator.js'
import { ErrorHandling } from './errorHandling.js'

export class NumberGenerator {

  constructor () {
    this.numberGenerator = new LinearCongruentialGenerator()
    this.error = new ErrorHandling()
  }

  /**
   * Generates a random integer between the specified range.
   * Throws error if max is less than min.
   */
  getRandomInt (min, max) {
    this.error.validateMinMaxRange(min, max)
    const randomInteger = this.numberGenerator.getNextIntRange(min, max)
    return randomInteger
  }

  /**
   * Generates a random decimal in the specified range.
   * Throws error if max is less than min.
   */
  getRandomDecimal (min, max) {
    this.error.validateMinMaxRange(min, max)
    const randomDecimal = this.numberGenerator.getNextDecimalRange(min, max)
    return randomDecimal
  }

  /**
   * Returns an random boolean.
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
