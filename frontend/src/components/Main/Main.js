import Header from '../Header/Header';
import Promo from './Promo/Promo';
import Footer from '../Footer/Footer';

import './Main.css';

function Main({ isLogged, onLogout }) {
  return (
    <>
      <Header isLogged={isLogged} onLogout={onLogout} />
      <Promo />
      <Footer />
    </>
  );
};

export default Main;
