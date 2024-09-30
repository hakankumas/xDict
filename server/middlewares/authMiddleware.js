const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authenticateToken = asyncHandler(async (req, res, next) => {
    const token =
        req.headers.authorization && req.headers.authorization.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Not authorized" });
    }

    req.user = await User.findById(
        jwt.verify(token, process.env.JWT_SECRET).id
    );

    next();
});

const authorizationToken = asyncHandler(async (req, res, next) => {
    const token = req.body.token;

    req.user = await User.findById(
        jwt.verify(token, process.env.JWT_SECRET).id
    );

    next();
});

module.exports = { authenticateToken, authorizationToken };
