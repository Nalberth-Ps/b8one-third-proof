import React from 'react'

type NavItemProps = {
  name: string
  icon: JSX.Element
  hasChildren: boolean
}

export const NavItem = ({ name, icon, hasChildren }: NavItemProps) => {
  return (
    <li className="navbar__item">
      <div className="iconWrapper">{icon}</div>
      <p className="itemName">{name}</p>
    </li>
  )
}
