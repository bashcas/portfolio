const express = require("express");
const multer = require("multer");
const upload = multer();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload.array());
const email = require("./email");
app.use("/email", email);

if (require.main === module) {
  const port = 3001;
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`);
  });
}

module.exports = app;
