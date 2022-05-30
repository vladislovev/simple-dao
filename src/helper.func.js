

export async function createRawTx(gasPriceGwei, gasLimit, contractAddress, chainId, data) {

    const rawTransaction = {
        "gasPrice": web3.utils.toHex(gasPriceGwei * 1e9),
        "gasLimit": web3.utils.toHex(gasLimit),
        "to": contractAddress,
        "data": data,
        "chainId": chainId
      };

    return rawTransaction

}