const mongoose = require("mongoose");

const PostSchema = mongoose.Schema(
    {
        content: {
            type: String,
            required: [true, "Please enter content!"],
        },
        topic: {
            required: [true, "Please enter topic!"],
            type: mongoose.Schema.Types.ObjectId,
            ref: "Topic",
        },

        user: {
            required: [true, "Please enter user!"],
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;
