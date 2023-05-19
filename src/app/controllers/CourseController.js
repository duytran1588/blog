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

    course.save().then(res.redirect("/me/stored/courses")).catch(next);
  }

  // {GET} /course/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render("course/edit", { course: mongooseToObject(course) })
      )
      .catch(next);
  }

  // {PUT} /course/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }

  // {DELETE} /course/:id
  destroy(req, res, next) {
    /**
     * Ko xoá thực trên database mà áp dụng kỹ thuật xoá mềm để sau này có thể truy vấn
     * Dùng method delete của thư viện mongoose-delete chứ ko dùng deleteOne của mongoose
     */
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  // {DELETE} /course/:id/force
  forceDestroy(req, res, next) {
    /**
     *  Xoá thực khỏi thùng rác
     */
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  // {PATCH} /course/:id/restore
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}

module.exports = new CourseController();
