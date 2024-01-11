const FactDatabase = require('../database/schema/factSchema')

const createFact = async (req, res) => {
    const body = req.body;
    try {
        const fact = await FactDatabase.create(body);
        res.status(200).send(fact._id);
    } catch (err) {
        res.status(500).send('Internal Error')
    }
}
const getFacts = async (req, res) => {
    try {
        const fact = await FactDatabase.find({})
        res.status(200).send(fact)
    } catch (err) {
        console.log(err)
    }
};
const getUserFacts = async (req, res) => {
    const userId = req.params.userId
    try {
        const fact = await FactDatabase.find({ userId: userId })
        res.status(200).send(fact)
    } catch (err) {
        console.log(err)
    }
}
const deleteFact = async (req, res) => {
    const factId = req.params.factId
    try {
        const result = await FactDatabase.findByIdAndDelete(factId)
        console.log(result)
        res.status(200).send(`${result._id} successfully deleted`)
    } catch (err) {
        console.log(err)
    }
}
const updateFact = async (req, res) => {
    const factId = req.params.factId
    const body = req.body
    try {
        const updatedFact = await FactDatabase.findByIdAndUpdate(factId, {
            title: body.title,
            fact: body.fact
        }, { new: true })

        res.status(200).send(updatedFact)
    } catch (err) {
        res.status(500).send(err)
    }
}
const addLikes = async (req, res) => {
    const factId = req.params.factId
    const userId = req.params.userId
    console.log(userId)
    try {
        const fact = await FactDatabase.findById(factId)
        const updatedDislikes = fact.dislikes.filter((id) => id !== userId)
        const isUserAlreadyLiked = fact.likes.includes(userId)
        const updatedLikes = isUserAlreadyLiked ? fact.likes : [...fact.likes, userId]
        const updatedFact = await FactDatabase.findByIdAndUpdate(factId, {
            dislikes: updatedDislikes,
            likes: updatedLikes
        }, { new: true })
        res.status(200).send(updatedFact)
    } catch (err) {
        res.status(500).send(err)
    }
}

const addDislikes = async (req, res) => {
    const factId = req.params.factId
    const userId = req.params.userId
    console.log(userId)
    const body = req.body
    try {
        const fact = await FactDatabase.findById(factId)
        const updatedLikes = fact.likes.filter((id) => id !== userId)
        console.log("updated likes", updatedLikes)
        const isUserAlreadyDisliked = fact.dislikes.includes(userId)
        const updatedDislikes = isUserAlreadyDisliked ? fact.dislikes : [...fact.dislikes, userId]
        console.log("updated dislikes", updatedDislikes)
        const updatedFact = await FactDatabase.findByIdAndUpdate(factId, {
            dislikes: updatedDislikes,
            likes: updatedLikes
        }, { new: true })
        res.status(200).send(updatedFact)
    } catch (err) {
        res.status(500).send(err)
    }
}
module.exports = { createFact, getFacts, getUserFacts, deleteFact, updateFact, addLikes, addDislikes };