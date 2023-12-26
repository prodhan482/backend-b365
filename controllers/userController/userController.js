import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModel/userModel.js";

const secretKey = "your-secret-key";

const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, phoneNumber, password } = req.body;

  const existingUser = await User.findOne({
    $or: [{ email }, { phoneNumber }],
  });

  if (existingUser) {
    return res
      .status(409)
      .json({
        message: "User with this email or phone number already exists.",
      });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = new User({
    firstName,
    lastName,
    email,
    phoneNumber,
    role: "customer",
    password: hashedPassword,
  });

  await user.save();

  const token = jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    secretKey
  );

  res
    .status(201)
    .json({
      token,
      user: { id: user._id, email: user.email, role: user.role },
    });
});

export default registerUser;
