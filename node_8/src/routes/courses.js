const { Router } = require("express");
const Course = require("../models/course");
const Lesson = require("../models/lesson");
const authCheck = require("../middlewares/authCheck");

const router = Router();

router.get("/course/add", authCheck, (req, res) => {
  const { isAuthenticated } = req.session;
  res.render("add", {
    title: "Добавить новый курс",
    isAuth: isAuthenticated,
  });
});

router.get("/course/:id", authCheck, async (req, res) => {
  const { user } = req.session;
  const { id } = req.params;
  const { isAuthenticated } = req.session;
  try {
    const course = await Course.findById(id);
    const lessons = await Lesson.find({ courseId: course._id });
    res.render("course", {
      title: course.title,
      course,
      lessons,
      isAuth: isAuthenticated,
      isOwner: user.email === course.owner,
      isReqMember: course.accessRequest.includes(user.email),
      isMember: course.members.includes(user.email),
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/", async (req, res) => {
  const { isAuthenticated } = req.session;
  try {
    const courses = await Course.find({ isDelete: false });
    res.render("courses", {
      title: "Курсы",
      message: "Наши курсы",
      courses,
      isAuth: isAuthenticated,
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/course/access-list/:courseId", authCheck, async (req, res) => {
  const { courseId } = req.params;
  const { isAuthenticated } = req.session;
  try {
    const course = await Course.findById(courseId);
    res.render("accessList", {
      title: `Запросы доступа к курсу ${course.title}`,
      course,
      isAuth: isAuthenticated,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
