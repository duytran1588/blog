const express = require("express");
const router = express.Router();

const courseController = require("../app/controllers/CourseController");

//thêm middleware cho route '/create/'
router.get(
  "/create",
  //tạo middleware
  function (req, res, next) {
    if (req.query.ve === "vip") {
      return next(); // thoả điều kiện thì middleware cho phép function kế tiếp thực thi
    }
    res.json({ message: "Access denied" });
  },
  courseController.create
);
router.post("/store", courseController.store);
router.get("/:slug", courseController.show);
router.get("/:id/edit", courseController.edit);
router.post("/handle-form-actions", courseController.handleFormActions);
router.put("/:id", courseController.update);
router.patch("/:id/restore", courseController.restore);
router.delete("/:id", courseController.destroy);
router.delete("/:id/force", courseController.forceDestroy);

module.exports = router;
