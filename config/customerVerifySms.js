// customerVerifySms
import axios from "axios";

// const sendOTP = asyncHandler(async (req, res) => {
export async function sendOTP(phoneNumber, otp) {
  const apiUrl = 'https://smsplus.sslwireless.com/api/v3/send-sms';
  const apiToken = 'd4e94f92-771e-4d25-9914-373835b21b7b';
  const username = "bazar365";
  const password = "Farija@#5604$";
  const senderId = "BAZAR365API";

//   const { phoneNumber } = req.body;
  const message = 'Hello From Bazar365. Your OTP is: ' + otp;

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
      otp: otp,
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
      // res.send({ message: "SMS sent successfully!", response: response.data.smsinfo })
      return 'SMS sent successfully!'
      //   res.status(200).json({ message: "SMS sent successfully!", response: response.data.smsinfo });
    } else {
        console.error('Failed to send SMS');
        // res.send({ message: "Failed to send SMS", response: response.data })
      return 'Failed to send SMS'
        //   res.status(500).json({ message: "Failed to send SMS", response: response.data });
    }
} catch (error) {
    console.error('Error sending SMS:', error);
    // res.send({ message: "Failed to send SMS" })
    return 'Failed to send SMS'
    // res.status(500).json({ message: "Failed to send SMS" });
  }
};




