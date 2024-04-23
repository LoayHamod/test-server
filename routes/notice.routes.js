const controller = require("../controllers/notice.controller")

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post('/NoticeCreate', controller.noticeCreate);

  app.get('/NoticeList/:id', controller.noticeList);

  app.delete("/Notices/:id", controller.deleteNotices);
  app.delete("/Notice/:id", controller.deleteNotice);

  app.put("/Notice/:id", controller.updateNotice);
};