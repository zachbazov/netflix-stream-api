const express = require("express");
const path = require("path");

const app = express();

const videoRouter = require("./routes/video-router");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use("/", videoRouter);

module.exports = app;
