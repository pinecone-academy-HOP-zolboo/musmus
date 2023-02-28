const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors');
const connect = require("./db");

const port = 8000;

const {
  getPosts,
  getPost,
  createPost

  } = require("./Controller");

router
  .get("/", getPosts)
  .get(`/:id`, getPost)
  .post("/post" , createPost)

  connect();

app.use(bodyParser.json());
app.use(cors())
app.use(router);
app.listen(port, () => {
  console.log(`working${port}`) ;
});