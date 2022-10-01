const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const loginRoute = require("./routes/login");
const messageRoute = require("./routes/message");

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/login", loginRoute);
app.use("/message", messageRoute);

app.use((req, res, next) => {
  res.send("<h1>Page Not Found</h1>");
});

app.listen(3000, () => {
  console.log("server started at port 3000");
});
