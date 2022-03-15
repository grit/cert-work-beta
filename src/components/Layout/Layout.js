import { useState } from 'react';
import './Layout.css';

import Header from '../Header/Header.js';
import Dashboard from '../Dashboard/Dashboard.js';

function Layout() {
  return (
    <div className="layout-wrapper">
      <Header />
      <Dashboard />
    </div>
  );
}

export default Layout;
