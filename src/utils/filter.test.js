// @flow

const filterUtils = require('./filter')

describe('filterUtils.leftPadFilterTopicsParam', () => {
  it('should always returns a PrefixedHashT that is 66 characters long', () => {
    expect(filterUtils.leftPadFilterTopicsParam('1').length).toEqual(66)
    expect(
      filterUtils.leftPadFilterTopicsParam(
        '0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0'
      ).length
    ).toEqual(66)
  })
})

describe('filterUtils.formatFilterParams', () => {
  describe('when fromBlock and toBlock are numbers', () => {
    it('should hash the block numbers', () => {
      const params = {
        address: '0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0',
        fromBlock: 5314666,
        toBlock: 5317547,
        topics: [
          '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
          null,
          '0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0'
        ]
      }

      const expected = {
        address: '0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0',
        fromBlock: '0x51186a',
        toBlock: '0x5123ab',
        topics: [
          '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
          null,
          '0x00000000000000000000000086fa049857e0209aa7d9e616f7eb3b3b78ecfdb0'
        ]
      }
      expect(filterUtils.formatFilterParams(params)).toEqual(expected)
    })
  })

  describe('when fromBlock and toBlock are one of ["latest" | "pending" | "earliest"]', () => {
    it('should return the same string', () => {
      const params = {
        address: '0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0',
        fromBlock: 'latest',
        toBlock: 'pending',
        topics: [
          '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
          null,
          '0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0'
        ]
      }

      const expected = {
        address: '0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0',
        fromBlock: 'latest',
        toBlock: 'pending',
        topics: [
          '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
          null,
          '0x00000000000000000000000086fa049857e0209aa7d9e616f7eb3b3b78ecfdb0'
        ]
      }
      expect(filterUtils.formatFilterParams(params)).toEqual(expected)
    })
  })
})
