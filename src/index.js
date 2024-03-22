
const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./routes');
const { PORT } = require('./config/server.config');
const BaseError = require('./errors/base.error');
const errorHandler = require('./utils/errorHandler');



const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

//If any request comes and route starts with /api,we map to api router
app.use('/api', apiRouter);


//last middleware if any error comes
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server started at PORT : ${PORT}`);
    // throw new BaseError("some error",404,"something went wrong"); // application break
    // try {
    //     //1.i opened a db connection
    //     //2.Queried on db, but a wrong syntax query
    //     //3.Exception will be thrown
    //     //console.log("at try block")
    //     //throw new BaseError("some error",404,"something went wrong");
        
    // }
    // catch(e){
    //     //log's the error
    //     console.log("something went wrong",e.name,e.stack);

    // }
    // finally{
    //     //finally always executed whenever it is thrwo error or not 
    //     //finally watch with the catch
    //     console.log("exectued finally");
    // }
});

app.get('/home', (req, res) => {
    return res.json({ msg: "hi you are at home" });
});
