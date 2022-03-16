import ProposalForm from '../ProposalForm/ProposalForm.js';
import ProposalList from '../ProposalList/ProposalList.js';
import './Dashboard.css';

function Dashboard({
  proposals,
  setProposals,
  onFormSubmit,
  fileUrlBronze,
  fileUrlSilver,
  fileUrlGold,
  setFileUrlBronze,
  setFileUrlSilver,
  setFileUrlGold,
}) {
  return (
    <div className="dashboard-wrapper">
      <div className="row">
        <div className="column">
          <ProposalForm
            onFormSubmit={onFormSubmit}
            fileUrlBronze={fileUrlBronze}
            setFileUrlBronze={setFileUrlBronze}
            fileUrlSilver={fileUrlSilver}
            setFileUrlSilver={setFileUrlSilver}
            fileUrlGold={fileUrlGold}
            setFileUrlGold={setFileUrlGold}
          />
        </div>
        <div className="column">
          <ProposalList />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
