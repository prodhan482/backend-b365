import asyncHandler from 'express-async-handler';
import AppSetting from '../../models/generalWebsiteContent/appSettingModel.js';
import { deleteObject, uploadObject, updateObject } from '../../config/space.js';


//All AppSettings
const getAllAppSettings = asyncHandler(async (req,res) => {
    const appSettings = await AppSetting.find()
    res.status(200).json(appSettings)
})

//Create AppSetting

const setAppSetting = asyncHandler(async (req,res) => {
    const {name} = req.body;

    if(!name){
        res.status(400)
        throw new Error('Please Enter name')
    }

    if(!req.files) {
        res.status(400)
        throw new Error('Please add Image')
    }

    const {image} = req.files

    const imageUrl = `appSetting/logo/${Date.now() + '-' +image.name}`

    await uploadObject(imageUrl, image.data)

    const appSetting = await AppSetting.create({
        name,
        image:imageUrl
    })
    res.status(200).json(appSetting)
})


//Update AppSetting
const updateAppSetting = asyncHandler(async (req,res) => {

    const { id } = req.params
    const appSetting = await AppSetting.findById(id)

    if(!appSetting){
        res.status(400)
        throw new Error('AppSetting not Found')
    }

    if(!req.files) {
        
        await AppSetting.findByIdAndUpdate(id, {
            ...req.body
        })
    
        const updatedAppSetting = await AppSetting.findById(id)
        res.status(200).json(updatedAppSetting)
    }

    //image

    if(req.files.image) {
        const {image} = req.files

        const imageUrl = `appSetting/logo/${Date.now() + '-' +image.name}`

        await updateObject(imageUrl, image.data, appSetting.image)

        const updateAppSetting = {
            image:imageUrl
        }
        
        await AppSetting.findByIdAndUpdate(req.params.id, updateAppSetting)

    }
    
    await AppSetting.findByIdAndUpdate(id, {
        ...req.body
    })

    const updatedAppSetting = await AppSetting.findById(id)

    res.status(200).json(updatedAppSetting)
})

//Delete AppSetting
const deleteAppSetting = asyncHandler(async (req,res) => {
    const appSetting = await AppSetting.findById(req.params.id)

    if(!appSetting){
        res.status(400)
        throw new Error('AppSetting Not Found')
    }

    await deleteObject(appSetting.image)

    await appSetting.deleteOne()

    res.status(200).json({ id: req.params.id})
})

export {
    getAllAppSettings,
    setAppSetting,
    updateAppSetting,
    deleteAppSetting
}