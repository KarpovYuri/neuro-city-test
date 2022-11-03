import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <h2 className='footer__title'>Тестовое задание х NeuroCity</h2>
      <hr className='footer__line'></hr>
      <div className='footer__wrapper'>
        <p className='footer__copyright'>&copy; 2022</p>
        <ul className='footer__links'>
          <li className='footer__link-wrapper'>
            <a
              className='footer__link hover'
              target='_blank'
              href='https://www.facebook.com/profile.php?id=100000459328645'
              rel="noreferrer"
            >
              Карпов Юрий
            </a>
          </li>
          <li className='footer__link-wrapper'>
            <a
              className='footer__link hover'
              target='_blank'
              href='https://github.com/KarpovYuri'
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
