import asyncHandler from 'express-async-handler';
import HomeBanner from '../../models/generalWebsiteContent/homeBannerModel.js';
import { deleteObject, uploadObject, updateObject } from '../../config/space.js';


const getAllHomeBanners = asyncHandler( async (req, res) => {
    const homeBanners = await HomeBanner.find().sort('precedence')
    res.status(200).json(homeBanners)
})

const getSingleHomeBanner = asyncHandler( async (req, res) => {
    const homeBanner = await HomeBanner.findById(req.params.id)
    res.status(200).json(homeBanner)
})

const setHomeBanner = asyncHandler( async (req, res) => {
    const {precedence} = req.body;

    if(!precedence){
        res.status(400)
        throw new Error('Please Enter precedence')
    }

    if(!req.files) {
        res.status(400)
        throw new Error('Please add Image')
    }

    const {image} = req.files

    const imageUrl = `homeBannerImages/${Date.now() + '-' +image.name}`

    await uploadObject(imageUrl, image.data)
    
    const status = await HomeBanner.create({
        precedence,
        image: imageUrl
    })

    res.status(200).json(status)
})

const updateHomeBanner = asyncHandler( async (req, res) => {
    const { id } = req.params
    const homeBannerToUpdate = await HomeBanner.findById(id)

    if(!homeBannerToUpdate){
        res.status(400)
        throw new Error('HomeBanner not Found')
    }

    if(!req.files){

        await HomeBanner.findByIdAndUpdate(id, {
            ...req.body
        })
    
        const updatedHomeBanner = await HomeBanner.findById(id)
    
        res.status(200).json(updatedHomeBanner)
    }

    if(req.files.image) {
        const {image} = req.files

        const imageUrl = `homeBannerImages/${Date.now() + '-' +image.name}`

        await updateObject(imageUrl, image.data, homeBannerToUpdate.image)

        const updateHomeBanner = {
            image:imageUrl
        }
        
        await HomeBanner.findByIdAndUpdate(req.params.id, updateHomeBanner)

    }

    await HomeBanner.findByIdAndUpdate(id, {
        ...req.body
    })

    const updatedHomeBanner = await HomeBanner.findById(id)

    res.status(200).json(updatedHomeBanner)
})

const deleteHomeBanner = asyncHandler( async (req, res) => {
    const homeBanner = await HomeBanner.findById(req.params.id)

    if (!homeBanner) {
        res.status(400)
        throw new Error('HomeBanner not Found')
    }

    await deleteObject(homeBanner.image)
    await homeBanner.deleteOne()

    res.status(200).json({id: req.params.id})
})

export {
    getAllHomeBanners,
    setHomeBanner,
    updateHomeBanner,
    deleteHomeBanner,
    getSingleHomeBanner
}