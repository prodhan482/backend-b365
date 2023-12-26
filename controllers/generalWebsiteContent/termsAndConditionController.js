import asyncHandler from 'express-async-handler';
import TermsAndCondition from '../../models/generalWebsiteContent/termsAndConditionModel.js';

const getAllTermsAndConditions = asyncHandler( async (req, res) => {
    const termsAndConditions = await TermsAndCondition.find()
    res.status(200).json(termsAndConditions)
})

const getSingleTermsAndCondition = asyncHandler( async (req, res) => {
    const termsAndCondition = await TermsAndCondition.findById(req.params.id)
    res.status(200).json(termsAndCondition)
})

const setTermsAndCondition = asyncHandler( async (req, res) => {
    const {name, description} = req.body;

    if(!name){
        res.status(400)
        throw new Error('Please Enter name')
    }
    if(!description){
        res.status(400)
        throw new Error('Please Enter description')
    }
    
    const termsAndCondition = await TermsAndCondition.create({
        name,
        description
    })

    res.status(200).json(termsAndCondition)
})

const updateTermsAndCondition = asyncHandler( async (req, res) => {
    const { id } = req.params
    const termsAndCondition = await TermsAndCondition.findById(id)

    if(!termsAndCondition){
        res.status(400)
        throw new Error('TermsAndCondition not Found')
    }

    await TermsAndCondition.findByIdAndUpdate(id, {
        ...req.body
    })

    const updatedTermsAndCondition = await TermsAndCondition.findById(id)

    res.status(200).json(updatedTermsAndCondition)
})

const deleteTermsAndCondition = asyncHandler( async (req, res) => {
    const termsAndCondition = await TermsAndCondition.findById(req.params.id)
    if (!termsAndCondition) {
        res.status(400)
        throw new Error('TermsAndCondition not Found')
    }

    await termsAndCondition.deleteOne()

    res.status(200).json({id: req.params.id})
})

export {
    getAllTermsAndConditions,
    getSingleTermsAndCondition,
    setTermsAndCondition,
    updateTermsAndCondition,
    deleteTermsAndCondition
}