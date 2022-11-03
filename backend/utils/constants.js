const successCode = 201;
const badRequestErrorCode = 400;
const authErrorCode = 401;
const notFoundErrorCode = 404;
const conflictErrorCode = 409;
const serverErrorCode = 500;

const badRequestErrorMessage = 'Переданы некорректные данные';
const authErrorMessage = 'Необходима авторизация';
const notFoundErrorMessage = 'Данные не найдены';
const conflictErrorMessage = 'Пользователем с такими e-mail уже существует';
const serverErrorMessage = 'Произошла внутренняя ошибка сервера';
const userInfoErrorMessage = 'Переданы некорректные почта или пароль';
const pageNotFoundMessage = 'Страница не существует';
const loginMessage = 'Авторизация прошла успешно';
const logoutMessage = 'Выход выполнен';
const limiterMessage = 'Вы превысили лимит запросов в час!';

const allowedUrls = [
  'http://localhost:3000',
  'http://localhost:3001',
];

module.exports = {
  successCode,
  badRequestErrorCode,
  authErrorCode,
  notFoundErrorCode,
  conflictErrorCode,
  serverErrorCode,
  badRequestErrorMessage,
  authErrorMessage,
  notFoundErrorMessage,
  conflictErrorMessage,
  serverErrorMessage,
  userInfoErrorMessage,
  pageNotFoundMessage,
  loginMessage,
  logoutMessage,
  allowedUrls,
  limiterMessage,
};
