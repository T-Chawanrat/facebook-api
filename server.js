require("dotenv").config();
const express = require("express");
const cors = require("cors");
const notFound = require("./middlewares/not-found");
const errorMiddleware = require("./middlewares/error-middleware");
const authRoute = require("./routes/auth-route");
const postRoute = require("./routes/post-route");
const authenticate = require("./middlewares/authenticate");
const commentRoute = require("./routes/comment-route");
const likeRoute = require("./routes/like-route");
const uploadRoutes = require("./routes/upload-route"); // เส้นทางที่ใช้สำหรับอัปโหลด
const app = express();

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(express.json());

app.get("/test", (req, res) => {
  res.json({ msg: "Service is running , ok" });
});

// เส้นทางต่างๆ สำหรับ Authentication และ Operations
app.use("/auth", authRoute);
app.use("/post", authenticate, postRoute);
app.use("/comment", authenticate, commentRoute);
app.use("/like", authenticate, likeRoute);

// เส้นทางอัปโหลดไฟล์
app.use("/upload", uploadRoutes); // เพิ่ม /upload ชัดเจน

// Middleware จัดการข้อผิดพลาด
app.use(notFound);
app.use(errorMiddleware);

const port = process.env.PORT || 8800;
app.listen(port, () => console.log("server is running on", port));
