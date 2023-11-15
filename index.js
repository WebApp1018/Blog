const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
var cors = require("cors");

// Import routes
const blog = require("./routes/blog");

const port = process.env.PORT || 5000;
const app = express();

// General middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.options("*", cors());

// Use routes
app.use("/blog", blog);

// Serve static files from the 'blog' folder
app.use(express.static(path.join(__dirname, "blog")));

// Handle other requests
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "blog/blog.html"));
});

const server = require("http").createServer(app);

// Start the Local Server
server.listen(port, () => {
  console.log(`Blog app listening at http://localhost:${port}`);
});
