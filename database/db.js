const mongoose = require('mongoose');

const uri = 'mongodb+srv://khulankh:%40Pi46895@cluster0.tt8nuyt.mongodb.net/'
// try catch ashiglana
// try deer await mongooseiin connect(url)
// ajillaj bwl database holbogdlo gene
// catch nuhtsuld err 
//console.log(message)
// console.log(ERROR)
const connect = async () => {
    try {
        await mongoose.connect(uri)
        console.log("Database was connected")
    } catch (err) {
        console.log('Error')
        console.log(err)
    }
};
module.exports = connect