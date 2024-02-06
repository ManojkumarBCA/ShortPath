const express = require("express")
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const route = require('./routes/route')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/ShortPath",
    { useNewUrlParser: true })

    .then(() => {
        console.log("MongoDb connected")
    }).catch((err) => {
        console.log(err.message)
    });

app.use('/', route);




app.listen(process.env.Port || 3000, function () {
    console.log('App running on port ' + (process.env.PORT || 3000))
});

