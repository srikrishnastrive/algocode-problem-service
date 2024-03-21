// api.routes.js
const express = require('express');
const v1Router = require('./v1/index');

const apiRouter = express.Router();

apiRouter.use('/v1', v1Router,apiRouter.get('/v1Rout',function (req,res){
    return res.json({message:"we are at v1 Route"});
})); 





module.exports = apiRouter;
