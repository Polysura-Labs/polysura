// SPDX-License-Identifier: MITpragma solidity ^0.8.19;
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract FundraisingDAO is Ownable {
    IERC20 public stablecoin;
    uint256 public minInvestment;
    
    struct Proposal {
        uint256 id;
        address startup;
        uint256 fundingGoal;
        uint256 raised;
        bool active;
        mapping(address => uint256) contributions;
    }

    uint256 private proposalCounter;
    mapping(uint256 => Proposal) public proposals;

    event NewProposal(uint256 id, address startup, uint256 goal);
    event Funded(uint256 proposalId, address investor, uint256 amount);
    event ProposalClosed(uint256 proposalId, bool success);

    constructor(address stablecoinAddress, uint256 _minInvestment) {
        stablecoin = IERC20(stablecoinAddress);
        minInvestment = _minInvestment;
    }

    function createFundingProposal(uint256 fundingGoal) external {
        proposalCounter++;
        Proposal storage p = proposals[proposalCounter];
        p.id = proposalCounter;
        p.startup = msg.sender;
        p.fundingGoal = fundingGoal;
        p.active = true;

        emit NewProposal(p.id, msg.sender, fundingGoal);
    }

    function investInProposal(uint256 proposalId, uint256 amount) external {
        require(proposals[proposalId].active, "Proposal closed");
        require(amount >= minInvestment, "Amount too low");

        stablecoin.transferFrom(msg.sender, address(this), amount);
        proposals[proposalId].raised += amount;
        proposals[proposalId].contributions[msg.sender] += amount;

        emit Funded(proposalId, msg.sender, amount);
    }

    function closeProposal(uint256 proposalId) external {
        Proposal storage p = proposals[proposalId];
        require(msg.sender == p.startup || msg.sender == owner(), "Unauthorized");
        require(p.active, "Already closed");

        p.active = false;
        bool success = p.raised >= p.fundingGoal;
        if (success) {
            stablecoin.transfer(p.startup, p.raised);
        }

        emit ProposalClosed(proposalId, success);
    }
}
