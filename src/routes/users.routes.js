const usersController = require('../controllers/users.controller');

const { Router } = require('express');
const router = Router();

router.post('/signup', usersController.signup);

router.post('/login', usersController.login);

router.get('/orders', usersController.findOrdersByUser);

router.get('/orders/:id', usersController.findOneOrderById);

router
  .route('/:id')
  .patch(usersController.updateUser)
  .delete(usersController.deleteUser);

module.exports = router;
