const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const userRoutes = require("./routes/user");
app.use("/user", userRoutes);

const Topic = require("./models/Topic");
app.use("/topic/add", async (req, res) => {
    const { topic_name } = req.body;
    const newTopic = await Topic.create({
        topic_name,
    });
    if (!newTopic) return res.status(500).json({ status: "Failed!" });
    res.status(200).json({ message: "Successfully created!", newTopic });
});
app.use("/topic/getAll", async (req, res) => {
    const topics = await Topic.find();
    if (!topics) return res.status(500).json({ status: "Failed!" });
    res.status(200).json({ status: "Successfully!", topics });
});

const Post = require("./models/Post");
app.use("/post/add", async (req, res) => {
    const { topic, content, user } = req.body;
    const newPost = await Post.create({
        user,
        topic,
        content,
    });
    if (!newPost) return res.status(500).json({ status: "Failed!" });
    res.status(200).json({ message: "Successfully created!", newPost });
});
app.use("/post/getAll", async (req, res) => {
    const posts = await Post.find().populate("user").populate("topic");
    if (!posts) return res.status(500).json({ status: "Failed!" });
    res.status(200).json({ status: "Successfully!", posts });
});

const PORT = process.env.PORT;
const SERVER_URL = process.env.SERVER_URL;
const DATABASE = process.env.DATABASE;
mongoose
    .connect(DATABASE)
    .then(() => {
        console.log("Connected to database!");
        app.listen(PORT, () => {
            console.log(`Server is running: ${SERVER_URL}`);
        });
    })
    .catch((err) => console.log(err));
