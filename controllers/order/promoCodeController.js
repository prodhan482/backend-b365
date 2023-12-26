import asyncHandler from 'express-async-handler';
import PromoCode from '../../models/order/promoCodeModel.js';
import Order from '../../models/order/orderModel.js';

// Get all promotions
const getAllPromoCodes = asyncHandler( async (req, res) => {
    const promotions = await PromoCode.find()
    res.status(200).json(promotions)
})

// Get single promotion
const getSinglePromoCode = asyncHandler( async (req, res) => {
    const promotion = await PromoCode.findById(req.params.id)
    res.status(200).json(promotion)
})

// Get single promotion
const getPromoCodeByPromoCode = asyncHandler( async (req, res) => {
    const {promo} =req.params
    const promotion = await PromoCode.findOne({promo})
    
    if (!promotion) {
        res.status(400)
        throw new Error('This promo code does not exist')
    }

    const currentDate = new Date();

    if (
        currentDate < promotion.validStartDate ||
        currentDate > promotion.validEndDate
    ) {
        res.status(400);
        throw new Error('This promo code is not valid at the moment');
    }
    
    if (promotion.promotype === 'unlimited') {
        res.status(200).json(promotion)
    }
    let checkPromoCode;
    if (promotion.promotype === 'oneTime') {
        const ckPromo = await PromoCode.findOne({promo: promo})
        checkPromoCode = await Order.find({customer: req.customer, promoCode: ckPromo._id })  
    }
    if (checkPromoCode.length > 0) {
        res.status(400)
        throw new Error('Already used this promo code')
    }else{
        res.status(200).json(promotion)
    }
    
    
})

// create PromoCode
const createPromoCode = asyncHandler( async (req, res) => {
    const {promo,maxlimit,discountType,discountAmount,promotype,validStartDate,validEndDate} = req.body;
    
    const promotion = await PromoCode.create({
        promo,
        maxlimit,
        discountType,
        discountAmount,
        promotype,
        validStartDate,
        validEndDate
    })

    res.status(200).json(promotion)
})

// Update PromoCode
const updatePromoCode = asyncHandler( async (req, res) => {
    const { id } = req.params

    const promotion = await PromoCode.findById(id)
    
    if (!promotion) {
        res.status(400)
        throw new Error('PromoCode not Found')
    }

    await PromoCode.findByIdAndUpdate(id, {
        ...req.body
    })

    const updatedPromoCode = await PromoCode.findById(id)

    res.status(200).json(updatedPromoCode)

    
})

// Delete PromoCode
const deletePromoCode = asyncHandler( async (req, res) => {
    const promotion = await PromoCode.findById(req.params.id)

    if (!promotion) {
        res.status(400)
        throw new Error('PromoCode not Found')
    }

    await promotion.deleteOne()

    res.status(200).json({id: req.params.id})
})

export {
    getAllPromoCodes,
    createPromoCode,
    updatePromoCode,
    deletePromoCode,
    getSinglePromoCode, 
    getPromoCodeByPromoCode
}