

function pingProblemController(req, res) {
    console.log("in ping controller");
    return res.json({ message: 'Ping Controller' });
}

function addProblem (req,res){
    return res.json({ message: 'add Controller' });
}

function getProblems (req,res){

}

function getProblem (req,res){

}



function deleteProblem(req,res){

}

function updateProblem (req,res){

}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
}