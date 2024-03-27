const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");


class NotImplemented extends BaseError{
    constructor(methodName){
        super("NotImplemeted",StatusCodes.NOT_IMPLEMENTED,`${methodName} not Implemented`,{})
    }
}

module.exports = NotImplemented