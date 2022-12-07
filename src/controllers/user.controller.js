const User = require("../models/User")

const createUser = async (req, res) => {
    try {
        const username = req.body.username
        const age = req.body.age
        const bio = req.body.bio
        const userExist = await User.exists({ username: username })
        if (userExist) {
            res.status(400).send("User already exists")
        }

        const newUser = new User()
        newUser.username = username
        newUser.age = age
        newUser.bio = bio

        await newUser.save()
        res.status(200).send("User created")
        return
    } catch (error) {
        console.log(error)
        res.status(500).send("An error has occurred")
        return
    }
}

const getUser = async (req, res) => {
    try {
        const username = req.params.username

        const user = await User.findOne({ username: username })

        if (!user) {
            res.status(404).send("User not found")
            return
        }

        res.status(200).json({
            username: user.username,
            age: user.age,
            bio: user.bio,
            createdAt: user.createdAt,
        })
        return
    } catch (error) {
        console.log(error)
        res.status(500).send("An error has occurred")
        return
    }
}

const patchUser = async (req, res) => {
    try {
        const username = req.params.username
        const age = req.body.age
        const bio = req.body.bio
        const user = req.user
        user.age = age
        user.bio = bio
        await user.save()
        res.status(200).send("Changes saved")
        return
    } catch (error) {
        console.log(error)
        res.status(500).send("An error has occurred")
        return
    }
}

const deleteUser = async (req, res) => {
    try {
        const username = req.params.username

        const user = await User.findOne({ username: username })
        if (!user) {
            res.status(404).send("User found")
            return
        }
        await user.deleteOne()
        res.status(200).json("User deleted")
        return
    } catch (error) {
        console.log(error)
        res.status(500).send("An error has occurred")
        return
    }
}

module.exports = { createUser, getUser, patchUser, deleteUser }
