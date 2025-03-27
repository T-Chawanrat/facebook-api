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

const app = express();

const corsOptions = {
  origin: ["http://localhost:5173", "https://your-frontend-domain.com"],
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

app.use("/auth", authRoute);
app.use("/post", authenticate, postRoute);
app.use("/comment", authenticate, commentRoute);
app.use("/like", authenticate, likeRoute);

app.use(notFound);
app.use(errorMiddleware);

const port = process.env.PORT || 8800;
app.listen(port, () => console.log("server is running on", port));
