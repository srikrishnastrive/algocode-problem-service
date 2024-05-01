//const logger = require("../config/logger.config");
const NotFound = require("../errors/notfound.error");
const { Problem } = require("../models");


class ProblemRepository {
    async createProblem(problemData){
        try {
          
            const problem = await Problem.create({
                title: problemData.title,
                description : problemData.description,
                difficulty : problemData.difficulty,
                testCases : (problemData.testCases) ? problemData.testCases : [],
                editorial : problemData.editorial,
            });
            return problem;
        }
        catch(error){
          
            throw error;
        }
    }

    async getAllProblems(){
       const problems = await Problem.find({});
       return problems;  
       
    }

    async getProblem(id){
        try {
            
            const problem = await Problem.findById(id);
            if(!problem){
                throw new NotFound("Problem",id)
            }
            return problem;
            
        } catch (error) {
        
            throw error;
        }
    }

    async deleteProblem(id){
        try {
            const problem = await Problem.findByIdAndDelete(id);
            if(!problem){
                //logger.error(`Problem with id  ${id} not found in db`);
                throw new NotFound("problem",id);
            }
            return problem;

        }
        catch(error){
             
            throw error;

        }
    }

    

}

module.exports = ProblemRepository;