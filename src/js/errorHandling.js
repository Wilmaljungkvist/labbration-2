/**
 * This class handles the errors.
 */
export class ErrorHandling {
  /**
   * Throws an error if minimum is a bigger number than maximum.
   *
   * @param {number} min - The minimum value of the range.
   * @param {number} max - The maximum value of the range.
   * @returns {boolean} - returns true if minimum is smaller than maximum.
   */
  handleMinMax (min, max) {
    if (max < min) {
      throw new Error('Minimum must be the same or smaller than maximum.')
    }
    return true
  }

  /**
   * Returns true if the input is of type array and has a length bigger than 0.
   *
   * @param {Array} arr - The input from the user to test.
   * @returns {boolean} - returns true.
   */
  handleArray (arr) {
    if (arr.length <= 0) {
      throw new Error('Array can not be empty.')
    } else if (!Array.isArray(arr)) {
      throw new Error('Must be an array.')
    } else {
      return true
    }
  }
}
