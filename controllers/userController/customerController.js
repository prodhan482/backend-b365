import jwt from 'jsonwebtoken';
import User from '../models/User';
import Customer from '../models/Customer';

// User registration
export const registerUser = asyncHandler(async (req, res) => {
  // Extract user registration data from the request body
  const { firstName, lastName, email, phoneNumber, role, password } = req.body;

  // Create a user in the common user table
  const user = await User.create({
    firstName,
    lastName,
    email,
    phoneNumber,
    role,
    password,
  });

  // Create a corresponding entry in the customer table
  const customer = await Customer.create({
    user: user._id,
    name: `${firstName} ${lastName}`,
  });

  // Generate a JWT token for the user
  const token = jwt.sign({ id: user._id, email: user.email, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  res.status(201).json({
    token,
    user: {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
    },
    customer: {
      id: customer._id,
      name: customer.name,
    },
  });
});

// Get all customers
export const getAllCustomers = asyncHandler(async (req, res) => {
  const customers = await Customer.find().populate('user', 'firstName lastName email role');

  res.status(200).json(customers);
});

// User login
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.comparePassword(password))) {
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      token: jwt.sign({ id: user._id, email: user.email, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: '30d',
      }),
    });
  } else {
    res.status(400);
    throw new Error('Invalid credentials');
  }
});
