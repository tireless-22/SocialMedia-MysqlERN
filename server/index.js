const express = require("express")
const cors=require("cors")
const app = express()
app.use(cors())
app.use(express.json())

const db=require("./models")


const UserRouter=require("./routers/Users")
app.use("/users", UserRouter);


const postRouter=require("./routers/Posts")
app.use("/posts", postRouter);

const profileRouter = require("./routers/Profiles");
app.use("/profiles", profileRouter);


const commentRouter = require("./routers/Comments");
app.use("/comments", commentRouter);



app.get("/", (req, res) => {
	res.send("Hello")
})

db.sequelize.sync().then(() => {
	
	app.listen(3001, () => {
	console.log("server is running")
})

})

