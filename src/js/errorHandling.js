
export class ErrorHandling {
  /**
   * Throws an error if minimum is a bigger number than maximum or returns true if max is bigger than min. 
   *
   */
  validateMinMaxRange (min, max) {
    if (max < min) {
      throw new Error('Minimum must be the same or smaller than maximum.')
    }
    return true
  }

  /**
   * Returns true if the input is of type array and has a length bigger than 0, throws an error if not.
   */
  validateArray (arr) {
    if (arr.length <= 0) {
      throw new Error('Array can not be empty.')
    } else if (!Array.isArray(arr)) {
      throw new Error('Must be an array.')
    } else {
      return true
    }
  }

  /**
   * Throws an error if length is 0 or lower.
   */
  validateLength (length) {
    if (length <= 0) {
      throw new Error('length must be bigger than 0')
    }
  }
}
