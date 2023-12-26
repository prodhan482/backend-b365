import {Router} from 'express'
import userRoutes from '../routes/users/userRoutes.js'
import generalSettingRoutes from '../routes/generalWebsiteContent/generalSettingRoutes.js'
import addressGroupRoutes from '../routes/addressRoutes/addressGroupRoutes.js'
import productGroupRoutes from '../routes/product/productGroupRoutes.js'
import deliveryGroupRoutes from '../routes/delivery/deliveryGroupRoutes.js'
import orderRoutes from '../routes/order/orderRoutes.js'
import promoRoutes from '../routes/order/promoRoutes.js'
import paymentTypeRoutes from '../routes/order/paymentTypeRoutes.js'
import paymentGateways from './paymentGateway/paymentGateways.js'


//Super Admin Requirement
import requirementRoutes from '../routes/requirementRoutes.js'
import otpSendRoutes from '../routes/otpSendRoutes.js'


const routes = Router()

routes.use('/user', userRoutes)
routes.use('/generalSetting', generalSettingRoutes)
routes.use('/addressGroup', addressGroupRoutes)
routes.use('/productGroup', productGroupRoutes)
routes.use('/deliveryGroup', deliveryGroupRoutes)
routes.use('/orders', orderRoutes)
routes.use('/promo', promoRoutes)
routes.use('/paymentTypes', paymentTypeRoutes)
routes.use('/createPayments', paymentGateways)


//Super Admin Requirement
routes.use('/requirements', requirementRoutes)
routes.use('/otpSend', otpSendRoutes)

export default routes
