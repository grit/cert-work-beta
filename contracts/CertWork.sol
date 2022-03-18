// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import './CertProposal.sol';

contract CertWork {
  address[] public contracts;

  event ProposalCreated(address);

  function addProposal(
    string calldata _bronzeURI,
    string calldata _silverURI,
    string calldata _goldURI
  ) external {
    CertProposal proposalContract = new CertProposal(
      _bronzeURI,
      _silverURI,
      _goldURI,
      msg.sender
    );
    contracts.push(address(proposalContract));
    emit ProposalCreated(address(proposalContract));
  }
}
