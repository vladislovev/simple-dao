import Web3 from 'web3';
const web3 = new Web3('https://speedy-nodes-nyc.moralis.io/8f92744f1777e6b94d592c12/eth/rinkeby')


export async function createRawTx(gasPriceGwei, gasLimit, contractAddress, data, chainId) {

    const rawTransaction = {
        "gasPrice": web3.utils.toHex(gasPriceGwei * 1e9),
        "gasLimit": web3.utils.toHex(gasLimit),
        "to": contractAddress,
        "data": data,
        "chainId": chainId
      };

    return rawTransaction

}