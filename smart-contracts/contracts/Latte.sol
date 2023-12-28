// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Latte {
    struct Memo {
        string name;
        string message;
        uint timestamp; 
        address from;
        uint256 amount;
    }

    // Array of transactions
    Memo[] memos;

    address payable owner; // Owner is going to receive funds 

    // Contstructor that makes the deployer of this smart contract owner of it
    constructor() {
        owner = payable (msg.sender);
    }

    // This function allows us to buy coffee, it takes in name and message as the value
    function buyCoffee(string calldata name, string calldata message) external payable  {
        // The amount sent should be more than 0, else it will show the following
        // message as the error
        require(msg.value > 0, "Please pay more than 0 ether");

        // .transfer method transfer the given amount to the owner of the smart contract
        owner.transfer(msg.value);

        // The transaction is then pushed to the Array 
        memos.push(Memo(name, message, block.timestamp, msg.sender, msg.value));
    }

    // This function displays all the memos/transactions
    function getMemos() public view returns (Memo[] memory) {
        return memos;
    }
}
