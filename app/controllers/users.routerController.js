const express = require("express");
const db = require("../models");
router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    //throw new Error("this is an error")
    /* res.status(200).send({
            "message":"Post method is calling in /"
        }) */

    const postedData = await db.user.create({
      ...req.body,
    });
    res.status(400).send(postedData);
    //console.log(postedData);
  } catch (error) {
    return next(error);
  }
});
router.get("/", async (req, res, next) => {
  const getData = await db.user.findAll({});
  res.send(getData);
});
router.put("/:id", async (req, res, next) => {
  try {
    const editedValue = await db.user.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.send(editedValue);
  } catch (error) {
    return next(error);
  }
});
router.delete("/:id", async (req, res, next) => {
  try {
    const deletedValue = await db.user.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send({
      message: "one item is deleted",
    });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
