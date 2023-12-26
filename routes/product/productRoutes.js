import { Router } from 'express';

import { getAllProducts, setProduct, updateProduct, deleteProduct, getSingleProduct } from '../../controllers/product/productController.js';

import { protectForEmployee } from '../../middleware/authMiddleware.js';

const productRoutes = Router();

// Routes
productRoutes.route('/').get(getAllProducts).post(protectForEmployee, setProduct);
productRoutes.route('/:id').patch(protectForEmployee, updateProduct).delete(protectForEmployee, deleteProduct);
productRoutes.route('/getSingleProduct/:id').get(getSingleProduct);

// Export
export default productRoutes;