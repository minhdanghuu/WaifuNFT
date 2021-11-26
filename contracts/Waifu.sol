// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract Waifus is ERC1155 {
    
    constructor() public ERC1155("http://minh.fun/api/Meta/waifu/{id}") {
        
        uint256[] memory ids = new uint256[](100);
        uint256[] memory amounts = new uint256[](100);
        
        
        for (uint256 i = 0; i < 100; i++) {
            ids[i] = i;
            amounts[i] = 1; 
        }
        
        _mintBatch(msg.sender, ids, amounts, "");
    }

    function balanceOfOne(address account) public view returns (uint256[] memory) {
        require(account != address(0), "ERC1155: balance query for the zero address");

        uint256[] memory batchBalances = new uint256[](100);

        for (uint256 i = 0; i < 100; ++i) {
            batchBalances[i] = balanceOf(account, i);
        }

        return batchBalances;
    }

}
