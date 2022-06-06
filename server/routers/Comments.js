const express = require("express");

const router = express.Router();
const {Comments } = require("../models");

router.post("/", (req, res) => {
	const data = req.body;
	Comments.create(data);

	res.json("done")




})

module.exports = router;
