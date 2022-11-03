import React from 'react';
import { NavLink } from 'react-router-dom';
import './AuthMenu.css';

function AuthMenu() {
  return (
    <nav className='auth-menu'>
      <NavLink to='/signup' className='auth-menu__button auth-menu__button_color_blue hover-btn'>Регистрация</NavLink>
      <NavLink to='/signin' className='auth-menu__button hover-btn'>Вход</NavLink>
    </nav>
  );
};

export default AuthMenu;
