const controller = require("../controllers/subject.controller")

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post('/SubjectCreate', controller.subjectCreate);

  app.get('/AllSubjects/:id', controller.allSubjects);
  app.get('/ClassSubjects/:id', controller.classSubjects);
  app.get('/FreeSubjectList/:id', controller.freeSubjectList);
  app.get("/Subject/:id", controller.getSubjectDetail);

  app.delete("/Subject/:id", controller.deleteSubject);
  app.delete("/Subjects/:id", controller.deleteSubjects);
  app.delete("/SubjectsClass/:id", controller.deleteSubjectsByClass);
};