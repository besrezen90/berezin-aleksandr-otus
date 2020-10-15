const { Router } = require("express");
const moment = require("moment");
const Lesson = require("../models/lesson");
const authCheck = require("../middlewares/authCheck");

moment.locale("ru");

const router = Router();

router.get("/add/:courseId", authCheck, async (req, res) => {
  const { courseId } = req.params;
  const { isAuthenticated } = req.session;

  res.render("lessonAdd", {
    title: "Добавить занятие",
    isAuth: isAuthenticated,
    courseId,
  });
});

router.get("/:id", authCheck, async (req, res) => {
  const { id } = req.params;
  const { isAuthenticated } = req.session;
  try {
    const lesson = await Lesson.findById(id);
    res.render("lesson", {
      title: lesson.title,
      lesson,
      moment,
      isAuth: isAuthenticated,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
