import nodemailer  from 'nodemailer';

export async function sendForgotPasswordMail(recepient, link) {
    
    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.GMAIL_PASSWORD
        }
    });
    
    const message = {
        from: process.env.MAIL_USERNAME,
        to: recepient,
        subject: 'Test Forgot Password',
        html: `<p>Click <a href="${link}">Here</a><br> Valid For 12 Hours</p>`
    }
    
    try {
        const verification = await transporter.verify()
        if(verification){
            await transporter.sendMail(message, (err, info) => {
                if (err) {
                console.log('error: '+err)
                // res.send('error'+err)
                return 'error: '+ err
                }
            })
        } else {
            // res.send('Verification failed!')
            return 'Verification failed!'
        }
    } catch (error) {
        console.log(error)
        // res.send('Verification failed! From Catch!')
        return 'Verification failed! From Catch!'
    }
}