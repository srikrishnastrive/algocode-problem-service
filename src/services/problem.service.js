const sanitizedMarkdownContent = require("../utils/markdownSanitizer");


class problemService {

    constructor(problemRepository){
        this.problemRepository = problemRepository
    }

    async createProblem(problemData){
        //1.santize the problem description
        try {
            problemData.description = sanitizedMarkdownContent(problemData.description);
            console.log("Problem data",problemData)
            const problem = await this.problemRepository.createProblem(problemData);
            console.log("problem Created",problem);

            return problem;

        }
        catch(error){
            console.log(error)
            throw error;
        }
        


         
    }
}

module.exports = problemService