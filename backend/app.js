const express = require('express');
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/test');
}

// *another way of connecting to mongodb
// mongoose.connect('mongodb://localhost:27017/test')
//     .then(() => {
//         console.log("CONNECTION OPEN!!!")
//     })
//     .catch(err => {
//         console.log("OH NO, ERROR!!!")
//         console.log(err)
//     })

const carSchema = new mongoose.Schema({
    numarInmatriculare: String,//date - is string ok?, is property name ok as camelCase?
    sasiu: Number,//numbers and letters
    leasingFile: Number,
    leasingStart: String,
    leasingFinish: String,
    rca: String,
    casco: String,
    itp: String,
    rovinieta: String,

});

const app = express();

app.get('/', function (req, res) {
    res.send("Hello world!")
});

app.listen(3000, function () {
    console.log("Server is listening on port 3000...");
});