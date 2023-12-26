import asyncHandler from 'express-async-handler';
import PaymentType from '../../models/order/paymentTypeModel.js';

// Get PaymentTypes
const getAllPaymentTypes = asyncHandler( async (req, res) => {
    const paymentTypes = await PaymentType.find()
    res.status(200).json(paymentTypes)
})

const getSinglePaymentType = asyncHandler( async (req, res) => {
    const paymentType = await PaymentType.findById(req.params.id)
    res.status(200).json(paymentType)
})

// Set PaymentType
const setPaymentType = asyncHandler( async (req, res) => {
    const {name} = req.body;

    if (!name) {
        res.status(400);
        throw new Error('Please add name!')
    }
    
    const paymentType = await PaymentType.create({
        name
    })

    res.status(200).json(paymentType)
})

// Update PaymentType
const updatePaymentType = asyncHandler( async (req, res) => {
    const { id } = req.params

    const paymentType = await PaymentType.findById(id)
    
    if (!paymentType) {
        res.status(400)
        throw new Error('PaymentType not Found')
    }

    await PaymentType.findByIdAndUpdate(id, {
        ...req.body
    })

    const updatedPaymentType = await PaymentType.findById(id)

    res.status(200).json(updatedPaymentType)

    
})

// Delete PaymentType
const deletePaymentType = asyncHandler( async (req, res) => {
    const paymentType = await PaymentType.findById(req.params.id)

    if (!paymentType) {
        res.status(400)
        throw new Error('PaymentType not Found')
    }

    await paymentType.deleteOne()

    res.status(200).json({id: req.params.id})
})

export {
    getAllPaymentTypes,
    getSinglePaymentType,
    setPaymentType,
    updatePaymentType,
    deletePaymentType
}