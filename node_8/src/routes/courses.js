const { Router } = require("express");
const Course = require("../models/course");
const Lesson = require("../models/lesson");

const router = Router();

router.get("/course/add", (req, res) => {
  const { isAuthenticated } = req.session;
  res.render("add", {
    title: "Добавить новый курс",
    isAuth: isAuthenticated,
  });
});

router.post("/course/add", async (req, res) => {
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

router.get("/course/:id", async (req, res) => {
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

router.put("/course/request-access/:id", async (req, res) => {
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

router.put("/course/response-access/:courseId/:newUser", async (req, res) => {
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
});

router.get("/", async (req, res) => {
  const { isAuthenticated } = req.session;
  try {
    const courses = await Course.find();
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

router.get("/course/access-list/:courseId", async (req, res) => {
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
