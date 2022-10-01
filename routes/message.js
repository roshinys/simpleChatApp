const express = require("express");
const fs = require("fs");

const router = express.Router();

router.get("/", (req, res, next) => {
  fs.readFile("message.txt", (err, data) => {
    if (err) {
      data = "No chats Exist";
    }
    res.send(`${data}<form action="/message" method="POST" onsubmit="document.getElementById('username').value = localStorage.getItem('username')">
      <input type="text" name="message" id="message" />
      <input type="hidden" name="username" id="username"/>
      <button type="submit">Submit Msg</button>
    </form>`);
  });
});

router.post("/", (req, res, next) => {
  console.log(req.body);
  fs.appendFile(
    "message.txt",
    `${req.body.username}:${req.body.message} `,
    (err) => {
      if (err) {
        console.log(err);
      }
      res.redirect("/message");
    }
  );
});

module.exports = router;
