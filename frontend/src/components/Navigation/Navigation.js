import { React } from 'react';
import AuthMenu from './AuthMenu/AuthMenu';
import LogoutMenu from './LogoutMenu/LogoutMenu';

function Navigation({ isLogged, onLogout }) {

  return isLogged ? <LogoutMenu onLogout={onLogout} /> : <AuthMenu />;
};

export default Navigation;
