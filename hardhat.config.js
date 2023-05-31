require("@nomicfoundation/hardhat-toolbox")


/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_URL = "nXu71hwb6Uvne1nzSR6Bm27KU"
const PRIVATE_KEY = "68b68bfe314f023eb674bd561b64fc323b0d7248770a34e132349b61ce7db79a"
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: GOERLI_URL,
      accounts: [PRIVATE_KEY],
    },
  },
}