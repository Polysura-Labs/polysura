from web3 import Web3

class GovernanceAgent:
    def __init__(self, web3_provider, treasury_contract_address, dao_contract_address, private_key):
        self.web3 = Web3(Web3.HTTPProvider(web3_provider))
        self.treasury_contract_address = Web3.toChecksumAddress(treasury_contract_address)
        self.dao_contract_address = Web3.toChecksumAddress(dao_contract_address)
        self.private_key = private_key
        self.account = self.web3.eth.account.privateKeyToAccount(private_key)

    def get_treasury_balance(self):
        balance = self.web3.eth.get_balance(self.treasury_contract_address)
        return self.web3.fromWei(balance, 'ether')

    def submit_proposal(self, proposal_data):
        dao_contract = self.web3.eth.contract(address=self.dao_contract_address, abi=self.dao_abi)
        nonce = self.web3.eth.getTransactionCount(self.account.address)
        transaction = dao_contract.functions.submitProposal(proposal_data).buildTransaction({
            'chainId': 1,
            'gas': 2000000,
            'gasPrice': self.web3.toWei('50', 'gwei'),
            'nonce': nonce,
        })
        signed_txn = self.web3.eth.account.sign_transaction(transaction, private_key=self.private_key)
        tx_hash = self.web3.eth.sendRawTransaction(signed_txn.rawTransaction)
        return self.web3.toHex(tx_hash)

    def vote_on_proposal(self, proposal_id, support):
        dao_contract = self.web3.eth.contract(address=self.dao_contract_address, abi=self.dao_abi)
        nonce = self.web3.eth.getTransactionCount(self.account.address)
        transaction = dao_contract.functions.vote(proposal_id, support).buildTransaction({
            'chainId': 1,
            'gas': 2000000,
            'gasPrice': self.web3.toWei('50', 'gwei'),
            'nonce': nonce,
        })
        signed_txn = self.web3.eth.account.sign_transaction(transaction, private_key=self.private_key)
        tx_hash = self.web3.eth.sendRawTransaction(signed_txn.rawTransaction)
        return self.web3.toHex(tx_hash)

    @property
    def dao_abi(self):
        # Replace with the actual ABI of the DAO contract
        return []

# Example usage:
# agent = GovernanceAgent(
#     web3_provider='https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID',
#     treasury_contract_address='0xYourTreasuryContractAddress',
#     dao_contract_address='0xYourDAOContractAddress',
#     private_key='YourPrivateKey'
# )
# balance = agent.get_treasury_balance()
# print(f'Treasury Balance: {balance} ETH')
# proposal_tx = agent.submit_proposal('Proposal data')
# print(f'Proposal submitted with transaction hash: {proposal_tx}')
# vote_tx = agent.vote_on_proposal(1, True)
# print(f'Voted on proposal with transaction hash: {vote_tx}')