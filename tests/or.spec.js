const or = require('../solutions/or')

describe('or', () => {
  it('Matches cat, dog & fish', () => {
    expect(or.test('cat')).toBe(true)
    expect(or.test('dog')).toBe(true)
    expect(or.test('fish')).toBe(true)
  })

  it('Does not match pokemon', () => {
    expect(or.test('pikachu')).toBe(false)
    expect(or.test('bulbasaur')).toBe(false)
    expect(or.test('magikarp')).toBe(false)
    expect(or.test('chair???')).toBe(false)
  })
})
