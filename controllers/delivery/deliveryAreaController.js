import asyncHandler from 'express-async-handler';
import DeliveryArea from '../../models/delivery/deliveryAreaModel.js';

const getAllDeliveryAreas = asyncHandler( async (req, res) => {
    const deliveryAreas = await DeliveryArea.find().populate('deliveryZone').populate('area')
    res.status(200).json(deliveryAreas)
})

const getSingleDeliveryArea = asyncHandler( async (req, res) => {
    const deliveryArea = await DeliveryArea.findById(req.params.id).populate('deliveryZone')
    .populate({
        path: "area",
        populate: {
            path: "district",
            model: "District",
            populate: {
                path: "division",
                model: "Division"
            }
        }
    })
    res.status(200).json(deliveryArea)
})

const setDeliveryArea = asyncHandler( async (req, res) => {
    const {deliveryZone,area} = req.body;

    if(!deliveryZone){
        res.status(400)
        throw new Error('Please Enter deliveryZone')
    }
    if(!area){
        res.status(400)
        throw new Error('Please Enter area')
    }
    
    const deliveryArea = await DeliveryArea.create({
        deliveryZone,
        area
    })

    res.status(200).json(deliveryArea)
})

const updateDeliveryArea = asyncHandler( async (req, res) => {
    const { id } = req.params
    const deliveryArea = await DeliveryArea.findById(id)

    if(!deliveryArea){
        res.status(400)
        throw new Error('DeliveryArea not Found')
    }

    await DeliveryArea.findByIdAndUpdate(id, {
        ...req.body
    })

    const updatedDeliveryArea = await DeliveryArea.findById(id)

    res.status(200).json(updatedDeliveryArea)
})

const deleteDeliveryArea = asyncHandler( async (req, res) => {
    const deliveryArea = await DeliveryArea.findById(req.params.id)
    if (!deliveryArea) {
        res.status(400)
        throw new Error('DeliveryArea not Found')
    }

    await deliveryArea.deleteOne()

    res.status(200).json({id: req.params.id})
})

export {
    getAllDeliveryAreas,
    getSingleDeliveryArea,
    setDeliveryArea,
    updateDeliveryArea,
    deleteDeliveryArea
}
