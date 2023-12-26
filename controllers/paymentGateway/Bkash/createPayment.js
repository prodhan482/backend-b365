import asyncHandler from "express-async-handler";
import axios from "axios";
import BkashTransaction from "../../../models/paymentGateway/bkashModel.js";

const createPayment = asyncHandler(async (req, res) => {
    try {

        const grantTokenResponse = await axios.post('https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/token/grant', {
            app_key: "4f6o0cjiki2rfm34kfdadl1eqq",
            app_secret: "2is7hdktrekvrbljjh44ll3d9l1dtjo4pasmjvs5vl5qr3fug4b",
        }, {
            headers: {
                'username': "sandboxTokenizedUser02",
                'password': "sandboxTokenizedUser02@12345",
                'Content-Type': 'application/json'
            }
        });
        // console.log("🚀 ~ file: createPayment.js:18 ~ createPayment ~ grantTokenResponse:", grantTokenResponse)

        const grantToken = grantTokenResponse.data.id_token;

        const paymentResponse = await axios.post('https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/create', {
            mode: "0011",
            payerReference: "01723888888",
            callbackURL: "https://bazar365.com/execute-payment",
            merchantAssociationInfo: "MI05MID54RF09123456One",
            amount: 500, // Use the order amount from req.body
            currency: "BDT",
            intent: "authorization",
            merchantInvoiceNumber: "INV2023" // Use the order ID from req.body
        }, {
            headers: {
                Authorization: `Bearer ${grantToken}`,
                'X-APP-KEY': "4f6o0cjiki2rfm34kfdadl1eqq"
            }
        });

        const bkashTransaction = await BkashTransaction.create({

            statusCode: paymentResponse.data.statusCode,
            statusMessage: paymentResponse.data.statusMessage,
            paymentID: paymentResponse.data.paymentID,
            bkashURL: paymentResponse.data.bkashURL,
            callbackURL: paymentResponse.data.callbackURL,
            successCallbackURL: paymentResponse.data.successCallbackURL,
            failureCallbackURL: paymentResponse.data.failureCallbackURL,
            cancelledCallbackURL: paymentResponse.data.cancelledCallbackURL,
            amount: paymentResponse.data.amount,
            intent: paymentResponse.data.intent,
            currency: paymentResponse.data.currency,
            paymentCreateTime: paymentResponse.data.paymentCreateTime,
            transactionStatus: paymentResponse.data.transactionStatus,
            merchantInvoiceNumber: paymentResponse.data.merchantInvoiceNumber
        });
        // console.log("🚀 ~ file: createPayment.js:56 ~ createPayment ~ bkashTransaction:", bkashTransaction);

        res.status(200).json({
            success: true,
            message: 'Bkash payment created successfully',
            transaction: bkashTransaction,
        });

    } catch (error) {
        res.status(500).json({ error: "Payment creation failed. Please try again." });
    }
});

const executePayment = asyncHandler(async (req, res) => {
    try {
        const { paymentId } = req.body;
        console.log("🚀 ~ file: createPayment.js:71 ~ executePayment ~ paymentId:", paymentId)

        // Step 1: Create Grant Token for execution
        const grantTokenResponse = await axios.post('https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/token/grant', {
            app_key: "4f6o0cjiki2rfm34kfdadl1eqq",
            app_secret: "2is7hdktrekvrbljjh44ll3d9l1dtjo4pasmjvs5vl5qr3fug4b",
        }, {
            headers: {
                'username': "sandboxTokenizedUser02",
                'password': "sandboxTokenizedUser02@12345",
                'Content-Type': 'application/json'
            }
        });

        const grantToken = grantTokenResponse.data.id_token;

        // Step 2: Execute Payment
        const executeResponse = await axios.post('https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/execute', {
            paymentId,
        }, {
            headers: {
                Authorization: `Bearer ${grantToken}`,
                'X-APP-KEY': "4f6o0cjiki2rfm34kfdadl1eqq"
            }
        });
        if (paymentId == BkashTransaction.paymentID) {
        console.log("🚀 ~ file: createPayment.js:96 ~ executePayment ~ paymentId:", paymentId)

        // Step 3: Update the database
        const executionTransaction = await BkashTransaction.findOneAndUpdate(
            { paymentID: executeResponse.data.paymentID },
            {
                $set: {
                    statusCode: executeResponse.data.statusCode,
                    statusMessage: executeResponse.data.statusMessage,
                    payerReference: executeResponse.data.payerReference,
                    customerMsisdn: executeResponse.data.customerMsisdn,
                    trxID: executeResponse.data.trxID,
                    amount: executeResponse.data.amount,
                    transactionStatus: executeResponse.data.transactionStatus,
                    paymentExecuteTime: executeResponse.data.paymentExecuteTime,
                    currency: executeResponse.data.currency,
                    intent: executeResponse.data.intent,
                    merchantInvoiceNumber: executeResponse.data.merchantInvoiceNumber
                }
            },
            { new: true, upsert: true }
        );
        
        // console.log("🚀 ~ file: createPayment.js:116 ~ executePayment ~ executionTransaction:", executionTransaction)


        res.status(200).json({
            success: true,
            message: 'Bkash payment executed successfully',
            transaction: executionTransaction,
        })};

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Payment execution failed. Please try again." });
    }
});



