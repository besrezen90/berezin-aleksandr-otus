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

// FIXME: добовление комментариев

// router.post("/:courseId/:lessonId", (req, res) => {
//   const { courseId, lessonId } = req.params;
//   const { comment } = req.body;
//   //   TODO: распарсиить куку пользователя и сохранить новый комментарий
//   const currentCourse = courses.find((course) => course.id === courseId);
//   const currentLessons = lessons[courseId].find((lesson) => lesson.id === lessonId);
//   res.render("lesson", {
//     title: currentLessons.title,
//     lesson: currentLessons,
//     course: currentCourse,
//     moment,
//   });
// });

module.exports = router;
