const {StatusCodes} = require('http-status-codes');
const NotImplemented = require('../errors/notImplemented.error')

function pingProblemController(req, res) {
    console.log("in ping controller");
    return res.json({ message: 'Ping Controller' });
}


//it will push to the last middleware 
function addProblem (req,res,next){
   try{
        throw NotImplemented("addProblem")
   }
   catch(error){
        next(error);
        //next middle ware is error handle in the index.js
        
   }
}

function getProblems (req,res){
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message:"Not Implemneted"
    })

}

function getProblem (req,res){

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message:"Not Implemneted"
    })
}



function deleteProblem(req,res){
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message:"Not Implemneted"
    })

}

function updateProblem (req,res){
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message:"Not Implemneted"
    })
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
}