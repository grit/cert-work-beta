import ProposalForm from '../ProposalForm/ProposalForm.js';
import ProposalList from '../ProposalList/ProposalList.js';
import './Dashboard.css';

function Dashboard({ proposals, setProposals }) {
  return (
    <div className="dashboard-wrapper">
      <div className="row">
        <div className="column">
          <ProposalForm />
        </div>
        <div className="column">
          <ProposalList />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
