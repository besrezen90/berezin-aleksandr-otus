const { Router } = require("express");
const { courses, lessons } = require("../db/db");

const router = Router();

router.get("/course/add", (req, res) => {
  res.render("add", {
    title: "Добавить новый курс",
  });
});

router.get("/course/:id", (req, res) => {
  const { id } = req.params;
  const currentCourse = courses.find((course) => course.id === id);
  const currentLessons = lessons[id];
  res.render("course", {
    title: currentCourse.title,
    course: currentCourse,
    lessons: currentLessons,
  });
});

router.get("/", (req, res) => {
  res.render("courses", {
    title: "Курсы",
    message: "Наши курсы",
    courses,
  });
});

module.exports = router;
