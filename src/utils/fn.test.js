// @flow

const fnUtils = require('./fn')

// NOTE:
// these functions and the applied flow types enforce Array input arguments
// when someone uses this with vanilla javascript, all the normal "wat" moment apply ;)

test('first returns first element in a List', () => {
  expect(fnUtils.first([1, 2, 3])).toEqual(1)
})

test('isEmpty returns boolean whether List is empty', () => {
  expect(fnUtils.isEmpty([])).toBe(true)
})
