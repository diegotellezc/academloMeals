const restaurantsController = require('../controllers/restaurants.controllers');

// middlewares
const validationsMiddleware = require('../middlewares/validations.middleware');
const authMiddleware = require('../middlewares/auth.middleware');

const { Router } = require('express');
const router = Router();

router
  .route('/')
  .get(restaurantsController.findRestaurants)
  .post(restaurantsController.createNewRestaurant);

router
  .route('/reviews/:restaurantId/:id')
  .patch(restaurantsController.updateReviewOfRestaurant)
  .delete(restaurantsController.deleteReviewOfRestaurant);

router.post('/reviews/:id', restaurantsController.createNewReview);

router
  .route('/:id')
  .get(restaurantsController.findRestaurantById)
  .patch(restaurantsController.updateRestaurant)
  .delete(restaurantsController.deleteRestaurant);
