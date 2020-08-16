const express = require("express");
const bodyParser = require("body-parser");
const coursesRoutes = require("./routes/courses");
const authRoutes = require("./routes/auth");
const lessonRoutes = require("./routes/lesson");

const app = express();

app.set("view engine", "pug");
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", coursesRoutes);
app.use("/auth", authRoutes);
app.use("/lesson", lessonRoutes);

app.listen(3000, () => console.log("Hello from 3000"));
