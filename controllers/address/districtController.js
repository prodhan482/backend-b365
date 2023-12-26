import asyncHandler from 'express-async-handler';

import District from '../../models/address/districtModel.js';
import Area from '../../models/address/areaModel.js';

// Get Districts
const getAllDistricts = asyncHandler( async (req, res) => {
    const districts = await District.find().populate('division')
    res.status(200).json(districts)
})

const getSingleDistrict = asyncHandler( async (req, res) => {
    const district = await District.findById(req.params.id).populate('division')
    res.status(200).json(district)
})

// Get Districts from a division
const getDistrictsFromDivision = asyncHandler( async (req, res) => {
    const districts = await District.find({division: req.params.id})
    res.status(200).json(districts)
})

// Set District
const setDistrict = asyncHandler( async (req, res) => {
    const {name, division} = req.body;

    if (!name || !division) {
        res.status(400);
        throw new Error('Please add all fields!')
    }
    
    const district = await District.create({
        name,
        division
    })

    res.status(200).json(district)
})

// Update District
const updateDistrict = asyncHandler( async (req, res) => {
    
    const { id } = req.params

    const district = await District.findById(id)
    
    if (!district) {
        res.status(400)
        throw new Error('District not Found')
    }

    await District.findByIdAndUpdate(id, {
        ...req.body
    })

    const updatedDistrict = await District.findById(id)

    res.status(200).json(updatedDistrict)
})

// Delete District
const deleteDistrict = asyncHandler( async (req, res) => {
    const district = await District.findById(req.params.id)

    if (!district) {
        res.status(400)
        throw new Error('District not Found')
    }

    await district.deleteOne()

    res.status(200).json({id: req.params.id})
})

const getDistrictFromArea = asyncHandler( async (req, res) => {
    const {id} = req.params
    const area = await Area.findById(id);
    const {district} = area
    res.status(200).json(district)
})

export {
    getAllDistricts,
    getSingleDistrict,
    getDistrictsFromDivision,
    setDistrict,
    updateDistrict,
    deleteDistrict,
    getDistrictFromArea
}