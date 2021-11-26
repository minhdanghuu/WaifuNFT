const HDWalletProvider = require('@truffle/hdwallet-provider');
const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "app/src/contracts"),
  networks: {
    develop: { // default with truffle unbox is 7545, but we can use develop to test changes, ex. truffle migrate --network develop
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    bscTestnet: {
      provider: () => new HDWalletProvider(
        ["PRIVATE KEY VI META MASK"],
        'https://data-seed-prebsc-1-s1.binance.org:8545'
      ),
      gas: 6897127,
      network_id: 97,
      skipDryRun: true
    }
  },

  compilers: {
    solc: {
      version: "^0.8.0"
    }
  }
};
