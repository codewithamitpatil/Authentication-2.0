
const rateLimit  = require("express-rate-limit");

const limiter = rateLimit({
  //   windowMs: 15 * 60 * 1000, // 15 minutes
  //   max: 1000 // limit each IP to 100 requests per windowMs
  //

  windowMs: 60 * 60 * 1000, // 1 hour window
  max: 1000, // start blocking after 5 requests
  message:
    "Too many accounts created from this IP, please try again after an hour"


});
console.log(limiter);
module.exports =limiter;
