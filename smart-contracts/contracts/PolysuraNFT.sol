// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PolysuraNFT is ERC721URIStorage, Ownable {
    uint256 private _tokenIds;
    mapping(uint256 => address) public startupOwners;

    event StartupNFTMinted(uint256 tokenId, address owner, string metadataURI);

    constructor() ERC721("PolysuraStartupNFT", "PSN") {}

    function mintStartupNFT(address startup, string memory metadataURI) external onlyOwner returns (uint256) {
        _tokenIds++;
        uint256 newTokenId = _tokenIds;
        _safeMint(startup, newTokenId);
        _setTokenURI(newTokenId, metadataURI);
        startupOwners[newTokenId] = startup;

        emit StartupNFTMinted(newTokenId, startup, metadataURI);
        return newTokenId;
    }
}
