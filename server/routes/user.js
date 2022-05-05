const express = require('express');
const userController = require('../controllers/user');
const router = express.Router();

router.get("/:str", userController.getMatchedUsers);
router.get("", userController.getUsers);

module.exports = router;