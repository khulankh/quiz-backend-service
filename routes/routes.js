const { Router } = require('express');
const { createFact } = require('../controller/quizController');
const { createUser, getUsers, loginUser } = require('../controller/userController');
const { validateInput, validatePassword } = require('../middleware/user-validation')

const router = Router();

router.post('/signup', validateInput, createUser)
router.post('/login', validatePassword, loginUser)
router.post('/users', getUsers)


module.exports = router