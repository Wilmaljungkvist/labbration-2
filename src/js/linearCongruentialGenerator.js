import { ErrorHandling } from './errorHandling.js'

/**
 * This class represents a Random Number Generator using a linear congruential method.
 * About Linear congruential generator: https://en.wikipedia.org/wiki/Linear_congruential_generator.
 */
export class LinearCongruentialGenerator {
  /**
   * The constructor creates a new instance of the ErrorHandling class.
   * This constructor also initializes the generator with default values for its properties and generates valid parameters for the linear congruential method.
   *
   */
  constructor () {
    this.error = new ErrorHandling()
    this.seed = 0
    this.multiplier = 0
    this.increment = 0
    this.modulus = 0
    this.parametersGenerated = false

    if (!this.parametersGenerated) {
      this.#generateValidParameters()
      this.parametersGenerated = true
    }
  }

  /**
   * Generates valid parameters for the LCG.
   */
  #generateValidParameters () {
    do {
      this.seed = Math.floor(Math.random() * 10000) + 1
      this.multiplier = Math.floor(Math.random() * 100000) + 1
      this.increment = Math.floor(Math.random() * 1000000) + 1
      this.modulus = Math.floor(Math.random() * 10000000) + 1
    } while (!this.#isValidParameters())
  }

  /**
   * Checks if the current parameters are valid.
   *
   * @returns {boolean} - Returns true if the parameters are valid or false if not valid.
   */
  #isValidParameters () {
    const modulus = this.modulus
    const multiplier = this.multiplier
    const increment = this.increment

    if (!this.isPrime(modulus)) {
      return false
    }

    if (this.#biggestCommonDivisor(modulus, multiplier) !== 1 || this.#biggestCommonDivisor(modulus, increment) !== 1) {
      return false
    }

    if (modulus % 2 === 0) {
      if ((multiplier - 1) % 8 !== 0 || (increment % 4) !== 0) {
        return false
      }
    }

    return true
  }

  /**
   * Looks for the common divisor in to numbers.
   *
   * @param {number} biggerNumber - The bigger number.
   * @param {number} smallerNumber - The smaller number.
   * @returns {number} - The common divisor between the two numbers.
   */
  #biggestCommonDivisor (biggerNumber, smallerNumber) {
    while (smallerNumber !== 0) {
      const temporary = smallerNumber
      smallerNumber = biggerNumber % smallerNumber
      biggerNumber = temporary
    }
    return biggerNumber
  }

  /**
   * Checks if the number is a prime number.
   *
   * @param {number} number - The number that is going to be checked if prime or not.
   * @returns {boolean} - Returns true if the number is prime and false if not prime.
   */
  isPrime (number) {
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
   * The next decimal in the sequence, a number between 0 and 1.
   *
   * @returns {number} - Returns the generated number.
   */
  #nextDecimalInSequence () {
    this.seed = (this.multiplier * this.seed + this.increment) % this.modulus
    return this.seed / this.modulus
  }

  /**
   * Generates the next random decimal.
   *
   * @param {number} min - The minimum number in the range.
   * @param {number} max - The maximum number in the range.
   * @returns {number} - Returns the generated number.
   */
  getNextDecimalRange (min, max) {
    this.error.handleMinMax(min, max)
    const randomValue = this.#nextDecimalInSequence()
    const minMaxValue = min + randomValue * (max - min)
    return minMaxValue
  }

  /**
   * Generates the next random integer.
   *
   * @param {number} min - The minimum number in the range.
   * @param {number} max - The maximum number in the range.
   * @returns {number} - Returns the generated number.
   */
  getNextIntRange (min, max) {
    this.error.handleMinMax(min, max)
    const randomValue = this.#nextDecimalInSequence()
    const minMaxValue = min + randomValue * (max - min)
    return Math.floor(minMaxValue)
  }
}
