const controller = require("../controllers/teacher.controller")

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post('/TeacherReg', controller.teacherRegister);
  app.post('/TeacherLogin', controller.teacherLogIn);

  app.get("/Teachers/:id", controller.getTeachers);
  app.get("/Teacher/:id", controller.getTeacherDetail);

  app.delete("/Teachers/:id", controller.deleteTeachers);
  app.delete("/TeachersClass/:id", controller.deleteTeachersByClass);
  app.delete("/Teacher/:id", controller.deleteTeacher);

  app.put("/TeacherSubject", controller.updateTeacherSubject);

  app.post('/TeacherAttendance/:id', controller.teacherAttendance);
};