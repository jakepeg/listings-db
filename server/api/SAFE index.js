// const next = require('next')
// const express = require('express');
const bodyParser = require("body-parser");

// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev })
// const handle = app.getRequestHandler()

const filePath = "./activities.json";
const fs = require("fs");
const path = require("path");
const activitiesData = require(filePath);

const server = require("../lib");

server.use(bodyParser.json());

server.get("/api/v1/activities", (req, res) => {
  return res.json(activitiesData);
});

server.get("/api/v1/activities/:id", (req, res) => {
  const {
    id
  } = req.params;
  const activity = activitiesData.find(c => c.id === id);
  return res.json(activity);
});

server.post("/api/v1/activities", (req, res) => {
  const activity = req.body;
  activitiesData.push(activity);

  const pathToFile = path.join(__dirname, filePath);
  const stringifiedData = JSON.stringify(activitiesData, null, 2);

  fs.writeFile(pathToFile, stringifiedData, err => {
    if (err) {
      // return res.status(422).send(err);
      console.log(err);
    }

    return res.json("Activity has been succesfuly added!");
  });
});

// server.patch('/api/v1/activities/:id', (req, res) => {
//   const { id } = req.params
//   return res.json({message: `Updating post of id: ${id}`})
// })

server.delete("/api/v1/activities/:id", (req, res) => {
  const { id } = req.params;
  const activityIndex = activitiesData.findIndex(c => c.id === id);
  activitiesData.splice(activityIndex, 1);
  const pathToFile = path.join(__dirname, filePath);
  const stringifiedData = JSON.stringify(activitiesData, null, 2);
  fs.writeFile(pathToFile, stringifiedData, err => {
    if (err) {
      // return res.status(422).send(err);
      console.log(err);
    }
    return res.json("Activity has been succesfuly added!");
  });
});

server.patch("/api/v1/activities/:id", (req, res) => {
  const {
    id
  } = req.params;
  const activity = req.body;
  const activityIndex = activitiesData.findIndex(c => c.id === id);

  activitiesData[activityIndex] = activity;

  const pathToFile = path.join(__dirname, filePath);
  const stringifiedData = JSON.stringify(activitiesData, null, 2);
  fs.writeFile(pathToFile, stringifiedData, err => {
    if (err) {
      // return res.status(422).send(err);
      console.log(err);
    }
    return res.json("Activity has been succesfuly updated!");
  });
});

module.exports = server