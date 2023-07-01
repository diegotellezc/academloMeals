const restaurantsController = require('../controllers/restaurants.controllers');

// middlewares
const validationsMiddleware = require('../middlewares/validations.middleware');
const authMiddleware = require('../middlewares/auth.middleware');

const { Router } = require('express');
const router = Router();

router
  .route('/')
  .get(restaurantsController.findRestaurants)
  .post(
    authMiddleware.protect,
    validationsMiddleware.createRestaurantValidation,
    restaurantsController.createNewRestaurant
  );

router
  .route('/reviews/:restaurantId/:id')
  .patch(authMiddleware.protect, restaurantsController.updateReviewOfRestaurant)
  .delete(
    authMiddleware.protect,
    restaurantsController.deleteReviewOfRestaurant
  );

router.post(
  '/reviews/:id',
  authMiddleware.protect,
  restaurantsController.createNewReview
);

router
  .route('/:id')
  .get(restaurantsController.findRestaurantById)
  .patch(authMiddleware.protect, restaurantsController.updateRestaurant)
  .delete(authMiddleware.protect, restaurantsController.deleteRestaurant);

module.exports = router;
