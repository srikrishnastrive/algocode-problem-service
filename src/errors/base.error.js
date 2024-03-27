class BaseError extends Error{
    constructor(name,statusCode,description,details){
        super(description);
        this.name = name;
        this.statusCode = statusCode;
        this.details = details;

        //Error.captureStackTrace(this);
    
     
        //  This line captures the current stack trace and assigns it to the stack property of the error object (this).
        //   The stack trace represents the call stack at the point where Error.captureStackTrace() was called. 
        //   This can be helpful for debugging
        // , as it provides information about the sequence of nested function calls that led to the current point of execution.
    }
   
}

module.exports = BaseError;