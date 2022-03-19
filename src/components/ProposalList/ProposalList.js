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
            </div>
            <p />
            <div>
              <b>Bronze Awards:</b> {proposal.proposalBronze}
            </div>
            <div>Donate to {proposal.contract721}</div>
            <div>
              <b>Silver Awards:</b> {proposal.proposalSilver}
            </div>
            <div>Donate to {proposal.contract721}</div>
            <div>
              <b>Gold Awards:</b> {proposal.proposalGold}
            </div>
            <div>Donate to {proposal.contract721}</div>
          </div>
        );
      })}
    </div>
  );
}

export default ProposalList;
