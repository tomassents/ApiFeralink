const express = require('express');
const router = express.Router();
const controller = require('../controllers/branchController');
const auth = require('../middleware/auth');

router.post('/', auth, controller.create);
router.get('/', auth, controller.findAll);
router.get('/:id', auth, controller.findOne);
router.put('/:id', auth, controller.update);
router.delete('/:id', auth, controller.delete);

module.exports = router; 