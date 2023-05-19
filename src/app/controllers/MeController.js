const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../ultil/mongoose");

class MeController {
  //[GET] /me/stored/courses
  storeCourses(req, res, next) {
    //mỗi phần tử trong mảng là 1 promise
    Promise.all([Course.find({}), Course.countDocumentsDeleted()])
      // mỗi kết quả trong mảng là kết quả mỗi promise bên trên trả về
      .then(([courses, count]) => {
        res.render("me/stored-courses", {
          count,
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
