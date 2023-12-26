import asyncHandler from 'express-async-handler';
import Faq from '../../models/generalWebsiteContent/faqModel.js';

const getAllFaqs = asyncHandler( async (req, res) => {
    const faqs = await Faq.find()
    res.status(200).json(faqs)
})

const getSingleFaq = asyncHandler( async (req, res) => {
    const faq = await Faq.findById(req.params.id)
    res.status(200).json(faq)
})

const setFaq = asyncHandler( async (req, res) => {
    const {name, description} = req.body;

    if(!name){
        res.status(400)
        throw new Error('Please Enter name')
    }
    if(!description){
        res.status(400)
        throw new Error('Please Enter description')
    }
    
    const faq = await Faq.create({
        name,
        description
    })

    res.status(200).json(faq)
})

const updateFaq = asyncHandler( async (req, res) => {
    const { id } = req.params
    const faq = await Faq.findById(id)

    if(!faq){
        res.status(400)
        throw new Error('Faq not Found')
    }

    await Faq.findByIdAndUpdate(id, {
        ...req.body
    })

    const updatedFaq = await Faq.findById(id)

    res.status(200).json(updatedFaq)
})

const deleteFaq = asyncHandler( async (req, res) => {
    const faq = await Faq.findById(req.params.id)
    if (!faq) {
        res.status(400)
        throw new Error('Faq not Found')
    }

    await faq.deleteOne()

    res.status(200).json({id: req.params.id})
})

export {
    getAllFaqs,
    getSingleFaq,
    setFaq,
    updateFaq,
    deleteFaq
}