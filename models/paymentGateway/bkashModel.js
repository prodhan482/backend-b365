import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const bkashTransactionSchema = new Schema({
    amount: {
        type: Number,
        required: true,
    },
    paymentID: {
        type: String,
        required: true,
        unique: true,
    },
    bkashURL: {
        type: String,
    },
    // callbackURL: {
    //     type: String,
    // },
    // successCallbackURL: {
    //     type: String,
    // },
    // failureCallbackURL: {
    //     type: String,
    // },
    // cancelledCallbackURL: {
    //     type: String,
    // },
    currency: {
        type: String,
        default: 'BDT',
    },
    intent: {
        type: String,
        default: 'sale',
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

export default model('BkashTransactionDetails', bkashTransactionSchema);
