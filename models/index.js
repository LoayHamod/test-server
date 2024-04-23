const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.admin = require("./admin.model")
db.class = require("./class.model")
db.complain = require("./complain.model")
db.notice = require("./notice.model")
db.student = require("./student.model")
db.subject = require("./subject.model")
db.teacher = require("./teacher.model")

module.exports = db;