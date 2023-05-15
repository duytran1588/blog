const newsRouter = require('./news');
const coursesRouter = require('./courses');
const siteRouter = require('./site');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
    app.use('/courses', coursesRouter);
}

module.exports = route;
