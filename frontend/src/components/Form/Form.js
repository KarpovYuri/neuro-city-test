import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Form.css';

function Form({
  title,
  pageType,
  button,
  text,
  onSubmitForm,
  isResponseMessage,
}) {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmitForm(values);
    setIsValid(false);
  }

  return (
    <form
      className='form'
      onSubmit={handleSubmit}
      noValidate
    >
      <Link to='/' className='form__logo hover'></Link>
      <h1 className='form__title'>{title}</h1>
      <fieldset className='form__fieldset'>
        <div className='form__field'>
          <label htmlFor='email' className='form__label'>E-mail</label>
          <input
            type='email'
            id='email'
            name='email'
            className={`form__input ${errors.email && 'error'}`}
            placeholder='E-mail'
            value={values.email || ''}
            autoComplete='off'
            required
            pattern='^[^ ]+@[^ ]+\.[a-z]{2,3}$'
            onChange={handleChange}
          />
          <span className={`form__input-error ${errors.email && 'form__input-error_bg_red'}`}>{errors.email}</span>
        </div>
        <div className='form__field'>
          <label htmlFor='password' className='form__label'>Пароль</label>
          <input
            type='password'
            id='password'
            name='password'
            className={`form__input ${errors.password && 'error'}`}
            placeholder='Пароль'
            value={values.password || ''}
            autoComplete='off'
            required
            onChange={handleChange}
          />
          <span className={`form__input-error ${errors.password && 'form__input-error_bg_red'}`}>{errors.password}</span>
        </div>
      </fieldset>
      <div className={`form__response-error ${isResponseMessage && 'form__input-error_bg_red'}`}>{isResponseMessage}</div>
      <button
        type='submit'
        className={`form__btn ${(isValid) ? 'hover-btn' : 'profile__btn_disable'}`}
        disabled={!isValid}
      >
        {button}
      </button>
      <p className='form__link-wrapper'>
        {text}
        {pageType === 'signup'
          ? <Link className='form__link hover' to='/signin'>Войти</Link>
          : <Link className='form__link hover' to='/signup'>Регистрация</Link>
        }
      </p>
    </form>
  );
};

export default Form;
