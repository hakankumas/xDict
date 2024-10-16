const asyncHandler = require("express-async-handler");
const Topic = require("../models/Topic");
const Post = require("../models/Post");

exports.add = asyncHandler(async (req, res) => {
    const { topic_name } = req.body;
    const newTopic = await Topic.create({
        topic_name,
    });
    if (!newTopic) return res.status(500).json({ status: "Failed!" });
    res.status(200).json({ message: "Successfully created!", newTopic });
});

exports.getAll = asyncHandler(async (req, res) => {
    const topics = await Topic.find();
    if (!topics) return res.status(500).json({ status: "Failed!" });
    res.status(200).json({ status: "Successfully!", topics });
});

exports.searchSlug = asyncHandler(async (req, res) => {
    const { slug } = req.params;
    const { _id } = await Topic.findOne({ slug });
    if (!_id) return res.status(500).json({ status: "Not found this topic!" });
    const posts = await Post.find({ topic: _id });
    if (!posts) return res.status(500).json({ status: "Failed!" });
    res.status(200).json({ status: "Successfully!", posts });
});