const createPayment2 = asyncHandler(async (req, res) => {
    try {
        // Step 1: Create Grant Token for execution
        const grantTokenResponse = await axios.post('https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/token/grant', {
            app_key: "4f6o0cjiki2rfm34kfdadl1eqq",
            app_secret: "2is7hdktrekvrbljjh44ll3d9l1dtjo4pasmjvs5vl5qr3fug4b",
        }, {
            headers: {
                'username': "sandboxTokenizedUser02",
                'password': "sandboxTokenizedUser02@12345",
                'Content-Type': 'application/json'
            }
        });

        const grantToken = grantTokenResponse.data.id_token;

        // Step 2: Create Payment
        const paymentResponse = await axios.post('https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/create', {
            mode: "0011",
            payerReference: "01723888888",
            callbackURL: "https://bazar365.com/execute-payment",
            merchantAssociationInfo: "MI05MID54RF09123456One",
            amount: 500, // Use the order amount from req.body
            currency: "BDT",
            intent: "authorization",
            merchantInvoiceNumber: "INV2023" // Use the order ID from req.body
        }, {
            headers: {
                Authorization: `Bearer ${grantToken}`,
                'X-APP-KEY': "4f6o0cjiki2rfm34kfdadl1eqq"
            }
        });

        const createBkashTransaction = await BkashTransaction.create({

            statusCode: paymentResponse.data.statusCode,
            statusMessage: paymentResponse.data.statusMessage,
            paymentID: paymentResponse.data.paymentID,
            bkashURL: paymentResponse.data.bkashURL,
            callbackURL: paymentResponse.data.callbackURL,
            successCallbackURL: paymentResponse.data.successCallbackURL,
            failureCallbackURL: paymentResponse.data.failureCallbackURL,
            cancelledCallbackURL: paymentResponse.data.cancelledCallbackURL,
            amount: paymentResponse.data.amount,
            intent: paymentResponse.data.intent,
            currency: paymentResponse.data.currency,
            paymentCreateTime: paymentResponse.data.paymentCreateTime,
            transactionStatus: paymentResponse.data.transactionStatus,
            merchantInvoiceNumber: paymentResponse.data.merchantInvoiceNumber
        });

        const paymentID = paymentResponse.data.paymentID;

        // Step 3: Execute Payment
        const executeResponse = await axios.post('https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/execute', {
            paymentId: paymentID,
        }, {
            headers: {
                Authorization: `Bearer ${grantToken}`,
                'X-APP-KEY': "4f6o0cjiki2rfm34kfdadl1eqq"
            }
        });

        // Step 4: Update the database
        let status = 'IncompletePayment';

        if (executeResponse.data.statusCode === '0000') {
            status = 'Completed';
        }
        if (paymentID === BkashTransaction.paymentID) {
            const bkashTransaction = await BkashTransaction.findOneAndUpdate(
                { paymentID: paymentID },
                {
                    $set: {
                        statusCode: executeResponse.data.statusCode,
                        statusMessage: executeResponse.data.statusMessage,
                        payerReference: executeResponse.data.payerReference,
                        customerMsisdn: executeResponse.data.customerMsisdn,
                        trxID: executeResponse.data.trxID,
                        amount: executeResponse.data.amount,
                        transactionStatus: executeResponse.data.transactionStatus,
                        paymentExecuteTime: executeResponse.data.paymentExecuteTime,
                        currency: executeResponse.data.currency,
                        intent: executeResponse.data.intent,
                        merchantInvoiceNumber: executeResponse.data.merchantInvoiceNumber,
                        status: status,
                    }
                },
                { new: true, upsert: true }
            );


            res.status(200).json({
                success: true,
                message: `Bkash payment ${status.toLowerCase()} successfully`,
                transaction: bkashTransaction,
            })
        };

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Payment processing failed. Please try again." });
    }
});

export {
    createPayment,
    executePayment,
    createPayment2
};

