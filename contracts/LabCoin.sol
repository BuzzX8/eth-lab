//SPDX-License-Identifier: MIT

pragma solidity >= 0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract LabCoin is ERC20 {

    constructor(address initialOwner, uint initialAmount) ERC20("LabCoin", "LAB") {
        _mint(initialOwner, initialAmount);
    }
}