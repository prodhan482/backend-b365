import asyncHandler from "express-async-handler";
import axios from "axios";

const sendOTP = asyncHandler(async (req, res) => {
  const apiUrl = process.env.API_URL;
  const apiToken = process.env.API_TOKEN;
  const username = process.env.USERNAME;
  const password = process.env.PASSWORD;
  const senderId = process.env.SENDER_ID;

  const { phoneNumber } = req.body;
  const message = req.body.message;

  if (phoneNumber.length < 12) phoneNumber = '+88' + phoneNumber;

  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const csmsId = Array.from({ length: 10 }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');

  try {
    const response = await axios.post(apiUrl, {
      api_token: apiToken,
      user: username,
      pass: password,
      sid: senderId,
      msisdn: phoneNumber,
      sms: message,
      csms_id: csmsId
    }, {
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      }
    });

    console.log(response.data);

    if (response.data.status === 'SUCCESS') {
      console.log('SMS sent successfully!');
      res.status(200).json({ message: "SMS sent successfully!", response: response.data.smsinfo });
    } else {
      console.error('Failed to send SMS');
      res.status(500).json({ message: "Failed to send SMS", response: response.data });
    }
  } catch (error) {
    console.error('Error sending SMS:', error);
    res.status(500).json({ message: "Failed to send SMS" });
  }
});



export { sendOTP };
