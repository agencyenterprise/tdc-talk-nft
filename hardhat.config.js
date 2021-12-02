require("dotenv").config();
require("@nomiclabs/hardhat-waffle");

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.2",
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/iRRgkrOCET0SiKBdl1aYA_TkV9-nI4WW",
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
};
