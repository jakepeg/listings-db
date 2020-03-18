const express = require("express");
const cors = require("cors");

const server = express();
const port = 3001;

const api = require("./api");

server.use(cors());
server.use(api);

server.listen(port, () => console.log(`API on port ${port}`));
