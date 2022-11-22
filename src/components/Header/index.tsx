import React from 'react';
import { useAuth } from '../../context/AuthenticationContext';
import { options } from './Constants';
import { HeaderLogo } from './Logo';
import './styles.scss';

export const Header = () => {
  const { userData } = useAuth();

  return (
    <header className="header">
      <div className="logo__container">
        <HeaderLogo />
        <h1 className="logo__name">Academy Store</h1>
      </div>

      <nav className="userActions">
        <ul className="userActions__list">
          {options.map(({ icon, isUserName }) => (
          <li className="userActions__item">
            <a href="#" className="userActions__link">
              {icon}
              {isUserName && (
                <span className="userName">{userData?.user?.name}</span>
              )}
            </a>
          </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
