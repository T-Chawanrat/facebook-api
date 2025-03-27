const cloudinary = require("../config/cloudinary");

exports.uploadFile = async (req, res) => {
  try {
    const file = req.file;
    const result = await cloudinary.uploader.upload(file.buffer, {
      folder: "uploads",
    });
    res.json({ message: "File uploaded successfully", url: result.secure_url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error uploading file", error });
  }
};
