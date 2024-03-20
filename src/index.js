const express = require('express');
const bodyparser = require('body-parser');

const {PORT} = require('./config/server.config');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.text());
app.use(bodyparser.urlencoded({extended:true}));

app.listen(PORT, () =>{
    console.log(`Server started at PORT : ${PORT}`);
})


app.get('/home',(req,res) => {
    return res.json({msg:"hi you are at home"})
})