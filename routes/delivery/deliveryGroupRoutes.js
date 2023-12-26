import {Router} from 'express'

import deliveryAreaRoutes from './deliveryAreaRoutes.js'
import deliveryZoneRoutes from './deliveryZoneRoutes.js'

const deliveryGroupRoutes = Router()

deliveryGroupRoutes.use('/deliveryAreas', deliveryAreaRoutes)
deliveryGroupRoutes.use('/deliveryZones', deliveryZoneRoutes)

export default deliveryGroupRoutes