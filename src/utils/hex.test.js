// @flow

const hexUtils = require('./hex')

test('hexUtils.formatHashWithoutPrefix will remove the prefix "0x" when present', () => {
  expect(hexUtils.formatHashWithoutPrefix('0x123') === '123').toBe(true)
  expect(hexUtils.formatHashWithoutPrefix('123') === '123').toBe(true)
})

test('hexUtils.formatHashWithPrefix will add the prefix "0x"', () => {
  expect(hexUtils.formatHashWithPrefix('123') === '0x123').toBe(true)
})

test('hexUtils.numberToHex formats a number to hex', () => {
  expect(hexUtils.numberToHex(0) === '0x00').toBe(true)
  expect(hexUtils.numberToHex(123) === '0x7b').toBe(true)
})

test('hexUtils.hexToNumber formats a hex to number', () => {
  expect(hexUtils.hexToNumber('0x00') === 0).toBe(true)
  expect(hexUtils.hexToNumber('0x7b') === 123).toBe(true)
})
