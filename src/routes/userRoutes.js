const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
const auth = require('../middleware/auth');

router.post('/register', controller.register);
router.post('/login', controller.login);
router.get('/', auth, controller.findAll);
router.get('/:id', auth, controller.findOne);
router.put('/:id', auth, controller.update);
router.delete('/:id', auth, controller.delete);

module.exports = router; 