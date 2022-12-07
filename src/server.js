const express = require("express")
const userdto = require("./dtos/user.dto")
const postdto = require("./dtos/post.dto")
const usercontroller = require("./controllers/user.controller")
const postcontroller = require("./controllers/post.controller")
const isAuthenticated = require("./middleware/auth.middleware.js")
require("./database")

const app = express()
app.use(express.json())

app.get("/", isAuthenticated)

app.post("/projet_api/user", usercontroller.createUser, userdto.createUserDTO)

app.post(
    "/projet_api/user/:username/posts",
    isAuthenticated,
    postdto.createPostDTO,
    postcontroller.createPost
)

app.get(
    "/projet_api/user/:username",
    isAuthenticated,
    usercontroller.getUser,
    userdto.getUserDTO
)

app.get(
    "/projet_api/user/:username/posts/:_id",
    isAuthenticated,
    postcontroller.getPost,
    postdto.getPostDTO
)

app.patch(
    "/projet_api/user/:username",
    isAuthenticated,
    usercontroller.patchUser,
    userdto.patchUserDTO
)

app.patch(
    "/projet_api/user/:username/posts/:_id",
    isAuthenticated,
    postcontroller.patchPost,
    postdto.patchPostDTO
)

app.delete(
    "/projet_api/user/:username",
    isAuthenticated,
    usercontroller.deleteUser,
    userdto.patchUserDTO
)

app.delete(
    "/projet_api/user/:username/posts/:_id",
    isAuthenticated,
    postcontroller.deletePost,
    postdto.patchPostDTO
)

app.listen(3000, () => {
    console.log("Server running on port 3000")
})
