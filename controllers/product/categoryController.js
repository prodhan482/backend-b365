import asyncHandler from 'express-async-handler';
import Category from '../../models/product/categoryModel.js';

import { deleteObject, uploadObject, updateObject } from '../../config/space.js';

const getAllCategories = asyncHandler( async (req, res) => {
    const categories = await Category.find()
    res.status(200).json(categories)
})

const getSingleCategory = asyncHandler( async (req, res) => {
    const category = await Category.findById(req.params.id)
    res.status(200).json(category)
})

const setCategory = asyncHandler( async (req, res) => {
    const {name,precedence,sqlId,productCount,level,isActive,isDiscount,discountType,discountAmount} = req.body;

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

    const imageUrl = `categoryImages/${Date.now() + '-' +image.name}`

    await uploadObject(imageUrl, image.data)
    
    const status = await Category.create({
        name,
        precedence,
        sqlId,
        productCount,
        level,
        isActive,
        isDiscount,
        discountType,
        discountAmount,
        image: imageUrl
    })

    res.status(200).json(status)
})

const updateCategory = asyncHandler( async (req, res) => {
    const { id } = req.params
    const categoryToUpdate = await Category.findById(id)

    if(!categoryToUpdate){
        res.status(400)
        throw new Error('Category not Found')
    }

    if(!req.files){

        await Category.findByIdAndUpdate(id, {
            ...req.body
        })
    
        const updatedCategory = await Category.findById(id)
    
        res.status(200).json(updatedCategory)
    }

    if(req.files.image) {
        const {image} = req.files

        const imageUrl = `categoryImages/${Date.now() + '-' +image.name}`

        await updateObject(imageUrl, image.data, categoryToUpdate.image)

        const updateCategory = {
            image:imageUrl
        }
        
        await Category.findByIdAndUpdate(req.params.id, updateCategory)

    }

    await Category.findByIdAndUpdate(id, {
        ...req.body
    })

    const updatedCategory = await Category.findById(id)

    res.status(200).json(updatedCategory)
})

const deleteCategory = asyncHandler( async (req, res) => {
    const category = await Category.findById(req.params.id)

    if (!category) {
        res.status(400)
        throw new Error('Category not Found')
    }

    await deleteObject(category.image)
    await category.deleteOne()

    res.status(200).json({id: req.params.id})
})

export {
    getAllCategories,
    setCategory,
    updateCategory,
    deleteCategory,
    getSingleCategory
}