import { RandomPrimeGenerator } from "../src/js/randomPrimeGenerator"


describe('RandomPrimeGenerator', () => {
    let randomPrimeGenerator
  
    beforeEach(() => {
      randomPrimeGenerator = new RandomPrimeGenerator()
    })
  
    test('randomPrimeNumber should return a random prime number within the range', () => {
      let min = 10
      let max = 20
      for (let i = 1; i < 6; i++) {
        const randomPrimeNumber = randomPrimeGenerator.randomPrimeNumber(min, max)
        expect(randomPrimeNumber).toBeGreaterThanOrEqual(min)
        expect(randomPrimeNumber).toBeLessThanOrEqual(max)
        min += i
        max += i
      }
    })
  })