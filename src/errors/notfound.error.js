const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");


class NotFound extends BaseError{
    constructor(resourceName,resourceValue){
        super("Not Found",StatusCodes.NOT_FOUND,`The requested resourcve ${resourceName}  with value ${resourceValue} not found.`,{
            resourceName,
            resourceValue
        });
    }
}

module.exports = NotFound;