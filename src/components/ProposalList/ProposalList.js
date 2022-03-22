import TypeWriter from 'react-typewriter';
import ReactLoading from 'react-loading';
import './ProposalList.css';

function ProposalList({ proposals, onButtonClick, contractLoading }) {
  return (
    <div className="proposal-list-wrapper">
      <div className="proposals-header">
        Fund A Proposal - ({proposals.length} Available)
      </div>
      <div>
        {contractLoading ? (
          <div className="loading-state">
            <TypeWriter typing={1} minDelay={100}>
              <div className="typewriter-heading">
                ADDING NEW PROPOSAL... ->
              </div>
            </TypeWriter>
            <ReactLoading type="cylon" color="#052CA3" height={5} width={100} />
          </div>
        ) : null}
      </div>
      {proposals.map((proposal, index) => {
        return (
          <div className="proposal-wrapper" key={index}>
            <div>
              <b>Name:</b> {proposal.proposalName}
            </div>
            <div>
              <b>Description:</b> {proposal.proposalDescription}
              <p>
                Contract Address: <b>{proposal.contract721}</b>
              </p>
            </div>
            <p />
            <div>
              <b>Bronze Awards:</b> {proposal.proposalBronze}
            </div>
            <div className="donate-wrapper">
              <button
                className="donate-button"
                onClick={(e) =>
                  onButtonClick(e, proposal.contract721, proposal.bronzeFee)
                }
              >
                Donate
              </button>{' '}
              Bronze Tier <b>({proposal.bronzeFee} eth)</b>
            </div>
            <hr />
            <div>
              <b>Silver Awards:</b> {proposal.proposalSilver}
            </div>
            <div className="donate-wrapper">
              <button
                className="donate-button"
                onClick={(e) =>
                  onButtonClick(e, proposal.contract721, proposal.silverFee)
                }
              >
                Donate
              </button>{' '}
              Silver Tier <b>({proposal.silverFee} eth)</b>
            </div>
            <hr />
            <div>
              <b>Gold Awards:</b> {proposal.proposalGold}
            </div>
            <div className="donate-wrapper">
              <button
                className="donate-button"
                onClick={(e) =>
                  onButtonClick(e, proposal.contract721, proposal.goldFee)
                }
              >
                Donate
              </button>{' '}
              Gold Tier <b>({proposal.goldFee} eth)</b>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProposalList;
