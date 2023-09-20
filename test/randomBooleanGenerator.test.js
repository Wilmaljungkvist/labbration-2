import { randomBoolean } from "../src/js/randomBooleanGenerator"


describe('randomBoolean', () => {
  test('should return a random Boolean, true or false', () => {
      const result = randomBoolean()
      expect(result).toEqual(expect.any(Boolean))
  })
})