const groups = require('../solutions/groups')

describe('groups', () => {
  it('Matches any 4char string with forChar', () => {
    expect(groups.forChar.test('abcd')).toBe(true)
    expect(groups.forChar.test('f#@*')).toBe(true)
    expect(groups.forChar.test('R2D2')).toBe(true)
    expect(groups.forChar.test('((((')).toBe(true)
    expect(groups.forChar.test('')).toBe(false)
    expect(groups.forChar.test('1u5917522165-671')).toBe(false)
    expect(groups.forChar.test('123')).toBe(false)
  })

  it('Matches dd.mm.yyyy with date', () => {
    expect(groups.date.test('11.12.2013')).toBe(true)
    expect(groups.date.test('05.10.0012')).toBe(true)
    expect(groups.date.test('5.10.1020')).toBe(false)
    expect(groups.date.test('2 JUL 2010')).toBe(false)
  })

  it('Matches alphanumerics longer than 6 with nickname', () => {
    expect(groups.nickname.test('Kuorell')).toBe(true)
    expect(groups.nickname.test('DeathGun2009')).toBe(true)
    expect(groups.nickname.test('_xXx_no_imagination_xXx_')).toBe(true)
    expect(groups.nickname.test('tux')).toBe(false)
    expect(groups.nickname.test('H@#K YOU')).toBe(false)
  })

  it('Matches russian phone numbers with nickname phoneNumber', () => {
    expect(groups.phoneNumber.test('+7 (906) 242-77-33')).toBe(true)
    expect(groups.phoneNumber.test('+7 (999) 999-99-99')).toBe(true)
    expect(groups.phoneNumber.test('8800555-35-35')).toBe(false)
    expect(groups.phoneNumber.test('+7(123)4-5-6-78-90')).toBe(false)
  })
})
