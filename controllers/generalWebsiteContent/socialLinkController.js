import asyncHandler from 'express-async-handler';
import SocialLink from '../../models/generalWebsiteContent/socialLinkModel.js';

const getAllSocialLinks = asyncHandler( async (req, res) => {
    const socialLinks = await SocialLink.find()
    res.status(200).json(socialLinks)
})

const setSocialLink = asyncHandler( async (req, res) => {
    const {name, visibility, link} = req.body;

    if(!name){
        res.status(400)
        throw new Error('Please Enter name')
    }
    if(!link){
        res.status(400)
        throw new Error('Please Enter link')
    }
    if(!visibility){
        res.status(400)
        throw new Error('Please Enter visibility')
    }
    
    const socialLink = await SocialLink.create({
        name,
        visibility,
        link
    })

    res.status(200).json(socialLink)
})

const updateSocialLink = asyncHandler( async (req, res) => {
    const { id } = req.params
    const socialLink = await SocialLink.findById(id)

    if(!socialLink){
        res.status(400)
        throw new Error('SocialLink not Found')
    }

    await SocialLink.findByIdAndUpdate(id, {
        ...req.body
    })

    const updatedSocialLink = await SocialLink.findById(id)

    res.status(200).json(updatedSocialLink)
})

const deleteSocialLink = asyncHandler( async (req, res) => {
    const socialLink = await SocialLink.findById(req.params.id)
    if (!socialLink) {
        res.status(400)
        throw new Error('SocialLink not Found')
    }

    await socialLink.deleteOne()

    res.status(200).json({id: req.params.id})
})

export {
    getAllSocialLinks,
    setSocialLink,
    updateSocialLink,
    deleteSocialLink
}