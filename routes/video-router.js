const express = require("express");
const router = express.Router();

const videoController = require("../controllers/video-controller");

router.route("/:filename").get(videoController.loadVideo);

module.exports = router;
