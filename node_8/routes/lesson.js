const { Router } = require("express");
const { courses, lessons } = require("../db/db");

const moment = require("moment");
moment.locale("ru");

const router = Router();

router.get("/:courseId/:lessonId", (req, res) => {
  const { courseId, lessonId } = req.params;
  const currentCourse = courses.find((course) => course.id === courseId);
  const currentLessons = lessons[courseId].find((lesson) => lesson.id === lessonId);

  res.render("lesson", {
    title: currentLessons.title,
    lesson: currentLessons,
    course: currentCourse,
    moment,
  });
});

router.post("/:courseId/:lessonId", (req, res) => {
  const { courseId, lessonId } = req.params;
  const { comment } = req.body;
  //   TODO: распарсиить куку пользователя и сохранить новый комментарий
  const currentCourse = courses.find((course) => course.id === courseId);
  const currentLessons = lessons[courseId].find((lesson) => lesson.id === lessonId);
  res.render("lesson", {
    title: currentLessons.title,
    lesson: currentLessons,
    course: currentCourse,
    moment,
  });
});

module.exports = router;
