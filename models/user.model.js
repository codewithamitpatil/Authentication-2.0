
   const mongoose    = require('mongoose');
   const bcrypt      = require('bcrypt');
   const httpErrors  = require('http-errors');

// User Schema
   const UserSchema = mongoose.Schema({

    username :  {
                type:String,
                required:true,
                unique:true
                },
    email    :  {
                type:String,
                required:true,
                unique:true
                },
    password :  {
                type:String,
                required:true
                },
     account :  {
                 type:String,
                 required:false,
                 default:'notverified'
                } ,
     forgetstatus:{
               type: Boolean,
               default: false,
               required:false
     }                     

   });

// for password hashing
   UserSchema.pre('save',async function(next){
  
      const salt       =  await bcrypt.genSalt(10);
      const hashpass   =  await bcrypt.hash(this.password,salt);
      this.password    =  hashpass ;   
     
      return next();

   });


// For Hashing New Password    
   UserSchema.statics.HashPass = async function(pass) {
      
       const salt       =  await bcrypt.genSalt(10);
       const hashpass   =  await bcrypt.hash(pass,salt);
       
       return hashpass;

   }


// Authentication Check Middleware (Authcheck)
   UserSchema.statics.Authentication = async function(data) {

      const { username , password } = data;

      const user = await this.findOne({

      $or:[ 
         {username:username}, {email:username} 
         ]    

      });

      const verifyCheck =await this.findOne({

      username:username, account :'verified'    

      });

      if(!user)
      {
         throw new httpErrors.Unauthorized('Invalid Username or Password'); 
         return;
      }

      const passcheck = await bcrypt.compare(password,user.password);

      if(!passcheck)
      {
         throw new httpErrors.Unauthorized('Invalid Username or Password'); 
         return; 
      }

      if(!verifyCheck)
      {
         throw new httpErrors.BadRequest('Your Account is not verified'); 
         return; 
      }


      return user;


   }

// Old Passwrd Check 
   UserSchema.statics.OldPassWordCheck = async function(data) {
    
    const user = await this.findOne({ _id:data.id });
      
    const passcheck = await bcrypt.compare(data.password,user.password);
  
    if(!passcheck)
    {
        throw new httpErrors.BadRequest('password doesnot match with old password'); 
         return;
    }
    
    const salt      =  await bcrypt.genSalt(10);
    const hashpass  =  await bcrypt.hash(data.newpassword,salt);
 
    return hashpass;

   }

// User Model (Collection)
   const User = mongoose.model('User',UserSchema);

// Export Module
   module.exports = User;
