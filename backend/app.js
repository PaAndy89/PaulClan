
const express = require('express');
const cors = require('cors');
const app = express();

const path = require('path');
//const process = require('./nodemon.json');
require('colors')


//**************************************************************-because access problems from clients from other servers.-**************************************************************
var corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
};

app.use(cors(corsOptions))

//**************************************************************-listen to the body of a request.-**************************************************************
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/uploads");
    },
    filename: function (req, file, cb) {
        const name = file.originalname.toLocaleLowerCase().split(' ').join('-');
        cb(null, name);
    }
});

// app.use({ storage: storage })

//**************************************************************-make paths accessable.-**************************************************************
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public', 'View')));
app.use("/files", express.static(path.join(__dirname,'public', 'files')));

//**************************************************************-display incoming requests in the console.-**************************************************************
const morgan = require('morgan');
app.use(morgan('combined'))

//**************************************************************-Connection to database.-**************************************************************

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/PaulClan', { useNewUrlParser: true })
    .then(() => {
        console.log("MongoDB connected".green)
    })
    .catch(() => {
        console.log("MongoDB connection failed!!".red)
    });

//**************************************************************-Routing.-**************************************************************

const api = require('./routes/api');

app.use('/api', api)


app.listen(81);
app.use("*/*", function (req, res, next) {
    res.sendFile(path.join(__dirname, 'public', 'view', 'index.html'));
});

//*********************************************************-Error handling after it passed all possible options.-*********************************************************

app.use((error, req, res, next) => {
    console.log("____________________________________________________________________________________________________".blue)
    console.log("____________________________________________________________________________________________________".blue)
    console.log("System Error:".red)
    console.log("request:".bgRed)
    console.log("body"), console.log(req.body)
    console.log("params"), console.log(req.params)
    console.log("query"), console.log(req.query)
    console.log("____________________________________________________________________________________________________".blue)
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;
