import asyncHandler from 'express-async-handler';
import PlasticType from '../../models/product/plasticTypeModel.js';

const getAllPlasticTypes = asyncHandler( async (req, res) => {
    const plasticTypes = await PlasticType.find()
    res.status(200).json(plasticTypes)
})

const getSinglePlasticType = asyncHandler( async (req, res) => {
    const plasticType = await PlasticType.findById(req.params.id)
    res.status(200).json(plasticType)
})

const setPlasticType = asyncHandler( async (req, res) => {
    const {name, point} = req.body;

    if(!name){
        res.status(400)
        throw new Error('Please Enter name')
    }
    if(!point){
        res.status(400)
        throw new Error('Please Enter point')
    }
    
    const plasticType = await PlasticType.create({
        name,
        point
    })

    res.status(200).json(plasticType)
})

const updatePlasticType = asyncHandler( async (req, res) => {
    const { id } = req.params
    const plasticType = await PlasticType.findById(id)

    if(!plasticType){
        res.status(400)
        throw new Error('PlasticType not Found')
    }

    await PlasticType.findByIdAndUpdate(id, {
        ...req.body
    })

    const updatedPlasticType = await PlasticType.findById(id)

    res.status(200).json(updatedPlasticType)
})

const deletePlasticType = asyncHandler( async (req, res) => {
    const plasticType = await PlasticType.findById(req.params.id)
    if (!plasticType) {
        res.status(400)
        throw new Error('PlasticType not Found')
    }

    await plasticType.deleteOne()

    res.status(200).json({id: req.params.id})
})

export {
    getAllPlasticTypes,
    getSinglePlasticType,
    setPlasticType,
    updatePlasticType,
    deletePlasticType
}