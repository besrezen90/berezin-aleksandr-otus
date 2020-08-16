const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const coursesRoutes = require("./routes/courses");
const authRoutes = require("./routes/auth");
const lessonRoutes = require("./routes/lesson");

const app = express();

/* pug install */
const viewsPath = path.join(__dirname, ".", "views");
const publicPath = path.join(__dirname, "..", "public");
app.set("view engine", "pug");
app.set("views", viewsPath);

app.use(express.static(publicPath));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* All routes */
app.use("/", coursesRoutes);
app.use("/auth", authRoutes);
app.use("/lesson", lessonRoutes);

module.exports = app;
