const express = require("express");

const router = express.Router();
const { Profiles } = require("../models");

router.get("/:id", async (req, res) => {
  const id=req.params.id
  const profile = await Profiles.findOne({
    where: {
      UserId:id
    }
  })
  console.log(profile);
  res.send(profile);
});



router.post("/", async (req, res) => {
  const data = req.body;
  Profiles.create(data);
  res.send("done");
});

module.exports = router;
