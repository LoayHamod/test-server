const controller = require("../controllers/class.controller")

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

app.post('/SclassCreate', controller.classCreate);

app.get('/SclassList/:id', controller.classList);
app.get("/Sclass/:id", controller.getClassDetail);

app.get("/Sclass/Students/:id", controller.getClassStudents);

app.delete("/Sclasses/:id", controller.deleteClasses);
app.delete("/Sclass/:id", controller.deleteClass);
};