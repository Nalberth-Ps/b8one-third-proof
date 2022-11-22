import React from 'react';

type NavItemProps = {
  name: string;
  icon: JSX.Element;
  hasChildren: boolean;
};

export const NavItem = ({ name, icon, hasChildren }: NavItemProps) => {
  return (
    <li className="navbar__item">
      <div className="iconWrapper">{icon}</div>
      <p className="itemName">{name}</p>
      {hasChildren && (
        <div className="arrowIcon">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.25024 8.12451L10.0002 11.8745L13.7502 8.12451" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}
    </li>
  );
};
