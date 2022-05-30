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
const votingAddress = '0x6544A61FBD785Ea6beb4C30AF64CAd85cB2472F1'
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
         
        let data = await votingContract.methods.addVote(voteName, description).encodeABI()

        let rawTx = await createRawTx(gasPriceGwei, gasLimit, votingAddress, data, 4)

        let hash = await provider.request({
          method: 'eth_sendTransaction',
          params: [
            {
              from: accounts[0],
              ...rawTx
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
         
        let data = await votingContract.methods.addUser(name, address).encodeABI()

        let rawTx = await createRawTx(gasPriceGwei, gasLimit, votingAddress, data, 4)

        await provider.request({
          method: 'eth_sendTransaction',
          params: [
            {
              from: accounts[0],
              ...rawTx
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
         
        let data = await votingContract.methods.voteFor(ID).encodeABI()

        let rawTx = await createRawTx(gasPriceGwei, gasLimit, votingAddress, data, 4)

        await provider.request({
          method: 'eth_sendTransaction',
          params: [
            {
              from: accounts[0],
              ...rawTx
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
         
        let data = await votingContract.methods.voteAgainst(ID).encodeABI()

        let rawTx = await createRawTx(gasPriceGwei, gasLimit, votingAddress, data, 4)

        await provider.request({
          method: 'eth_sendTransaction',
          params: [
            {
              from: accounts[0],
              ...rawTx
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

    let usersField = document.getElementById("usersField");
	
	  let ret = [];
	  let leftOffset = `${window.innerWidth - 500}px`;
	  let topOffset = `${window.innerHeight - 100}px`;
	  let text = '';

	  data.forEach(element => text += `{'name': ${element.VoterName}, 'address': ${element.VoterAddress}}<br>`);
	  for(let i = 0, len = text.length; i < len; i += 110) {
	  	ret.push(text.substr(i, 110))
	  };

	  text = ret.join('<br>');
	  usersField.style = `margin-top: ${topOffset}; margin-left: ${leftOffset};`;
	  usersField.innerHTML = `${text}`;

  }

  async function _checkExpiredVotes() {

    let data = await votingContract.methods.checkExpiredVotes().call()
    console.log(data);

    let expiredVotesField = document.getElementById("expiredVotesField");
	
	  let ret = [];
	  let leftOffset = `${window.innerWidth - 500}px`;
	  let topOffset = `${window.innerHeight - 100}px`;
	  let text = '';

	  data.forEach(element => text += `{'ID': ${element.ID}, 'name': ${element.name}, 'description': ${element.description}}<br>`);
	  for(let i = 0, len = text.length; i < len; i += 110) {
	  	ret.push(text.substr(i, 110))
	  };

	  text = ret.join('<br>');
	  expiredVotesField.style = `margin-top: ${topOffset}; margin-left: ${leftOffset};`;
	  expiredVotesField.innerHTML = `${text}`;
    
    
  }

  async function _checkOpenVotes() {

    let data = await votingContract.methods.checkOpenVotes().call()
    console.log(data);

    let usersField = document.getElementById("usersField");
	
	  let ret = [];
	  let leftOffset = `${window.innerWidth - 500}px`;
	  let topOffset = `${window.innerHeight - 100}px`;
	  let text = '';

	  data.forEach(element => text += `{'ID': ${element.ID}, 'name': ${element.name}, 'description': ${element.description}}<br>`);
	  for(let i = 0, len = text.length; i < len; i += 110) {
	  	ret.push(text.substr(i, 110))
	  };

	  text = ret.join('<br>');
	  usersField.style = `margin-top: ${topOffset}; margin-left: ${leftOffset};`;
	  usersField.innerHTML = `${text}`;
    
 
  }

  return (
    <div className="App">

      <div className="addSomething">

        <button onClick={() => _addUser('Лев', '0x99dB02471F82A64EF708DcfC8C3d022822530bf3')}>add User</button>
        <button onClick={() => _addVote('Test function', 'I can all you want! That is cool, but you must work hard all time!')}>add Vote</button>

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
	  
	  <div id='usersField'></div>
    <div id='expiredVotesField'></div>
    <div id='openVotesField'></div>

    </div>
  );
}

export default App;
