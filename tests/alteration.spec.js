const alterations = require('../solutions/alterations')

describe('alterations', () => {
  it('Matches non numbers with human', () => {
    expect(alterations.human.test('alterations')).toBe(true)
    expect(alterations.human.test('')).toBe(true)
    expect(alterations.human.test('RLY =$@$!@Y%!)@Y*HP%HUGFS))___')).toBe(true)
  })

  it('Does not match anything with numbers with human', () => {
    expect(alterations.human.test('KO4KA')).toBe(false)
    expect(alterations.human.test('1241')).toBe(false)
    expect(alterations.human.test('47 chromosomes')).toBe(false)
  })

  it('Matches habit breaking with habit', () => {
    expect(alterations.habit.test('stop to smoke')).toBe(true)
    expect(alterations.habit.test('stop to curse')).toBe(true)
    expect(alterations.habit.test('stop to cry')).toBe(true)
    expect(alterations.habit.test('stop to watch bad films')).toBe(true)
  })

  it('Does not match stop to code \\ live', () => {
    expect(alterations.habit.test('stop to code')).toBe(false)
    expect(alterations.habit.test('stop to live')).toBe(false)
  })
})
