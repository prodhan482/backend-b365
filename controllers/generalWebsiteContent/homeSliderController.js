import asyncHandler from 'express-async-handler';
import HomeSlider from '../../models/generalWebsiteContent/homeSliderModel.js';
import { deleteObject, uploadObject, updateObject } from '../../config/space.js';


const getAllHomeSliders = asyncHandler( async (req, res) => {
    const homeSliders = await HomeSlider.find().sort('precedence')
    res.status(200).json(homeSliders)
})

const getSingleHomeSlider = asyncHandler( async (req, res) => {
    const homeSlider = await HomeSlider.findById(req.params.id)
    res.status(200).json(homeSlider)
})

const setHomeSlider = asyncHandler( async (req, res) => {
    const {precedence,link} = req.body;

    if(!precedence){
        res.status(400)
        throw new Error('Please Enter precedence')
    }

    if(!req.files) {
        res.status(400)
        throw new Error('Please add Image')
    }

    const {image} = req.files

    const imageUrl = `homeSliderImages/${Date.now() + '-' +image.name}`

    await uploadObject(imageUrl, image.data)
    
    const status = await HomeSlider.create({
        precedence,
        link,
        image: imageUrl
    })

    res.status(200).json(status)
})

const updateHomeSlider = asyncHandler( async (req, res) => {
    const { id } = req.params
    const homeSliderToUpdate = await HomeSlider.findById(id)

    if(!homeSliderToUpdate){
        res.status(400)
        throw new Error('HomeSlider not Found')
    }

    if(!req.files){

        await HomeSlider.findByIdAndUpdate(id, {
            ...req.body
        })
    
        const updatedHomeSlider = await HomeSlider.findById(id)
    
        res.status(200).json(updatedHomeSlider)
    }

    if(req.files.image) {
        const {image} = req.files

        const imageUrl = `homeSliderImages/${Date.now() + '-' +image.name}`

        await updateObject(imageUrl, image.data, homeSliderToUpdate.image)

        const updateHomeSlider = {
            image:imageUrl
        }
        
        await HomeSlider.findByIdAndUpdate(req.params.id, updateHomeSlider)

    }

    await HomeSlider.findByIdAndUpdate(id, {
        ...req.body
    })

    const updatedHomeSlider = await HomeSlider.findById(id)

    res.status(200).json(updatedHomeSlider)
})

const deleteHomeSlider = asyncHandler( async (req, res) => {
    const homeSlider = await HomeSlider.findById(req.params.id)

    if (!homeSlider) {
        res.status(400)
        throw new Error('HomeSlider not Found')
    }

    await deleteObject(homeSlider.image)
    await homeSlider.deleteOne()

    res.status(200).json({id: req.params.id})
})

export {
    getAllHomeSliders,
    setHomeSlider,
    updateHomeSlider,
    deleteHomeSlider,
    getSingleHomeSlider
}