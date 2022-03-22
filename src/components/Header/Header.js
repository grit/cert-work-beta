import './Header.css';

function Header({ isConnected }) {
  return (
    <div className="header-wrapper">
      {isConnected ? 'CERT - DASHBOARD' : null}
    </div>
  );
}

export default Header;
