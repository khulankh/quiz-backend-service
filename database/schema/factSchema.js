const mongoose = require('mongoose');
const factSchema = new mongoose.Schema({
    title: String,
    fact: String,
    userId: String,
    date: { type: Date, default: Date.now() },
    likes: Array,
    dislikes: Array,
})
const FactDatabase = mongoose.model("Fact", factSchema)
module.exports = FactDatabase