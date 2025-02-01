const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

//Route to get user profile
router.get("./:user_id", userController.getUserProfile);

router.get('/:user_id/events', userController.getUserEvents);

module.exports = router;