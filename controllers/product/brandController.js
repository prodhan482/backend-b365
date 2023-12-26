import asyncHandler from 'express-async-handler';
import Brand from '../../models/product/brandModel.js';
import { deleteObject, uploadObject, updateObject } from '../../config/space.js';

const getAllBrands = asyncHandler( async (req, res) => {
    const brands = await Brand.find()
    res.status(200).json(brands)
})

const getSingleBrand = asyncHandler( async (req, res) => {
    const brand = await Brand.findById(req.params.id)
    res.status(200).json(brand)
})

const setBrand = asyncHandler( async (req, res) => {
    const {name, link} = req.body;

    if(!name){
        res.status(400)
        throw new Error('Please Enter name')
    }

    if(!req.files) {
        res.status(400)
        throw new Error('Please add Image')
    }

    const {image} = req.files

    const imageUrl = `brandImages/${Date.now() + '-' +image.name}`

    await uploadObject(imageUrl, image.data)
    
    const status = await Brand.create({
        name,
        link,
        image: imageUrl
    })

    res.status(200).json(status)
})

const updateBrand = asyncHandler( async (req, res) => {
    const { id } = req.params
    const brandToUpdate = await Brand.findById(id)

    if(!brandToUpdate){
        res.status(400)
        throw new Error('Brand not Found')
    }

    if(!req.files){

        await Brand.findByIdAndUpdate(id, {
            ...req.body
        })
    
        const updatedBrand = await Brand.findById(id)
    
        res.status(200).json(updatedBrand)
    }

    if(req.files.image) {
        const {image} = req.files

        const imageUrl = `brandImages/${Date.now() + '-' +image.name}`

        await updateObject(imageUrl, image.data, brandToUpdate.image)

        const updateBrand = {
            image:imageUrl
        }
        
        await Brand.findByIdAndUpdate(req.params.id, updateBrand)

    }

    await Brand.findByIdAndUpdate(id, {
        ...req.body
    })

    const updatedBrand = await Brand.findById(id)

    res.status(200).json(updatedBrand)
})

const deleteBrand = asyncHandler( async (req, res) => {
    const brand = await Brand.findById(req.params.id)

    if (!brand) {
        res.status(400)
        throw new Error('Brand not Found')
    }

    await deleteObject(brand.image)
    await brand.deleteOne()

    res.status(200).json({id: req.params.id})
})

export {
    getAllBrands,
    setBrand,
    updateBrand,
    deleteBrand,
    getSingleBrand
}