import { LinearCongruentialGenerator } from './LinearCongruentialGenerator.js'
import { ErrorHandling } from './errorHandling.js'

/**
 * Class that has diffrent types of array generators.
 */
export class ArrayGenerator {
 
  constructor () {
    this.numberGenerator = new LinearCongruentialGenerator()
    this.error = new ErrorHandling()
  }

  /**
   * Generates an random array index based on the chosen array.
   * Throws error if array is empty.
   *
   * @param {Array} arr - The array that is getting a random index.
   * @returns {number} - Returns the random array index.
   */
  getRandomArrayIndex (arr) {
    this.error.validateArray(arr)
    const length = arr.length
    const randomIndex = this.numberGenerator.getNextIntRange(0, length - 1)
    return randomIndex
  }

  /**
   * Generates and array with random numbers depending on min, max values and the specified length. The array gets shuffles before it's returned.
   * Throws error if max is less than min and lenght is 0 or less.
   *
   * @param {number} min - The minimum value of the numbers in the array.
   * @param {number} max - The maximum value of the numbers in the array.
   * @param {number} length - The length of the array.
   * @returns {Array} - Returns the array with the numbers.
   */
  getRandomArray (min, max, length) {
    this.error.validateMinMaxRange(min, max)
    this.error.validateLength(length)
    const arr = []
    for (let i = 0; i < length; i++) {
      arr.push(this.numberGenerator.getNextIntRange(min, max))
    }
    const shuffledArray = this.getShuffledArray(arr)
    return shuffledArray
  }

  /**
   * Method for shuffling an array.
   * Throws error if array is empty.
   *
   * @param {Array} arr - The array that is going to get shuffled.
   * @returns {Array} - Returns the shuffled array.
   */
  getShuffledArray (arr) {
    const shuffledArray = [...arr]
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const randomIndex = this.numberGenerator.getNextIntRange(0, i)
      const temporary = shuffledArray[i]
      shuffledArray[i] = shuffledArray[randomIndex]
      shuffledArray[randomIndex] = temporary
    }
    return shuffledArray
  }
}
