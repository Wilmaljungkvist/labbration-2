import { RandomNumberGenerator } from '../src/js/randomNumberGenerator'

describe('RandomNumberGenerator', () => {
  let randomNumberGenerator

  beforeEach(() => {
    randomNumberGenerator = new RandomNumberGenerator()
  })

  test('randomInt should return a random Integer within the range', () => {
    let min = 10
    let max = 20
    for (let i = 1; i < 6; i++) {
      const randomNumber = randomNumberGenerator.randomInt(min, max)
      expect(randomNumber).toBeGreaterThanOrEqual(min)
      expect(randomNumber).toBeLessThanOrEqual(max)
      min += i
      max += i
    }
  })

  test('randomInt should throw an error if max is smaller than min', () => {
    const min = 10
    const max = 1
    expect(() => {
      randomNumberGenerator.randomInt(min, max)
    }).toThrow('Minimum must be the same or smaller than maximum.')
  })

  test('RabdomBoolean should return a random Boolean, true or false', () => {
    const result = randomNumberGenerator.randomBoolean()
    expect(result).toEqual(expect.any(Boolean))
  })

  test('randomDecimal should return a random decimal within the range', () => {
    let min = 10
    let max = 20
    for (let i = 1; i < 6; i++) {
      const randomNumber = randomNumberGenerator.randomDecimal(min, max)
      expect(randomNumber).toBeGreaterThanOrEqual(min)
      expect(randomNumber).toBeLessThanOrEqual(max)
      min += i
      max += i
    }
  })

  test('randomDecimal should throw an error if max is smaller than min', () => {
    const min = 10
    const max = 1
    expect(() => {
      randomNumberGenerator.randomDecimal(min, max)
    }).toThrow('Minimum must be the same or smaller than maximum.')
  })
})
