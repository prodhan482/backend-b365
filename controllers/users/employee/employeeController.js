import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import asyncHandler from 'express-async-handler'
import Employee from '../../../models/users/employee/employeeModel.js'
import EmployeeInvite from '../../../models/users/employee/employeeInviteModel.js'
import { uploadObject } from '../../../config/space.js';
import { generateToken } from '../../../config/helperFunction.js'
import { sendEmployeeInvitationEmail } from '../../../config/mails/sendMail.js'
import { sendForgotPasswordMail } from '../../../config/mails/sendForgotPasswordMail.js'

const { genSalt, hash, compare } = bcrypt
const { verify } = jwt

// Login Employee
const loginEmployee = asyncHandler (async (req,res) => {

    const {email, password} = req.body

    // Check for employee email
    const employee = await Employee.findOne({email})

    if(!employee) {
        res.status(400)
        throw new Error('No employee found with this email')
    }

    // Check if password matches
    if (employee && (await compare(password, employee.password))) {
        res.status(200).json({
            _id: employee.id,
            name: employee.name,
            email: employee.email,
            level: employee.level,
            image: employee.image,
            token: generateToken(employee._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid Credentials')
    }

})

// invite employee
const inviteEmployee = asyncHandler (async (req,res) => {

    const {email} = req.body

    if(req.employee.level !== 'admin') {
        res.status(400)
        throw new Error('You Must Be An Admin To Add Employees!!')
    }
    
    if(!email){
        res.status(400)
        throw new Error('Please Enter an Email')
    }

    const emailExistsAsEmployee = await Employee.findOne({email})

    if (emailExistsAsEmployee) {
        res.status(400)
        throw new Error('Employee Exists')
    }

    const emailExistsinInvite = await EmployeeInvite.findOne({email})

    if (emailExistsinInvite) {
        await emailExistsinInvite.deleteOne()
    }

    const employeeInvite = await EmployeeInvite.create({
        email,
        employee: req.employee._id
    })

    if (employeeInvite) {
        const token = generateToken(employeeInvite._id)

        //send mail
        const link = process.env.ADMIN_APP_LINK + 'register/' + token

        await sendEmployeeInvitationEmail(employeeInvite.email, link)
        res.status(201).json({
            _id: employeeInvite.id,
            email: employeeInvite.email,
            token
        })
        
    } else {
        res.status(400)
        throw new Error('Failed to create employee invite')
    }

})

// Get all employees
const getAllEmployees = asyncHandler( async (req, res) => {
    const employees = await Employee.find()
    res.status(200).json(employees)
})

// Register Employee
const registerEmployee = asyncHandler (async (req,res) => {
    const {name, email, password} = req.body

    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }
    
    if(!req.files) {
        res.status(400)
        throw new Error('Please add an image')
    }

    const {image} = req.files

    const imageUrl = `employees/images/${Date.now() + '-' +image.name}`

    await uploadObject(imageUrl, image.data)

    //Employee Email Present Or Not
    const emailExistsAsEmployee = await Employee.findOne({email})

    if (emailExistsAsEmployee) {
        res.status(400)
        throw new Error('Employee Exists')
    }

    const employeeInvitation =await EmployeeInvite.findOne({email});
    if(!employeeInvitation){
        res.status(400)
        throw new Error('Employee Is Not Found!!')
    }

    // Hash Password
    const salt = await genSalt(10)
    const hashedPassword = await hash(password, salt)

    const employee = await Employee.create({
        name,
        email,
        level: 'employee',
        password: hashedPassword,
        image: imageUrl
    })

    if (employee) {
        res.status(201).json({
            _id: employee.id,
            name: employee.name,
            email: employee.email,
            level: employee.level,
            image: employee.image,
            token: generateToken(employee._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid Employee Data')
    }

    await EmployeeInvite.deleteOne();
})

// get all invites
const getSingleInvite = asyncHandler (async (req,res) => {

    if(req.employee.level !== 'admin') {
        res.status(400)
        throw new Error('You Must Be An Admin To Add Employees!!')
    }
    
    const employeeInvite = await EmployeeInvite.findById(req.params.id)

    res.status(200).json(employeeInvite)
})

// get all invites
const getAllInvites = asyncHandler (async (req,res) => {

    if(req.employee.level !== 'admin') {
        res.status(400)
        throw new Error('You Must Be An Admin To Add Employees!!')
    }
    
    const employeeInvites = await EmployeeInvite.find().populate('employee')

    res.status(200).json(employeeInvites)
})

// delete invite
const deleteInvite = asyncHandler (async (req,res) => {

    if(req.employee.level !== 'admin') {
        res.status(400)
        throw new Error('You Must Be An Admin To Delete Invites!!')
    }
    
    const inviteToDelete = await EmployeeInvite.findById(req.params.id)

    if(!inviteToDelete) {
        res.status(400)
        throw new Error('Invite Not Found')
    }

    await inviteToDelete.deleteOne()

    res.status(200).json({id: req.params.id})
})

// Change Employee Password
const changeEmployeePassword = asyncHandler (async (req,res) => {

    const { oldPassword, newPassword } = req.body;
    const {email} = req.employee

    if(!oldPassword || !newPassword) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    // Check for employee email
    const employee = await Employee.findOne({email})

    if(!employee) {
        res.status(400)
        throw new Error('No employee found with this email!!')
    }

    const checkPassword = await compare(oldPassword, employee.password)
    
    if (checkPassword === false) {
        res.status(400)
        throw new Error('Old Password does not match')
    }

    // Hash Password
    const salt = await genSalt(10)
    const hashedPassword = await hash(newPassword, salt)

    const updateData = {
        password: hashedPassword
    }

    const updatedData = await Employee.findByIdAndUpdate(employee._id, updateData)

    res.status(200).json(updatedData)

})

// Forgot Employee Password
const forgotEmployeePassword = asyncHandler (async (req,res) => {
    const {email} = req.body

    if (!email) {
        res.status(400)
        throw new Error('Please add an email')
    }
    
    //Employee Present Or Not
    const oldEmployee = await Employee.findOne({email});

    if(!oldEmployee){
        res.status(400)
        throw new Error('No employee found with this email!!')
    }

    
    const token = generateToken(oldEmployee._id)

    //send mail
    const link = process.env.ADMIN_APP_LINK + 'resetEmployeePassword/' + token

    const sendMail = await sendForgotPasswordMail(oldEmployee.email, link)

    res.status(201).json({
        _id: oldEmployee.id,
        email: oldEmployee.email,
        sendMail
    })

})

//ResetPassword
const resetForgottenEmployeePassword = asyncHandler (async (req,res) => {
    const { token, newPassword } = req.body;

    if (!newPassword) {
        res.status(400)
        throw new Error('Please add new Password')
    }

    const decoded = verify(token, process.env.JWT_SECRET)

    const employeeFromToken = await Employee.findById(decoded.id)

    if (!employeeFromToken) {
        res.status(400)
        throw new Error('Could not generate employee from token')
    }

    // Hash Password
    const salt = await genSalt(10)
    const hashedPassword = await hash(newPassword, salt)

    const updateData = {
        password: hashedPassword
    }

    const updatedData = await Employee.findByIdAndUpdate(employeeFromToken._id, updateData)

    res.status(200).json(updatedData)


})

// get email from token
const getEmailFromToken = asyncHandler (async (req,res) => {
    const { token } = req.params

    const decoded = verify(token, process.env.JWT_SECRET);

    const invite = await EmployeeInvite.findOne({_id: decoded.id});

    if(invite) {

        const {email} = invite

        res.status(201).json({
            email
        })

    } else {
        res.status(400)
        throw new Error('No Email Found with Token!!')
    }

})

// Get My Employee Data
const getMe = asyncHandler (async (req,res) => {
    res.status(200).json(req.employee)
})

export {
    loginEmployee,
    getAllEmployees,
    registerEmployee,
    inviteEmployee,
    getAllInvites,
    getSingleInvite,
    deleteInvite,
    changeEmployeePassword,
    forgotEmployeePassword,
    resetForgottenEmployeePassword,
    getMe,
    getEmailFromToken
}