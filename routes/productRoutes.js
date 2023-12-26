import {Router} from 'express'
import {getProducts, createProduct, updateProductById, deleteProductById} from '../controllers/productController.js'

const router = Router()


router.route('/').get(getProducts).post(createProduct)
router.route('/:id').delete(deleteProductById).put(updateProductById)


export default router 

