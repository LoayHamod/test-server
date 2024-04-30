const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./models");
const app = express()

dotenv.config();

var corsOptions = {
    origin: "http://localhost:8081"
  };

app.use(express.json())
app.use(cors(corsOptions));



(async () => {
  try {
    await db.mongoose.connect("mongodb+srv://serverAol:xqepEDi6K9xjB61X@aol.ttbhmkw.mongodb.net/AOL");
      console.log("Successfully connect to Database.");
  } catch (err) {
    console.error("Connection error", err);
    process.exit(1); // Exit with an error code
  }
})();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to AOL application." });
});

require("./routes/admin.routes")(app);
require("./routes/class.routes")(app);
require("./routes/complain.routes")(app);
require("./routes/notice.routes")(app);
require("./routes/student.routes")(app);
require("./routes/subject.routes")(app);
require("./routes/teacher.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
})
