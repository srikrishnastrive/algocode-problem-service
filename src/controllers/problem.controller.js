

function pingProblemController(req, res) {
    console.log("in ping controller");
    return res.json({ message: 'Ping Controller' });
}

function addProblem (req,res){
    return res.status(501).json({
        message:"Not Implemneted"
    })
}

function getProblems (req,res){
    return res.status(501).json({
        message:"Not Implemneted"
    })

}

function getProblem (req,res){

    return res.status(501).json({
        message:"Not Implemneted"
    })
}



function deleteProblem(req,res){
    return res.status(501).json({
        message:"Not Implemneted"
    })

}

function updateProblem (req,res){
    return res.status(501).json({
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