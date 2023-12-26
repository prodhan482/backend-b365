import {Router} from 'express'

import homeSliderRoutes from '../generalWebsiteContent/homeSliderRoutes.js'
import homeBannerRoutes from '../generalWebsiteContent/homeBannerRoutes.js'
import appSettingRoutes from '../generalWebsiteContent/appSettingRoutes.js'
import socialLinkRoutes from '../generalWebsiteContent/socialLinkRoutes.js'
import faqRoutes from '../generalWebsiteContent/faqRoutes.js'
import offerCardRoutes from '../generalWebsiteContent/offerCardRoutes.js'
import termsAndConditionRoutes from '../generalWebsiteContent/termsAndConditionRoutes.js'
import promotionFAQRoutes from '../generalWebsiteContent/promotionFAQRoutes.js'
import promotionCardRoutes from '../generalWebsiteContent/promotionCardRoutes.js'

const generalSettingRoutes = Router()

generalSettingRoutes.use('/homeSliders', homeSliderRoutes)
generalSettingRoutes.use('/homeBanners', homeBannerRoutes)
generalSettingRoutes.use('/appSettings', appSettingRoutes)
generalSettingRoutes.use('/socialLinks', socialLinkRoutes)
generalSettingRoutes.use('/faqs', faqRoutes)
generalSettingRoutes.use('/offerCards', offerCardRoutes)
generalSettingRoutes.use('/termsAndConditions', termsAndConditionRoutes)
generalSettingRoutes.use('/promotionFAQs', promotionFAQRoutes)
generalSettingRoutes.use('/promotionCards', promotionCardRoutes)

export default generalSettingRoutes