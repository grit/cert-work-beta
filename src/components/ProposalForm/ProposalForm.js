import './ProposalForm.css';

function ProposalForm({ onFormSubmit }) {
  return (
    <div className="proposal-form-wrapper">
      <form
        onSubmit={(e) => {
          onFormSubmit(e);
        }}
      >
        <div>
          <label>
            Research Proposal:
            <br />
            <input type="text" name="proposal" />
          </label>
        </div>
        <div>
          <label>
            Funding Goal (in Eth):
            <br />
            <input type="number" name="goal" />
          </label>
        </div>
        <div>
          <label>
            Proposal Description:
            <br />
            <textarea type="text" name="description" />
          </label>
        </div>
        <div>
          <label>
            Bronze Tier Rewards:
            <br />
            <textarea type="text" name="bronze" />
          </label>
        </div>
        <div>
          <label>
            Silver Tier Rewards:
            <br />
            <textarea type="text" name="silver" />
          </label>
        </div>
        <div>
          <label>
            Gold Tier Rewards:
            <br />
            <textarea type="text" name="tier" />
          </label>
        </div>
        <input className="proposal-submit" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ProposalForm;
