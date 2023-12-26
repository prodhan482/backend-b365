import asyncHandler from 'express-async-handler';
import Status from '../../models/order/statusModel.js';

const getAllStatuses = asyncHandler( async (req, res) => {
    const statuses = await Status.find().populate('category')
    res.status(200).json(statuses)
})

const getSingleStatus = asyncHandler( async (req, res) => {
    const status = await Status.findById(req.params.id)
    res.status(200).json(status)
})

const setStatus = asyncHandler( async (req, res) => {
    const {name} = req.body;

    if(!name){
        res.status(400)
        throw new Error('Please Enter name')
    }
    
    
    const status = await Status.create({
        name,
    })

    res.status(200).json(status)
})

const updateStatus = asyncHandler( async (req, res) => {
    const { id } = req.params
    const status = await Status.findById(id)

    if(!status){
        res.status(400)
        throw new Error('Status not Found')
    }

    await Status.findByIdAndUpdate(id, {
        ...req.body
    })

    const updatedStatus = await Status.findById(id)

    res.status(200).json(updatedStatus)
})

const deleteStatus = asyncHandler( async (req, res) => {
    const status = await Status.findById(req.params.id)
    if (!status) {
        res.status(400)
        throw new Error('Status not Found')
    }

    await status.deleteOne()

    res.status(200).json({id: req.params.id})
})

export {
    getAllStatuses,
    setStatus,
    updateStatus,
    deleteStatus,
    getSingleStatus
}