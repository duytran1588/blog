const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-updater");

//dùng libary cho soft delete
const mongooseDelete = require("mongoose-delete");

const Course = new Schema(
  {
    name: { type: String, require: true },
    description: { type: String },
    image: { type: String },
    videoId: { type: String, require: true },
    level: { type: String },
    slug: { type: String, slug: "name", unique: true },
  },
  {
    timestamps: true,
  }
);

//add plugins
mongoose.plugin(slug);
//dùng plugin mongooseDelete cho soft delete và override method find của mongoose để chỉ render ra data ko có prop deleted: true
Course.plugin(mongooseDelete, { deletedAt: true, overrideMethods: "all" });

module.exports = mongoose.model("Course", Course);
