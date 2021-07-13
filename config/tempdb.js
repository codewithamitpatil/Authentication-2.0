
// for mongodb connection

const mongoose   = require('mongoose');

const db ='mongodb+srv://amit_1:Amit123@authentication.qq25p.mongodb.net/auth?retryWrites=true&w=majority';



const connection = mongoose.connect(process.env.MONGO_URL,{
                   dbName:process.env.MONGO_DB,
                   useCreateIndex:true,
                   useFindAndModify:false,
                   useNewUrlParser:true,
                   useUnifiedTopology:true
                      
}).then(()=>{
             console.log('mongodb connected successfully');
}).catch((err)=>{
             console.log(err.message);
});

mongoose.connection.on('connected',()=>{
     console.log('mongo connected');
});

mongoose.connection.on('error',(err)=>{
     console.log(err);
});

mongoose.connection.on('disconnected',()=>{
     console.log('mongo disconnected');
});

process.on('SIGINT',()=>{
   mongoose.connection.close();
   process.exit(0);
});











