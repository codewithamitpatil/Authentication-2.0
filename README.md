


<br />
<p align="center">
  <a href="hhttps://amitfoundation.herokuapp.com/">
    <img src="brand.png" alt="Logo" width="280" height="180">
  </a>

  <h1 align="center">Authentication Apis 2.0</h1>

  <p align="center">
    Developed By : Amit Gujar Patil
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
    <br />

  </p>
</p>



## Steps to check the changes

This is an example of how you can check the changes from previous version .
what new things are added.


### Here we go

1. First create an new user here , by making a post request . Put your testing email in request body 
  

    >Post Request Endpoint
     ```sh
     https://codewithamitauth.herokuapp.com/Auth/user-signup
     ```

   
     >Request Body


       {
          "username":"amitpatil",
          "email":"amitwebdev2019@gmail.com",
          "password":"amit1234"
       }

      
      
     >Response Body


       {
          "status": 200,
          "msg": "Your Account created successfully.Please Verify Email To Activate your acount ",
          "email": "amitwebdev2019@gmail.com"
       }
   
   
   
   <br/><br/>

2. Check your enterd email you got an email from amit patil . The email consists of a otp . took that otp and send to the following endpoint
      >Post Request Endpoint
   ```sh
   https://codewithamitauth.herokuapp.com/Auth/user-verify-otp
   ```


   >Request Body


       {
        
          "email":"amitwebdev2019@gmail.com",
           "otp":"6577"
       }



    >Response Body

        {
          "status":        200,
          "msg":           "Your Account Has Been Verified Successfully",
          "AccessToken":   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFtaXRwYXRpbCIs   
                           MzRjMyIsImlzcyI6ImFtaXQgcGF0aWwifQ.entoFTODr
                           hJXKVmV87lKzXFi1-plKlRf828I7IQuqew",
          "RefreshToken":  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybhMDAxNTUyMzRjMyIsImlzcyI6Im
                           FtaXQgcGF0aWwifQ.Kjk6ZEjrn3xSy9UCpF2HMbT1JQUfvgBnYR_FS7ZtGow"
          }

   
   
   
3. Now Your account is successfully created . but what if you forget the password then you make the post request here 
      >Post Request Endpoint
     ```sh
     https://codewithamitauth.herokuapp.com/Auth/user-forgot-password
     ```


   >Request Body


       {
        
          "email":"amitwebdev2019@gmail.com"
       }



   >Response Body

        {
          "status": 200,
          "msg": "Check Your Email For The OTP ",
          "email": "amitwebdev2019@gmail.com"
        }

  > What will be here done ?
  ```sh   
     
     1. First it will send you email from company wich consist of a otp .
        the otp is valid for 5 min .
        if you would not verify it within the time 
        it will expires.
        
        if you after 15 min still not verify your forget password ,
        then admin will send you an email 
     
  ```
   
   #Examples
   
  ![Screenshot from 2021-07-14 01-42-10](https://user-images.githubusercontent.com/62344675/125518671-f9d085e1-ee74-441f-a69d-8d90df4c59cc.png)

  ![Screenshot from 2021-07-14 01-42-27](https://user-images.githubusercontent.com/62344675/125518673-fbe98001-7f00-44cb-bb5e-86fcd506a7b3.png)


   
   
4. To verify otp follow step 2 .   

<br/><br/>

### Where i done changes and what i do in version 2.0 ?

 > controllers / auth.controller.js
 
    ```
         add two new modules
    
       1. const setTimer = require('set-timer'); // to set timer for 3 min .
       2. const date     = require('date-and-time');
     
     
      
    //  User Forgot Password Middleware
        User_Forgot_Password:async(req,res,next)=>{


    const result = await AuthValidations.ForgotPass.validateAsync(req.body);  

    const doesEmailExist = await UserModel.findOne({email:result.email});
              
    if(!doesEmailExist)
    {
    return next(new httpErrors.Unauthorized(`SORRY WE DID NOT FIND AN ACCOUNT WITH ${result.email} THIS  EMAIL ADDRESS"`));
    }


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


    // here i have set timer which automatically itself after 3 min . 
       
        now first he check what is the forgetstatus ( by default is false also i update it to false when this route has been called )
        
        in this function i just check the status . if it is false then admin will send the email otherwise not

    var timer = setTimer(async function () {
     
       const now1 = new Date();

       date.format(now1, 'ddd, MMM DD YYYY'); 
      
       if(!doesEmailExist.forgetstatus)
          {

           const from = "admin";

           const mail = await mailtrap.SendMail(result.email,333,now1 ,from);

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

   
    // here company send the regular otp first time

    const userOTP = otp.generateOTP(result.email, 5);
    
    const from ="company";

    const mail = await mailtrap.SendMail(result.email,userOTP,now,from );

    // console.log(mail);
  
    console.log(doesEmailExist.forgetstatus);
 
    res.json({"status":200,"msg":"Check Your Email For The OTP ","email":result.email});


    }
  
     
    ```
