const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../ultil/mongoose");

class MeController {
  //[GET] /me/stored/courses
  storeCourses(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("me/stored-courses", {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }

  //[GET] /me/trash/courses
  trashCourses(req, res, next) {
    Course.findDeleted({})
      .then((courses) => {
        res.render("me/trash-courses", {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }

  //[GET] /stored/news
  news(req, res) {
    res.send("News");
  }
}

module.exports = new MeController();
