import asyncHandler from 'express-async-handler';
import Subsubcategory from '../../models/product/subsubcategoryModel.js';
import { deleteObject, uploadObject, updateObject } from '../../config/space.js';

const getAllSubsubcategories = asyncHandler( async (req, res) => {
    const subsubcategories = await Subsubcategory.find()
    res.status(200).json(subsubcategories)
})

const getSingleSubsubcategory = asyncHandler( async (req, res) => {
    const subsubcategory = await Subsubcategory.findById(req.params.id)
    res.status(200).json(subsubcategory)
})

const setSubsubcategory = asyncHandler( async (req, res) => {
    const {subcategory,name,precedence} = req.body;

    if(!subcategory){
        res.status(400)
        throw new Error('Please Enter subcategory')
    }
    if(!name){
        res.status(400)
        throw new Error('Please Enter name')
    }
    if(!precedence){
        res.status(400)
        throw new Error('Please Enter precedence')
    }
    
    if(!req.files) {
        res.status(400)
        throw new Error('Please add Image')
    }

    const {image} = req.files

    const imageUrl = `subsubcategoryImages/${Date.now() + '-' +image.name}`

    await uploadObject(imageUrl, image.data)
    
    const status = await Subsubcategory.create({
        subcategory,
        name,
        precedence,
        image: imageUrl
    })

    res.status(200).json(status)
})

const updateSubsubcategory = asyncHandler( async (req, res) => {
    const { id } = req.params
    const subsubcategoryToUpdate = await Subsubcategory.findById(id)

    if(!subsubcategoryToUpdate){
        res.status(400)
        throw new Error('Subsubcategory not Found')
    }

    if(!req.files){

        await Subsubcategory.findByIdAndUpdate(id, {
            ...req.body
        })
    
        const updatedSubsubcategory = await Subsubcategory.findById(id)
    
        res.status(200).json(updatedSubsubcategory)
    }

    if(req.files.image) {
        const {image} = req.files

        const imageUrl = `subsubcategoryImages/${Date.now() + '-' +image.name}`

        await updateObject(imageUrl, image.data, subsubcategoryToUpdate.image)

        const updateSubsubcategory = {
            image:imageUrl
        }
        
        await Subsubcategory.findByIdAndUpdate(req.params.id, updateSubsubcategory)

    }

    await Subsubcategory.findByIdAndUpdate(id, {
        ...req.body
    })

    const updatedSubsubcategory = await Subsubcategory.findById(id)

    res.status(200).json(updatedSubsubcategory)
})

const deleteSubsubcategory = asyncHandler( async (req, res) => {
    const subsubcategory = await Subsubcategory.findById(req.params.id)

    if (!subsubcategory) {
        res.status(400)
        throw new Error('Subsubcategory not Found')
    }

    await deleteObject(subsubcategory.image)
    await subsubcategory.deleteOne()

    res.status(200).json({id: req.params.id})
})

export {
    getAllSubsubcategories,
    setSubsubcategory,
    updateSubsubcategory,
    deleteSubsubcategory,
    getSingleSubsubcategory
}