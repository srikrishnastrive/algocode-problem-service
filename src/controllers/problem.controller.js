const NotImplemented = require('../errors/notImplemented.error')
const {ProblemService} = require('../services')
const {ProblemRepository} = require('../repositories');
const { StatusCodes } = require('http-status-codes');


const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req, res) {
    console.log("in ping controller");
    return res.json({ message: 'Ping Controller' });
}


//it will push to the last middleware 
async function addProblem (req,res,next){
   try{
       // throw NotImplemented("addProblem")
       console.log("Incoming request body",req.body)
       const newProblem = await problemService.createProblem(req.body);
       return res.status(StatusCodes.CREATED).json({
          success:true,
          message: 'Successfully created a new problem',
          error:{},
          data: newProblem
       })

   }
   catch(error){
        next(error);
        //next middle ware is error handle in the index.js
        
   }
}

async function getProblems (req,res,next){
    try{
     //    throw NotImplemented("get Problems")
     const response = await problemService.getAllProblems();
     return res.status(StatusCodes.OK).json({
          success:true,
          message:"Successfully fetched all the problems",
          error : {},
          data:response
     })
   }
   catch(error){
        next(error);
        //next middle ware is error handle in the index.js
        
   }

}

async function getProblem (req,res,next){
     try{
          console.log(req.params.id)
          const response = await problemService.getProblem(req.params.id);
          return res.status(StatusCodes.OK).json({
               success:true,
               message:"Successfully fetched  the problem",
               error : {},
               data:response
          })
     }
     catch(error){
          next(error);   
     }
}



async function deleteProblem(req,res,next){
    try{
        const response = await problemService.deleteProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
          success:true,
          message:"Successfully deleted  the problem",
          error : {},
          data:{}
     })
   }
   catch(error){
    
     next(error);
        
   }

}

function updateProblem (req,res,next){
    try{
        throw NotImplemented("delete Problem")
   }
   catch(error){
        next(error);
        //next middle ware is error handle in the index.js
        
   }
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
}