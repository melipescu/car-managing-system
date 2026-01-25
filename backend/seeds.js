const mongoose = require('mongoose');
const Car = require('./car');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/parcAuto');
    console.log("MONGO CONNECTION OPEN")
}

const seedCars = [{
    name: 'Opel Vivaro',
    plateNumber: 'IF88ROW',
    sasiu: 'UFG2456AF234544HHGI',
    category: 'leasing',
    leasingFile: '251153',
    leasingStart: '12.12.2023',
    leasingFinish: '11.12.2025',
    rcaExpire: '15.12.2025',
    cascoExpire: '24.01.2026',
    rovinietaExpire: '22.11.2026',
    itpExpire: '01.01.2026'
},
{
    name: 'Kia Ceed',
    plateNumber: 'IF13ROW',
    sasiu: 'ABG2456AF231234HHGI',
    category: 'nonleasing',
    rcaExpire: '17.12.2025',
    cascoExpire: '24.04.2026',
    rovinietaExpire: '25.11.2026',
    itpExpire: '01.11.2026'
},
{
    name: 'Volkswagon',
    plateNumber: 'IF44ROW',
    sasiu: 'VRTG2450AF234544HHGI',
    category: 'nonleasing',
    rcaExpire: '15.12.2025',
    cascoExpire: '24.01.2026',
    rovinietaExpire: '22.11.2026',
    itpExpire: '01.01.2026'
}]

Car.insertMany(seedCars)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })
