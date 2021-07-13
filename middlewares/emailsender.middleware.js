
const nodemailer   = require('nodemailer');
const otptem       = require('../middlewares/otptemp.middleware'); 

module.exports =
{

SendMail:async function (mail_to,otp,curTime,from) {
  
    const template = await otptem.OtpFormat(otp,curTime,from);
  
    const transport = nodemailer.createTransport({
       
        host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
        auth: {
            user: "amitwebdev2019@gmail.com",
            pass: "8888565473"
        },
        tls: {
            rejectUnauthorized: false
          }
        });
  
    
    transport.sendMail({
        from: 'amitwebdev2019@gmail.com',
        to: mail_to,
        subject:'Otp Verification',
        html: template
    });
  
    
    return  'ok';


}




}