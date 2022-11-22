import React from 'react';
import { UserIcon } from './Icons/User';
import { HeaderLogo } from './Logo';
import './styles.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="logo__container">
        <HeaderLogo />
        <h1 className="logo__name">Academy Store</h1>
      </div>

      <nav className="userActions">
        <ul className="userActions__list">
          <li className="userActions__item">
            <a href="#" className="userActions__link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  fill="white"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.08997 9.00008C9.32507 8.33175 9.78912 7.76819 10.3999 7.40921C11.0107 7.05024 11.7289 6.91902 12.4271 7.03879C13.1254 7.15857 13.7588 7.52161 14.215 8.06361C14.6713 8.60561 14.921 9.2916 14.92 10.0001C14.92 12.0001 11.92 13.0001 11.92 13.0001"
                  stroke="#17092C"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path d="M12 17H12.0094" stroke="#17092C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </li>
          <li className="userActions__item">
            <a href="#" className="userActions__link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.5 8.40096C17.5 6.96853 16.9205 5.59478 15.8891 4.5819C14.8576 3.56903 13.4587 3 12 3C10.5413 3 9.14236 3.56903 8.11091 4.5819C7.07946 5.59478 6.5 6.96853 6.5 8.40096C6.5 14.7021 3.75 16.5024 3.75 16.5024H20.25C20.25 16.5024 17.5 14.7021 17.5 8.40096Z"
                  fill="white"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.5858 20.1028C13.4247 20.3756 13.1934 20.6021 12.9151 20.7595C12.6367 20.9169 12.3212 20.9998 12 20.9998C11.6788 20.9998 11.3633 20.9169 11.085 20.7595C10.8067 20.6021 10.5753 20.3756 10.4142 20.1028"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle cx="18" cy="3.75" r="3" fill="#52B45B" />
              </svg>
            </a>
          </li>
          <li className="userActions__item">
            <a href="#" className="userActions__link">
              <UserIcon />
              <span className="userName">Gustavo Silva</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
