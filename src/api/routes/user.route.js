const authentication = require('../middlewares/authentication');
const userController = require('../controllers/user.controller');

const router = require('express').Router();

router.get('/', userController.getUsers);
router.put('/:id', authentication, userController.updateUser);

module.exports = router;
