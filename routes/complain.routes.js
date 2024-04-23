const controller = require("../controllers/complain.controller")

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post('/ComplainCreate', controller.complainCreate);

  app.get('/ComplainList/:id', controller.complainList);
};