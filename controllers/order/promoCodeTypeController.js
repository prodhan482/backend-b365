import asyncHandler from 'express-async-handler';
import PromoCodeType from '../../models/order/promoCodeTypeModel.js';

const getAllPromoCodeTypes = asyncHandler( async (req, res) => {
    const promoCodeTypes = await PromoCodeType.find()
    res.status(200).json(promoCodeTypes)
})

const getSinglePromoCodeType = asyncHandler( async (req, res) => {
    const promoCodeType = await PromoCodeType.findById(req.params.id)
    res.status(200).json(promoCodeType)
})

const setPromoCodeType = asyncHandler( async (req, res) => {
    const {name,description} = req.body;

    if(!name){
        res.status(400)
        throw new Error('Please Enter name')
    }
    if(!description){
        res.status(400)
        throw new Error('Please Enter description')
    }
    
    const promoCodeType = await PromoCodeType.create({
        name,
        description
    })

    res.status(200).json(promoCodeType)
})

const updatePromoCodeType = asyncHandler( async (req, res) => {
    const { id } = req.params
    const promoCodeType = await PromoCodeType.findById(id)

    if(!promoCodeType){
        res.status(400)
        throw new Error('PromoCodeType not Found')
    }

    await PromoCodeType.findByIdAndUpdate(id, {
        ...req.body
    })

    const updatedPromoCodeType = await PromoCodeType.findById(id)

    res.status(200).json(updatedPromoCodeType)
})

const deletePromoCodeType = asyncHandler( async (req, res) => {
    const promoCodeType = await PromoCodeType.findById(req.params.id)
    if (!promoCodeType) {
        res.status(400)
        throw new Error('PromoCodeType not Found')
    }

    // const deliveryArea = await DeliveryArea.find({promoCodeType: req.params.id})


    await promoCodeType.deleteOne()

    res.status(200).json({id: req.params.id})
})

export {
    getAllPromoCodeTypes,
    getSinglePromoCodeType,
    setPromoCodeType,
    updatePromoCodeType,
    deletePromoCodeType
}