require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: "0.8.2",
  network: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/59s6xJxe1nhxf6w_PduuC9dQ_eP7I-bG',
      accounts: [
        '0x5E870965c0B5980a0023f0CCBC0Fa8232826ED2E'
      ]
    }
  }
};
