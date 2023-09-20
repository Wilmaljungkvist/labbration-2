import { LinearCongruentialGenerator } from "../src/js/linearCongruentialGenerator"


describe('LinearCongruentialGenerator', () => {
    let lcg
  
    beforeEach(() => {
        lcg = new LinearCongruentialGenerator()
    })
  
    test('nextDecimalRange should return a decimal number within the specified range', () => {
        const min = 0
        const max = 1
        const randomValue = lcg.nextDecimalRange(min, max)
        expect(randomValue).toBeGreaterThanOrEqual(min)
        expect(randomValue).toBeLessThanOrEqual(max)
    })

    test('nextIntRange should return an integer within the specified range', () => {
        const min = 0
        const max = 10
        const randomValue = lcg.nextIntRange(min, max)
        expect(randomValue).toBeGreaterThanOrEqual(min)
        expect(randomValue).toBeLessThanOrEqual(max)
        expect(Number.isInteger(randomValue)).toBe(true)
    })

    test('nextIntRange should throw an error if max is smaller than min', () => {
        const min = 10
        const max = 1
        expect(() => {
          lcg.nextIntRange(min, max)
        }).toThrow('Minimum must be the same or smaller than maximum.')
      })

      test('randomIntDecimal should throw an error if max is smaller than min', () => {
        const min = 10
        const max = 1
        expect(() => {
          lcg.nextDecimalRange(min, max)
        }).toThrow('Minimum must be the same or smaller than maximum.')
      })
  })