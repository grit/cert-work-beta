// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import './CertProposal.sol';

contract CertWork {
  address[] public contracts;

  function addProposal(
    string calldata _bronzeURI,
    string calldata _silverURI,
    string calldata _goldURI
  ) external returns (address) {
    CertProposal proposalContract = new CertProposal(
      _bronzeURI,
      _silverURI,
      _goldURI,
      msg.sender
    );
    contracts.push(address(proposalContract));
    return address(proposalContract);
  }
}
