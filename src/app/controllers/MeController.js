const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../ultil/mongoose");

class MeController {
  //[GET] /me/stored/courses
  storeCourses(req, res, next) {
    //sort
    let courseQuery = Course.find({});

    if (req.query.hasOwnProperty("_sort")) {
      courseQuery = courseQuery.sort({
        [req.query.column]: req.query.type,
      });
    }

    //mỗi phần tử trong mảng là 1 promise
    Promise.all([courseQuery, Course.countDocumentsDeleted()])
      // mỗi kết quả trong mảng là kết quả mỗi promise bên trên trả về
      .then(([courses, count]) => {
        res.render("me/stored-courses", {
          courses: multipleMongooseToObject(courses),
          count,
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
