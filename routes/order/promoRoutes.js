import {Router} from 'express'

import promoCodeRoutes from './promoCodeRoutes.js'
import promoCodeTypeRoutes from './promoCodeTypeRoutes.js'
import packageRoutes from './packageRoutes.js'
import packageProductRoutes from './packageProductRoutes.js'

const promoRoutes = Router()

promoRoutes.use('/promoCodeTypes', promoCodeTypeRoutes)
promoRoutes.use('/promoCodes', promoCodeRoutes)
promoRoutes.use('/packages', packageRoutes)
promoRoutes.use('/packageProducts', packageProductRoutes)

export default promoRoutes