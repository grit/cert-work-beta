import CertWork from '../../../src/config.json';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import './Layout.css';

import Header from '../Header/Header.js';
import Dashboard from '../Dashboard/Dashboard.js';

const address = '0x78229853ac70Adb27C249D94bc0d60A6ECE3BdD5';

const provider = new ethers.providers.Web3Provider(window.ethereum);
const contract = new ethers.Contract(address, CertWork.abi, provider);

function Layout() {
  const [proposals, setProposals] = useState([]);
  const [fileUrlBronze, setFileUrlBronze] = useState('');
  const [fileUrlSilver, setFileUrlSilver] = useState('');
  const [fileUrlGold, setFileUrlGold] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    const bronzeURI = document.querySelector('.file-url-bronze').text;
    const silverURI = document.querySelector('.file-url-silver').text;
    const goldURI = document.querySelector('.file-url-gold').text;
    (async function () {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const signer = provider.getSigner();
      const contract = new ethers.Contract(address, CertWork.abi, signer);
      console.log(contract.address);
      await contract.addProposal(bronzeURI, silverURI, goldURI);
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
      />
    </div>
  );
}

export default Layout;
