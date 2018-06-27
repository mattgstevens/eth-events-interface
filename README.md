# eth-events-interface
Provides a library that can process Ethereum events given an ABI to parse with.

## What
A simple way to parse events from an ethereum blockchain.

## Why
Making the `eth_getLogs` RPC call is fast, and parsing that data should be too.

NOTE: `logs` in the RPC call `eth_getTransactionReceipt` can be processed in the same way.

## How to use
[Read the example](./src/examples/simple-indexer.js) and run it with `yarn demo:simple`
