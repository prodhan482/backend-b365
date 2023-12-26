import asyncHandler from 'express-async-handler';

import Division from '../../models/address/divisionModel.js';
import District from '../../models/address/districtModel.js';

// Get Divisions
const getAllDivisions = asyncHandler( async (req, res) => {
    const divisions = await Division.find()
    res.status(200).json(divisions)
})

const getSingleDivision = asyncHandler( async (req, res) => {
    const division = await Division.findById(req.params.id)
    res.status(200).json(division)
})

// Set Division
const setDivision = asyncHandler( async (req, res) => {
    const {name} = req.body;

    if (!name) {
        res.status(400);
        throw new Error('Please add name!')
    }
    
    const division = await Division.create({
        name
    })

    res.status(200).json(division)
})

// Update Division
const updateDivision = asyncHandler( async (req, res) => {
    const { id } = req.params

    const division = await Division.findById(id)
    
    if (!division) {
        res.status(400)
        throw new Error('Division not Found')
    }

    await Division.findByIdAndUpdate(id, {
        ...req.body
    })

    const updatedDivision = await Division.findById(id)

    res.status(200).json(updatedDivision)

    
})

// Delete Division
const deleteDivision = asyncHandler( async (req, res) => {
    const division = await Division.findById(req.params.id)

    if (!division) {
        res.status(400)
        throw new Error('Division not Found')
    }

    await division.deleteOne()

    res.status(200).json({id: req.params.id})
})

const getDivisionFromDistrict = asyncHandler( async (req, res) => {
    const {id} = req.params
    const district = await District.findById(id);
    const {division} = district
    res.status(200).json(division)

})

export {
    getAllDivisions,
    getSingleDivision,
    setDivision,
    updateDivision,
    deleteDivision,
    getDivisionFromDistrict
}