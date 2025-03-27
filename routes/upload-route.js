const express = require("express");
const uploadController = require("../controllers/upload-controller");
const uploadMiddleware = require("../middlewares/upload");
const router = express.Router();

router.post("/", uploadMiddleware.single("file"), uploadController.uploadFile);

module.exports = router;
