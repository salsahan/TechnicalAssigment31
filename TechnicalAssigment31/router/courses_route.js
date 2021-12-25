const express = require("express");

const Courses = require("../controllers/Courses");

const router = express.Router();


// app
//   .route('/courses')
//   .get(Courses.listAllCourses)
//   .post(Courses.createNewCourses);

// app
//   .route('/courses/:coursesid')
//   .get(Courses.readCourses)
//   .put(Courses.updateCourses)
//   .delete(Courses.deleteCourses);

  
router.get("/",Courses.listAllCourses);
router.post("/",Courses.createNewCourses);

router.get("/:coursesid",Courses.readCourses);
router.put("/:coursesid",Courses.updateCourses);
router.delete("/:coursesid",Courses.deleteCourses);


module.exports = router