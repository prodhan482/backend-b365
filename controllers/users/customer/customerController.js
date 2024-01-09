import jwt from "jsonwebtoken";
import { createHash, createHmac  } from "crypto";
import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";

import Customer from "../../../models/users/customer/customerModel.js";
import { sendCustomerVerifyEmail } from "../../../config/mails/sendCustomerVerifyEmail.js";
import { sendForgotPasswordMail } from "../../../config/mails/sendForgotPasswordMail.js";
import { sendOTP } from "../../../config/customerVerifySms.js";
import { generateOTP } from "../../../config/helperFunction.js";
import CustomerVerifyOtp from "../../../models/users/customer/customerVerifyOtpModel.js";

const { genSalt, hash, compare } = bcrypt;
const { sign, verify } = jwt;

// Get all customers
const getAllCustomers = asyncHandler(async (req, res) => {
  const customers = await Customer.find();
  res.status(200).json(customers);
});

// Get single customer
const getSingleCustomer = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const customer = await Customer.findOne({ _id: id });
  res.status(200).json(customer);
});

// Register Customer
const registerCustomer = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password, mobile } = req.body;

  const requiredFields = { firstName, lastName, email, password, mobile };

  for (const field in requiredFields) {
    if (!requiredFields[field]) {
      return res.status(400).json({ error: `Please add ${field}` });
    }
  }

  let customerExistsWithEmail = await Customer.findOne({ email });
  let customerExistsWithMobile = await Customer.findOne({ mobile });
  
  if (customerExistsWithEmail && customerExistsWithEmail.isVerified) {
    return res.status(400).json({ error: "Customer already exists with this email" });
  }
  
  if (customerExistsWithMobile && customerExistsWithMobile.isVerified) {
    return res.status(400).json({ error: "Customer already exists with this mobile" });
  }
  
  const existingCustomer = customerExistsWithEmail || customerExistsWithMobile;

  if (existingCustomer) {
    const otpExit = await CustomerVerifyOtp.find({ mobile: existingCustomer.mobile });

    for (const otp of otpExit) {
      await CustomerVerifyOtp.findByIdAndDelete(otp._id);
    }

    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);

    const updateData = {
      firstName,
      lastName,
      email,
      mobile,
      password: hashedPassword,
    };

    const updateCustomer=await Customer.findByIdAndUpdate(existingCustomer._id, updateData);
    const updatedCustomer= await Customer.findById(updateCustomer._id);

    const otp = generateOTP();
    await CustomerVerifyOtp.create({ mobile: updatedCustomer.mobile, otp });
    await sendOTP(updatedCustomer.mobile, otp);

    return res.status(201).json({
      _id: updatedCustomer._id,
      firstName: updatedCustomer.firstName,
      lastName: updatedCustomer.lastName,
      email: updatedCustomer.email,
      mobile: updatedCustomer.mobile,
      isVerified: existingCustomer.isVerified,
    });
  }else{
    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);

    const newCustomer = await Customer.create({
      firstName,
      lastName,
      email,
      mobile,
      password: hashedPassword,
    });

    if (newCustomer) {
      const otp = generateOTP();
      await CustomerVerifyOtp.create({ mobile: newCustomer.mobile, otp });
      await sendOTP(newCustomer.mobile, otp);

      return res.status(201).json({
        _id: newCustomer._id,
        firstName: newCustomer.firstName,
        lastName: newCustomer.lastName,
        email: newCustomer.email,
        mobile: newCustomer.mobile,
        isVerified: newCustomer.isVerified,
      });
    } else {
      return res.status(400).json({ error: "Registration Failed" });
    }
  }
});

