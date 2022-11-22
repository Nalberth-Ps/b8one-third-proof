import React from 'react';

import { useAuth } from '../../../../context/AuthenticationContext';

import './styles.scss';

export const HelloMessage = () => {
  const { userData } = useAuth();

  return (
    <div className="helloMessage">
      <p className="helloMessage__title">Olá, {userData.user.name}</p>
      <p className="helloMessage__description">
        Veja abaixo o resumo da sua organização.
      </p>
    </div>
  )
}
