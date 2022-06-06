const express = require("express")

const router = express.Router();
const {Users}=require("../models")
var jwt = require("jsonwebtoken");


const bcrypt = require("bcrypt");
const saltRounds = 10;





router.get("/",async (req, res) => {
	const data=await Users.findAll()
	res.send(data)
})

router.post("/register", (req, res) => {
	// const data = req.body
	const { username, password } = req.body;

bcrypt.hash(password, saltRounds,async function (err, hash) {
const user=	await Users.create({
		username: username,
		password:hash
		
	})

});
		res.json("Done")

})




router.post("/login",async (req, res) => {

	const { username, password } = req.body;

	const user=await Users.findOne({
		where: {
			username:username
		}
	})

	if (!user) {
		res.json("No user Found");
	}
	bcrypt.compare(password, user.password, function (err, result) {

		if (!result) {
			res.json("please check the password")
			
		}
		console.log(user)
		var token = jwt.sign({ username: username,id:user.id }, "SecretKey");
		res.send({ username: username, token: token,id:user.id });
  });
})




router.get("/byuserid/:id", async (req, res) => {
	const id = req.params.id;
	const user = await Users.findByPk(id)
	// console.log(user)

	res.send(user)
	
})







module.exports = router;
