const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    email : String,
    password: String,
    username: String,
    age : Number,
    picture : String,
    location : String,
})
const UserDatabase = mongoose.model("User", UserSchema)
module.exports = UserDatabase;