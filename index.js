const {
    Parser
} = require('json2csv');
const fs = require('fs');
var request = require('sync-request');
var CronJob = require('cron').CronJob;
var nodemailer = require('nodemailer');
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('Hello World!'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))


app.get("/users", (req, res) => {
    res.json([
      { name: "William", location: "Abu Dhabi" },
      { name: "Chris", location: "Vegas" }
    ]);
  });
  
  app.post("/user", (req, res) => {
    const { name, location } = req.body;
  
    res.send({ status: "User created", name, location });
  });

