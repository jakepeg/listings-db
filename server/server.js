const express = require("express");
const cors = require("cors");
const config = require('./db_config');

const mongoose = require('mongoose');
mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}, (err) => {
  if (err) { console.error(err); }
  else {
    console.log('Connected to DB!');
  }
})

const server = express();
const port = 3001;

const api = require("./api");

server.use(cors());
server.use(api);

server.listen(port, () => console.log(`API on port ${port}`));
