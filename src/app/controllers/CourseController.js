const Course = require("../models/Course");
const { mongooseToObject } = require("../../ultil/mongoose");

class CourseController {
  //[GET] /course/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) =>
        res.render("course/show", { course: mongooseToObject(course) })
      )
      .catch(next);
  }

  //[GET] /course/create
  create(req, res, next) {
    res.render("course/create");
  }

  //[POST] /course/store
  store(req, res, next) {
    const formData = { ...req.body };
    formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;

    const course = new Course(formData);

    course.save().then(res.redirect("/")).catch(next);
  }
}

module.exports = new CourseController();
