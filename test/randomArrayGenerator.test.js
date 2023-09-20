import { RandomArrayGenerator } from "../src/js/randomArrayGenerator"


describe('RandomArrayGenerator', () => {
    let randomArrayGenerator
  
    beforeEach(() => {
      randomArrayGenerator = new RandomArrayGenerator()
    })
  
    test('randomArrayIndex should return a random index within the array length', () => {
      const arr = [1, 2, 3, 4, 5]
      for (let i = 0; i < 10; i++) {
      const randomIndex = randomArrayGenerator.randomArrayIndex(arr)
      expect(randomIndex).toBeGreaterThanOrEqual(0)
      expect(randomIndex).toBeLessThan(arr.length)
      }
    })

    test('randomSequenceArray should generate an array of random numbers within the specified range', () => {
        const min = 1
        const max = 10
        const length = 5
        const arr = randomArrayGenerator.randomSequenceArray(min, max, length)
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
          randomArrayGenerator.randomSequenceArray(min, max, length)
        }).toThrow('Minimum must be the same or smaller than maximum.')
      })


      test('randomArrayIndex should throw an error if the array is empty', () => {
        const arr = []
        expect(() => {
          randomArrayGenerator.randomArrayIndex(arr)
        }).toThrow('Array can not be empty.')
      })

      test('randomArrayIndex should throw an error if the array is not an array', () => {
        const arrNumber = 3
        const arrObject = {}
        const arrBoolean = true
        const arrString = ''
        expect(() => {
          randomArrayGenerator.randomArrayIndex(arrNumber) &&
          randomArrayGenerator.randomArrayIndex(arrObject) &&
          randomArrayGenerator.randomArrayIndex(arrBoolean) &&
          randomArrayGenerator.randomArrayIndex(arrString)
        }).toThrow('Must be an array.')
      })
  })