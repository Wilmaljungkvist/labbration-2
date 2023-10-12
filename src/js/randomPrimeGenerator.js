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
    this.error.handleMinMax(min, max)
    do {
      number = this.lcg.nextIntRange(min, max)
    } while (!this.#isPrime(number))
    return number
  }

  /**
   * Checks if the number is prime.
   *
   * @param {number} number - The number that is checked.
   * @returns {boolean} Returns true if the number is a prime or false otherwise.
   */
  #isPrime (number) {
    if (number <= 1) {
      return false
    } else if (number <= 3) {
      return true
    } else if (number % 2 === 0 || number % 3 === 0) {
      return false
    }

    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) {
        return false
      }
    }
    return true
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
    this.error.handleMinMax(min, max)
    if (length <= 0) {
      throw new Error('length must be bigger than 0')
    }
    const arr = []
    for (let i = 0; i < length; i++) {
      arr.push(this.randomPrimeNumber(min, max))
    }
    return arr
  }
}
