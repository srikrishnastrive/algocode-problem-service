// api.routes.js
const express = require('express');
const v1Router = require('./v1/index');

const apiRouter = express.Router();

//If any request comes and route starts with /v1,we map to v1Router

apiRouter.use('/v1', v1Router); 





module.exports = apiRouter;
