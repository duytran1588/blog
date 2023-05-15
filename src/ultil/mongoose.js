//handlebars có fix bảo mật issue, do đó các phần tử của mảng hay 1 object bất kì cần được gọi tới hàm toObject() trước khi sử dụng

module.exports = {
  multipleMongooseToObject: function (mongooses) {
    return mongooses.map((mongoose) => mongoose.toObject());
  },
  mongooseToObject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
