import asyncHandler from 'express-async-handler';
import Requirement from '../../models/requirement/requirementModel.js';

const getAllRequirements = asyncHandler( async (req, res) => {
    const requirements = await Requirement.find()
    res.status(200).json(requirements)
})

const getSingleRequirement = asyncHandler( async (req, res) => {
    const requirement = await Requirement.findById(req.params.id)
    res.status(200).json(requirement)
})

const setRequirement = asyncHandler( async (req, res) => {
    const {name, description, precedence} = req.body;

    if(!name){
        res.status(400)
        throw new Error('Please Enter name')
    }
    if(!description){
        res.status(400)
        throw new Error('Please Enter description')
    }
    if(!precedence){
        res.status(400)
        throw new Error('Please Enter precedence')
    }
    
    const requirement = await Requirement.create({
        name,
        description,
        precedence
    })

    res.status(200).json(requirement)
})

const updateRequirement = asyncHandler( async (req, res) => {
    const { id } = req.params
    const requirement = await Requirement.findById(id)

    if(!requirement){
        res.status(400)
        throw new Error('Requirement not Found')
    }

    await Requirement.findByIdAndUpdate(id, {
        ...req.body
    })

    const updatedRequirement = await Requirement.findById(id)

    res.status(200).json(updatedRequirement)
})

const deleteRequirement = asyncHandler( async (req, res) => {
    const requirement = await Requirement.findById(req.params.id)
    if (!requirement) {
        res.status(400)
        throw new Error('Requirement not Found')
    }

    await requirement.deleteOne()

    res.status(200).json({id: req.params.id})
})

export {
    getAllRequirements,
    getSingleRequirement,
    setRequirement,
    updateRequirement,
    deleteRequirement
}