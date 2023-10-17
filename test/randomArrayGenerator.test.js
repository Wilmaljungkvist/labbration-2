import { ArrayGenerator } from '../src/js/arrayGenerator'

describe('ArrayGenerator', () => {
  let arrayGenerator

  beforeEach(() => {
    arrayGenerator = new ArrayGenerator()
  })

  test('randomArrayIndex should return a random index within the array length', () => {
    const arr = [1, 2, 3, 4, 5]
    for (let i = 0; i < 5; i++) {
      const randomIndex = arrayGenerator.getRandomArrayIndex(arr)
      expect(randomIndex).toBeGreaterThanOrEqual(0)
      expect(randomIndex).toBeLessThan(arr.length)
    }
  })

  test('randomSequenceArray should generate an array of random numbers within the specified range', () => {
    const min = 1
    const max = 10
    const length = 5
    const arr = arrayGenerator.getRandomArray(min, max, length)
    expect(arr).toHaveLength(length)
    for (const num of arr) {
      expect(num).toBeGreaterThanOrEqual(min)
      expect(num).toBeLessThanOrEqual(max)
    }
  })

  test('randomSequenceArray should throw an error if max is smaller than min', () => {
    const min = 10
    const max = 1
    const length = 5
    expect(() => {
      arrayGenerator.getRandomArray(min, max, length)
    }).toThrow('Minimum must be the same or smaller than maximum.')
  })

  test('randomArrayIndex should throw an error if the array is empty', () => {
    const arr = []
    expect(() => {
      arrayGenerator.getRandomArrayIndex(arr)
    }).toThrow('Array can not be empty.')
  })

  test('randomArrayIndex should throw an error if the array is not an array', () => {
    const arrNumber = 3
    const arrObject = {}
    const arrBoolean = true
    const arrString = ''
    expect(() => {
      arrayGenerator.getRandomArrayIndex(arrNumber) &&
      arrayGenerator.getRandomArrayIndex(arrObject) &&
      arrayGenerator.getRandomArrayIndex(arrBoolean) &&
      arrayGenerator.getRandomArrayIndex(arrString)
    }).toThrow('Must be an array.')
  })

  test('shuffleArray should maintain the length of the array', () => {
    const array = [1, 2, 3, 4, 5]
    const shuffledArray = arrayGenerator.getShuffledArray(array)

    expect(shuffledArray).toHaveLength(array.length)
  })

  test('shuffleArray should contain all original elements', () => {
    const array = [1, 2, 3, 4, 5]
    const shuffledArray = arrayGenerator.getShuffledArray(array)

    array.forEach((element) => {
      expect(shuffledArray).toContain(element)
    })
  })

  test('shuffleArray should handle empty arrays', () => {
    const emptyArray = []
    const shuffledArray = arrayGenerator.getShuffledArray(emptyArray)

    expect(shuffledArray).toHaveLength(0)
  })
})
