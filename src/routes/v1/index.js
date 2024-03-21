
const express = require('express');
const problemRouter = require('./problems.routes');

const v1Router = express.Router();

v1Router.use('/problems', problemRouter,v1Router.get('/problemRout',function (req,res){
    return res.json({message:"we are at probelm Route"});
}));

module.exports = v1Router;
