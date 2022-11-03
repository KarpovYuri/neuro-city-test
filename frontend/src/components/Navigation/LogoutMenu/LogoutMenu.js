import React from 'react';
import { NavLink } from 'react-router-dom';
import './LogoutMenu.css';

function LogoutMenu({ onLogout }) {
  return (
    <nav className='logout-menu'>
      <NavLink to='/' className='logout-menu__button hover' onClick={onLogout}>Выход</NavLink>
    </nav>
  );
};

export default LogoutMenu;
