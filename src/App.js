// imports
import './App.css';
import Web3 from 'web3';
import votingAbi from './votingAbi';
import detectEthereumProvider from '@metamask/detect-provider';
import { createRawTx } from './helper.func';
import { useState } from 'react';

/*
There are some WEB3 constants:
** web3 object
** contract object
** votingAddress
** hardcode gas
*/
const votingAddress = '0xfA0307771eFD8a219086003BBB5acD13aC6F32Ff'
const gasPriceGwei = 7;
const gasLimit = 600000;
const web3 = new Web3('https://speedy-nodes-nyc.moralis.io/8f92744f1777e6b94d592c12/eth/rinkeby')
const votingContract = new web3.eth.Contract(votingAbi, votingAddress)



function App() {
  const [voteName, setvoteName] = useState()
  const [description, setdescription] = useState()
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
  const [name, setName] = useState()
  const [address, setaddress] = useState()
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
  const [texts, settext] = useState()
  async function _checkUsers() {

    let data = await votingContract.methods.checkUsers().call()
    console.log(data);

    // let usersField = document.getElementById("usersField");
	
	  let ret = [];
	  // let leftOffset = `${window.innerWidth - 500}px`;
	  // let topOffset = `${window.innerHeight - 100}px`;
	  let text = '';

	  data.forEach(element => text += `name: ${element.VoterName}, address: ${element.VoterAddress} \n`);
	  for(let i = 0, len = text.length; i < len; i += 110) {
	  	ret.push(text.substr(i, 110))
	  };

	  text = ret.join();
	  // usersField.style = `margin-top: ${topOffset}; margin-left: ${leftOffset};`;
	  // usersField.innerHTML = `${text}`;
    settext(text);
  }
  const [texts2, settext2] = useState()

  async function _checkExpiredVotes() {

    let data = await votingContract.methods.checkExpiredVotes().call()
    console.log(data);

    // let expiredVotesField = document.getElementById("expiredVotesField");
	
	  let ret = [];
	  // let leftOffset = `${window.innerWidth - 500}px`;
	  // let topOffset = `${window.innerHeight - 100}px`;
	  let text = '';

	  data.forEach(element => text += `ID: ${element.ID}, name: ${element.name}, description: ${element.description}`);
	  for(let i = 0, len = text.length; i < len; i += 110) {
	  	ret.push(text.substr(i, 110))
	  };

	  text = ret.join();
	  // expiredVotesField.style = `margin-top: ${topOffset}; margin-left: ${leftOffset};`;
	  // expiredVotesField.innerHTML = `${text}`;
    
    settext2(text)
  }
  const [texts3, settext3] = useState()

  async function _checkOpenVotes() {

    let data = await votingContract.methods.checkOpenVotes().call()
    console.log(data);

    // let usersField = document.getElementById("usersField");
	
	  let ret = [];
	  // let leftOffset = `${window.innerWidth - 500}px`;
	  // let topOffset = `${window.innerHeight - 100}px`;
	  let text = '';

	  data.forEach(element => text += `ID: ${element.ID}, name: ${element.name}, description: ${element.description}`);
	  for(let i = 0, len = text.length; i < len; i += 110) {
	  	ret.push(text.substr(i, 110))
	  };

	  text = ret.join();
	  // usersField.style = `margin-top: ${topOffset}; margin-left: ${leftOffset};`;
	  // usersField.innerHTML = `${text}`;
    settext3(text)
 
  }
  const [id, setid] = useState()

  return (
    <div className="App">

      <div className="App-header">
          <div className='addUser'>
        <button onClick={() => _addUser(name, address)}>Добавить пользователя</button>
        <div className='a'>
        <input className='addu' onChange={e => setName(e.target.value)} placeholder="Имя" />

        <input className='addu' onChange={e => setaddress(e.target.value)} placeholder="Адрес" />
        </div>
      </div>

        <button onClick={() => _addVote(voteName, description)}>Создать голосование</button>
        <div>
        <input className='votename' onChange={e => setvoteName(e.target.value)} placeholder="Название голосования" />
        <textarea className='des' onChange={e => setdescription(e.target.value)} placeholder="Содержание" />
        </div>
        <div className='a'>
        <button onClick={() => _voteAgainst(id)}>Да</button>

        <button onClick={() => _voteFor(id)}>Нет</button>
        </div>

        <input className='id' onChange={e => setid(e.target.value)} placeholder="id" />


          <button onClick={() => _checkUsers()}>checkUsers</button>
          <p className='leva'>{texts}</p>

          <button onClick={() => _checkExpiredVotes()}>checkExpiredVotes</button>
        <p className='leva'>{texts2}</p>

          <button onClick={() => _checkOpenVotes()}>checkOpenVotes</button>
        <p className='leva'>{texts3}</p>

      </div>
	  
	  <div id='usersField'></div>
    <div id='expiredVotesField'></div>
    <div id='openVotesField'></div>

    </div>
  );
}

export default App;
