
const express = require('express');
const problemRouter = require('./problems.routes');

const v1Router = express.Router();

//If any request comes and route starts with /problems,we map to problemRouter


v1Router.use('/problems', problemRouter);

module.exports = v1Router;
