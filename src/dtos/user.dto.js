const createUserDTO = async (req, res, next) => {
    try {
        const username = req.body.username

        if (!username) {
            res.status(400).send("Username missing")
            return
        }

        next()
    } catch (error) {
        console.log(error)
        res.status(500).send("An error has occurred")
    }
}

const getUserDTO = async (req, res, next) => {
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

const patchUserDTO = async (req, res, next) => {
    try {
        const username = req.params.username

        if (!username?.length) {
            res.status(400).send("Username can't be empty")
        }

        next()
    } catch (error) {
        console.log(error)
        res.status(500).send("An error has occurred")
    }
}

const deleteUserDTO = async (req, res, next) => {
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

module.exports = { createUserDTO, getUserDTO, patchUserDTO, deleteUserDTO }
