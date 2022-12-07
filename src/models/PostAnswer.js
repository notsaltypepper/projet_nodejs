const { model, Schema } = require("mongoose")

const postAnswerSchema = new Schema({
    answer: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

module.exports = model("PostAnswer", postAnswerSchema, "postAnswers")
