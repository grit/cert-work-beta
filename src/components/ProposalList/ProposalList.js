import './ProposalList.css';

function ProposalList({ proposals }) {
  return (
    <div className="proposal-list-wrapper">
      <div className="proposals-header">
        Fund A Proposals - ({proposals.length} Available)
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
              <button>Donate</button> Bronze Tier
            </div>
            <div>
              <b>Silver Awards:</b> {proposal.proposalSilver}
            </div>
            <div className="donate-wrapper">
              <button>Donate</button> Silver Tier
            </div>
            <div>
              <b>Gold Awards:</b> {proposal.proposalGold}
            </div>
            <div className="donate-wrapper">
              <button>Donate</button> Gold Tier
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProposalList;
