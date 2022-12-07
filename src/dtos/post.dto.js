const createPostDTO = async (req, res, next) => {
    try {
        const isSurvey = req.body.isSurvey

        if (!isSurvey) {
            res.status(400).send("Please specify if the post contains a survey")
            return
        }

        next()
    } catch (error) {
        console.log(error)
        res.status(500).send("An error has occurred")
    }
}

const getPostDTO = async (req, res, next) => {
    try {
        const username = req.params.username
        if (!username?.length) {
            res.status(400).send("Username must be not null")
            return
        }

        next()
    } catch (error) {
        console.log(error)
        res.status(500).send("An error has occurred")
    }
}

const patchPostDTO = async (req, res, next) => {
    try {
        const username = req.body.username
        const isSurvey = req.body.isSurvey

        if (!username?.length) {
            res.status(400).send("Username can't be empty")
        }

        if (!isSurvey) {
            res.status(400).send("Please specify if the post contains a survey")
            return
        }

        if (!parseInt(index) || parseInt(index) <= -1) {
            res.status(400).send("Please specify the index of the post")
        }

        next()
    } catch (error) {
        console.log(error)
        res.status(500).send("An error has occurred")
    }
}

const deletePostDTO = async (req, res, next) => {
    try {
        const username = req.params.username

        if (username?.length) {
            res.status(400).send("Please enter a non-empty username")
            return
        }
        if (!parseInt(index) || parseInt(index) <= -1) {
            res.status(400).send("Please enter an index greater or equal to 0")
        }
        next()
    } catch (error) {
        console.log(error)
        res.status(500).send("An error has occurred")
    }
}

module.exports = { createPostDTO, getPostDTO, patchPostDTO, deletePostDTO }
