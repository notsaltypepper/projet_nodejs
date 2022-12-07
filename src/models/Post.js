const { model, Schema } = require("mongoose")

const postSchema = new Schema({
    id: Number,
    username: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    content: String,
    isSurvey: Boolean,
    surveyOptions: [String],
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

module.exports = model("Post", postSchema, "posts")
