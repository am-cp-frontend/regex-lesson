const literally = require('../solutions/literally')

describe('literally', () => {
  it('Matches literally', () => {
    expect(literally.test('literally')).toBe(true)
  })

  it('Does not match other words', () => {
    expect(literally.test('wtf')).toBe(false)
    expect(literally.test('vague')).toBe(false)
    expect(literally.test('testing strigs by hand')).toBe(false)
  })

  it('Is very specific', () => {
    expect(literally.test('Literally')).toBe(false)
  })
})
