const express = require("express");
const uploadRoute = express.Router();
const uploadController = require("../controllers/upload-controller");
const upload = require("../middlewares/upload"); // ใช้ multer ที่มีอยู่แล้ว

uploadRoute.post("/upload", upload.single("file"), uploadController.uploadImage);

module.exports = uploadRoute;
