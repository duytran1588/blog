module.exports = function SortMiddleware(req, res, next) {
  //tạo ra biến locals có key là _sort: {}, biến này có thể được truy cập tại các file views/* vì nó được tạo ra trong middleware và res.locals được mongoose quy định như vậy
  res.locals._sort = {
    enabled: false,
    type: "default",
  };

  if (req.query.hasOwnProperty("_sort")) {    

    //gán object bên phải cho biến bến trái
    Object.assign(res.locals._sort, {
      enabled: true,
      type: req.query.type,
      column: req.query.column,
    });
  }

  //middleware dùng next() cho phép function kế tiếp được thực thi
  next();
};
