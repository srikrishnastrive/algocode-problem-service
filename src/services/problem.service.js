const { Problem } = require("../models");
const sanitizedMarkdownContent = require("../utils/markdownSanitizer");


class problemService {

    constructor(problemRepository){
        this.problemRepository = problemRepository
    }

    async createProblem(problemData){
        //1.santize the problem description
        try {
            problemData.description = sanitizedMarkdownContent(problemData.description);
          
            const problem = await this.problemRepository.createProblem(problemData);
       

            return problem;

        }
        catch(error){
           
            throw error;
        }
         
    }

    async getAllProblems(){
        try{
            //const problems = await (new ProblemRepostitory()).getAllProblems //instead of constructor
            const problems = await this.problemRepository.getAllProblems();
            return problems;
        }
        catch(error){
        
            throw error;

        }
    }

   async getProblem(problemId){
       
        const problem = await this.problemRepository.getProblem(problemId);
        return problem;
   }

   async deleteProblem(problemId){
        
        const problem = await this.problemRepository.deleteProblem(problemId);
        return problem;
   }
}

module.exports = problemService