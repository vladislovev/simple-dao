import Web3 from 'web3';
const web3 = new Web3('https://rinkeby.infura.io/v3/73620421c3a742e6beebe5b1fb7546b2')


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