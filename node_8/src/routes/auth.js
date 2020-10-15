const { Router } = require("express");

const router = Router();

router.get("/", function (req, res) {
  res.render("auth", {
    title: "Вход",
    loginError: req.flash("loginError"),
    registerError: req.flash("registerError"),
  });
});

module.exports = router;
