import asyncHandler from 'express-async-handler';
import Product from '../../models/product/productModel.js';
import { deleteObject, uploadObject, updateObject } from '../../config/space.js';

const getAllProducts = asyncHandler( async (req, res) => {
    const products = await Product.find().populate('brand').populate('plasticType').populate('category').populate('subcategory').populate('subsubcategory').populate('employee')
    res.status(200).json(products)
})

const getSingleProduct = asyncHandler( async (req, res) => {
    const product = await Product.findById(req.params.id).populate('brand').populate('plasticType').populate('category').populate('subcategory').populate('subsubcategory')
    
    res.status(200).json(product)
})

const setProduct = asyncHandler( async (req, res) => {
    const {brand,category,subcategory,subsubcategory,name,sku,price,shortDescription,description,quantity,isVisible,isPlastic,plasticType,weight,isDiscount,discountType,discountAmount} = req.body;

    if(!name){
        res.status(400)
        throw new Error('Please Enter name')
    }
    if(!sku){
        res.status(400)
        throw new Error('Please Enter sku')
    }
    if(!price){
        res.status(400)
        throw new Error('Please Enter price')
    }
    if(!shortDescription){
        res.status(400)
        throw new Error('Please Enter shortDescription')
    }
    if(!description){
        res.status(400)
        throw new Error('Please Enter description')
    }
    if(!quantity){
        res.status(400)
        throw new Error('Please Enter quantity')
    }
    if(!isVisible){
        res.status(400)
        throw new Error('Please Enter isVisible')
    }
    if(!isPlastic){
        res.status(400)
        throw new Error('Please Enter isPlastic')
    }
    // Discount calculation
    let newDiscountPrice = 0;
    const parsedPrice = parseFloat(price);
    const parsedDiscountAmount = parseFloat(discountAmount);

    if (isDiscount === true || isDiscount === 'true') {
        if (discountType === 'percentage') {
            newDiscountPrice = parsedPrice - (parsedPrice * (parsedDiscountAmount / 100));
        } else {
            newDiscountPrice = parsedPrice - parsedDiscountAmount;
        }
    }
    
    if(!req.files) {
        res.status(400)
        throw new Error('Please add Image')
    }

    const {image} = req.files

    const imageUrl = `productImages/${Date.now() + '-' +image.name}`

    await uploadObject(imageUrl, image.data)
    
    const status = await Product.create({
        employee: req.employee.id,
        brand,
        category,
        subcategory,
        subsubcategory,
        name,
        sku,
        price,
        shortDescription,
        description,
        quantity,
        isVisible,
        isPlastic,
        plasticType,
        weight,
        isDiscount,
        discountType,
        discountAmount,
        discountedAmount: newDiscountPrice,
        image: imageUrl
    })

    res.status(200).json(status)
})

const updateProduct = asyncHandler( async (req, res) => {
    const { id } = req.params
    const productToUpdate = await Product.findById(id)

    if(!productToUpdate){
        res.status(400)
        throw new Error('Product not Found')
    }

    if(!req.files){

        await Product.findByIdAndUpdate(id, {
            ...req.body
        })
    
        const updatedProduct = await Product.findById(id)
    
        res.status(200).json(updatedProduct)
    }

    if(req.files.image) {
        const {image} = req.files

        const imageUrl = `productImages/${Date.now() + '-' +image.name}`

        await updateObject(imageUrl, image.data, productToUpdate.image)

        const updateProduct = {
            image:imageUrl
        }
        
        await Product.findByIdAndUpdate(req.params.id, updateProduct)

    }

    await Product.findByIdAndUpdate(id, {
        ...req.body
    })

    const updatedProduct = await Product.findById(id)

    res.status(200).json(updatedProduct)
})

const deleteProduct = asyncHandler( async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (!product) {
        res.status(400)
        throw new Error('Product not Found')
    }

    await deleteObject(product.image)
    await product.deleteOne()

    res.status(200).json({id: req.params.id})
})

export {
    getAllProducts,
    setProduct,
    updateProduct,
    deleteProduct,
    getSingleProduct
}