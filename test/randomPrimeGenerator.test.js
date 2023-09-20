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
        expect(isPrime(randomPrimeNumber)).toBe(true)
      }
    })

    test('randomPrimeNumber should throw an error if max is smaller than min', () => {
        const min = 10
        const max = 1
        expect(() => {
          randomPrimeGenerator.randomPrimeNumber(min, max)
        }).toThrow('Minimum must be the same or smaller than maximum.')
      })
  })


  function isPrime (number) {
    if (number <= 1) {
        return false
    } else if (number <= 3) {
        return true
    } else if (number % 2 === 0 || number % 3 === 0 ) {
        return false
    }

    for (let i = 5; i * i <= number; i+= 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
    }
    return true
}