const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongodb-session")(session);
const bodyParser = require("body-parser");
const coursesRoutes = require("./routes/courses");
const authRoutes = require("./routes/auth");
const lessonRoutes = require("./routes/lesson");

const store = new MongoStore({
  collection: "sessions",
  uri: "mongodb://localhost:27017/node_8",
});

const app = express();

/* pug install */
const viewsPath = path.join(__dirname, ".", "views");
const publicPath = path.join(__dirname, "..", "public");

app.set("view engine", "pug");
app.set("views", viewsPath);

app.use(express.static(publicPath));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: false,
    store,
  })
);

/* All routes */
app.use("/", coursesRoutes);
app.use("/auth", authRoutes);
app.use("/lesson", lessonRoutes);

async function start() {
  try {
    const PORT = process.env.PORT || 3000;
    await mongoose.connect("mongodb://localhost:27017/node_8", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    app.listen(PORT, () => console.log("Server is running on port: ", PORT));
  } catch (error) {
    console.log(error);
  }
}

module.exports = { start };
