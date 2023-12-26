import asyncHandler from 'express-async-handler';

import Address from '../../models/address/addressModel.js';
import DefaultAddress from '../../models/address/defaultAddressModel.js';

// Get All Addresses
const getAllAddresses = asyncHandler( async (req, res) => {
    const addresses = await Address.find().populate('area')
    res.status(200).json(addresses)
})

// Get My Addresses
const getSingleAddress = asyncHandler( async (req, res) => {

    const address = await Address.find({_id: req.params.id}).populate('area')

    res.status(200).json(address)

})

// Get My Addresses
const getMyAddresses = asyncHandler( async (req, res) => {
    
    if(!req.customer) {
        res.status(400);
        throw new Error('Customer Not Found')
    }

    const addresses = await Address.find({customer: req.customer._id}).populate('area')

    res.status(200).json(addresses)

})

// Set Address
const setAddress = asyncHandler( async (req, res) => {
    const {type, name, area, fullAddress, mobile, zipCode} = req.body;

    if (!type) {
        res.status(400);
        throw new Error('Please add type!')
    }
    if (!name) {
        res.status(400);
        throw new Error('Please add name!')
    }
    // if (!area) {
    //     res.status(400);
    //     throw new Error('Please add area!')
    // }
    if (!fullAddress) {
        res.status(400);
        throw new Error('Please add fullAddress!')
    }
    if (!mobile) {
        res.status(400);
        throw new Error('Please add mobile!')
    }
    if (!zipCode) {
        res.status(400);
        throw new Error('Please add zipCode!')
    }

    if (!req.customer) {
        res.status(400);
        throw new Error('Customer Not Found')
    }
    
    const customerAddresses = await Address.find({customer: req.customer._id})
    const addressLength = customerAddresses.length
    
    const address = await Address.create({
        type,
        name,
        area,
        fullAddress,
        mobile,
        zipCode,
        customer: req.customer._id
    })

    if(addressLength === 0){
        await DefaultAddress.create({
            customer: req.customer,
            address: address._id
        })
    }

    res.status(200).json(address)
})

// Update Address
const updateAddress = asyncHandler( async (req, res) => {
    const { id } = req.params

    const address = await Address.findById(id)
    
    if (!address) {
        res.status(400)
        throw new Error('Address not Found')
    }

    await Address.findByIdAndUpdate(id, {
        ...req.body
    })

    const updatedAddress = await Address.findById(id)

    res.status(200).json(updatedAddress)
})

// Delete Address
const deleteAddress = asyncHandler( async (req, res) => {
    const address = await Address.findById(req.params.id)

    if (!address) {
        res.status(400)
        throw new Error('Address not Found')
    }

    await address.deleteOne()

    res.status(200).json({id: req.params.id})
})

export {
    getAllAddresses,
    getSingleAddress,
    getMyAddresses,
    setAddress,
    updateAddress,
    deleteAddress
}