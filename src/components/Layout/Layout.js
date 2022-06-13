import CertWork from '../../../src/config.json';
import CertProp from '../../../src/config-prop.json';
import { useEffect, useState } from 'react';
import { ethers, utils } from 'ethers';
import TypeWriter from 'react-typewriter';
import { create } from 'ipfs-http-client';
import './Layout.css';

import Header from '../Header/Header.js';
import Dashboard from '../Dashboard/Dashboard.js';

const address = '0xC2418840f38FEC038D556A19C1Af48818C530E1C';

const provider = new ethers.providers.Web3Provider(window.ethereum);

const ipfs = create('https://ipfs.infura.io:5001');

function Layout() {
  const [accounts, setAccounts] = useState([]);
  const [proposals, setProposals] = useState([]);
  const [fileUrlBronze, setFileUrlBronze] = useState('');
  const [fileUrlSilver, setFileUrlSilver] = useState('');
  const [fileUrlGold, setFileUrlGold] = useState('');
  const [contractLoading, setContractLoading] = useState(false);

  const isConnected = Boolean(accounts[0]);

  const ipfsUpload = async (file) => {
    const { path } = await ipfs.add(file);
    return `https://gateway.ipfs.io/ipfs/${path}`;
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const proposalName = document.querySelector('.proposal-name').value;
    const proposalDescription = document.querySelector(
      '.proposal-description'
    ).value;
    const q = document.querySelector.bind(document);
    const proposalBronze = q('.proposal-bronze').value;
    const proposalSilver = q('.proposal-silver').value;
    const proposalGold = q('.proposal-gold').value;
    const bronzeURI = q('.file-url-bronze').text;
    const silverURI = q('.file-url-silver').text;
    const goldURI = q('.file-url-gold').text;
    const bronzeFee = q('.bronze-fee').value;
    const silverFee = q('.silver-fee').value;
    const goldFee = q('.gold-fee').value;
    e.target.reset();

    (async function () {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const signer = provider.getSigner();
      const contract = new ethers.Contract(address, CertWork.abi, signer);

      const bronzeFile = {
        path: '/',
        content: JSON.stringify({
          name: proposalName,
          description: proposalDescription,
          image: bronzeURI,
        }),
      };

      const silverFile = {
        path: '/',
        content: JSON.stringify({
          name: proposalName,
          description: proposalDescription,
          image: silverURI,
        }),
      };

      const goldFile = {
        path: '/',
        content: JSON.stringify({
          name: proposalName,
          description: proposalDescription,
          image: goldURI,
        }),
      };

      const metaBronzeURI = await ipfsUpload(bronzeFile);
      const metaSilverURI = await ipfsUpload(silverFile);
      const metaGoldURI = await ipfsUpload(goldFile);

      const contractAddress = await contract.addProposal(
        metaBronzeURI,
        metaSilverURI,
        metaGoldURI
      );
      setContractLoading(true);
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
        metaBronzeURI,
        metaSilverURI,
        metaGoldURI,
        contract721,
        bronzeFee,
        silverFee,
        goldFee,
      });
      setProposals(proposalsCopy);
      setContractLoading(false);
    })();
  };

  const onButtonClick = (e, contractAddress, fee) => {
    e.preventDefault();
    (async function () {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        CertProp.abi,
        signer
      );
      const options = { value: utils.parseEther(String(fee)) };
      await contract.receiveMoney(options);
    })();
  };

  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      setAccounts(accounts);
    }
  }

  return (
    <div className="layout-wrapper">
      <Header proposals isConnected={isConnected} />
      {isConnected ? (
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
          contractLoading={contractLoading}
        />
      ) : (
        <div>
          <div className="moving-background">
            <div className="typewriter">
              <TypeWriter typing={1}>
                <div>(CERT) - Community-Engaged Research Token</div>

                <div className="typewriter-second">
                  In the past month:
                  <br />
                  58 research studies have been conducted.
                  <br />
                  $23,580 of funding has been distributed.
                  <br />
                  720 NFTs have been minted and awarded.
                </div>
              </TypeWriter>
            </div>
          </div>
          <div className="background-button-wrapper">
            <button className="background-button" onClick={connectAccount}>
              Connect to CERT via Metamask
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Layout;
