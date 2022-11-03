const AUTH_ERROR_CODE = 401;
const CONFLICT_ERROR_CODE = 409;

const AUTH_ERROR_MESSAGE = 'Неверная почта или пароль.';
const CONFLICT_ERROR_MESSAGE = 'Пользователем с такими e-mail уже существует.';
const SERVER_ERROR_MESSAGE = 'Что-то пошло не так! Попробуйте ещё раз.';

module.exports = {
  AUTH_ERROR_CODE,
  CONFLICT_ERROR_CODE,
  AUTH_ERROR_MESSAGE,
  CONFLICT_ERROR_MESSAGE,
  SERVER_ERROR_MESSAGE,
};
