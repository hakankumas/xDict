const express = require("express");
const router = express.Router();

// Controllers
const postController = require("../controllers/post");

router.post("/add", postController.add);
router.get("/getAll", postController.getAll);

module.exports = router;
