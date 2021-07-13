
const httpErrors       = require('http-errors');
const nodemailer       = require('nodemailer');
const otp              = require('in-memory-otp');
const date             = require('date-and-time');

// not learn 
const setTimer         = require('set-timer');



// includes
const AuthValidations  = require('../validations/auth.validation');
const UserModel        = require('../models/user.model'); 
const AdminModel       = require('../models/admin.model');
const redisClient      = require('../config/init_redis');
const jwtToken         = require('../helpers/jwt.helpers'); 
const mailtrap         = require('../middlewares/emailsender.middleware');
const otptem           = require('../middlewares/otptemp.middleware'); 




module.exports = {

//  Login Middleware (Admin)   
    Admin_Login:async(req,res,next)=>
    {

    const result = await AuthValidations.Login.validateAsync(req.body).
                  catch((err)=>
                  {
                    throw new httpErrors.BadRequest('All fields are required');
                  });
   
    const uid          = await AdminModel.Authentication(result);
 
    const AccessToken  = await jwtToken.SignAccessToken(uid); 

    const RefreshToken = await jwtToken.SignRefreshToken(uid); 

    res.send({ AccessToken , RefreshToken });

    return ;

    }
,

//  Reset Password Middleware (Admin) 
    Admin_Reset_Password:async(req,res,next)=>{
     
      
      const uid =req.payload.aud;

      const result = await AuthValidations.Change_Password.
                            validateAsync(req.body);

      const data = { 
                     id:uid,
                     password:result.OldPassword ,
                     newpassword:result.NewPassword 
                   };
      
      const HashPass = await AdminModel.OldPassWordCheck(data);
     
      if(HashPass)
      {
        const UpdatePass = await AdminModel.findOneAndUpdate({_id:data.id},{password:HashPass});
        res.json({status:'200',msg:'Password Updated Successfully'});
      }


      return;
    }  
,

//  Signup Middleware (User)   
    User_Signup:async(req,res,next)=>{

    const result = await AuthValidations.Signup.validateAsync(req.body);

    // duplicate email check
    const doesEmailExist = await UserModel.findOne({email:result.email});
                      
    if(doesEmailExist)
    {
     return next(new httpErrors.Conflict(`Email : ${result.email} is already exist .plz try another email`));
    }

   // duplicate username check 
   const doesUsernameExist = await UserModel.findOne({username:result.username});
                            
    if(doesUsernameExist)
    {
      return next(new httpErrors.Conflict(`Username : ${result.username} is already exist .plz try another username`));
    }    

    const user         = new   UserModel(result);
    const savedUser    = await user.save();                     

  
   otp.startOTPTimer(new Date().getTime());

   const userOTP = otp.generateOTP(result.email, 5);

   mailtrap.SendMail(result.email,userOTP );

     
   res.status(200).json({"status":200,"msg":"Your Account created successfully.Please Verify Email To Activate your acount ","email":result.email});
       
    return ;

    }
,

//  Login Middleware (User)  
    User_Login:async(req,res,next)=>
    {



    const result = await AuthValidations.Login.validateAsync(req.body).
                         catch((err)=>
                         {
                           throw new httpErrors.BadRequest('All fields are required');
                         });
   
    const uid = await UserModel.Authentication(result);    

   
    const AccessToken  = await jwtToken.SignAccessToken(uid); 

    const RefreshToken = await jwtToken.SignRefreshToken(uid); 
                 
    res.send({ AccessToken , RefreshToken });
    
    return ;
      
    }
,

//  Reset Password Middleware (User) 
    User_Reset_Password:async(req,res,next)=>{
     
      
      const uid =req.payload.aud;

      const result = await AuthValidations.Change_Password.
                            validateAsync(req.body);

      const data = { 
                     id:uid,
                     password:result.OldPassword ,
                     newpassword:result.NewPassword 
                   };
      
      const HashPass = await UserModel.OldPassWordCheck(data);
     
      if(HashPass)
      {
        const UpdatePass = await UserModel.findOneAndUpdate({_id:data.id},{password:HashPass});
        res.json({status:'200',msg:'Password Updated Successfully'});
      }
      return;
      
    }    
,

//  Delete Account Middleware (User) 
    User_Delete_Account:async(req,res,next)=>{
      
      const uid = req.payload.aud;
      const temp = await UserModel.findOneAndDelete({_id:uid});
      res.json({'status':'200','msg':'Account Deleted Successfully'});
      return;
    }
,
//  Logout Middleware (User/Admin) 
    Logout:async(req,res,next)=>
    {
        const result = await AuthValidations.Refresh_Token.validateAsync(req.body);

        const uid = await jwtToken.VerifyRefreshToken(result.RefreshToken);                     
        
        redisClient.del(uid,(err,replay)=>{
            if(err)
            {
              return next(new httpErrors.Unauthorized());
            }
        });
        
        res.json({
                  'status':200,
                  'msg':'user logged out successfully'
                });
        return;
    }
,

//  Refresh-Token Middleware (User/Admin) 
    Refresh_Token:async(req,res,next)=>
  {
    
    const result = await AuthValidations.Refresh_Token.validateAsync(req.body);
              
    const uid   = await jwtToken.VerifyRefreshToken(result.RefreshToken);                     
    
    const data =  {
                    _id:uid.aud ,
                    username :uid.username,
                    email:uid.email
                  };


    const AccessToken  = await jwtToken.SignAccessToken(data); 
    const RefreshToken = await jwtToken.SignRefreshToken(data); 
      
    res.send({ AccessToken , RefreshToken });
    
    return ;

    }
,

//  Admin Forgot Password Middleware
    Admin_Forgot_Password:async(req,res,next)=>{


    const result = await AuthValidations.ForgotPass.validateAsync(req.body);  

    const doesEmailExist = await AdminModel.findOne({email:result.email});
              
    if(!doesEmailExist)
    {
    return next(new httpErrors.Unauthorized(`SORRY WE DID NOT FIND AN ACCOUNT WITH ${result.email} THIS  EMAIL ADDRESS"`));
    }


    otp.startOTPTimer(new Date().getTime());

    const userOTP = otp.generateOTP(result.email, 5);

    const mail = await mailtrap.SendMail(result.email,userOTP );


    res.json({"status":200,"msg":"Check Your Email For The OTP ","email":result.email});


    }
,

//  User Forgot Password Middleware
    User_Forgot_Password:async(req,res,next)=>{


    const result = await AuthValidations.ForgotPass.validateAsync(req.body);  

    const doesEmailExist = await UserModel.findOne({email:result.email});
              
    if(!doesEmailExist)
    {
    return next(new httpErrors.Unauthorized(`SORRY WE DID NOT FIND AN ACCOUNT WITH ${result.email} THIS  EMAIL ADDRESS"`));
    }

   console.log(doesEmailExist);

   // here i am updating status to false
    const updateStatus = await  UserModel.
                       findOneAndUpdate({_id:doesEmailExist._id},
                        {forgetstatus:false
                        });


    otp.startOTPTimer(new Date().getTime());
   
    const now = new Date();

    date.format(now, 'ddd, MMM DD YYYY');   
    
   

//     by default status is false;
// 1st) false   -> send mail

// but if user verified in a time
//     , then we have to update status true .
//     so admin dont need to send mail.
    
    
//     but what if he again forget the password
//     then status is already been true , so for
//     that i do status false at time he request 
//     for forgetpassword.
    



    var timer = setTimer(async function () {
     
      const now1 = new Date();

      date.format(now1, 'ddd, MMM DD YYYY'); 
      
       if(!doesEmailExist.forgetstatus)
        {
          const from ="admin";

         const mail = await mailtrap.
                            SendMail(result.email,333,now1 ,from);

         console.log('...... if status.false ......../////');
       
        }

      console.log("admin mail had been sent");

    }, {
      timeout: 180000,         // Wait 3 min before call.
      limit: 1,              // Call callback 1 time.
      interval: 1000,         // Wait 1 second between calls.
      onClear: function () {  // Call after timer is cleared.
        console.log("Cleared!");
      }
    });



    const userOTP = otp.generateOTP(result.email, 5);
    
    const from ="company";

    const mail = await mailtrap.SendMail(result.email,userOTP,now,from );

    // console.log(mail);
  
    console.log(doesEmailExist.forgetstatus);
 
    res.json({"status":200,"msg":"Check Your Email For The OTP ","email":result.email});


    }
,


//  Admin New Password Middleware 
    Admin_New_Password:async(req,res,next)=>{
        
          
      const uid =req.payload.aud;

      const result = await AuthValidations.NewPass.
                            validateAsync(req.body);

      const HashPass = await UserModel.HashPass(result.newpass);

      if(true)
      {
      
        const UpdatePass = await AdminModel.findOneAndUpdate({_id:uid},{password:HashPass});
        
        console.log(UpdatePass);

      }
      return res.status(200).json({'status':200,'msg':'Your Password Changed SuccessFully.Now You Can Login With New Password'});
      
    }  
,

//  User New Password Middleware
    User_New_Password:async(req,res,next)=>{
     
      
      const uid =req.payload.aud;

      const result = await AuthValidations.NewPass.
                            validateAsync(req.body);

      const HashPass = await UserModel.HashPass(result.newpass);

      if(true)
      {
      
        const UpdatePass = await UserModel.findOneAndUpdate({_id:uid},{password:HashPass});
        
        console.log(UpdatePass);
    
      }
      return res.status(200).json({'status':200,'msg':'Your Password Changed SuccessFully.Now You Can Login With New Password'});
      
    }  
,

//  Admin Verify Otp Middleware 
    Admin_Verify_Otp:async(req,res,next)=>{

    const result    = await AuthValidations.VerifyOtp.validateAsync(req.body);  
   
 
    const Otpresult = otp.validateOTP(result.email, result.otp);
    
    if(Otpresult)
    {
      const UpdateStaus = await AdminModel.findOne({email:result.email});
      const AccessToken  = await jwtToken.SignAccessToken(UpdateStaus); 

      const RefreshToken = await jwtToken.SignRefreshToken(UpdateStaus); 


      return res.json( {'status':200,'msg':'Otp Verified Successfully',AccessToken,RefreshToken});
     
    }else
    {
      return next(new httpErrors.Unauthorized(`The OTP You Entered Is Invalid .Plz Enter The Correct Otp`));
   
    }

  
  
  

    }
    
,

//  User Verify Otp Middleware  // here i am updating forgetstatus
    User_Verify_Otp:async(req,res,next)=>{

    const result    = await AuthValidations.VerifyOtp.validateAsync(req.body);  


    const Otpresult = otp.validateOTP(result.email, result.otp);

    if(Otpresult)
    {
    const UpdateStaus = await UserModel.findOneAndUpdate({email:result.email},{account:'verified',forgetstatus:true},{new:true});
    const AccessToken  = await jwtToken.SignAccessToken(UpdateStaus); 

    const RefreshToken = await jwtToken.SignRefreshToken(UpdateStaus); 


    return res.json( {'status':200,'msg':'Your Account Has Been Verified Successfully',AccessToken,RefreshToken});

    }else
    {
    return next(new httpErrors.Unauthorized(`The OTP You Entered Is Invalid .Plz Enter The Correct Otp`));

    }





    }    
    
}




















