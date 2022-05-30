const votingAbi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "voterName",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "ID",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "VotersArray",
		"outputs": [
			{
				"internalType": "string",
				"name": "VoterName",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "VoterAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amountFor",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountAgainst",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "counter",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "voterName",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "voterAddress",
				"type": "address"
			}
		],
		"name": "addUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "voteName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			}
		],
		"name": "addVote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "checkExpiredVotes",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "ID",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "neededVotes",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "numFor",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "numAgainst",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "wasAccepted",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "result",
						"type": "string"
					}
				],
				"internalType": "struct Voting.newVote[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "checkOpenVotes",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "ID",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "neededVotes",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "numFor",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "numAgainst",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "wasAccepted",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "result",
						"type": "string"
					}
				],
				"internalType": "struct Voting.newVote[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "checkUsers",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "VoterName",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "VoterAddress",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amountFor",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "amountAgainst",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "counter",
						"type": "uint256"
					}
				],
				"internalType": "struct Voting.newUser[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "counter",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "events",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "ID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "neededVotes",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "numFor",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "numAgainst",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "wasAccepted",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "result",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "eventsArray",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "ID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "neededVotes",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "numFor",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "numAgainst",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "wasAccepted",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "result",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "expiredVotesArray",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "ID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "neededVotes",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "numFor",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "numAgainst",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "wasAccepted",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "result",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "isConfirmed",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "isVoter",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "onlyVoters",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_ID",
				"type": "uint256"
			}
		],
		"name": "voteAgainst",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_ID",
				"type": "uint256"
			}
		],
		"name": "voteFor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "voters",
		"outputs": [
			{
				"internalType": "string",
				"name": "VoterName",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "VoterAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amountFor",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountAgainst",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "counter",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

export default votingAbi