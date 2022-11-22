import React from 'react';

// Components
import { DashboardTypeSelector } from './DashboardType';
import { RevenuePeriodSelector } from './RevenueTime';
import { TotalRevenue } from './RevenueTime/TotalRevenue';

// Styles
import './styles.scss';

export const CompanyDashboard = () => {
  return (
    <section className='dashboard'>
      <DashboardTypeSelector />
      <div className="revenue">
        <h2>
          Receita
        </h2>
        <RevenuePeriodSelector />
        <p className="dataPeriod">
          Exibindo dados do período{' '}
          <span className="dataPeriod--highlight">
            10 de novembro de 2021 à 10 de outubro de 2022
          </span>
        </p>
        <div className="totalRevenueContainer">
          <TotalRevenue />
          <p className="totalRevenueInfo">
          é a receita gerada com vendas no período selecionado.
          </p>
        </div>
      </div>
    </section>
  );
};
