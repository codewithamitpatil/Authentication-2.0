
const nodemailer   = require('nodemailer');
const otptem       = require('../middlewares/otptemp.middleware'); 

module.exports =
{

SendMail:async function (mail_to,otp) {
  
  

    const template = await otptem.OtpFormat(otp);
  
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "04f7055cf6f158",
            pass: "7f9459a7f99ce2"
        }
        });
  
    
    transport.sendMail({
        from: 'elenor.bins@ethereal.email',
        to: mail_to,
        subject:'Otp Verification',
        html: template
    });
  
    
    return  'ok';





}




}