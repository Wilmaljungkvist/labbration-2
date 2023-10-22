import { LinearCongruentialGenerator } from './linearCongruentialGenerator.js'
import { ErrorHandling } from './errorHandling.js'

export class ArrayGenerator {
 
  constructor () {
    this.numberGenerator = new LinearCongruentialGenerator()
    this.error = new ErrorHandling()
  }

  /**
   * Generates and returns an random array index based on the chosen array.
   * Throws error if array is empty.
   */
  getRandomArrayIndex (arr) {
    this.error.validateArray(arr)
    const length = arr.length
    const randomIndex = this.numberGenerator.getNextIntRange(0, length - 1)
    return randomIndex
  }

  /**
   * Generates and array with random numbers depending on min, max values and the specified length. The array gets shuffles before it's returned.
   * Throws error if max is less than min and length is 0 or less.
   */
  createRandomArray (min, max, length) {
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
   * Shuffles array. 
   * Throws error if array is empty.
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
