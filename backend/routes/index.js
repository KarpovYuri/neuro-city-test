const router = require('express').Router();
const usersRoute = require('./users');
const auth = require('../middlewares/auth');
const { createUser, login, logout } = require('../controllers/users');
const { validateLogin, validateCreateUser } = require('../middlewares/validator');
const NotFoundError = require('../errors/not-found-err');
const { pageNotFoundMessage } = require('../utils/constants');

router.post('/signin', validateLogin, login);
router.post('/signup', validateCreateUser, createUser);

router.use(auth);
router.use('/users', usersRoute);
router.post('/signout', logout);

router.use((req, res, next) => {
  next(new NotFoundError(pageNotFoundMessage));
});

module.exports = router;
