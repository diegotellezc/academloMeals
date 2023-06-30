const mealsController = require('../controllers/meals.controllers');

// middlewares
const validationsMiddleware = require('../middlewares/validations.middleware');
const authMiddleware = require('../middlewares/auth.middleware');

const { Router } = require('express');
const router = Router();

router.get('/', mealsController.findMeals);

router
  .route('/:id')
  .get(mealsController.findMealById)
  .post(mealsController.createNewMeal)
  .patch(mealsController.updateMeal)
  .delete(mealsController.deleteMeal);

module.exports = router;
