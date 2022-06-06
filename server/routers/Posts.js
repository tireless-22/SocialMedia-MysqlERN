const express = require("express");

const router = express.Router();
const { Posts } = require("../models");

router.get("/", async(req, res) => {

	const posts = await Posts.findAll();
	res.send(posts)
 
});



router.get("/byuserid/:id", async (req, res) => {
	const id = req.params.id;
	const posts = await Posts.findAll({
		where: {
			UserId:id
		}
	})
	res.send(posts)
})


router.post("/", async(req, res) => {
	
	const data = req.body;
	Posts.create(data);
	res.send("done")
})

module.exports = router;
