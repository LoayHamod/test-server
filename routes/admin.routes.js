const controller = require("../controllers/admin.controller")

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post('/AdminReg', controller.adminRegister);
  app.post('/AdminLogin', controller.adminLogIn);

  app.get("/Admin/:id", controller.getAdminDetail)
};