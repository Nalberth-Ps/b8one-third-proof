import React from 'react';
import { seals } from '../../../../mocks/seals';
import { SealItem } from './components/SealItem/SealItem';

// Styles
import './styles.scss';

export const LatestSales = () => {
  return (
    <section className="latestSales">
      <h2 className="latestSales__title">Últimas vendas</h2>

      <div className="sealsContainer">
        <div className="seals__header">
          <div className="seals__row">
            <div className="seals__column">
              <p>Cliente</p>
            </div>
            <div className="seals__column">
              <p>Data</p>
            </div>
            <div className="seals__column">
              <p>Valor</p>
            </div>
            <div className="seals__column">
              <p>Comissão</p>
            </div>
            <div className="seals__column">
              <p>Status</p>
            </div>
          </div>
        </div>

        <div className="seals__body">
          {seals.map(({ ...args }, index) => (
            <SealItem 
              key={index}
              {...args}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
