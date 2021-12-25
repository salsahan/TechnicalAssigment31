const express = require("express");

const coursesRoute = require("./courses_route");
const instructorsRoute = require("./instructors_route");
const participantsRoute = require("./participants_route");
const Participants = require("../controllers/Participants");


const router = express.Router();

router.get("/", (req, res) => {
  const ready = {
    status: "Your DB is Ready",
  };

  res.status(200).send(ready);
});

router.use("/instructors", instructorsRoute);
router.use("/courses", coursesRoute);

module.exports = router;
