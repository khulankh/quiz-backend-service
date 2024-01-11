const UserDatabase = require('../database/schema/userSchema')
const bcrypt = require("bcrypt")

const createUser = async (req, res) => {
    const body = req.body;
    const password = body.password;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const data = { ...body, password: hashedPassword }

    try {
        const user = await UserDatabase.create(data);
        res.status(200).send(user._id);
    } catch (err) {
        res.status(500).send('Internal Error')
    }
}

const getUsers = async (req, res) => {
    const body = req.body
    try {
        if (body.id) {
            const user = await UserDatabase.findById(body.id)
            if (user) {
                res.status(200).send(user)
            } else {
                res.status(404).send('Not Found')
            }
        } else {
            const users = await UserDatabase.find({})
            res.status(200).send(users)
        }
    } catch (err) {
        res.status(500).send("Internal Error")
    }
};

const loginUser = async (req, res) => {
    const body = req.body;
    const user = await UserDatabase.findOne({ email: body.email })
    if (user) {
        res.status(200).send({ userId: user._id })
        console.log(user._id)
    } else {
        res.status(404).send("Not Found")
    }
}
module.exports = { createUser, getUsers, loginUser }




//UserModel gedeg ni datagiin neg huwaasniih ni ner ni
// yrnu bol ded garchig