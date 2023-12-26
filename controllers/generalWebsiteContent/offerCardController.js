import asyncHandler from 'express-async-handler';
import OfferCard from '../../models/generalWebsiteContent/offerCardModel.js';
import { deleteObject, uploadObject, updateObject } from '../../config/space.js';

const getAllOfferCards = asyncHandler( async (req, res) => {
    const offerCards = await OfferCard.find()
    res.status(200).json(offerCards)
})

const getSingleOfferCard = asyncHandler( async (req, res) => {
    const offerCard = await OfferCard.findById(req.params.id)
    res.status(200).json(offerCard)
})

const setOfferCard = asyncHandler( async (req, res) => {
    const {link} = req.body;

    if(!link){
        res.status(400)
        throw new Error('Please Enter link')
    }

    if(!req.files) {
        res.status(400)
        throw new Error('Please add Image')
    }

    const {image} = req.files

    const imageUrl = `offerCardImages/${Date.now() + '-' +image.name}`

    await uploadObject(imageUrl, image.data)
    
    const status = await OfferCard.create({
        link,
        image: imageUrl
    })

    res.status(200).json(status)
})

const updateOfferCard = asyncHandler( async (req, res) => {
    const { id } = req.params
    const offerCardToUpdate = await OfferCard.findById(id)

    if(!offerCardToUpdate){
        res.status(400)
        throw new Error('OfferCard not Found')
    }

    if(!req.files){

        await OfferCard.findByIdAndUpdate(id, {
            ...req.body
        })
    
        const updatedOfferCard = await OfferCard.findById(id)
    
        res.status(200).json(updatedOfferCard)
    }

    if(req.files.image) {
        const {image} = req.files

        const imageUrl = `offerCardImages/${Date.now() + '-' +image.name}`

        await updateObject(imageUrl, image.data, offerCardToUpdate.image)

        const updateOfferCard = {
            image:imageUrl
        }
        
        await OfferCard.findByIdAndUpdate(req.params.id, updateOfferCard)

    }

    await OfferCard.findByIdAndUpdate(id, {
        ...req.body
    })

    const updatedOfferCard = await OfferCard.findById(id)

    res.status(200).json(updatedOfferCard)
})

const deleteOfferCard = asyncHandler( async (req, res) => {
    const offerCard = await OfferCard.findById(req.params.id)

    if (!offerCard) {
        res.status(400)
        throw new Error('OfferCard not Found')
    }

    await deleteObject(offerCard.image)
    await offerCard.deleteOne()

    res.status(200).json({id: req.params.id})
})

export {
    getAllOfferCards,
    setOfferCard,
    updateOfferCard,
    deleteOfferCard,
    getSingleOfferCard
}