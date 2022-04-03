
// const { interface, bytecode } = require("./compile");
module.exports = function(compiled_contract, account_addr, args){

	console.log("deploying " + compiled_contract + " using " + account_addr);
	const fs = require('browserify-fs');

	const HDWalletProvider = require("truffle-hdwallet-provider");
	const Web3 = require("web3");
	const contract_data = fs.readFileSync(compiled_contract, 'utf8');
	const compiled = JSON.parse(contract_data);

	const interface = compiled.abi;
	const bytecode = compiled.evm.bytecode.object;
	

	const provider = new HDWalletProvider(
		"cereal unfold keep grass caution purity scissors twin pioneer jewel enable shuffle",
		"https://ropsten.infura.io/v3/e63294ce678346ddb5de54f863476e9c"
	);
	
	const web3 = new Web3(provider);
	
	const deploy = async () => {
			 try{
					// const accounts = await web3.eth.getAccounts();
				 const accounts = [account_addr];
				console.log(accounts);
				console.log("Attempting to deploy from account", accounts[0]);

				const result = await new web3.eth.Contract(interface)
				 .deploy({ data: "0x" + bytecode,
									 arguments: args})
				 .send({ gas: "1000000", from: accounts[0] });
				console.log("Contract deployed to", result.options.address);

				return result.options.address;
			} catch(e){
				console.log(e);
			}
	};

	return deploy();
};
