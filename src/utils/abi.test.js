// @flow

const ERC20TransferEventAbi = require('../abi/ERC20-Transfer-event')
const ERC20TransferFunctionAbi = require('../abi/ERC20-Transfer-function')

const abiUtils = require('./abi')

describe('abiUtils.abiToSignatureHash', () => {
  describe('when given a function abi', () => {
    it('should return the hash for the abiSignature', () => {
      const expected = '0xa9059cbb'
      expect(abiUtils.abiToSignatureHash(ERC20TransferFunctionAbi)).toEqual(
        expected
      )
    })
  })

  describe('when given an event abi', () => {
    it('should return the hash for the abiSignature', () => {
      const expected =
        '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
      expect(abiUtils.abiToSignatureHash(ERC20TransferEventAbi)).toEqual(
        expected
      )
    })
  })
})
