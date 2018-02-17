const anchors = require('../solutions/anchors')

describe('anchors', () => {
  it('Matches start', () => {
    expect(anchors.start.test('Yoda my name is')).toBe(true)
    expect(anchors.start.test('Yoda is best guy')).toBe(true)
  })

  it('Has no false positives in start', () => {
    expect(anchors.start.test('My name is Yoda')).toBe(false)
    expect(anchors.start.test('My Yoda is name')).toBe(false)
  })

  it('Matches end', () => {
    expect(anchors.end.test('My name is Luke')).toBe(true)
    expect(anchors.end.test('Use the force, Luke')).toBe(true)
    expect(anchors.end.test('My name is not Luke')).toBe(true)
  })

  it('Has no false positives in end', () => {
    expect(anchors.end.test('My name is puke')).toBe(false)
    expect(anchors.end.test('My Luke name is')).toBe(false)
  })
})
