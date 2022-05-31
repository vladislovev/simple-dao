//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.13;



contract Voting{

    struct newUser{ //структура голосующий
        string VoterName; //Имя голосующего
        address VoterAddress; // Адрес голосующего
        uint amountFor; // Кол-во голосов ЗА
        uint amountAgainst; // Кол-во голосов ПРОТИВ
        uint counter;
    }

    struct newVote {
        uint ID;
        string name; // Название голосования (тема)
        string description; // Описание голосования (о чём)
        uint neededVotes; // Количество необходимых голосов 
        uint numFor; // Количество проголосовавших за
        uint numAgainst; // Количество проголосовавших против
        bool wasAccepted;
        string result;
    }



    mapping(address => newUser) public voters;
    uint256 public counter;
    mapping(uint => newVote) public events;
    uint256 public ID = 0;
    mapping(uint => mapping(address => bool)) public isConfirmed;

    address[] public onlyVoters;
    mapping(address => bool) public isVoter;

   
    newUser[] public VotersArray;
    newVote[] public eventsArray;
    newVote[] public expiredVotesArray;

    modifier onlyVoter() {
        // require(isVoter[msg.sender], "not owner");
        _;
    }

    modifier notConfirmed(uint _ID) {
        // require(!isConfirmed[_ID][msg.sender], "You have already voted!");
        _;
    }

    constructor(string memory voterName) {
        voters[msg.sender] = newUser({
            VoterName: voterName,
            VoterAddress: msg.sender ,
            amountFor: 0,
            amountAgainst: 0,
            counter: 0
        });
        VotersArray.push(voters[msg.sender]);
        isVoter[msg.sender] = true;
        onlyVoters.push(msg.sender); 
    }   

    function addUser(string memory voterName, address voterAddress) public 
    onlyVoter
    {
        unchecked {
            counter++;
        }

        voters[voterAddress] = newUser({
            VoterName: voterName,
            VoterAddress: voterAddress ,
            amountFor: 0,
            amountAgainst: 0,
            counter: counter
        });
        VotersArray.push(voters[voterAddress]); 

            require(voterAddress != address(0), "invalid voter");
            require(!isVoter[voterAddress], "voter not unique");

            isVoter[voterAddress] = true;
            onlyVoters.push(voterAddress);
        
    }


    function addVote(string memory voteName, string memory description) public 
    onlyVoter 
    {   
      unchecked {
        ID += 1;
      }
        events[ID] = newVote({
            ID: ID,
            name: voteName, // Название голосования (тема)
            description: description, // Описание голосования (о чём)
            neededVotes: 2, // Количество необходимых голосов 
            numFor: 0, // Количество проголосовавших за
            numAgainst: 0, // Количество проголосовавших против
            wasAccepted: false,
            result: ''
        });
        eventsArray.push(events[ID]); 
    }

    function voteFor(uint _ID) public 
    onlyVoter
    notConfirmed(_ID)
    { 
        newVote storage Bulletin = eventsArray[_ID];
        require(Bulletin.numFor < Bulletin.neededVotes, "This vote has been declared closed! The idea has been accepted!");
        Bulletin.numFor += 1;
        isConfirmed[_ID][msg.sender] = true;
        if (Bulletin.numFor >= Bulletin.neededVotes) {

            Bulletin.wasAccepted = true;
            Bulletin.result = "The idea has been accepted!";
            expiredVotesArray.push(Bulletin);

            delete eventsArray[_ID];
            delete events[_ID];

        }
    }

    function voteAgainst(uint _ID) public 
    onlyVoter
    notConfirmed(_ID)
    {
        newVote storage Bulletin = eventsArray[_ID];
        require(Bulletin.numFor < Bulletin.neededVotes, "This vote has been declared closed! The idea has been accepted!");

        // require(Bulletin.numAgainst > Bulletin.neededVotes, "This vote has been declared closed! The idea was abandoned!");
        Bulletin.numAgainst += 1;
        isConfirmed[ID][msg.sender] = true; 
        if (Bulletin.numAgainst > Bulletin.neededVotes) {

            Bulletin.wasAccepted = true;
            Bulletin.result = "The idea was abandoned!";
            expiredVotesArray.push(Bulletin);

            delete eventsArray[_ID];
            delete events[_ID];
        }            
    } 

    function checkUsers() public view returns(newUser[] memory) { 
        return VotersArray; //все юзеры дао
    } 

    function checkExpiredVotes() public view returns(newVote[] memory) { 
        return expiredVotesArray;  //завершившиеся голосования
    }

    function checkOpenVotes() public view returns(newVote[] memory) { 
        return eventsArray;  //проходящий на данный момент голосованияb  
    } 


}