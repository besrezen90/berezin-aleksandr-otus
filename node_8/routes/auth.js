const { Router } = require("express");

const router = Router();

router.get("/", function (req, res) {
  res.render("auth", { title: "Вход" });
});

module.exports = router;
