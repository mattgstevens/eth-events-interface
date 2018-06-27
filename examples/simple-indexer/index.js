// @flow

import type { ContractAbiT } from 'types/ethereum-abi'
import type { PrefixedHexT } from 'types/hex'

type BootstrapConfigT = {
  contract: {
    abi: ContractAbiT,
    address: PrefixedHexT,
    deployedAtBlock: number
  }
}

// ---

const EthereumQuery = require('eth-query')
const HttpProvider = require('web3-providers-http')

const { buildEventMapFromAbi, formatFilterParams } = require('../../src/index')

const logger = require('bunyan').createLogger({ name: 'simple-indexer-demo' })

const setupProvider = () => {
  const httpProvider = new HttpProvider('https://mainnet.infura.io')
  // doing this for eth-query interface expectations
  httpProvider.sendAsync = httpProvider.send

  return httpProvider
}

const callGetLog = (ethQuery, filter) =>
  new Promise((resolve, reject) => {
    ethQuery.getLogs(filter, (err, result) => {
      err ? reject(err) : resolve(result)
    })
  })

type BootstrapT = BootstrapConfigT => void
const bootstrap = config => {
  const currentProvider = setupProvider()
  const ethQuery = new EthereumQuery(currentProvider)

  const contractMap = buildEventMapFromAbi(config.contract.abi)

  const filter = formatFilterParams({
    address: config.contract.address,
    fromBlock: 5314666,
    toBlock: 5317547,
    topics: [contractMap.Transfer.topicHash, null, config.contract.address]
  })

  callGetLog(ethQuery, filter)
    .then(logList => {
      logList.forEach(log =>
        logger.info(
          'Got a log -> ',
          log,
          '\nand parsed it ->',
          contractMap.Transfer.parseLog(log)
        )
      )
    })
    .catch(error => logger.error('callGetLog errored', error))
}

bootstrap({
  contract: {
    abi: require('../../src/abi/ERC20.json'),
    address: '0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0',
    deployedAtBlock: 5314666
  }
})
