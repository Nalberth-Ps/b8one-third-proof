import React from 'react';

//Styles
import './styles.scss';

export const DashboardType = () => {
  return (
    <div className="dashboardType">
      <ul className="dashboardType__list">
        <li className="dashboardType__item">
          <input type="radio" name="dashboardType" id="receita" />
          <label htmlFor="receita">Receita</label>
        </li>
        <li className="dashboardType__item">
          <input type="radio" name="dashboardType" id="parceiros" />
          <label htmlFor="parceiros">Parceiros</label>
        </li>
        <li className="dashboardType__item">
          <input type="radio" name="dashboardType" id="comissoes" />
          <label htmlFor="comissoes">Comissões</label>
        </li>
      </ul>
    </div>
  );
};
