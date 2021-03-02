const express = require('express');
const { registerUser } = require('../controllers/user');
const router = express.Router();
const userControllers = requier('../controllers/user');

router.post('/register', userControllers,registerUser);
router.post('/login',userControllers.loginUser );

module.exports = router;
