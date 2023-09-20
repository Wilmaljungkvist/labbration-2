import { RandomNumberGenerator } from "../src/js/randomNumberGenerator"


describe('RandomNumberGenerator', () => {
    let randomNumberGenerator
  
    beforeEach(() => {
      randomNumberGenerator = new RandomNumberGenerator()
    })
  
    test('random should return a random index within the array length', () => {
      let min = 10
      let max = 20
      for (let i = 5; i < 10; i++) {
        const randomNumber = randomNumberGenerator.randomInt(min, max)
        expect(randomNumber).toBeGreaterThanOrEqual(min)
        expect(randomNumber).toBeLessThanOrEqual(max)
        min += i
        max += i
      }
    
    })
  })