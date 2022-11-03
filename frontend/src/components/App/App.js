import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import authApi from '../../utils/authApi';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ErrorPage from '../ErrorPage/ErrorPage';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import './App.css';

import { MESSAGE_DISPLAY_TIME } from '../../utils/config';
import {
  AUTH_ERROR_CODE,
  AUTH_ERROR_MESSAGE,
  CONFLICT_ERROR_CODE,
  CONFLICT_ERROR_MESSAGE,
  SERVER_ERROR_MESSAGE,
} from '../../utils/constants';

function App() {
  const [isResponseMessage, setIsResponseMessage] = useState('');
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('_id')) {
      authApi.checkToken()
        .then(data => {
          if (data) setIsLogged(true);
        })
        .catch(() => console.log(SERVER_ERROR_MESSAGE))
    }
  }, []);

  function removeResponseMessage() {
    setTimeout(() => setIsResponseMessage(''), MESSAGE_DISPLAY_TIME);
  }

  function onRegister(userData) {
    authApi.registerUser(userData)
      .then(() => {
        onLogin(userData);
      })
      .catch((error) => {
        if (error === CONFLICT_ERROR_CODE) {
          setIsResponseMessage(CONFLICT_ERROR_MESSAGE);
        } else setIsResponseMessage(SERVER_ERROR_MESSAGE);
        removeResponseMessage();
      });
  };

  function onLogin(userData) {
    authApi.loginUser(userData)
      .then((result) => {
        if (result._id) {
          localStorage.setItem('_id', result._id);
          setIsLogged(true);
        };
      })
      .catch((error) => {
        if (error === AUTH_ERROR_CODE) {
          setIsResponseMessage(AUTH_ERROR_MESSAGE);
        } else setIsResponseMessage(SERVER_ERROR_MESSAGE);
        removeResponseMessage();
      });
  };

  function onLogout() {
    authApi.logoutUser()
      .then(() => {
        localStorage.clear();
        setIsLogged(false);
      })
      .catch(() => console.log(SERVER_ERROR_MESSAGE));
  }

  return (
    <div className='app'>
      <Routes>
        <Route element={<ProtectedRoute isLogged={isLogged} />}>
          <Route path='/' element={
            <Main
              isLogged={isLogged}
              onLogout={onLogout}
            />
          } />
        </Route>
        <Route
          path='/signin'
          element={
            isLogged ? (
              <Navigate to='/' />
            ) : (
              <Login
                onLogin={onLogin}
                isResponseMessage={isResponseMessage}
              />
            )
          }
        />
        <Route
          path='/signup'
          element={
            isLogged
              ? <Navigate to='/' />
              : <Register
                onRegister={onRegister}
                isResponseMessage={isResponseMessage}
              />
          }
        />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
