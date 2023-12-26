import {Router} from 'express'
import {getSubcategories,createSubcategory , updateSubcategory, deleteSubcategory} from '../controllers/subcategoryController.js'
const router = Router()



router.route('/').get(getSubcategories).post(createSubcategory);
router.route('/:id').put(updateSubcategory).delete(deleteSubcategory);

export default router