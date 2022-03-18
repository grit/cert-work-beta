import { FileUpload } from 'react-ipfs-uploader';
import './ProposalForm.css';

function ProposalForm({
  onFormSubmit,
  fileUrlBronze,
  fileUrlSilver,
  fileUrlGold,
  setFileUrlBronze,
  setFileUrlSilver,
  setFileUrlGold,
}) {
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
            <input className="proposal-name" type="text" name="proposal" />
          </label>
        </div>
        {/* <div>
          <label>
            Funding Goal (in Eth):
            <br />
            <input type="number" step="0.01" name="goal" />
          </label>
        </div>
        <div>
          <label>
            Funding Time (in Days):
            <br />
            <input type="number" name="time" />
          </label>
        </div> */}
        <div>
          <label>
            Proposal Description:
            <br />
            <textarea
              className="proposal-description"
              type="text"
              name="description"
            />
          </label>
        </div>
        {/* <div>
          <label>
            Proposal Owner:
            <br />
            <textarea type="text" name="owner" />
          </label>
        </div> */}
        <div>
          <label>
            Bronze Tier Rewards:
            <br />
            <textarea className="proposal-bronze" type="text" name="bronze" />
          </label>
        </div>
        <div>
          <label>
            Silver Tier Rewards:
            <br />
            <textarea className="proposal-silver" type="text" name="silver" />
          </label>
        </div>
        <div>
          <label>
            Gold Tier Rewards:
            <br />
            <textarea className="proposal-gold" type="text" name="tier" />
          </label>
        </div>
        <input className="proposal-submit" type="submit" value="Submit" />
      </form>
      <div className="nft-upload">
        <div>
          <FileUpload setUrl={setFileUrlBronze} />
          Bronze FileUrl :{' '}
          <a
            className="file-url-bronze"
            href={fileUrlBronze}
            target="_blank"
            rel="noopener noreferrer"
          >
            {fileUrlBronze}
          </a>
        </div>
        <div>
          <FileUpload setUrl={setFileUrlSilver} />
          Silver FileUrl :{' '}
          <a
            className="file-url-silver"
            href={fileUrlSilver}
            target="_blank"
            rel="noopener noreferrer"
          >
            {fileUrlSilver}
          </a>
        </div>
        <div>
          <FileUpload setUrl={setFileUrlGold} />
          Gold FileUrl :{' '}
          <a
            className="file-url-gold"
            href={fileUrlGold}
            target="_blank"
            rel="noopener noreferrer"
          >
            {fileUrlGold}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProposalForm;
