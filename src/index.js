const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;

const route = require("./routes");

//Http logger
app.use(morgan("combined"));

//Cài đặt middleware
app.use(express.urlencoded({ extended: true })); //xử lý các data được gửi lên từ form
app.use(express.json()); // xử lý data gửi lên từ JS như: XMLHttpRequest, fetch, axios

//Sử dụng static files để truy xuất image, css trên web
app.use(express.static(path.join(__dirname, "public"))); //http://localhost:3000/img/logo192.png sẽ ra được image

//template engine
app.engine(".hbs", engine({ extname: ".hbs" })); //định nghĩa file '.hbs' bằng engine()
app.set("view engine", ".hbs");

app.set("views", path.join(__dirname, "resources/views"));
//cho engin biết file main.hbs nằm ở đâu, __dirname: src, nếu dùng thêm: path.join(__dirname, 'resources/views'): src/resources/views

//Routes init
route(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
