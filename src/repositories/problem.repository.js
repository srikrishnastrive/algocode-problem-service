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
            console.log(error);
            throw error;
        }
    }

    async getAllProblems(){
       const problems = await Problem.find({});
       return problems;  
       
    }

    async getProblem(id){
        try {
            console.log(id);
            const problem = await Problem.findById(id);
            if(!problem){
                throw new NotFound("Problem",id)
            }
            return problem;
            
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    

}

module.exports = ProblemRepository;