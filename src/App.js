// imports
import './App.css';
import Web3 from 'web3';
import votingAbi from './votingAbi';
import detectEthereumProvider from '@metamask/detect-provider';
import { createRawTx } from './helper.func';


/*
There are some WEB3 constants:
** web3 object
** contract object
** votingAddress
** hardcode gas
*/
const votingAddress = '0x0d2c1d2fb180c7bd3a67d0E967c063B343ca176b'
const gasPriceGwei = 7;
const gasLimit = 600000;
const web3 = new Web3('https://speedy-nodes-nyc.moralis.io/8f92744f1777e6b94d592c12/eth/rinkeby')
const votingContract = new web3.eth.Contract(votingAbi, votingAddress)



function App() {

  async function _addVote(voteName, description) {

    const provider = await detectEthereumProvider({
      mustBeMetaMask: true
    })
    if (provider) {
      try {
        const accounts = await provider.request({method: 'eth_requestAccounts'});
         
        let data = await votingContract.methods.addVote(voteName, description)

        let rawTransaction = createRawTx(gasPriceGwei, gasLimit, votingAddress, 4, data)

        let hash = await provider.request({
          method: 'eth_sendTransaction',
          params: [
            {
              from: accounts[0],
              ...rawTransaction
            }
          ],
        })

        return hash
      } catch (e) {
        console.error(e)
        return false
      }
    } else {
      console.error('Please install MetaMask')
      return false
    }
  }

  async function _addUser(name, address) {

    const provider = await detectEthereumProvider({
      mustBeMetaMask: true
    })
    if (provider) {
      try {
        const accounts = await provider.request({method: 'eth_requestAccounts'});
         
        let data = await votingContract.methods.addUser()

        let rawTransaction = createRawTx(gasPriceGwei, gasLimit, votingAddress, 4, data)

        await provider.request({
          method: 'eth_sendTransaction',
          params: [
            {
              from: accounts[0],
              ...rawTransaction
            }
          ],
        })

      } catch (e) {
        console.error(e)
        return false
      }
    } else {
      console.error('Please install MetaMask')
      return false
    }
    
  }

  async function _voteFor(ID) {

    const provider = await detectEthereumProvider({
      mustBeMetaMask: true
    })
    if (provider) {
      try {
        const accounts = await provider.request({method: 'eth_requestAccounts'});
         
        let data = await votingContract.methods.voteFor(ID)

        let rawTransaction = createRawTx(gasPriceGwei, gasLimit, votingAddress, 4, data)

        await provider.request({
          method: 'eth_sendTransaction',
          params: [
            {
              from: accounts[0],
              ...rawTransaction
            }
          ],
        })

      } catch (e) {
        console.error(e)
        return false
      }
    } else {
      console.error('Please install MetaMask')
      return false
    }
    
  }

  async function _voteAgainst(ID) {
    const provider = await detectEthereumProvider({
      mustBeMetaMask: true
    })
    if (provider) {
      try {
        const accounts = await provider.request({method: 'eth_requestAccounts'});
         
        let data = await votingContract.methods.voteAgainst(ID)

        let rawTransaction = createRawTx(gasPriceGwei, gasLimit, votingAddress, 4, data)

        await provider.request({
          method: 'eth_sendTransaction',
          params: [
            {
              from: accounts[0],
              ...rawTransaction
            }
          ],
        })

      } catch (e) {
        console.error(e)
        return false
      }
    } else {
      console.error('Please install MetaMask')
      return false
    }
    
  }

  async function _checkUsers() {

    let data = await votingContract.methods.checkUsers().call()
    console.log(data);

    var users = document.getElementById("users");

    users.innerHTML = {'name': data.voterName,
                        'address': data.VoterAddress}
    
  }

  async function _checkExpiredVotes() {

    let data = await votingContract.methods.checkExpiredVotes().call()
    console.log(data);
    
    
  }

  async function _checkOpenVotes() {

    let data = await votingContract.methods.checkOpenVotes().call()
    console.log(data);

    var openVotes = document.getElementById("openVotes");

    openVotes.innerHTML = data

    
 
  }

  return (
    <div className="App">

      <div className="addSomething">

        <button onClick={() => _addUser()}>add User</button>
        <button onClick={() => _addVote}>add Vote</button>

      </div>

      <div className="vote">

        <button onClick={() => _voteAgainst()}>_voteAgainst</button>
        <button onClick={() => _voteFor}>_voteFor</button>

      </div>

      <div className="checking">
        <div id='users'>
          <button onClick={() => _checkUsers()}>checkUsers</button>
        </div>
        <div id='expiredVotes'>
          <button onClick={() => _checkExpiredVotes()}>checkExpiredVotes</button>
        </div>
        <div id='openVotes'>
          <button onClick={() => _checkOpenVotes()}>checkOpenVotes</button>
        </div>
      </div>

    </div>
  );
}

export default App;
