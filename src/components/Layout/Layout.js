import { useState } from 'react';
import './Layout.css';

import Header from '../Header/Header.js';
import Dashboard from '../Dashboard/Dashboard.js';

function Layout() {
  const [proposals, setProposals] = useState([]);

  return (
    <div className="layout-wrapper">
      <Header proposals />
      <Dashboard proposals setProposals />
    </div>
  );
}

export default Layout;
