const express = require("express");
const router = express.Router();
const blog = require("../services/blog");

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

module.exports = router;
