import React from 'react';
import './styles.scss'

const options = [
  {
    name: 'Relatório',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.5 3.75H3.75V10.5H10.5V3.75Z" stroke="#2E046D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M20.25 3.75H13.5V10.5H20.25V3.75Z" stroke="#2E046D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M20.25 13.5H13.5V20.25H20.25V13.5Z" stroke="#2E046D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M10.5 13.5H3.75V20.25H10.5V13.5Z" stroke="#2E046D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    ),
    hasChildren: false,
  },
  {
    name: 'Pra vender',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.5 3.75H3.75V10.5H10.5V3.75Z" stroke="#2E046D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M20.25 3.75H13.5V10.5H20.25V3.75Z" stroke="#2E046D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M20.25 13.5H13.5V20.25H20.25V13.5Z" stroke="#2E046D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M10.5 13.5H3.75V20.25H10.5V13.5Z" stroke="#2E046D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    ),
    hasChildren: true,
  },
  {
    name: 'Assinaturas',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.6168 3.75129C16.8552 3.51287 17.1383 3.32375 17.4498 3.19471C17.7613 3.06568 18.0952 2.99927 18.4324 2.99927C18.7696 2.99927 19.1035 3.06568 19.415 3.19471C19.7265 3.32375 20.0095 3.51287 20.248 3.75129C20.4864 3.98971 20.6755 4.27276 20.8046 4.58427C20.9336 4.89579 21 5.22966 21 5.56684C21 5.90402 20.9336 6.2379 20.8046 6.54941C20.6755 6.86092 20.4864 7.14397 20.248 7.38239L7.99283 19.6373L3 20.999L4.36168 16.0062L16.6168 3.75129Z"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
];

export const Aside = () => {
  return (
    <aside className="aside__content">
      <nav className="navbar">
        <ul className="navbar__list">
          {options.map(({ name, icon }) => (
            <li className="navbar__item" key={name}>
              <div className="iconWrapper">{icon}</div>
              <p className="itemName">{name}</p>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
