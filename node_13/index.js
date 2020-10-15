const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const articles = require("./articles");
const mainRoutes = require("./routes/main");
const randomInteger = require("./randomInteger");

const app = express();

app.set("port", 3000);

app.use(express.static(__dirname + "/public"));
app.use("/", mainRoutes);

const server = http.createServer(app);
const ws = new WebSocket.Server({ server });

ws.on("connection", (connection, req) => {
  const ip = req.socket.remoteAddress;
  console.log(`Connected ${ip}`);
  connection.on("message", (message) => {
    if (message === "article") {
      connection.send(JSON.stringify(articles[randomInteger(0, articles.length - 1)]));
    }
  });
  connection.on("close", () => {
    console.log(`Disconnected ${ip}`);
  });
});

server.listen(app.get("port"), function () {
  console.log("Express server listening on port " + app.get("port"));
});
