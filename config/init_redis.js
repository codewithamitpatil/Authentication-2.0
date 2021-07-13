
const redis = require('redis');

const client = redis.createClient({
  port:17140,
  auth_pass:'61JlUUpoNN3t7m5KI7XhrSSmRaXVPmEE',
  host:'redis-17140.c245.us-east-1-3.ec2.cloud.redislabs.com'
});

client.on('connect',async()=>{
  console.log('redis connected');
});

client.on('error',async(err)=>{
  console.log(err.message);
});

client.on('end',async()=>{
  console.log('redis end');
});

process.on('SIGINT',()=>{
   client.quit();
   process.exit(0);
});

module.exports = client;



