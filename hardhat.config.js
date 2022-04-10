require("@nomiclabs/hardhat-waffle");
// require('hardhat-ethernal');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const mnemonic = "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  port:666,
  networks: {
    hardhat: {
      // forking: {
      //   url: "https://eth-mainnet.alchemyapi.io/v2/yGcxW9nz2_uwkKk6p5GaLp4Yo2xuGuO9",
      //   blockNumber: 11551572
      // },
      accounts: {
        mnemonic: mnemonic,
        accountsBalance: "10000000000000000000000",
      },
      chainId: 1337,
    },
    localhost: {
      chainId: 1337,
      url: "http://localhost:8545",
      accounts: {
        mnemonic: mnemonic,
        accountsBalance: "10000000000000000000000",
      },
    },
    mainnet: {
      accounts: { mnemonic },
      chainId: 1337,
      url: "http://localhost:8545",
    },
  },
};
