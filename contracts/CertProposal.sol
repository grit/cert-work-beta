// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';

contract CertProposal is ERC721 {
  mapping(address => uint256) public donations;

  struct Proposal {
    address owner;
    string bronzeMetaURI;
    string silverMetaURI;
    string goldMetaURI;
  }

  Proposal proposal;

  constructor(
    string memory _bronzeTokenURI,
    string memory _silverTokenURI,
    string memory _goldTokenURI,
    address _owner
  ) public payable ERC721('CERT', 'CRT') {
    proposal.bronzeMetaURI = _bronzeTokenURI;
    proposal.silverMetaURI = _silverTokenURI;
    proposal.goldMetaURI = _goldTokenURI;
    proposal.owner = _owner;
  }

  function getProposal()
    public
    view
    returns (
      string memory,
      string memory,
      string memory,
      address
    )
  {
    return (
      proposal.bronzeMetaURI,
      proposal.silverMetaURI,
      proposal.goldMetaURI,
      proposal.owner
    );
  }

  function receiveMoney() public payable {
    donations[msg.sender] = msg.value;
  }

  receive() external payable {
    receiveMoney();
  }
}
