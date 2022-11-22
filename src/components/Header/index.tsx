import React from 'react';
import { useAuth } from '../../context/AuthenticationContext';
import { options } from './Constants';
import { HeaderLogo } from './Logo';
import './styles.scss';

export const Header = () => {
  const { name } = useAuth();

  return (
    <header className="header">
      <div className="logo__container">
        <HeaderLogo />
        <h1 className="logo__name">Academy Store</h1>
      </div>

      <nav className="userActions">
        <ul className="userActions__list">
          {options.map(({ icon, isUserName }, index) => (
          <li className="userActions__item" key={index}>
            <a href="#" className="userActions__link">
              {icon}
              {isUserName && (
                <span className="userName">{name}</span>
              )}
            </a>
          </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
