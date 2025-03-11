// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract PaymentStreams {
    IERC20 public stablecoin;

    struct PaymentStream {
        address contributor;
        uint256 ratePerSecond;
        uint256 startTime;
        uint256 lastClaim;
        bool active;
    }

    mapping(address => PaymentStream) public streams;

    event PaymentStreamStarted(address contributor, uint256 rate);
    event PaymentClaimed(address contributor, uint256 amount);
    event PaymentStreamStopped(address contributor);

    constructor(address stablecoinAddress) {
        stablecoin = IERC20(stablecoinAddress);
    }

    function startPaymentStream(address contributor, uint256 ratePerSecond) external {
        require(streams[contributor].active == false, "Stream exists");

        streams[contributor] = PaymentStream({
            contributor: contributor,
            ratePerSecond: ratePerSecond,
            startTime: block.timestamp,
            lastClaim: block.timestamp,
            active: true
        });

        emit PaymentStreamStarted(contributor, ratePerSecond);
    }

    function claimPayment() external {
        PaymentStream storage stream = streams[msg.sender];
        require(stream.active, "No active stream");

        uint256 elapsedTime = block.timestamp - stream.lastClaim;
        uint256 amount = elapsedTime * stream.ratePerSecond;
        
        require(stablecoin.balanceOf(address(this)) >= amount, "Insufficient funds");
        
        stablecoin.transfer(msg.sender, amount);
        stream.lastClaim = block.timestamp;

        emit PaymentClaimed(msg.sender, amount);
    }

    function stopPaymentStream(address contributor) external {
        require(streams[contributor].active, "No active stream");

        streams[contributor].active = false;

        emit PaymentStreamStopped(contributor);
    }
}
