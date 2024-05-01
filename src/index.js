
const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./routes');
const errorHandler = require('./utils/errorHandler');
const connectToDB = require('./config/db.config');
const { PORT } = require('./config/server.config');
const logger = require('./config/logger.config');



const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

//If any request comes and route starts with /api,we map to api router
app.use('/api', apiRouter);

app.get('/ping', (req, res) => {
    // logger.error("ping error logs for ping controller",)
    logger.error("ping error logs for ping controller");
    return res.status(200).json({message: 'Problem Service is alive'});
});


//last middleware if any error comes 
//we are registering the last middleware after regstering all the middlewares
app.use(errorHandler)

app.listen(PORT, async () => {
    console.log(`Server started at PORT : ${PORT}`);
    await connectToDB();
    console.log("connected to server successfully")
   
        
    
});

app.get('/home', (req, res) => {
    return res.json({ msg: "hi you are at home" });
});
