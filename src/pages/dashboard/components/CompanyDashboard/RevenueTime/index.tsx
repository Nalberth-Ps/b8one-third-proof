import React from 'react'

// Styles
import './styles.scss'

export const RevenuePeriodSelector = () => {
  return (
    <div className="revenueTime">
      <ul className="revenueTime__list">
        <li className="revenueTime__item">
          <input type="radio" name="revenueTime" id="today" />
          <label htmlFor="today">Hoje</label>
        </li>
        <li className="revenueTime__item">
          <input type="radio" name="revenueTime" id="7-days" />
          <label htmlFor="7-days">7 dias</label>
        </li>
        <li className="revenueTime__item">
          <input type="radio" name="revenueTime" id="15-days" />
          <label htmlFor="15-days">15 dias</label>
        </li>
        <li className="revenueTime__item">
          <input type="radio" name="revenueTime" id="1-month" />
          <label htmlFor="1-month">1 mês</label>
        </li>
        <li className="revenueTime__item">
          <input type="radio" name="revenueTime" id="6-month" />
          <label htmlFor="6-month">6 mês</label>
        </li>
        <li className="revenueTime__item">
          <input type="radio" name="revenueTime" id="1-year" />
          <label htmlFor="1-year">1 ano</label>
        </li>
      </ul>
    </div>
  )
}
