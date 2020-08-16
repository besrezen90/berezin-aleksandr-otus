const { Router } = require("express");
const { courses, lessons } = require("../db/db");

const router = Router();

router.get("/", (req, res) => {
  res.render("courses", {
    title: "Курсы",
    message: "Наши курсы",
    courses,
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

module.exports = router;
