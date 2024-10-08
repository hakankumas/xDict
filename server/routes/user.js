const express = require("express");
const router = express.Router();

// Controllers
const userController = require("../controllers/user");

// Middlewares
const {
    authenticateToken,
    authorizationToken,
} = require("../middlewares/authMiddleware");

router.post("/register", userController.register);
router.post("/login", userController.login);

// router.put("/update/:id", authenticateToken, userController.update);
// router.delete("/delete/:id", authenticateToken, userController.delete);
// router.get("/getAllUsers", userController.getAllUsers);
// router.post("/getUser", authorizationToken, userController.getUser);

router.post(
    "/updatePassword",
    authorizationToken,
    userController.updatePassword
);

module.exports = router;
