const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload'); // เรียก multer ที่แก้ไขแล้ว
const cloudinary = require('../config/cloudinary'); // import cloudinary config
const fs = require('fs'); // สำหรับลบไฟล์ที่อัปโหลด

// อัปโหลดไฟล์
router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // อัปโหลดไฟล์ไปที่ Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'uploads', // กำหนดโฟลเดอร์ใน Cloudinary ที่จะเก็บไฟล์
    });

    // ลบไฟล์ที่อัปโหลดเสร็จแล้วใน server (ไฟล์ชั่วคราว)
    fs.unlinkSync(req.file.path);

    // ส่ง URL ของไฟล์ที่อัปโหลดไป Cloudinary
    res.json({ url: result.secure_url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
