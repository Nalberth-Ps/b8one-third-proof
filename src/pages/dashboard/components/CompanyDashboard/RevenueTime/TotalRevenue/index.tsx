import React from 'react'
import { formatCurrency } from '../../../../../../utils/formatCurrency'

// Styles
import './styles.scss'

export const TotalRevenue = () => {
  return (
    <p className='totalRevenue'>
      {formatCurrency(1223398302)}
    </p>
  )
}