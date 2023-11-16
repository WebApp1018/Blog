const express = require("express");
const router = express.Router();
const path = require("path");
const blog = require("../services/blog");

router.use(express.static(path.join(__dirname, "../blog")));

//@route    GET api/blog/test
//@desc     Tests blog route
//@access   Public
router.get("/test", (req, res) => res.status(200).json({ msg: "Blog Works!" }));

//@route    GET api/blog/
//@desc     Get all blog route
//@access   Public
router.get("/", async function (req, res, next) {
  try {
    res.json(await blog.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting blogs `, err.message);
    next(err);
  }
});

//@route    GET api/blog/get_num
//@desc     Get the number of blogs route
//@access   Public
router.get("/get_num", async function (req, res, next) {
  try {
    res.json(await blog.getNum());
  } catch (err) {
    console.error(`Error while getting blogs `, err.message);
    next(err);
  }
});

//@route    GET api/blog/:id
//@desc     Get all blog route
//@access   Public
router.get("/:id", async function (req, res, next) {
  try {
    res.sendFile(path.join(__dirname, "../blog/blog-details.html"));
  } catch (err) {
    console.error(`Error while getting blogs `, err.message);
    next(err);
  }
});

//@route    GET api/blog/:id
//@desc     Get all blog route
//@access   Public
router.post("/:id", async function (req, res, next) {
  try {
    res.json(await blog.getBlogDetail(req.params.id));
  } catch (err) {
    console.error(`Error while getting blogs `, err.message);
    next(err);
  }
});
module.exports = router;
