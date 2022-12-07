const { model, Schema } = require("mongoose")

const userSchema = new Schema({
    username: String,
    age: Date,
    bio: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

module.exports = model("User", userSchema, "users")
