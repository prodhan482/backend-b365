//,,endDate
import asyncHandler from 'express-async-handler';
import Package from '../../models/order/packageModel.js';

const getAllPackages = asyncHandler( async (req, res) => {
    const promoPackages = await Package.find()
    res.status(200).json(promoPackages)
})

const getSinglePackage = asyncHandler( async (req, res) => {
    const promoPackage = await Package.findById(req.params.id)
    res.status(200).json(promoPackage)
})

const setPackage = asyncHandler( async (req, res) => {
    const {name,discountAmount,isActive,startDate,endDate} = req.body;

    if(!name){
        res.status(400)
        throw new Error('Please Enter name')
    }
    if(!discountAmount){
        res.status(400)
        throw new Error('Please Enter discountAmount')
    }
    if(!startDate){
        res.status(400)
        throw new Error('Please Enter startDate')
    }
    if(!endDate){
        res.status(400)
        throw new Error('Please Enter endDate')
    }
    
    
    const promoPackage = await Package.create({
        name,
        discountAmount,
        isActive,
        startDate,
        endDate
    })

    res.status(200).json(promoPackage)
})

const updatePackage = asyncHandler( async (req, res) => {
    const { id } = req.params
    const promoPackage = await Package.findById(id)

    if(!promoPackage){
        res.status(400)
        throw new Error('Package not Found')
    }

    await Package.findByIdAndUpdate(id, {
        ...req.body
    })

    const updatedPackage = await Package.findById(id)

    res.status(200).json(updatedPackage)
})

const deletePackage = asyncHandler( async (req, res) => {
    const promoPackage = await Package.findById(req.params.id)
    if (!promoPackage) {
        res.status(400)
        throw new Error('Package not Found')
    }

    await promoPackage.deleteOne()

    res.status(200).json({id: req.params.id})
})

export {
    getAllPackages,
    getSinglePackage,
    setPackage,
    updatePackage,
    deletePackage
}