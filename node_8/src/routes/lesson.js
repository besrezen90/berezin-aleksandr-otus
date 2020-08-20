const { Router } = require("express");
const Lesson = require("../models/lesson");

const moment = require("moment");
moment.locale("ru");

const router = Router();

router.get("/add/:courseId", async (req, res) => {
  const { courseId } = req.params;
  const { isAuthenticated } = req.session;

  res.render("lessonAdd", {
    title: "Добавить занятие",
    isAuth: isAuthenticated,
    courseId,
  });
});

router.post("/add", async (req, res) => {
  const { title, description, videoUrl, courseId } = req.body;
  try {
    const lesson = new Lesson({ title, description, videoUrl, courseId });
    await lesson.save();
    res.redirect(`/course/${courseId}`);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
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

router.post("/:lessonId", async (req, res) => {
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

module.exports = router;
