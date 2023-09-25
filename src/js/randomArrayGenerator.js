import { LinearCongruentialGenerator } from './LinearCongruentialGenerator.js'
import { ErrorHandling } from './errorHandling.js'

/**
 *
 */
export class RandomArrayGenerator {
  /**
   * The constructor creates a new instance of the ErrorHandling and LinearCongruentialGenerator class.
   */
  constructor () {
    this.lcg = new LinearCongruentialGenerator()
    this.error = new ErrorHandling()
  }

  /**
   * Generates an random array index based on the chosen array.
   *
   * @param {Array} arr - The array.
   * @returns {number} - Returns the random array index or undefined if an error occurs.
   */
  randomArrayIndex (arr) {
    if (this.error.handleArray(arr)) {
      const length = arr.length
      const randomIndex = this.lcg.nextIntRange(0, length - 1)
      return randomIndex
    }
    return undefined
  }

  /**
   * Generates and array with random numbers depending on min, max values and the specified length. The array gets shuffles before it's returned.
   *
   * @param {number} min - The minimum value of the numbers in the array.
   * @param {number} max - The maximum value of the numbers in the array.
   * @param {number} length - The length of the array.
   * @returns {Array} - Returns the array with the numbers. Returns undefined if error occurs.
   */
  randomSequenceArray (min, max, length) {
    if (this.error.handleMinMax(min, max) && length > 0) {
      const arr = []
      for (let i = 0; i < length; i++) {
        arr.push(this.lcg.nextIntRange(min, max))
      }
      if (length <= 0) {
        throw new Error('length must be bigger than 0')
      }
      const shuffledArray = this.shuffleArray(arr)
      return shuffledArray
    }
    return undefined
  }

  /**
   * Method for shuffling an array.
   *
   * @param {Array} arr - The array that is going to get shuffled.
   * @returns {Array} - Returns the shuffled array.
   */
  shuffleArray (arr) {
    const shuffledArray = [...arr]
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const randomIndex = this.lcg.nextIntRange(0, i)
      const temp = shuffledArray[i]
      shuffledArray[i] = shuffledArray[randomIndex]
      shuffledArray[randomIndex] = temp
    }
    return shuffledArray
  }
}
