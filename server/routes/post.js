const express = require("express");
const router = express.Router();

// Controllers
const postController = require("../controllers/post");

// Middlewares
const {
    authenticateToken,
    authorizationToken,
} = require("../middlewares/authMiddleware");

router.get("/getAll", postController.getAll);
router.post("/add", authorizationToken, postController.add);
router.post("/delete", authorizationToken, postController.delete);

module.exports = router;
