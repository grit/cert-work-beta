import './ProposalList.css';

function ProposalList({ proposals }) {
  return (
    <div className="proposal-list-wrapper">
      <div className="proposals-header">Current Proposals</div>
      {proposals.map((proposal, index) => {
        return (
          <div className="proposal-wrapper" key={index}>
            <div>{proposal.proposalName}</div>
            <div>{proposal.proposalDescription}</div>
          </div>
        );
      })}
    </div>
  );
}

export default ProposalList;
