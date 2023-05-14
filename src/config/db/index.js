const mongoose = require("mongoose");

// connect to mongoDb
async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/f8_education_dev");
    /**
     * code trong mongoose doc cũ có thêm connect('string', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      }) 
     */
    console.log("connect successfully");
  } catch (err) {
    console.log("fail");
  }
}

module.exports = { connect };
