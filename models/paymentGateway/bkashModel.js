import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const bkashTransactionSchema = new mongoose.Schema({
    // orderId: {
    //     type: String,
    //     required: true,
    //     unique: true,
    // },
    amount: {
        type: Number,
        required: true,
    },
    paymentID: {
        type: String,
    },
    bkashURL: {
        type: String,
    },
    callbackURL: {
        type: String,
    },
    successCallbackURL: {
        type: String,
    },
    failureCallbackURL: {
        type: String,
    },
    cancelledCallbackURL: {
        type: String,
    },
    currency: {
        type: String,
        default: 'BDT',
    },
    intent: {
        type: String,
        default: 'authorization',
    },
    paymentCreateTime: {
        type: String,
    },
    transactionStatus: {
        type: String,
    },
    merchantInvoiceNumber: {
        type: String,
    },
    payerReference: {
        type: String,
    },
    customerMsisdn: {
        type: String,
    },
    trxID: {
        type: String,
    },
    paymentExecuteTime: {
        type: String,
    },
}, { timestamps: true });

export default model('bkashTransactionDetails', bkashTransactionSchema);
