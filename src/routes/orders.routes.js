const ordersController = require('../controllers/orders.controllers');

// middlewares
const validationsMiddleware = require('../middlewares/validations.middleware');
const authMiddleware = require('../middlewares/auth.middleware');
const ordersMiddleware = require('../middlewares/orders.middleware');

const { Router } = require('express');
const router = Router();

router.use(authMiddleware.protect);

router.post(
  '/',
  validationsMiddleware.orderValidation,
  ordersController.createNewOrder
);

router.get('/me', ordersController.findOrders);

router
  .use(
    '/:id',
    authMiddleware.protectAccountOwnerByOrder,
    ordersMiddleware.validOrder
  )
  .route('/:id')
  .patch(ordersController.updateOrder)
  .delete(ordersController.deleteOrder);

module.exports = router;
