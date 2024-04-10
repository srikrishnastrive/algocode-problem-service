// routes/v1/problems.routes.js
const express = require('express');
const  {problemController}  = require('../../controllers');

const problemRouter = express.Router();

// problemRouter.get('/:id', problemController.getProblem);
// problemRouter.get('/', problemController.getProblems);
// problemRouter.post('/', problemController.addProblem);
// problemRouter.delete('/:id', problemController.deleteProblem);
// problemRouter.put('/:id', problemController.updateProblem);

problemRouter.get('/get', problemController.getProblems); // Unique pattern for getProblems
problemRouter.get('/:id', problemController.getProblem); // Unique pattern for getProblem
problemRouter.post('/add', problemController.addProblem);
problemRouter.delete('/:id', problemController.deleteProblem,);
problemRouter.put('/:id', problemController.updateProblem);

//if any requests comesand route continues with /ping, we map it to pingProblemController

problemRouter.get('/ping',problemController.pingProblemController);

module.exports = problemRouter;
