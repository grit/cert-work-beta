import ProposalForm from '../ProposalForm/ProposalForm.js';
import ProposalList from '../ProposalList/ProposalList.js';
import './Dashboard.css';

function Dashboard({ proposals, setProposals, onFormSubmit }) {
  return (
    <div className="dashboard-wrapper">
      <div className="row">
        <div className="column">
          <ProposalForm onFormSubmit={onFormSubmit} />
        </div>
        <div className="column">
          <ProposalList />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
