import {Router} from 'express'

import areaRoutes from './areaRoutes.js'
import districtRoutes from './districtRoutes.js'
import divisionRoutes from './divisionRoutes.js'
import addressRoutes from './addressRoutes.js'
import defaultAddressRoutes from './defaultAddressRoutes.js'

const addressGroupRoutes = Router()

addressGroupRoutes.use('/divisions', divisionRoutes)
addressGroupRoutes.use('/districts', districtRoutes)
addressGroupRoutes.use('/areas', areaRoutes)
addressGroupRoutes.use('/addresses', addressRoutes)
addressGroupRoutes.use('/defaultAddresses', defaultAddressRoutes)

export default addressGroupRoutes