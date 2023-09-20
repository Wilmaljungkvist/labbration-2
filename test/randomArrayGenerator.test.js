import { RandomArrayGenerator } from "../src/js/randomArrayGenerator"


describe('RandomArrayGenerator', () => {
    let randomArrayGenerator
  
    beforeEach(() => {
      randomArrayGenerator = new RandomArrayGenerator()
    })
  
    test('randomArrayIndex should return a random index within the array length', () => {
      const arr = [1, 2, 3, 4, 5]
      const randomIndex = randomArrayGenerator.randomArrayIndex(arr)
      expect(randomIndex).toBeGreaterThanOrEqual(0)
      expect(randomIndex).toBeLessThan(arr.length)
    })
  })