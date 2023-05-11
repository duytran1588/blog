const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;

//Http logger
app.use(morgan("combined"));

//Sử dụng static files để truy xuất image, css trên web
app.use(express.static(path.join(__dirname, "public"))); //http://localhost:3000/img/logo192.png sẽ ra được image

//template engine
app.engine(".hbs", engine({ extname: ".hbs" })); //định nghĩa file '.hbs' bằng engine()
app.set("view engine", ".hbs");

app.set("views", path.join(__dirname, "resources/views"));
//cho engin biết file main.hbs nằm ở đâu, __dirname: src, nếu dùng thêm: path.join(__dirname, 'resources/views'): src/resources/views

app.get("/", (req, res) => {
  res.render("home"); // phần body của trang web (bên main.hbs) phụ thuộc file được res.render bên đây
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.get("/search", (req, res) => {
  console.log(req.query);
  res.render("search");
});

//tạo routing post 
app.post("/search", (req, res) => {
  res.render("search");
});

app.post("/news", (req, res) => {
  res.render("search");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
