require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const MANTLE_TESTNET_URL = process.env.MANTLE_TESTNET_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.19",
  networks: {
    mantleTestnet: {
      url: "https://rpc.testnet.mantle.xyz", 
      accounts: ["442ec18707acd36af8aea3a1483e51ca7a08c15a92e86b136a9df8ba3feef173"]
    }
  },
};
