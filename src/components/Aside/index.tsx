// Dependencies
import React from 'react';

// Constants
import { options } from './constants';

// Components
import { NavItem } from './NavItem';

// Styles
import './styles.scss';

export const Aside = () => {
  return (
    <aside className="aside__content">
      <nav className="navbar">
        <ul className="navbar__list">
          {options.map(({ name, icon, hasChildren }) => (
            <NavItem key={name} name={name} icon={icon} hasChildren={hasChildren} />
          ))}
        </ul>
      </nav>
    </aside>
  );
};
