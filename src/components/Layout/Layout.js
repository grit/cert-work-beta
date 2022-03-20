import CertWork from '../../../src/config.json';
import CertProp from '../../../src/config-prop.json';
import { useEffect, useState } from 'react';
import { ethers, utils } from 'ethers';
import './Layout.css';

import Header from '../Header/Header.js';
import Dashboard from '../Dashboard/Dashboard.js';

const address = '0xCdbAb5d2A6B016B79146AA59cae254d81e96046a';

const provider = new ethers.providers.Web3Provider(window.ethereum);
const contract = new ethers.Contract(address, CertWork.abi, provider);

function Layout() {
  const [proposals, setProposals] = useState([
    // {
    //   proposalName: 'proposalName',
    //   proposalDescription: 'proposalDescription',
    //   proposalBronze: 'proposalBronze',
    //   proposalSilver: 'proposalSilver',
    //   proposalGold: 'proposalGold',
    // },
    // {
    //   proposalName: 'proposalName',
    //   proposalDescription: 'proposalDescription',
    //   proposalBronze: 'proposalBronze',
    //   proposalSilver: 'proposalSilver',
    //   proposalGold: 'proposalGold',
    // },
    // {
    //   proposalName: 'proposalName',
    //   proposalDescription: 'proposalDescription',
    //   proposalBronze: 'proposalBronze',
    //   proposalSilver: 'proposalSilver',
    //   proposalGold: 'proposalGold',
    // },
    // {
    //   proposalName: 'proposalName',
    //   proposalDescription: 'proposalDescription',
    //   proposalBronze: 'proposalBronze',
    //   proposalSilver: 'proposalSilver',
    //   proposalGold: 'proposalGold',
    // },
    // {
    //   proposalName: 'proposalName',
    //   proposalDescription: 'proposalDescription',
    //   proposalBronze: 'proposalBronze',
    //   proposalSilver: 'proposalSilver',
    //   proposalGold: 'proposalGold',
    // },
  ]);
  const [fileUrlBronze, setFileUrlBronze] = useState('');
  const [fileUrlSilver, setFileUrlSilver] = useState('');
  const [fileUrlGold, setFileUrlGold] = useState('');

  useEffect(() => {
    console.log(proposals);
  }, [proposals]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const proposalName = document.querySelector('.proposal-name').value;
    const proposalDescription = document.querySelector(
      '.proposal-description'
    ).value;
    const proposalBronze = document.querySelector('.proposal-bronze').value;
    const proposalSilver = document.querySelector('.proposal-silver').value;
    const proposalGold = document.querySelector('.proposal-gold').value;
    const bronzeURI = document.querySelector('.file-url-bronze').text;
    const silverURI = document.querySelector('.file-url-silver').text;
    const goldURI = document.querySelector('.file-url-gold').text;
    document.querySelector('.proposal-name').value = '';
    document.querySelector('.proposal-description').value = '';
    document.querySelector('.proposal-bronze').value = '';
    document.querySelector('.proposal-silver').value = '';
    document.querySelector('.proposal-gold').value = '';
    (async function () {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const signer = provider.getSigner();
      const contract = new ethers.Contract(address, CertWork.abi, signer);
      console.log(contract.address);
      const contractAddress = await contract.addProposal(
        bronzeURI,
        silverURI,
        goldURI
      );
      const receiptAddress = await contractAddress.wait();
      const contract721 = receiptAddress.events.find(
        (x) => x.event === 'ProposalCreated'
      ).args[0];
      const proposalsCopy = [...proposals];
      proposalsCopy.push({
        proposalName,
        proposalDescription,
        proposalBronze,
        proposalSilver,
        proposalGold,
        bronzeURI,
        silverURI,
        goldURI,
        contract721,
      });
      setProposals(proposalsCopy);
    })();
  };

  const onButtonClick = (e, contractAddress) => {
    e.preventDefault();
    console.log(e, contractAddress);
    (async function () {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        CertProp.abi,
        signer
      );
      const options = { value: utils.parseEther('0.01') };
      const receipt = await contract.receiveMoney(options);
    })();
  };

  return (
    <div className="layout-wrapper">
      <Header proposals />
      <Dashboard
        proposals={proposals}
        setProposals={setProposals}
        onFormSubmit={onFormSubmit}
        fileUrlBronze={fileUrlBronze}
        setFileUrlBronze={setFileUrlBronze}
        fileUrlSilver={fileUrlSilver}
        setFileUrlSilver={setFileUrlSilver}
        fileUrlGold={fileUrlGold}
        setFileUrlGold={setFileUrlGold}
        onButtonClick={onButtonClick}
      />
    </div>
  );
}

export default Layout;
