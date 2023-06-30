const Restaurants = require('../models/restaurants.model');
const catchAsync = require('../utils/catchAsync');
const bcrypt = require('bcryptjs');
const generateJWT = require('../utils/jwt');
const AppError = require('../utils/appError');

exports.findRestaurants = catchAsync(async (req, res, next) => {
  res.status(201).json({
    status: 'success',
  });
});

exports.createNewRestaurant = catchAsync(async (req, res, next) => {
  res.status(201).json({
    status: 'success',
  });
});

exports.updateReviewOfRestaurant = catchAsync(async (req, res, next) => {
  res.status(201).json({
    status: 'success',
  });
});

exports.deleteReviewOfRestaurant = catchAsync(async (req, res, next) => {
  res.status(201).json({
    status: 'success',
  });
});

exports.createNewReview = catchAsync(async (req, res, next) => {
  res.status(201).json({
    status: 'success',
  });
});

exports.findRestaurantById = catchAsync(async (req, res, next) => {
  res.status(201).json({
    status: 'success',
  });
});

exports.updateRestaurant = catchAsync(async (req, res, next) => {
  res.status(201).json({
    status: 'success',
  });
});

exports.deleteRestaurant = catchAsync(async (req, res, next) => {
  res.status(201).json({
    status: 'success',
  });
});
