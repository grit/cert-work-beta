import { useState } from 'react';
import './Layout.css';

import Header from '../Header/Header.js';
import Dashboard from '../Dashboard/Dashboard.js';

function Layout() {
  const [proposals, setProposals] = useState([]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted!');
  };

  return (
    <div className="layout-wrapper">
      <Header proposals />
      <Dashboard
        proposals={proposals}
        setProposals={setProposals}
        onFormSubmit={onFormSubmit}
      />
    </div>
  );
}

export default Layout;