//verify Customer
const verifyCustomer = asyncHandler(async (req, res) => {
  const { mobile, otp } = req.body;

  //checking customer is present or not
  const customer = await Customer.findOne({ mobile: mobile });
  const customerOtp = await CustomerVerifyOtp.findOne({ mobile: mobile });

  if (!customer) {
    res.status(400);
    throw new Error("Customer Is Not Found!!");
  }

  // if (customer && (await compare(otp, customerOtp.otp))) {
  if (customer && otp === customerOtp.otp) {
    const verifyCustomer = {
      isVerified: true,
    };
    await Customer.findByIdAndUpdate(customer._id, verifyCustomer);

    const customerOtpID = await CustomerVerifyOtp.findById(customerOtp._id);
    // console.log(customerOtpID)
    await customerOtpID.deleteOne();

    const updatedCustomer = await Customer.findById(customer._id);

    res.status(200).json({
      _id: updatedCustomer.id,
      name: updatedCustomer.name,
      email: updatedCustomer.email,
      mobile: updatedCustomer.mobile,
      isVerified: updatedCustomer.isVerified,
      image: updatedCustomer.image,
      gender: updatedCustomer.gender,
      token: generateToken(updatedCustomer._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid OTP");
  }
});

// // Login Customer
// const loginCustomer = asyncHandler(async (req, res) => {
//   const { email, mobile, password } = req.body;

//   // Check for customer email
//   const customer = await Customer.findOne({
//     $or: [{ email: email }, { mobile: mobile }],
//   });

//   if (!customer) {
//     res.status(400);
//     throw new Error("No customer found with this email");
//   }

//   // Check if password matches

//   if (customer && (await compare(password, customer.password))) {
//     res.status(200).json({
//       _id: customer.id,
//       name: customer.name,
//       email: customer.email,
//       mobile: customer.mobile,
//       isVerified: customer.isVerified,
//       image: customer.image,
//       gender: customer.gender,
//       token: generateToken(customer._id),
//     });
//   } else {
//     res.status(400);
//     throw new Error("Invalid Credentials");
//   }

// });


const magentoCryptKey = '80d0d996d894794fbd7d6ee932aad45b';

function magentoHashPassword(password) {
  // Assuming Magento uses SHA-256 with the key as a salt
  const hash = createHmac('sha256', magentoCryptKey).update(password).digest('hex');
  return hash;
}

const loginCustomer = asyncHandler(async (req, res) => {
  try {
    const { email, mobile, password } = req.body;
    console.log("Request Body:", req.body);

    const customer = await Customer.findOne({
      $or: [{ email: email }, { mobile: mobile }],
    });
    console.log("Customer:", customer);

    if (!customer) {
      console.log("No customer found with this email or mobile");
      res.status(400).json({ message: "No customer found with this email or mobile" });
      return;
    }

    // Extract components from the stored password
    const [hashedPassword, salt, iterations] = customer.password.split(':');

    // Assuming SHA-256 as the hash function
    const inputHash = createHmac('sha256', salt).update(password).digest('hex');

    // Verify the password
    const isPasswordValid = inputHash === hashedPassword;

    if (isPasswordValid) {
      res.status(200).json({
        _id: customer.id,
        name: customer.name,
        email: customer.email,
        mobile: customer.mobile,
        isVerified: customer.isVerified,
        image: customer.image,
        gender: customer.gender,
        token: generateToken(customer._id),
      });
    } else {
      console.log("Invalid Credentials");
      res.status(400).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    console.error("Error:", error.stack);
    res.status(500).json({ message: "Internal Server Error" });
  }
});






// Change Customer Password
const changeCustomerPassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const { email } = req.customer;

  if (!oldPassword || !newPassword) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // Check for customer email
  const customer = await Customer.findOne({ email });

  if (!customer) {
    res.status(400);
    throw new Error("No customer found with this email!!");
  }

  const checkPassword = await compare(oldPassword, customer.password);

  if (checkPassword === false) {
    res.status(400);
    throw new Error("Old Password does not match");
  }

  // Hash Password
  const salt = await genSalt(10);
  const hashedPassword = await hash(newPassword, salt);

  const updateData = {
    password: hashedPassword,
  };

  const updatedData = await Customer.findByIdAndUpdate(
    customer._id,
    updateData
  );

  res.status(200).json(updatedData);
});

// Forgot Customer Password
const forgotCustomerPassword = asyncHandler(async (req, res) => {
  const { email, mobile } = req.body;

  const oldCustomer = await Customer.findOne({
    $or: [{ email: email }, { mobile: mobile }],
  });

  if (!oldCustomer) {
    res.status(400);
    throw new Error("No customer found with this email or mobile");
  }
  const otpExit = await CustomerVerifyOtp.find({ mobile: oldCustomer.mobile });

  for (const otp of otpExit) {
    await CustomerVerifyOtp.findByIdAndDelete(otp._id);
  }

  const otp = generateOTP();
  await CustomerVerifyOtp.create({ mobile: oldCustomer.mobile, otp });
  await sendOTP(oldCustomer.mobile, otp);

  res.status(201).json({
    _id: oldCustomer._id,
    email: oldCustomer.email,
    mobile: oldCustomer.mobile,
  });
});

//ResetPassword
const resetForgottenCustomerPassword = asyncHandler(async (req, res) => {
  const { mobile, otp, newPassword } = req.body;

  if (!newPassword) {
    res.status(400);
    throw new Error("Please add new Password");
  }
  
  //checking customer is present or not
  const customer = await Customer.findOne({ mobile: mobile });
  if (!customer) {
    res.status(400);
    throw new Error("Customer Is Not Found!!");
  }
  const customerOtp = await CustomerVerifyOtp.findOne({ mobile: mobile });

  if (customer && otp === customerOtp.otp) {
    const customerOtpID = await CustomerVerifyOtp.findById(customerOtp._id);
    await customerOtpID.deleteOne();
  } else{
    res.status(400);
    throw new Error("Something is wrong!!");
  }

  // Hash Password
  const salt = await genSalt(10);
  const hashedPassword = await hash(newPassword, salt);

  const updateData = {
    password: hashedPassword,
  };

  await Customer.findByIdAndUpdate(
    customer._id,
    updateData
  );
  const updatedData = await Customer.findById(customer._id).select('-password')

  res.status(200).json(updatedData);
});

const editMyProfile = asyncHandler(async (req, res) => {
  const { mobile, firstName, lastName, email } = req.body;

  // Validation
  // const requiredFields = { firstName, lastName, email, mobile };
  // for (const field in requiredFields) {
  //   if (!requiredFields[field]) {
  //     res.status(400).json({ error: `Please add ${field}` });
  //     return;
  //   }
  // }

  const customer = await Customer.findById(req.customer._id);
  
  if (!customer) {
    res.status(400);
    throw new Error("Customer not Found");
  }
  
  await Customer.findByIdAndUpdate(req.customer._id, {
    firstName,
    lastName,
    email,
    mobile
  });

  const updatedCustomer = await Customer.findById(req.customer._id).select('-password');

  res.status(200).json(updatedCustomer);
});

// Get Customer Data
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.customer);
});

function generateToken(id) {
  return sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
}

export {
  getAllCustomers,
  getSingleCustomer,
  registerCustomer,
  loginCustomer,
  getMe,
  verifyCustomer,
  changeCustomerPassword,
  forgotCustomerPassword,
  resetForgottenCustomerPassword,
  editMyProfile,
};
