const express = require("express");
const router = express.Router();

// Controllers
const topicController = require("../controllers/topic");

router.post("/add", topicController.add);
router.get("/getAll", topicController.getAll);
router.get("/:slug", topicController.searchSlug);

module.exports = router;
