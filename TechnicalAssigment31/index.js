// index.js
// Importing needed Packeges
const express = require('express');
const bodyParser = require('body-parser');
const taskController = require('./controllers/TaskController');
const Courses = require("./controllers/Courses")
const Participants = require("./controllers/Participants")
const router = require("./router/index");

// db instance connection
require('./config/index');

const app = express();

// Defining the port for Environment
const port = process.env.PORT || 3003;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router)

// API Instructor Endpoints


// API Courses Endpoints

// API Participant Endpoints

app
.route('/participants')
.get(Participants.listAllParticipant)
.post(Participants.createNewParticipant);

app
.route('/participants/:participantid')
.get(Participants.readParticipant)
.put(Participants.updateParticipant)
.delete(Participants.deleteParticipant);
// Console the app is listening success message with port present
app.listen(port, () => {
  console.log(`Server running at ${port}`);
});