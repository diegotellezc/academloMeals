const Users = require('../models/users.model');
const catchAsync = require('../utils/catchAsync');
const bcrypt = require('bcryptjs');
const generateJWT = require('../utils/jwt');
const AppError = require('../utils/appError');

exports.signup = catchAsync(async (req, res, next) => {
  const { name, email, password, role } = req.body;

  const existentUser = await Users.findOne({
    where: {
      email,
    },
  });

  if (existentUser) {
    return res.status(404).json({
      status: 'error',
      message: `There is already a user created in the database with the email: ${email}`,
    });
  }

  const user = await Users.create({
    name: name.toLowerCase(),
    email: email.toLowerCase(),
    password,
    role,
  });

  const token = await generateJWT(user.id);

  res.status(201).json({
    message: 'User created successfully',
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  res.status(200).json({
    message: 'Ok',
  });
});

exports.findOrdersByUser = catchAsync(async (req, res, next) => {
  res.status(200).json({
    message: 'Ok',
  });
});

exports.findOneOrderById = catchAsync(async (req, res, next) => {
  res.status(200).json({
    message: 'Ok',
  });
});

exports.updateUser = catchAsync(async (req, res, next) => {
  res.status(200).json({
    message: 'Ok',
  });
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  res.status(200).json({
    message: 'Ok',
  });
});
