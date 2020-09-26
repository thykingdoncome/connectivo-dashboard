import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/layout/Header';
import './styles/dashboard.scss'
import DashboardContainer from './components/views/DashboardContainer';

function App() {
  return (
  
      <Router>
        <div className="app">
          <Header />
          <DashboardContainer />
        </div>
      </Router>
  );
}

export default App;
