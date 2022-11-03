const router = require('express').Router();
const { getUser } = require('../controllers/users');

// Роуты пользователя
router.get('/me', getUser);

module.exports = router;
