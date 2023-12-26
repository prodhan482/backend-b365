import {Router} from 'express'

import plasticTypeRoutes from './plasticTypeRoutes.js'
import brandRoutes from './brandRoutes.js'
import categoryRoutes from './categoryRoutes.js'
import featuredCategoryRoutes from './featuredCategoryRoutes.js'
import subcategoryRoutes from './subcategoryRoutes.js'
import subsubcategoryRoutes from './subsubcategoryRoutes.js'
import productRoutes from './productRoutes.js'
import wishlistRoutes from './wishlistRoutes.js'

const productGroupRoutes = Router()

productGroupRoutes.use('/plasticTypes', plasticTypeRoutes)
productGroupRoutes.use('/brands', brandRoutes)
productGroupRoutes.use('/categories', categoryRoutes)
productGroupRoutes.use('/featuredcategories', featuredCategoryRoutes)
productGroupRoutes.use('/subcategories', subcategoryRoutes)
productGroupRoutes.use('/subsubcategories', subsubcategoryRoutes)
productGroupRoutes.use('/products', productRoutes)
productGroupRoutes.use('/wishlists', wishlistRoutes)

export default productGroupRoutes