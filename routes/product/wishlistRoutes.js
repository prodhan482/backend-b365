import { Router } from "express";

import { getAllWishlists, getMyWishlist, setWishlist, deleteWishlist } from "../../controllers/product/wishlistController.js";

import { protectForCustomer, protectForEmployee } from "../../middleware/authMiddleware.js";

const wishlistRoutes = Router()

wishlistRoutes.route('/').get(protectForEmployee, getAllWishlists).post(protectForCustomer, setWishlist)
wishlistRoutes.route('/myWishlist').get(protectForCustomer, getMyWishlist)
wishlistRoutes.route('/:id').delete(protectForCustomer,deleteWishlist)

export default wishlistRoutes