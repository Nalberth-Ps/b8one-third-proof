// Dependencies
import React from 'react';
import { useHistory } from 'react-router-dom';

// Context
import { useAuth } from '../../context/AuthenticationContext';

// Components
import { Aside, Header } from '../../components';
import { HelloMessage } from './components/HelloMessage';
import { CompanyDashboard } from './components/CompanyDashboard';

// Styles
import './styles.scss';

export const Dashboard = () => {
  const { isAuthenticated } = useAuth();
  const history = useHistory();

  if (!isAuthenticated) history.push('/');

  return (
    <>
      <Header />

      <div className="main__content">
        <Aside />
        <main>
          <HelloMessage />
          <CompanyDashboard />
        </main>
      </div>
    </>
  );
};
