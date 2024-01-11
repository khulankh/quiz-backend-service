const UserDatabase = require('../database/schema/userSchema');
const bcrypt = require("bcrypt")

const validateInput = async (req, res, next) => {
    const body = req.body;
    const user = await UserDatabase.findOne({ email: body.email })
    if (user) {
        res.status(400).send("email already taken")
    } else {
        next()
    }
}
const validatePassword = async (req, res, next) => {
    const body = req.body
    const user = await UserDatabase.findOne({ email: body.email })
    if (user) {
        const isPasswordCorrect = bcrypt.compareSync(body.password, user.password)
        if (isPasswordCorrect) {
            next();
        } else {
            res.status(404).send("Password is incorrect")
        }

    } else {
        res.status(404).send('User Not Found')
    }
}

module.exports = { validateInput, validatePassword }