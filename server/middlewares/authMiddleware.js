const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authenticateToken = asyncHandler(async (req, res, next) => {
    const token =
        req.headers.authorization && req.headers.authorization.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Not authorized" });
    }

    // req.user = await User.findById(
    //     jwt.verify(token, process.env.JWT_SECRET, (err, res) => {
    //         if (err) return "token expired";
    //         return res;
    //     }).id
    // );
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decodedToken.id);
    } catch (err) {
        if (err.name === "TokenExpiredError") {
            return res.status(401).json({ message: "Token expired" });
        } else {
            return res.status(401).json({ message: "Invalid token" });
        }
    }

    next();
});

const authorizationToken = asyncHandler(async (req, res, next) => {
    const token = req.body.token;

    // req.user = await User.findById(
    //     jwt.verify(token, process.env.JWT_SECRET).id
    // );

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decodedToken.id);
    } catch (err) {
        if (err.name === "TokenExpiredError") {
            return res.status(401).json({ message: "Token expired" });
        } else {
            return res.status(401).json({ message: "Invalid token" });
        }
    }

    next();
});

module.exports = { authenticateToken, authorizationToken };
