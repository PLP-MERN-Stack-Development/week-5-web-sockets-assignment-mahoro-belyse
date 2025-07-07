const express = require("express");
const router = express.Router();

const { getRoomMessages } = require("../controllers/messageController");

router.get("/", getRoomMessages);

module.exports = router;
