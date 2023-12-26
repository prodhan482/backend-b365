import asyncHandler from 'express-async-handler';
import PromotionCard from '../../models/generalWebsiteContent/promotionCardModel.js';
import { deleteObject, uploadObject, updateObject } from '../../config/space.js';


const getAllPromotionCards = asyncHandler( async (req, res) => {
    const promotionCards = await PromotionCard.find().sort('category')
    res.status(200).json(promotionCards)
})

const getSinglePromotionCard = asyncHandler( async (req, res) => {
    const promotionCard = await PromotionCard.findById(req.params.id)
    res.status(200).json(promotionCard)
})

const setPromotionCard = asyncHandler( async (req, res) => {
    const {category,link} = req.body;

    if(!category){
        res.status(400)
        throw new Error('Please Enter category')
    }

    if(!req.files) {
        res.status(400)
        throw new Error('Please add Image')
    }

    const {image} = req.files

    const imageUrl = `promotionCardImages/${Date.now() + '-' +image.name}`

    await uploadObject(imageUrl, image.data)
    
    const status = await PromotionCard.create({
        category,
        link,
        image: imageUrl
    })

    res.status(200).json(status)
})

const updatePromotionCard = asyncHandler( async (req, res) => {
    const { id } = req.params
    const promotionCardToUpdate = await PromotionCard.findById(id)

    if(!promotionCardToUpdate){
        res.status(400)
        throw new Error('PromotionCard not Found')
    }

    if(!req.files){

        await PromotionCard.findByIdAndUpdate(id, {
            ...req.body
        })
    
        const updatedPromotionCard = await PromotionCard.findById(id)
    
        res.status(200).json(updatedPromotionCard)
    }

    if(req.files.image) {
        const {image} = req.files

        const imageUrl = `promotionCardImages/${Date.now() + '-' +image.name}`

        await updateObject(imageUrl, image.data, promotionCardToUpdate.image)

        const updatePromotionCard = {
            image:imageUrl
        }
        
        await PromotionCard.findByIdAndUpdate(req.params.id, updatePromotionCard)

    }

    await PromotionCard.findByIdAndUpdate(id, {
        ...req.body
    })

    const updatedPromotionCard = await PromotionCard.findById(id)

    res.status(200).json(updatedPromotionCard)
})

const deletePromotionCard = asyncHandler( async (req, res) => {
    const promotionCard = await PromotionCard.findById(req.params.id)

    if (!promotionCard) {
        res.status(400)
        throw new Error('PromotionCard not Found')
    }

    await deleteObject(promotionCard.image)
    await promotionCard.deleteOne()

    res.status(200).json({id: req.params.id})
})

export {
    getAllPromotionCards,
    setPromotionCard,
    updatePromotionCard,
    deletePromotionCard,
    getSinglePromotionCard
}