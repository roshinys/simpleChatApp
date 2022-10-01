const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send(`<form  action="/login" method="POST" onsubmit= localStorage.setItem('username',document.getElementById('username').value)>
  <input type="text" id="username" name="username" />
  <button type="submit">Login</button>
</form>`);
});

router.post("/", (req, res, next) => {
  res.redirect("/message");
});

module.exports = router;
