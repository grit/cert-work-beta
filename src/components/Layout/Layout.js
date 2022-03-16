import CertWork from '../../../src/config.json';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import './Layout.css';

import Header from '../Header/Header.js';
import Dashboard from '../Dashboard/Dashboard.js';

const address = '0xe7f591673987dC36bB5d4068114E8A48B39F6FE3';

const provider = new ethers.providers.Web3Provider(window.ethereum);
const contract = new ethers.Contract(address, CertWork.abi, provider);

function Layout() {
  const [proposals, setProposals] = useState([]);
  const [fileUrlBronze, setFileUrlBronze] = useState('');
  const [fileUrlSilver, setFileUrlSilver] = useState('');
  const [fileUrlGold, setFileUrlGold] = useState('');

  useEffect(() => {
    populateProposals();
  }, []);

  async function populateProposals() {
    const count = await contract.proposalCount();
    console.log('count: ', count);
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    const description = e.target.description.value;
    console.log(description);
    (async function () {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const signer = provider.getSigner();
      const contract = new ethers.Contract(address, CertWork.abi, signer);
      console.log(contract.address);
      await contract.addProposal(description);
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
