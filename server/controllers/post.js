const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Post = require("../models/Post");
const Topic = require("../models/Topic");

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

exports.getAll = asyncHandler(async (req, res) => {
    const posts = await Post.find().populate("user").populate("topic");
    if (!posts) return res.status(500).json({ status: "Failed!" });
    res.status(200).json({ status: "Successfully!", posts });
});
