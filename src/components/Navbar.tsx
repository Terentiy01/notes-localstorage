import React from 'react'

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper pink lighten-4 px1">
        <a href="/" className="brand-logo">
          Todo-list
        </a>
        <ul id="nav-mobile" className="right">
          <li>
            <a href="/">Список дел</a>
          </li>
          <li>
            <a href="/">Информация</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
