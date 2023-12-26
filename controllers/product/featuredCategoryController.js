import asyncHandler from 'express-async-handler';

import Category from '../../models/product/categoryModel.js';
import FeaturedCategory from '../../models/product/featuredCategoryModel.js';

const getAllFeaturedCategories = asyncHandler( async (req, res) => {
    const featuredCategories = await FeaturedCategory.find().populate('category')
    res.status(200).json(featuredCategories)
})

const getSingleFeaturedCategory = asyncHandler( async (req, res) => {
    const featuredCategories = await FeaturedCategory.findById(req.params.id)
    res.status(200).json(featuredCategories)
})

const setFeaturedCategory = asyncHandler( async (req, res) => {
    const {category, precedence} = req.body;

    if (!category || !precedence) {
        res.status(400);
        throw new Error('Please add all fields!')
    }

    const selectedCategory = await Category.findById(category);

    if(!selectedCategory) {
        res.status(400)
        throw new Error('Category Not Found')
    }
    
    const featuredCategory = await FeaturedCategory.create({
        category,
        precedence
    })

    res.status(200).json(featuredCategory)
})

const updateFeaturedCategory = asyncHandler( async (req, res) => {
    const { id } = req.params
    const featuredCategory = await FeaturedCategory.findById(id)

    if(!featuredCategory){
        res.status(400)
        throw new Error('FeaturedCategory not Found')
    }

    await FeaturedCategory.findByIdAndUpdate(id, {
        ...req.body
    })

    const updatedFeaturedCategory = await FeaturedCategory.findById(id)

    res.status(200).json(updatedFeaturedCategory)
})

const deleteFeaturedCategory = asyncHandler( async (req, res) => {
    const featuredCategory = await FeaturedCategory.findById(req.params.id)
    if (!featuredCategory) {
        res.status(400)
        throw new Error('FeaturedCategory not Found')
    }

    await featuredCategory.deleteOne()

    res.status(200).json({id: req.params.id})
})

export {
    getAllFeaturedCategories,
    setFeaturedCategory,
    updateFeaturedCategory,
    deleteFeaturedCategory,
    getSingleFeaturedCategory
}