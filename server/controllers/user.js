const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.register = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    const query_username = await User.findOne({ username });
    if (query_username)
        return res
            .status(400)
            .json({ message: "This username already exists." });
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
        username,
        email,
        password: hashedPassword,
    });
    if (!newUser) return res.status(500).json({ status: "Failed!" });
    res.status(200).json({ message: "Successfully registered!", newUser });
});

exports.login = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: "This user not found." });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(404).json({ message: "Wrong password." });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "10h",
    });
    res.status(200).json({ status: "Successfully logged in!", user, token });
});

exports.update = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { username } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
        id,
        { username },
        { new: true }
    );
    if (!updatedUser) return res.status(500).json({ status: "Failed!" });
    res.status(200).json({ status: "Successfully updated!", updatedUser });
});

exports.delete = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) return res.status(500).json({ status: "Failed!" });
    res.status(200).json({ status: "Successfully deleted!", deletedUser });
});

exports.getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find();
    if (!users) return res.status(500).json({ status: "Failed!" });
    res.status(200).json({ status: "Successfully!", users });
});
