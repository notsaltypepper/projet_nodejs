const Post = require("../models/Post")

const createPost = async (req, res) => {
    try {
        // let id = req.body.id
        const content = req.body.content
        const isSurvey = req.body.isSurvey
        const surveyOptions = req.body.surveyOptions

        // const idExists = await Post.exists({ id: id })
        // if (idExists) {
        //     id++
        // }

        const newPost = new Post()
        newPost.content = content
        newPost.isSurvey = isSurvey
        if (isSurvey == true) {
            newPost.surveyOptions = surveyOptions
        }
        console.log(newPost.id)
        await newPost.save()

        res.status(200).send("Post created")
        return
    } catch (error) {
        console.log(error)
        res.status(500).send("An error has occurred")
        return
    }
}

const getPost = async (req, res) => {
    try {
        const id = req.params.id
        const post = await Post.findOne({ id: id })

        if (id || id <= -1) {
            res.status(400).send("Please specify the index of the post")
        }

        res.status(200).json({
            index: post.id,
            username: post.username,
            content: post.content,
            isSurvey: post.isSurvey,
            surveyOptions: post.isSurvey,
            createdAt: post.createdAt,
        })
        return
    } catch (error) {
        console.log(error)
        res.status(500).send("An error has occurred")
        return
    }
}

const patchPost = async (req, res) => {
    try {
        const id = req.params.id
        const content = req.params.content
        const isSurvey = req.params.isSurvey
        const surveyOptions = req.params.surveyOptions

        const post = await Post.findOne({ id: id })

        if (!id || id <= -1) {
            res.status(400).send("Please specify the index of the post")
            return
        }

        post.content = content
        post.isSurvey = isSurvey
        post.surveyOptions = surveyOptions
        await user.save()
        res.status(200).send("Changes saved")
        return
    } catch (error) {
        console.log(error)
        res.status(500).send("An error has occurred")
        return
    }
}

const deletePost = async (req, res) => {
    try {
        const id = req.params.id
        const post = await Post.findOne({ id: id })
        await post.deleteOne()
        res.status(200).json("Post deleted")
        return
    } catch (error) {
        console.log(error)
        res.status(500).send("An error has occurred")
        return
    }
}

module.exports = { createPost, getPost, patchPost, deletePost }
