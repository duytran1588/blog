const Course = require("../models/Course");

class SiteController {
  //[GET] /home
  index(req, res) {
    //trả về dữ liệu trên mongodb
    Course.find()
      .then(function (courses) {
        res.json(courses);
      })
      .catch((err) => res.status().json({ err: "ERROR" }));
  }

  //[GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
