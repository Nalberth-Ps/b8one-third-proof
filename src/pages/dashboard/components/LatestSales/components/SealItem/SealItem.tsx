import React from 'react';
import { formatCurrency } from '../../../../../../utils/formatCurrency';
import { SealsItem } from '../../typings';

// Styles
import './styles.scss';

export const SealItem = ({ buyerName, commission, date, status, value }: SealsItem) => {
  const formattedDate = new Date(date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  const sealStatus = {
    "finished": "Confirmado",
    "pending": "Pendente",
    "cancelled": "Cancelado"
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .filter((item) => !["de", "da", "das", "do", "dos"].includes(item))
      .map((item) => item[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  }

  return (
    <div className="seals__row">
      <div className="seals__column">
        <div className="seals__buyer">
          <div className="buyer__icon">
            <p>{getInitials(buyerName)}</p>
          </div>
          <p className="buyer__name">{buyerName}</p>
        </div>
      </div>

      <div className="seals__column">
        <div className="seals__date">
          <p>{formattedDate}</p>
        </div>
      </div>

      <div className="seals__column">
        <div className="seals__value">
          <p>{formatCurrency(value)}</p>
        </div>
      </div>

      <div className="seals__column">
        <div className="seals__commission">
          <p>{formatCurrency(commission)}</p>
        </div>
      </div>

      <div className="seals__column">
        <div className="seals__status">
          <p className={status}>{sealStatus[status]}</p>
        </div>
      </div>
    </div>
  );
};
