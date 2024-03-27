const BaseError = require('../errors/base.error');
const {StatusCodes} = require('http-status-codes');

//error handling middleware
//default error handler at the express
function errorHandler(err,req,res,next){
    if(err instanceof BaseError){
        return res.status(err.statusCode).json({
            success:false,
            message:err.name,
            error:err.details,
            data:{}
        });

    }
    //something has happend with unknown error we are throwing internal server error
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success:false,
        message:'Something went wrong',
        error:err,
        data : {} //data this is an exception so no data is going to be provided
    })
}

module.exports = errorHandler;