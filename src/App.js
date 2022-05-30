// imports
import './App.css';
import Web3 from 'web3';


/*
There are some WEB3 constants:
** web3 object
** contract object
** 
*/
const web3 = new Web3('https://speedy-nodes-nyc.moralis.io/8f92744f1777e6b94d592c12/eth/rinkeby')
const votingContract = web3.eth.Contract()


function App() {

  async function addVote() {
    
  }

  async function addUser() {
    
  }

  async function voteFor() {
    
  }

  async function voteAgainst() {
    
  }

  async function checkUsers() {
    
  }

  async function checkExpiredVotes() {
    
  }

  async function checkOpenVotes() {
 
  }

  return (
    <div className="App">

      <div className="addSomething"></div>
      <div className="vote"></div>

      <div className="checking">

        <button onClick={() => checkExpiredVotes()}>checkUsers</button>
        <button onClick={() => checkOpenVotes()}>checkExpiredVotes</button>
        <button onClick={() => checkUsers()}>checkOpenVotes</button>

      </div>

    </div>
  );
}

export default App;
