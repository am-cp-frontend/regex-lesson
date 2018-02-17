const ranges = require('../solutions/ranges')

describe('ranges', () => {
  it('Matches 2+ words', () => {
    expect(ranges.test('cat dog')).toBe(true)
    expect(ranges.test('cat dog frog')).toBe(true)
    expect(ranges.test('Be my waifu')).toBe(true)
  })

  it('Does not match empty', () => {
    expect(ranges.test('')).toBe(false)
  })

  it('Does not match non alpha chars', () => {
    expect(ranges.test('1488')).toBe(false)
    expect(ranges.test('555 35 35')).toBe(false)
    expect(ranges.test('A_PIECE_OF_UNDERSCORES')).toBe(false)
    expect(ranges.test('Emo 2007')).toBe(false)
  })
})
