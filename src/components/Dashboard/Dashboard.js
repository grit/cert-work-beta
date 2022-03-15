import ProposalForm from '../ProposalForm/PorposalForm.js';
import ProposalList from '../ProposalList/ProposalList.js';
import './Dashboard.css';

function Dashboard() {
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
