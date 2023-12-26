// customer,address,area,district,division,orderStatus,fullAddressString,areaString,total,subtotal,grandTotal,notes
import asyncHandler from 'express-async-handler'

import Order from '../../models/order/orderModel.js'
import OrderProduct from '../../models/order/orderProductModel.js'

// Get All Orders
const getAllOrders = asyncHandler( async (req, res) => {
    const allOrders = await Order.find().populate('area')
    res.status(200).json(allOrders)
})

// Get All OrderProducts From One Order
const getOrderProductsFromOrder = asyncHandler( async (req, res) => {

    const orderProducts = await OrderProduct.find({order: req.params.id})

    res.status(200).json(orderProducts)
})

// Get A Single Order
const getSingleOrder = asyncHandler( async (req, res) => {

    const order = await Order.find({_id: req.params.id})

    res.status(200).json(order)
})

//Get All Orders By Status
const getAllOrdersByStatus = asyncHandler( async (req, res) => {
    const {status} = req.params
    const orders = await Order.find({orderStatus: status})
    res.status(200).json(orders)
})

// Get Single Customer Orders
const getSingleCustomerOrders = asyncHandler( async (req, res) => {

    const orders = await Order.find({customer: req.params.id})

    res.status(200).json(orders)
})

// Get My Orders
const getMyOrders = asyncHandler( async (req, res) => {

    const myOrders = await Order.find({customer: req.customer._id})

    res.status(200).json(myOrders)
})

// Get My SingleOrders
const getMySingleOrder = asyncHandler( async (req, res) => {

    const order = await Order.findById(req.params.id)

    const orderProducts = await OrderProduct.find({order: req.params.id})

    if (req.customer._id.toString() === order.customer.toString()) {
        res.status(200).json({order, orderProducts})
    } else {
        res.status(400);
        throw new Error('This Order Belongs To Another Customer')
    }
})

// Create Order
const customerCreatesOrder = asyncHandler( async (req, res) => {
    const {
        address,area,district,division,fullAddressString,areaString,total,subtotal,grandTotal,notes,isPromoCode,promoCode,
        orderProducts 
    } = req.body;
    console.log(orderProducts)

    // if(!address) {
    //     res.status(401);
    //     throw new Error('address not found')
    // }
    // if(!fullAddressString) {
    //     res.status(401);
    //     throw new Error('fullAddressString not found')
    // }
    // if(!area) {
    //     res.status(401);
    //     throw new Error('area not found')
    // }
    // if(!areaString) {
    //     res.status(401);
    //     throw new Error('areaString not found')
    // }
    // if(!district) {
    //     res.status(401);
    //     throw new Error('district not found')
    // }
    // if(!division) {
    //     res.status(401);
    //     throw new Error('division not found')
    // }
    // if(!zipCode) {
    //     res.status(401);
    //     throw new Error('zipCode not found')
    // }
    if(!total) {
        res.status(401);
        throw new Error('total not found')
    }
    // if(!deliveryFee) {
    //     res.status(401);
    //     throw new Error('deliveryFee not found')
    // }
    
    // if(!subtotal) {
    //     res.status(401);
    //     throw new Error('subtotal not found')
    // }
    // if(!grandTotal) {
    //     res.status(401);
    //     throw new Error('grandTotal not found')
    // }

    if(!req.customer) {
        res.status(401);
        throw new Error('Customer not found')
    }
    
    const order = await Order.create({
        address,
        area,
        district,
        division,
        // orderStatus,
        fullAddressString,
        areaString,
        total,
        subtotal,
        grandTotal,
        notes,
        isPromoCode,
        promoCode,
        customer: req.customer._id,
        orderStatus: 'processing'
    })
    const orderProductsFromCart = orderProducts.map(i => i =  {...i, order: order._id})
    const createdOrderProducts = OrderProduct.insertMany(orderProductsFromCart)

    res.status(200).json({order, createdOrderProducts})
})

export {
    customerCreatesOrder,
    getMyOrders,
    getAllOrders,
    getAllOrdersByStatus,
    getSingleOrder,
    getOrderProductsFromOrder,
    getSingleCustomerOrders,
    getMySingleOrder
}