const express = require("express");
const router = express.Router();

// Controllers
const postController = require("../controllers/post");

// Middlewares
const {
    authenticateToken,
    authorizationToken,
} = require("../middlewares/authMiddleware");

router.post("/add", authorizationToken, postController.add);
router.get("/getAll", postController.getAll);

module.exports = router;
