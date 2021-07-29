const express = require("express");
const { getPosts } = require("../controllers/controllers");


// routing
const router = express.Router()
router.post("/", getPosts);

module.exports.router = router;