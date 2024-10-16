const asyncHandler = require("express-async-handler");
const Post = require("../models/Post");
const Topic = require("../models/Topic");

exports.getAll = asyncHandler(async (req, res) => {
    const posts = await Post.find().populate("user").populate("topic");
    if (!posts) return res.status(500).json({ status: "Failed!" });
    res.status(200).json({ status: "Successfully!", posts });
});

exports.add = asyncHandler(async (req, res) => {
    const { topic, content } = req.body;
    const selectedTopic = await Topic.findById(topic);
    const user = req.user;
    const newPost = await Post.create({
        user,
        topic: selectedTopic,
        content,
    });
    if (!newPost) return res.status(500).json({ status: "Failed!" });
    res.status(200).json({ message: "Successfully created!", newPost });
});

exports.delete = asyncHandler(async (req, res) => {
    const { _id } = req.body;
    const deletedPost = await Post.findByIdAndDelete(_id);
    if (!deletedPost) return res.status(500).json({ status: "Failed!" });
    res.status(200).json({ message: "Successfully deleted!", deletedPost });
});

exports.update = asyncHandler(async (req, res) => {
    const { _id, content } = req.body;
    const updatedPost = await Post.findByIdAndUpdate(
        _id,
        { content },
        { new: true }
    )
        .populate("user")
        .populate("topic");
    if (!updatedPost) return res.status(500).json({ status: "Failed!" });
    res.status(200).json({ message: "Successfully updated!", updatedPost });
});
