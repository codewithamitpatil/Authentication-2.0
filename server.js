
const express     = require('express');
const bodyParser  = require('body-parser');
const cors        = require('cors');
const HttpErrors  = require('http-errors');
const path        = require('path');
const multer      = require('multer');
const morgan      = require('morgan');
const helmet      = require('helmet');

// env file
require('dotenv').config();


// includes
const errorHandler = require('./error/errorHandler');
const mongodb      = require('./config/init_mongodb');
const AuthGard     = require('./helpers/jwt.helpers');
const asyncHandler = require('./middlewares/async.middleware');
const rateLimit    = require('./middlewares/ratelimiter.middleware');

// require routes 
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');


// jul 13 2022 to just check mail template
const temp  = require('./middlewares/otptemp.middleware'); 
const date = require('date-and-time');



const PORT = process.env.PORT || 3000;

const app = express();

const upload = multer();

//  ratelimit to block ip
    app.use(rateLimit);

//  request  log (morgan)
    app.use(morgan('dev'));

//  cors mechanism
    app.use('*',cors());

//  helmet for protecting xss attack    
    app.use(helmet());    

//  json parsing
    app.use(bodyParser.json());

//  urlencoded data parsing
    app.use(bodyParser.urlencoded({extended:true}));

// formdata / multipart data parsing
//app.use(upload.array());

  app.use(express.static('public'));

  // home route

  app.get('',async(req,res,next)=>{

   const products = [
        {
            id:1,
            title:'Shoe 11',
            pic:'http://localhost:5000/images/shoe-1.png',
            price:4000,
            discount:300,

        },
        {
            id:2,
            title:'Shoe 22',
            pic:'http://localhost:5000/images/shoe-2.png',
            price:2000,
            discount:100,

        },
        {
            id:3,
            title:'Shoe 33',
            pic:'http://localhost:5000/images/shoe-3.png',
            price:2400,
            discount:500,

        },
        {
            id:4,
            title:'Shoe 44',
            pic:'http://localhost:5000/images/shoe-4.png',
            price:6000,
            discount:700,

        },
        {
            id:5,
            title:'Shoe 55',
            pic:'http://localhost:5000/images/shoe-5.png',
            price:5000,
            discount:900,

        },
        {
            id:6,
            title:'Shoe 11',
            pic:'http://localhost:5000/images/shoe-1.png',
            price:4000,
            discount:300,

        },
        {
            id:7,
            title:'Shoe 22',
            pic:'http://localhost:5000/images/shoe-2.png',
            price:2000,
            discount:100,

        },
        {
            id:8,
            title:'Shoe 33',
            pic:'http://localhost:5000/images/shoe-3.png',
            price:2400,
            discount:500,

        }
        ,
        {
            id:9,
            title:'Shoe 33',
            pic:'http://localhost:5000/images/shoe-4.png',
            price:2400,
            discount:500,

        }
   ];


        res.json(products);
  });

//  demo route
    app.get('/home',AuthGard.VerifyAccessToken,
               asyncHandler(async(req,res,next)=>{
 
       res.send('welcome home');
       return;
   



    }));

//  use routes
    app.use("/Auth",authRoutes);
    app.use("/User",userRoutes);


// on jul 13 
   app.get('/temp',async(req,res,next)=>{

    const now = new Date();

    date.format(now, 'ddd, MMM DD YYYY');   

    const curtime = now;
    const from ='admin';
    const te = await temp.OtpFormat(111,curtime,from);
    res.send(te);

   }); 



//  404 page handler
    app.all('*',async(req,res,next)=>{
        next(new HttpErrors.NotFound('Requested page was not found'));
    });


// global error handler
   app.use(errorHandler.ErrorResponse);

// listen server
   const server = app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
   });

// Handle unhandled promise rejections
   process.on('unhandledRejection', (err, promise) => {
        
        console.log(`unhandledRejection Error: ${err.message}`);
        // Close server & exit process
       // server.close(() => process.exit(1));

   });

