import asyncHandler from 'express-async-handler';
import DeliveryZone from '../../models/delivery/deliveryZoneModel.js';
import DeliveryArea from '../../models/delivery/deliveryAreaModel.js';

const getAllDeliveryZones = asyncHandler( async (req, res) => {
    const deliveryZones = await DeliveryZone.find()
    res.status(200).json(deliveryZones)
})

const getSingleDeliveryZone = asyncHandler( async (req, res) => {
    const deliveryZone = await DeliveryZone.findById(req.params.id)
    res.status(200).json(deliveryZone)
})

const setDeliveryZone = asyncHandler( async (req, res) => {
    const {name} = req.body;

    if(!name){
        res.status(400)
        throw new Error('Please Enter name')
    }
    
    const deliveryZone = await DeliveryZone.create({
        name
    })

    res.status(200).json(deliveryZone)
})

const updateDeliveryZone = asyncHandler( async (req, res) => {
    const { id } = req.params
    const deliveryZone = await DeliveryZone.findById(id)

    if(!deliveryZone){
        res.status(400)
        throw new Error('DeliveryZone not Found')
    }

    await DeliveryZone.findByIdAndUpdate(id, {
        ...req.body
    })

    const updatedDeliveryZone = await DeliveryZone.findById(id)

    res.status(200).json(updatedDeliveryZone)
})

const deleteDeliveryZone = asyncHandler( async (req, res) => {
    const deliveryZone = await DeliveryZone.findById(req.params.id)
    if (!deliveryZone) {
        res.status(400)
        throw new Error('DeliveryZone not Found')
    }

    // const deliveryArea = await DeliveryArea.find({deliveryZone: req.params.id})


    await deliveryZone.deleteOne()

    res.status(200).json({id: req.params.id})
})

export {
    getAllDeliveryZones,
    getSingleDeliveryZone,
    setDeliveryZone,
    updateDeliveryZone,
    deleteDeliveryZone
}