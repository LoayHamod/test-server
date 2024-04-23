const controller = require("../controllers/student.controller")

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post('/StudentReg', controller.studentRegister);
  app.post('/StudentLogin', controller.studentLogIn);

  app.get("/Students/:id", controller.getStudents);
  app.get("/Student/:id", controller.getStudentDetail);

  app.delete("/Students/:id", controller.deleteStudents);
  app.delete("/StudentsClass/:id", controller.deleteStudentsByClass);
  app.delete("/Student/:id", controller.deleteStudent);

  app.put("/Student/:id", controller.updateStudent);

  app.put('/UpdateExamResult/:id', controller.updateExamResult);

  app.put('/StudentAttendance/:id', controller.studentAttendance);

  app.put('/RemoveAllStudentsSubAtten/:id', controller.clearAllStudentsAttendanceBySubject);
  app.put('/RemoveAllStudentsAtten/:id', controller.clearAllStudentsAttendance);

  app.put('/RemoveStudentSubAtten/:id', controller.removeStudentAttendanceBySubject);
  app.put('/RemoveStudentAtten/:id', controller.removeStudentAttendance);
};