import asyncHandler from 'express-async-handler';

import Area from '../../models/address/areaModel.js';

// Get Areas
const getAllAreas = asyncHandler( async (req, res) => {
    const areas = await Area.find().populate('district')
    res.status(200).json(areas)
})

const getSingleArea = asyncHandler( async (req, res) => {
    const area = await Area.findById(req.params.id).populate('district')
    res.status(200).json(area)
})

// Get Areas from a disctrict
const getAreasFromDistrict = asyncHandler( async (req, res) => {
    const areas = await Area.find({district: req.params.id})
    res.status(200).json(areas)
})

// Set Area
const setArea = asyncHandler( async (req, res) => {
    const {name, district} = req.body;

    if (!name || !district) {
        res.status(400);
        throw new Error('Please add all fields!')
    }
    
    const area = await Area.create({
        name,
        district
    })

    res.status(200).json(area)
})

// Update Area
const updateArea = asyncHandler( async (req, res) => {
    const { id } = req.params

    const area = await Area.findById(id)
    
    if (!area) {
        res.status(400)
        throw new Error('Area not Found')
    }

    await Area.findByIdAndUpdate(id, {
        ...req.body
    })

    const updatedArea = await Area.findById(id)

    res.status(200).json(updatedArea)
})

// Delete Area
const deleteArea = asyncHandler( async (req, res) => {
    const area = await Area.findById(req.params.id)

    if (!area) {
        res.status(400)
        throw new Error('Area not Found')
    }

    await area.deleteOne()

    res.status(200).json({id: req.params.id})
})

export {
    getAllAreas,
    getSingleArea,
    getAreasFromDistrict,
    setArea,
    updateArea,
    deleteArea
}