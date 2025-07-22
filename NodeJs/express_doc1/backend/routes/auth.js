const express = require('express');
const {loginUser, registerUser} = require('../controllers/authController');
const { protect } = require('../middleware/auth');


const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/checkToken', protect)

module.exports = router;