
   const mongoose    = require('mongoose');
   const bcrypt      = require('bcrypt');
   const httpErrors  = require('http-errors');

// Admin Schema
   const AdminSchema = mongoose.Schema({

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
                }

   });

// for password hashing
   AdminSchema.pre('save',async function(next){
  
  const salt      = await bcrypt.genSalt(10);
  const hashpass  = await bcrypt.hash(this.password,salt);
  this.password   = hashpass ;   
  return next();

   });

// Authentication Check Middleware (Authcheck)
AdminSchema.statics.Authentication = async function(data) {
    
     const { username , password } = data;
     
     const user = await this.findOne({
        $or:[ 
          {username:username}, {email:username} 
           ]     
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
     
    return user;

   
   }

// Old Passwrd Check 
AdminSchema.statics.OldPassWordCheck = async function(data) {
    

    console.log(data);
    const user = await this.findOne({ _id:data.id });
 
     
    const passcheck = await bcrypt.compare(data.password,user.password);
  
    if(!passcheck)
    {
        throw new httpErrors.BadRequest('password doesnot match with old password'); 
         return;
    }
    
    const salt      = await bcrypt.genSalt(10);
    const hashpass  = await bcrypt.hash(data.newpassword,salt);
 

    return hashpass;


   }

// Admin Model (Collection)
   const Admin = mongoose.model('admin', AdminSchema);

// Export Module
   module.exports =Admin;
