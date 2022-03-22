const chai = require('chai');
const { expect } = chai;
const { ethers } = require('hardhat');
const { solidity } = require('ethereum-waffle');

chai.use(solidity);

describe('Cert', function () {
  let CertWork;
  let certWork;
  let CertProposal;
  let certProposal;
  let contractArray;
  let owner, owner2;
  let ownerAddress;
  beforeEach(async () => {
    [owner, owner2] = await ethers.getSigners();
    [addr1, addr2] = await ethers.provider.listAccounts();
    CertWork = await ethers.getContractFactory('CertWork');
    certWork = await CertWork.deploy();
    await certWork.deployed();
  });

  describe('CertWork contracts storage', async () => {
    it('should initialize storage with empty contracts array', async () => {
      contractArray = await certWork.getContracts();
      expect(contractArray.length).to.equal(0);
    });

    it('should populate storage array after a form submission', async () => {
      ownerAddress = await owner.getAddress();
      await certWork.addProposal('bronzeURI', 'silverURI', 'goldURI');
      contractArray = await certWork.getContracts();
      expect(contractArray.length).to.equal(1);
    });
  });

  describe('CertWork ProposalCreated event', async () => {
    it('should emit a ProposalCreated event upon submission', async () => {
      certProposal = await certWork.addProposal(
        'bronzeURI',
        'silverURI',
        'goldURI'
      );
      await expect(
        await certWork.addProposal('bronzeURI', 'silverURI', 'goldURI')
      ).to.emit(certWork, 'ProposalCreated');
    });
  });

  describe('CertProposal struct data', async () => {
    it('should store constructor arguments in struct', async () => {
      CertProposal = await ethers.getContractFactory('CertProposal');
      certProposal = await CertProposal.deploy(
        'bronzeURI',
        'silverURI',
        'goldURI',
        ownerAddress
      );
      await certProposal.deployed();
      let getProposal = await certProposal.getProposal();
      expect(getProposal).to.be.not.undefined;
    });
  });

  describe('Contract funds deposit value verification', async () => {
    it('should initialize contract with 0 funds', async () => {
      const certProposalBalance = await ethers.provider.getBalance(
        certProposal.address
      );
      expect(certProposalBalance).to.equal(0);
    });
    it('should store correct value donated', async () => {
      await owner2.sendTransaction({
        to: certProposal.address,
        value: ethers.utils.parseEther('1.0'),
      });
      const newCertProposalBalance = await ethers.provider.getBalance(
        certProposal.address
      );
      expect(newCertProposalBalance).to.equal(ethers.utils.parseEther('1.0'));
    });
  });
});
