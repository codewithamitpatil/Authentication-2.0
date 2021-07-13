


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




