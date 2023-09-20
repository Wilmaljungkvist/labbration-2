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
  })