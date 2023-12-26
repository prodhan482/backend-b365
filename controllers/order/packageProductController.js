import asyncHandler from 'express-async-handler';
import PackageProduct from '../../models/order/packageProductModel.js';

const getAllPackageProducts = asyncHandler( async (req, res) => {
    const promoPackageProducts = await PackageProduct.find()
    res.status(200).json(promoPackageProducts)
})

const getSinglePackageProduct = asyncHandler( async (req, res) => {
    const promoPackageProduct = await PackageProduct.findById(req.params.id)
    res.status(200).json(promoPackageProduct)
})

const setPackageProduct = asyncHandler( async (req, res) => {
    const {packageProduct} = req.body;

    const packageProducts = packageProduct.map(i => i =  {...i})
    const createdPackageProduct = PackageProduct.insertMany(packageProducts)

    res.status(200).json(createdPackageProduct)
})

const updatePackageProduct = asyncHandler( async (req, res) => {
    const { id } = req.params
    const promoPackageProduct = await PackageProduct.findById(id)

    if(!promoPackageProduct){
        res.status(400)
        throw new Error('PackageProduct not Found')
    }

    await PackageProduct.findByIdAndUpdate(id, {
        ...req.body
    })

    const updatedPackageProduct = await PackageProduct.findById(id)

    res.status(200).json(updatedPackageProduct)
})

const deletePackageProduct = asyncHandler( async (req, res) => {
    const promoPackageProduct = await PackageProduct.findById(req.params.id)
    if (!promoPackageProduct) {
        res.status(400)
        throw new Error('PackageProduct not Found')
    }

    await promoPackageProduct.deleteOne()

    res.status(200).json({id: req.params.id})
})

export {
    getAllPackageProducts,
    getSinglePackageProduct,
    setPackageProduct,
    updatePackageProduct,
    deletePackageProduct
}