import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="container">
      <header>
        <div>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/catalog">Catalog</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
