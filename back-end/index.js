const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const port = 8000;
const app = express();
const cors = require('cors')

const connect = require("./db");

connect();

const {
  createUser,
  getUsers,
  getUser

  } = require("./Controller");

router
  .post("/", createUser)
  .get("/", getUsers)
  .get("/:id", getUser)

app.use(bodyParser.json());
app.use(cors())
app.use(router);
app.listen(port, () => {
  `working${port}`;
});