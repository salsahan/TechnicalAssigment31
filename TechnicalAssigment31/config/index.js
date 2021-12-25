const mongoose = require('mongoose');

const dbURI =
  'mongodb+srv://salsa:salsa@cluster0.l3asi.mongodb.net/tugas?retryWrites=true&w=majority';
  
const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10,
  useUnifiedTopology: true,
};

// Establishing connectin with dbURI and option with max pool

mongoose.connect(dbURI).then(
  () => {
    console.log('Database connection established!');
  },
  (err) => {
    console.log('Error connecting Database instance due to: ', err);
  }
);

// require any models
require('../models/Task');
require('../models/InstructorModel');
require('../models/CoursesModel');
require('../models/ParticipantModel');