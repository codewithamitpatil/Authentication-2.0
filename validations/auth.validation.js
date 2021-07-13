
const joi    = require('@hapi/joi');

const Signup = joi.object({

        username : joi.string().max(15).required(),
        email    : joi.string().email().required().lowercase(),
        password : joi.string().min(8).max(16).required()

});


const Login = joi.object({
    
        username : joi.string().required(),
        password : joi.string().required()

});

const Refresh_Token = joi.object({
    
        RefreshToken : joi.string().required()

});



const Change_Password = joi.object({
    
        OldPassword : joi.string().required(),
        NewPassword : joi.string().min(8).max(16).required()

});

const NewPass = joi.object({
        
        newpass: joi.string().min(8).max(16).required()

});

const ForgotPass = joi.object({

        email : joi.string().email().required().lowercase()
      
});

const VerifyOtp = joi.object({

        email : joi.string().email().optional().lowercase(),
        otp:joi.number().required()
      
});

// export modules
   module.exports =
   {   
       Signup,
       Login,
       Refresh_Token,
       Change_Password,
       ForgotPass,
       NewPass,
       VerifyOtp
   }













