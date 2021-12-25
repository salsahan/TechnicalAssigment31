const express = require("express");

const Instructors = require("../controllers/Instructors");

const router = express.Router();

router.get("/",Instructors.listAllInstructor);
router.post("/",Instructors.createNewInstructor);

router.get("/:instructorid",Instructors.readInstructor);
router.put("/:instructorid",Instructors.updateInstructor);
router.delete("/:instructorid",Instructors.deleteInstructor);


module.exports = router