// @flow

const index = require('./index')

test('index should include all expected exports from library', () => {
  const indexKeys = Object.keys(index)

  const expectedExports = {
    abi: Object.keys(require('./utils/abi')),
    events: Object.keys(require('./utils/events')),
    filter: Object.keys(require('./utils/filter')),
    hex: Object.keys(require('./utils/hex'))
  }

  let totalExports = 0
  Object.keys(expectedExports).forEach(utilName => {
    expectedExports[utilName].forEach(functionName => {
      expect(indexKeys.includes(functionName)).toBe(true)
      totalExports += 1
    })
  })

  // check for any name collisions
  expect(indexKeys.length).toEqual(totalExports)
})
