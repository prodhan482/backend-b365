import asyncHandler from 'express-async-handler';
import Wishlist from "../../models/product/wishlistModel.js";

const getAllWishlists = asyncHandler( async (req, res) => {
    const wishlists = await Wishlist.find()
    res.status(200).json(wishlists)
})

const getMyWishlist = asyncHandler( async (req, res) => {
    if (!req.customer) {
        res.status(400)
        throw new Error('Customer not Found')
    }
    const myWishlist = await Wishlist.find({customer: req.customer._id})
    res.status(200).json(myWishlist)
})

const setWishlist = asyncHandler( async (req, res) => {
    const {item} = req.body;

    if (!item) {
        res.status(400);
        throw new Error('Please add an Item!')
    }

    if (!req.customer) {
        res.status(400)
        throw new Error('Customer not Found')
    }
    
    const wishlist = await Wishlist.create({
        item,
        customer: req.customer._id
    })

    res.status(200).json(wishlist)
})

const deleteWishlist = asyncHandler( async (req, res) => {
    const wishlist = await Wishlist.findOne({item: req.params.id, customer: req.customer._id})
    if (!wishlist) {
        res.status(400)
        throw new Error('Wishlist not Found')
    }

    await wishlist.deleteOne()

    res.status(200).json({id: req.params.id})
})

export {
    getAllWishlists,
    getMyWishlist,
    setWishlist,
    deleteWishlist
}