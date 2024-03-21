// server.js
const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./routes');
const { PORT } = require('./config/server.config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.listen(PORT, () => {
    console.log(`Server started at PORT : ${PORT}`);
});

app.get('/home', (req, res) => {
    return res.json({ msg: "hi you are at home" });
});
