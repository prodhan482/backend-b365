import {Router} from 'express'
import {getCategories, createCategory, updateCategoryById, deleteCategoryById} from '../controllers/categoryController.js'

const router = Router()

router.route('/').get(getCategories).post(createCategory)

router.route('/:id').put(updateCategoryById).delete(deleteCategoryById)


export default router