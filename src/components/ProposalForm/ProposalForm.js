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
    <div>
      <div className="proposal-form-header">Create a New Research Proposal</div>
      <div className="proposal-form-wrapper">
        <form
          onSubmit={(e) => {
            [...document.querySelectorAll('h5')].forEach(
              (x) => (x.style.display = 'none')
            );
            [...document.querySelectorAll('.mb-3')].forEach(
              (x) => (x.value = '')
            );
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
              Bronze Tier Fee (in eth):
              <br />
              <input
                className="bronze-fee"
                type="number"
                name="bronzeFee"
                step="0.01"
              />
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
              Silver Tier Fee (in eth):
              <br />
              <input
                className="silver-fee"
                type="number"
                name="silverFee"
                step="0.01"
              />
            </label>
          </div>
          <div>
            <label>
              Gold Tier Rewards:
              <br />
              <textarea className="proposal-gold" type="text" name="tier" />
            </label>
          </div>
          <div>
            <label>
              Gold Tier Fee (in eth):
              <br />
              <input
                className="gold-fee"
                type="number"
                name="goldFee"
                step="0.01"
              />
            </label>
          </div>
          <br />
          <input className="proposal-submit" type="submit" value="Submit" />
        </form>
        <div className="nft-upload">
          <div className="file-upload-wrapper">
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
          <div className="file-upload-wrapper">
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
          <div className="file-upload-wrapper">
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
    </div>
  );
}

export default ProposalForm;
