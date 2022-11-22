import React from 'react';
import { DashboardType } from './DashboardType';
import { RevenueTime } from './RevenueTime';

// Styles
import './styles.scss';

export const CompanyDashboard = () => {
  return (
    <section className='dashboard'>
      <DashboardType />
      <div className="revenue">
        <h2>
          Receita
        </h2>
        <RevenueTime />
      </div>
    </section>
  );
};
