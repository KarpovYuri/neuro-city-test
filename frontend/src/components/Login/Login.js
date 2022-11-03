import Form from '../Form/Form';

function Login({ onLogin, isResponseMessage }) {
  return (
    <Form
      title={'Аутентификация!'}
      type={'signin'}
      button={'Войти'}
      text={`Еще не зарегистрированы? `}
      onSubmitForm={onLogin}
      isResponseMessage={isResponseMessage}
    />
  );
};

export default Login;
