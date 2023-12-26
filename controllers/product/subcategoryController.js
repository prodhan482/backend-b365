import asyncHandler from 'express-async-handler';
import Subcategory from '../../models/product/subcategoryModel.js';
import { deleteObject, uploadObject, updateObject } from '../../config/space.js';

const getAllSubcategories = asyncHandler( async (req, res) => {
    const subcategories = await Subcategory.find()
    res.status(200).json(subcategories)
})
const getAllSubcategoriesFromCategory = asyncHandler( async (req, res) => {
    const { id } = req.params
    const subcategories = await Subcategory.find({category: id}).populate('category')
    res.status(200).json(subcategories)
})

const getSingleSubcategory = asyncHandler( async (req, res) => {
    const subcategory = await Subcategory.findById(req.params.id)
    res.status(200).json(subcategory)
})

const setSubcategory = asyncHandler( async (req, res) => {
    const {category,name,precedence,parentSqlId,sqlId,productCount,level,isActive} = req.body;

    if(!category){
        res.status(400)
        throw new Error('Please Enter category')
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

    const imageUrl = `subcategoryImages/${Date.now() + '-' +image.name}`

    await uploadObject(imageUrl, image.data)
    
    const status = await Subcategory.create({
        category,
        name,
        precedence,
        parentSqlId,
        sqlId,
        productCount,
        level,
        isActive,
        image: imageUrl
    })

    res.status(200).json(status)
})

const updateSubcategory = asyncHandler( async (req, res) => {
    const { id } = req.params
    const subcategoryToUpdate = await Subcategory.findById(id)

    if(!subcategoryToUpdate){
        res.status(400)
        throw new Error('Subcategory not Found')
    }

    if(!req.files){

        await Subcategory.findByIdAndUpdate(id, {
            ...req.body
        })
    
        const updatedSubcategory = await Subcategory.findById(id)
    
        res.status(200).json(updatedSubcategory)
    }

    if(req.files.image) {
        const {image} = req.files

        const imageUrl = `subcategoryImages/${Date.now() + '-' +image.name}`

        await updateObject(imageUrl, image.data, subcategoryToUpdate.image)

        const updateSubcategory = {
            image:imageUrl
        }
        
        await Subcategory.findByIdAndUpdate(req.params.id, updateSubcategory)

    }

    await Subcategory.findByIdAndUpdate(id, {
        ...req.body
    })

    const updatedSubcategory = await Subcategory.findById(id)

    res.status(200).json(updatedSubcategory)
})

const deleteSubcategory = asyncHandler( async (req, res) => {
    const subcategory = await Subcategory.findById(req.params.id)

    if (!subcategory) {
        res.status(400)
        throw new Error('Subcategory not Found')
    }

    await deleteObject(subcategory.image)
    await subcategory.deleteOne()

    res.status(200).json({id: req.params.id})
})

export {
    getAllSubcategories,
    setSubcategory,
    updateSubcategory,
    deleteSubcategory,
    getSingleSubcategory,
    getAllSubcategoriesFromCategory
}