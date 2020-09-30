const { Router } = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const Lesson = require("../models/lesson");
const Course = require("../models/course");
const authCheck = require("../middlewares/authCheck");

const router = Router();

router.get("/auth/logout", authCheck, function (req, res) {
  req.session.destroy();
  res.redirect("/");
});

router.post("/auth/register", async (req, res) => {
  const { name, email, password, confirm } = req.body;

  try {
    if (confirm !== password) {
      req.flash("registerError", "Пароли не совпадают!");
      res.redirect("/auth#register");
    } else {
      const candidate = await User.findOne({ email });
      if (candidate) {
        req.flash(
          "registerError",
          "Пользователь с таким email уже зарегистрирован!"
        );
        res.redirect("/auth#register");
      } else {
        const hashPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashPassword });
        await user.save();
        res.redirect("/auth#login");
      }
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/auth/login", async (req, res) => {
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
        req.flash("loginError", "Неверный пароль!");
        res.redirect("/auth#login");
      }
    } else {
      req.flash("loginError", "Пользователь с таким email не зарегистрирован!");
      res.redirect("/auth#login");
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/course/add", authCheck, async (req, res) => {
  const { user } = req.session;
  const { title, description, url } = req.body;
  try {
    const course = new Course({ title, description, url, owner: user.email });
    await course.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

router.put("/course/request-access/:id", authCheck, async (req, res) => {
  const { user } = req.session;
  const { id } = req.params;

  try {
    const course = await Course.findById(id);
    if (!course.accessRequest.includes(user.email)) {
      course.accessRequest.push(user.email);
      await course.save();
      res.sendStatus(200);
    } else {
      res.sendStatus(200);
    }
  } catch (error) {
    console.log(error);
  }
});

router.put(
  "/course/response-access/:courseId/:newUser",
  authCheck,
  async (req, res) => {
    const { courseId, newUser } = req.params;

    try {
      const course = await Course.findById(courseId);
      if (!course.members.includes(newUser)) {
        course.accessRequest = course.accessRequest.filter(
          (user) => user !== newUser
        );
        course.members.push(newUser);
        await course.save();
        res.sendStatus(200);
      } else {
        res.sendStatus(200);
      }
    } catch (error) {
      console.log(error);
    }
  }
);

router.delete("/course/remove/:id", authCheck, async (req, res) => {
  const { id } = req.params;

  try {
    await Course.findByIdAndUpdate({ _id: id }, { isDelete: true });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

router.post("/lesson/:lessonId", authCheck, async (req, res) => {
  const { lessonId } = req.params;
  const { comment } = req.body;
  const { user } = req.session;

  try {
    const newLesson = await Lesson.findById(lessonId);
    newLesson.comments.unshift({
      date: Date.now(),
      message: comment,
      author: user.email,
    });

    await newLesson.save();

    res.redirect(`/lesson/${lessonId}`);
  } catch (error) {
    console.log(error);
  }
});

router.post("/lesson/add", authCheck, async (req, res) => {
  const { title, description, videoUrl, courseId } = req.body;
  try {
    const lesson = new Lesson({ title, description, videoUrl, courseId });
    await lesson.save();
    res.redirect(`/course/${courseId}`);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
