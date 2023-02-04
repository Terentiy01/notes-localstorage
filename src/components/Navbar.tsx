import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper light-green px1">
        <a href="/notes-localstorage" className="brand-logo">
          Todo-list
        </a>
        <ul id="nav-mobile" className="right">
          <li>
            <NavLink to="/notes-localstorage">Список дел</NavLink>
          </li>
          <li>
            <NavLink to="/notes-localstorage/about">Информация</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
