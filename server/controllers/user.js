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
        expiresIn: "1h",
    });
    res.status(200).json({ status: "Successfully logged in!", user, token });
});

exports.update = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { email, telephone, aboutme } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
        _id,
        { email, telephone, aboutme },
        { new: true }
    );
    if (!updatedUser) return res.status(500).json({ status: "Failed!" });
    res.status(200).json({ status: "Successfully updated!", updatedUser });
});

exports.getUser = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const user = await User.findById(_id);
    if (!user) return res.status(500).json({ status: "Failed!" });
    res.status(200).json({ message: "Successfully!", user });
});

exports.getUsername = asyncHandler(async (req, res) => {
    const { username } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(500).json({ status: "Failed!" });
    res.status(200).json({ message: "Successfully!", user });
});

exports.updatePassword = asyncHandler(async (req, res) => {
    const { _id, password } = req.user;
    const { newPassword, currentPassword } = req.body;

    const isMatch = await bcrypt.compare(currentPassword, password);
    if (!isMatch)
        return res
            .status(400)
            .json({ currentPasswordNotMatch: "currentPassword is wrong." });

    const isMatchNewAndCurrent = await bcrypt.compare(newPassword, password);
    if (isMatchNewAndCurrent)
        return res
            .status(400)
            .json({ samePasswords: "Passwords are aldready same!" });

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    const updatedPassword = await User.findByIdAndUpdate(
        _id,
        { password: hashedPassword },
        { new: true }
    );
    if (!updatedPassword) return res.status(500).json({ status: "Failed!" });
    res.status(200).json({ message: "Successfully updated!", updatedPassword });
});

exports.update_pp = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { path } = req.file;
    const new_pp_path = path.replace(/\\/g, "/");
    const user = await User.findByIdAndUpdate(
        _id,
        { pp_path: new_pp_path },
        { new: true }
    );
    if (!user) return res.status(500).json({ status: "Failed!" });
    res.status(200).json({ message: "Successfully updated!", user });
});
