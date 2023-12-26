import asyncHandler from 'express-async-handler';
import PromotionFAQ from '../../models/generalWebsiteContent/promotionFAQModel.js';

const getAllPromotionFAQs = asyncHandler( async (req, res) => {
    const promotionFAQs = await PromotionFAQ.find()
    res.status(200).json(promotionFAQs)
})

const getSinglePromotionFAQ = asyncHandler( async (req, res) => {
    const promotionFAQ = await PromotionFAQ.findById(req.params.id)
    res.status(200).json(promotionFAQ)
})

const setPromotionFAQ = asyncHandler( async (req, res) => {
    const {name, description} = req.body;

    if(!name){
        res.status(400)
        throw new Error('Please Enter name')
    }
    if(!description){
        res.status(400)
        throw new Error('Please Enter description')
    }
    
    const promotionFAQ = await PromotionFAQ.create({
        name,
        description
    })

    res.status(200).json(promotionFAQ)
})

const updatePromotionFAQ = asyncHandler( async (req, res) => {
    const { id } = req.params
    const promotionFAQ = await PromotionFAQ.findById(id)

    if(!promotionFAQ){
        res.status(400)
        throw new Error('PromotionFAQ not Found')
    }

    await PromotionFAQ.findByIdAndUpdate(id, {
        ...req.body
    })

    const updatedPromotionFAQ = await PromotionFAQ.findById(id)

    res.status(200).json(updatedPromotionFAQ)
})

const deletePromotionFAQ = asyncHandler( async (req, res) => {
    const promotionFAQ = await PromotionFAQ.findById(req.params.id)
    if (!promotionFAQ) {
        res.status(400)
        throw new Error('PromotionFAQ not Found')
    }

    await promotionFAQ.deleteOne()

    res.status(200).json({id: req.params.id})
})

export {
    getAllPromotionFAQs,
    getSinglePromotionFAQ,
    setPromotionFAQ,
    updatePromotionFAQ,
    deletePromotionFAQ
}