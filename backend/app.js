const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// main().catch(err => console.log(err));

// async function main() {
//     await mongoose.connect('mongodb://127.0.0.1:27017/test');
// }

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO, MONGO CONNECTION ERROR!!!")
        console.log(err)
    })

app.get('/car', (req, res) => {
    res.send('Brrrruumm!')
})

//or 
// *another way of connecting to mongodb
// mongoose.connect('mongodb://localhost:27017/test')
//     .then(() => {
//         console.log("CONNECTION OPEN!!!")
//     })
//     .catch(err => {
//         console.log("OH NO, ERROR!!!")
//         console.log(err)
//     })

// const carSchema = new mongoose.Schema({
//     carName: String,
//     numarInmatriculare: String,//date - is string ok?, is property name ok as camelCase?
//     sasiu: Number,//numbers and letters
//     leasingFile: Number,
//     leasingStart: String,
//     leasingFinish: String,
//     rca: String,
//     casco: String,
//     itp: String,
//     rovinieta: String,
// });

// const Car = mongoose.model('Car', carSchema);

// const hyundai = new Car({ carName: 'HyundaiI30' });
// console.log(hyundai.carName);

// module.exports = mongoose.model('Car', CarSchema);


// app.get('/', function (req, res) {
//     res.send("Hello world!")
// });

app.listen(3000, function () {
    console.log("Server is listening on port 3000...");
});