const ordersController = require('../controllers/orders.controllers');

// middlewares
const validationsMiddleware = require('../middlewares/validations.middleware');
const authMiddleware = require('../middlewares/auth.middleware');

const { Router } = require('express');
const router = Router();

router.use(authMiddleware.protect);

router.post('/', ordersController.createNewOrder);

router.get('/me', ordersController.findUserOrders);

router
  .use(authMiddleware.protectAccountOwner)
  .route('/:id')
  .patch(ordersController.updateOrder)
  .delete(ordersController.deleteOrder);
