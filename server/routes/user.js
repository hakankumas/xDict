const express = require("express");
const router = express.Router();

// Controllers
const userController = require("../controllers/user");

// Middlewares
const {
    authenticateToken,
    authorizationToken,
} = require("../middlewares/authMiddleware");

const path = require("path");
// Multer
const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/uploads/profile");
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    },
});
const upload = multer({ storage });

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/update", authenticateToken, userController.update);

router.get("/get-user", authenticateToken, userController.getUser);
router.post("/get-username", authenticateToken, userController.getUsername);

router.post(
    "/updatePassword",
    authorizationToken,
    userController.updatePassword
);

router.post(
    "/update-pp",
    authenticateToken,
    upload.single("profile-photo"),
    userController.update_pp
);

module.exports = router;
