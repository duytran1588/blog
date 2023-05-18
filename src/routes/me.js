const express = require("express");
const router = express.Router();

const meController = require("../app/controllers/MeController");

router.get("/stored/courses", meController.storeCourses);
router.get("/stored/news", meController.news);

module.exports = router;