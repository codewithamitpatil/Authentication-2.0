
module.exports =
{

 ErrorResponse:async(err,req,res,next)=>{



    if(err.isJoi)
    {
        err.status = 400;
    }


    if(err.name == 'CastError')
    {
         err.status = 400;
    }
   
    if(err.message =='ERROR is not defined')
    {
        err.status = 500;
        err.message = 'Internal Server Error .Plz Try Later'
    }
    console.log({ 
                  "error_name" : err.name ,
                  "error_status" : err.status,
                  "error_msg":err.message
                  
                });

    res.status(err.status).json({
        'status':err.status,
        'msg':err.message
    })

 }



}
