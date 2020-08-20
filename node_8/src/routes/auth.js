const { Router } = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

const router = Router();

router.get("/", function (req, res) {
  res.render("auth", { title: "Вход" });
});

router.get("/logout", function (req, res) {
  req.session.destroy();
  res.redirect("/");
});

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const candidate = await User.findOne({ email });
    if (candidate) {
      // FIXME: добить проверку что такой пользоватль существует и проверку совпадения паролей

      res.redirect("/auth#login");
    } else {
      const hashPassword = await bcrypt.hash(password, 10);
      const user = new User({ name, email, password: hashPassword });
      await user.save();
      res.redirect("/auth#login");
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const candidate = await User.findOne({ email });
    if (candidate) {
      const isSuccessPassword = await bcrypt.compare(
        password,
        candidate.password
      );
      if (isSuccessPassword) {
        req.session.isAuthenticated = true;
        req.session.user = candidate;
        req.session.save((err) => {
          if (err) {
            throw err;
          }

          res.redirect("/");
        });
      } else {
        //   FIXME: неверный пароль
        res.redirect("/auth#login");
      }
    } else {
      // TODO: пользователь не зареган
      res.redirect("/auth#register");
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
